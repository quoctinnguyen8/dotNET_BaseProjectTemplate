using App.Web.Common.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace App.Web.Common
{
	/// <summary>
	/// https://stackoverflow.com/questions/31464359/how-do-you-create-a-custom-authorizeattribute-in-asp-net-core
	/// </summary>
	[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
	public class AppAuthorizeAttribute : AuthorizeAttribute, IAuthorizationFilter
	{
		private int actionPermission;
		public AppAuthorizeAttribute(int permission)
		{
			actionPermission = permission;
		}
		public void OnAuthorization(AuthorizationFilterContext context)
		{
			var isAuthorized = false;
			if (!AppConst.ENABLE_AUTH)
			{
				return;
			}
			var user = context.HttpContext.User;
			var userPermission = user.FindFirstValue(AppClaimTypes.Permissions);
			isAuthorized = userPermission.Contains(this.actionPermission.ToString());

			if (!isAuthorized)
			{
				context.Result = new StatusCodeResult((int)System.Net.HttpStatusCode.Forbidden);
			}
		}
	}
}
