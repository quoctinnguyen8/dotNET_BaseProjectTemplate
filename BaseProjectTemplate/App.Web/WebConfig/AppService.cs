using App.Data;
using App.Data.Repositories;
using App.Web.Common.Consts;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.WebConfig
{
	public static class AppService
	{
		public static void AddAppService(this IServiceCollection services, IConfiguration Configuration)
		{
			services.AddDbContext<WebAppDbContext>(option =>
			{
				option.UseSqlServer(Configuration.GetConnectionString("Default"));
			});

			// Đăng ký repositories
			services.AddScoped<RepositoryBase>();


			// Cấu hình đăng nhập
			services.AddAuthentication(AppConst.COOKIES_AUTH).AddCookie(options =>
			{
				options.LoginPath = AppConst.LOGIN_PATH;
				options.ExpireTimeSpan = TimeSpan.FromHours(AppConst.LOGIN_TIMEOUT);
				options.Cookie.HttpOnly = true;
			});


			// Cấu hình AutoMapper
			var mapperConfig = new MapperConfiguration(config =>
			{
				config.AddProfile(new AutoMapperProfile());
			});
			IMapper mapper = mapperConfig.CreateMapper();
			services.AddSingleton(mapper);
		}
	}
}
