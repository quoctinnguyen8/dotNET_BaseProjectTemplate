using App.Data;
using App.Data.Repositories;
using App.Web.Common;
using App.Web.Common.Mailer;
using App.Web.Services.JWTService;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Web.WebConfig
{
	public static class AppService
	{
		public static void AddAppService(this IServiceCollection services, IConfiguration Configuration)
		{
			services.AddDbContext<WebAppDbContext>(option =>
			{
				option.UseSqlServer(Configuration.GetConnectionString("Database"));
			});

			// Đăng ký repositories
			services.AddScoped<GenericRepository>();

			// Cấu hình đăng nhập
			var key = Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]);
			services.AddAuthentication(auth =>
			{
				auth.DefaultAuthenticateScheme = AppConst.JWT_AUTH;
				auth.DefaultChallengeScheme = AppConst.JWT_AUTH;
			}).AddJwtBearer(options =>
			{
				options.RequireHttpsMetadata = false;
				options.SaveToken = true;
				options.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = new SymmetricSecurityKey(key),
					ValidateIssuer = true,
					ValidateAudience = true,
					ValidIssuer = Configuration["Jwt:Issuer"],
					ValidAudience = Configuration["Jwt:Audience"],
					ClockSkew = TimeSpan.Zero
				};
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
			});

			// Khởi tạo thông tin mail
			AppMailConfiguration mailConfig = new();
			mailConfig.LoadFromConfig(Configuration);
			services.AddSingleton(mailConfig);

			// Đăng ký token service
			services.AddScoped<TokenService>();
		}
	}
}
