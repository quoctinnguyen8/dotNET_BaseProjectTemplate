﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.WebConfig
{
	public static class Router
	{
		public static void MapAppRouter(this IEndpointRouteBuilder endpoints)
		{
			endpoints.MapControllerRoute(
					name: "login",
					pattern: "login",
					defaults: new
					{
						controller = "Account",
						action = "Login"
					});

			// Mặc định
			endpoints.MapControllerRoute(
					name: "default",
					pattern: "{controller=Home}/{action=Index}/{id?}");
		}
	}
}