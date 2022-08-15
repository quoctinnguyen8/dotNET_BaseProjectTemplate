using App.Data;
using App.Data.Repositories;
using App.Web.Common;
using App.Web.Common.Mailer;
using AutoMapper;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
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
				option.UseSqlServer(Configuration.GetConnectionString("Database"))
				.LogTo(Console.WriteLine, LogLevel.Information);
			});

			// Đăng ký repositories
			services.AddScoped<GenericRepository>();

			// Cấu hình đăng nhập
			services.AddAuthentication(AppConst.COOKIES_AUTH).AddCookie(options =>
			{
				options.LoginPath = AppConst.ADMIN_LOGIN_PATH;
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

			// Cấu hình thư mục view cho ViewComponent
			services.Configure<RazorViewEngineOptions>(config =>
			{
				// path: /Components/{component-name}/Default.cshtml
                config.ViewLocationFormats.Add("/{0}.cshtml");
				config.AreaViewLocationFormats.Add("Areas/Admin/{0}.cshtml");
            });

			// Khởi tạo thông tin mail
			AppMailConfiguration mailConfig = new();
			mailConfig.LoadFromConfig(Configuration);
			services.AddSingleton(mailConfig);
		}
	}
}
