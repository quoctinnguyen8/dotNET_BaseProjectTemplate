using App.Share.Consts;
using App.Share.Extensions;
using App.Web.WebConfig;
using App.Web.ViewModels;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Common
{
	public static class AppExtension
	{

		// Tạo số thứ tự từ PagedList
		public static IPagedList<TModel> GenRowIndex<TModel>(this IPagedList<TModel> list) where TModel : ListItemBaseVM
		{
			var pageSize = list.PageSize;
			var currentPage = list.PageNumber;
			for (int i = 0; i < list.Count; i++)
			{
				list[i].RowIndex = (currentPage - 1) * pageSize + i + 1;
			}
			return list;
		}

		public static string GetCurrentActionName(this ViewContext viewContext)
		{
			return viewContext.RouteData.Values["action"].ToString();
		}
		public static string GetCurrentControllerName(this ViewContext viewContext)
		{
			return viewContext.RouteData.Values["controller"].ToString();
		}
		public static bool IsInPermission(this ClaimsPrincipal user, int actionPermission)
		{
			var userPermission = user.FindFirstValue(AppClaimTypes.Permissions);
			if (userPermission.IsNullOrEmpty())
			{
				return false;
			}
			if (actionPermission == AuthConst.NO_PERMISSION)
			{
				return true;
			}
			return userPermission.Contains(actionPermission.ToString());
		}
	}
}
