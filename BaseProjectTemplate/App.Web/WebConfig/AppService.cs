using App.Data;
using App.Data.Repositories;
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
			services.AddScoped<UserRepository>();


			// Cấu hình đăng nhập
			services.AddAuthentication("Cookies").AddCookie(options =>
			{
				options.LoginPath = "/login";
				options.ExpireTimeSpan = TimeSpan.FromHours(6);
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
