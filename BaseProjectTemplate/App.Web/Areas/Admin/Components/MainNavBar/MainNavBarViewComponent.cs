using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Consts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Areas.Admin.Components.MainNavBar
{
	public class MainNavBarViewComponent : ViewComponent
	{
		readonly GenericRepository repository;
		public MainNavBarViewComponent(GenericRepository _repository)
		{
			repository = _repository;
		}
		public async Task<IViewComponentResult> InvokeAsync()
		{
			var navBar = new NavBarViewModel();
			navBar.Items.AddRange(new MenuItem[]
			{
				new MenuItem
				{
					Action = "Index",
					Controller = "User",
					DisplayText = "Quản lý tài khoản",
					Icon = "fa-user-cog",
					Permission = AuthConst.AppUser.VIEW_LIST,
				},
				new MenuItem
				{
					Action = "Index",
					Controller = "Role",
					DisplayText = "Quản lý phân quyền",
					Icon = "fa-user-shield",
					Permission = AuthConst.AppRole.VIEW_LIST,
				},
				new MenuItem
				{
					Action = "Index",
					Controller = "FileManager",
					DisplayText = "Quản lý tệp",
					Icon = "fa-folder-open",
				},
				new MenuItem
				{
					Action = "MyProfile",
					Controller = "Account",
					DisplayText = "Tài khoản của tôi",
					Icon = "fa-user",
				},
				//new MenuItem
				//{
				//	DisplayText = "Menu 2 cấp",
				//	Icon = "fa-folder-open",
				//	ChildrenItems = new MenuItem[]
				//	{
				//		new MenuItem
				//		{
				//			Action = "Index",
				//			Controller = "User",
				//			DisplayText = "Quản lý tài khoản",
				//			Icon = "fa-user-cog"
				//		}
				//	}
				//},
			});
			return View(navBar);
		}
	}
}
