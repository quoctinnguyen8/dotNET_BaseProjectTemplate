using App.Data;
using App.Data.Repositories;
using App.Web.WebConfig.Middlewares;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.WebConfig
{
	public class Startup
	{
		public static string WebRootPath { get; private set; }

		public static string Log4NetConfigFile { get; private set; }

		public Startup(IConfiguration configuration, IWebHostEnvironment env)
		{
			Configuration = configuration;
			Log4NetConfigFile = env.IsDevelopment() ? "log4net.development.config"  : "log4net.config";
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllersWithViews();
			services.AddHttpContextAccessor();
			services.AddAppService(Configuration);
			//DI
			services.AddServiceRepositories();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}
			// Điều hướng khi gặp lỗi
			app.UseStatusCodePagesWithReExecute("/error/{0}");

			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseCookiePolicy();
			app.UseAuthentication();
			app.UseAuthorization();

			app.UseMiddleware<AppLoggingMiddleware>();
			app.UseEndpoints(endpoints =>
			{
				endpoints.MapAppRouter();
			});

			WebRootPath = env.WebRootPath;
		}
	}
}
