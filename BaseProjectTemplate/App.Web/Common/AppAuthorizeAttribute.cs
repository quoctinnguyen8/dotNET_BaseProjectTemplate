using App.Web.Common.Consts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Common
{
	/// <summary>
	/// https://stackoverflow.com/questions/31464359/how-do-you-create-a-custom-authorizeattribute-in-asp-net-core
	/// </summary>
	[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true, Inherited = true)]
	public class AppAuthorizeAttribute : AuthorizeAttribute, IAuthorizationFilter
	{
		readonly int userPermission;
		public AppAuthorizeAttribute(int _permission)
		{
			userPermission = _permission;
		}
		public void OnAuthorization(AuthorizationFilterContext context)
		{
			if (!AppConst.ENABLE_AUTH)
			{
				return;
			}
			var user = context.HttpContext.User;
			
			//if (!isAuthorized)
			//{
			//	context.Result = new StatusCodeResult((int)System.Net.HttpStatusCode.Forbidden);
			//}
		}
	}
}
