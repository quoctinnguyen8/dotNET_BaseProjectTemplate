using App.Share.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Common
{
	public class MenuItem
	{
		public MenuItem()
		{
			Permission = AuthConst.NO_PERMISSION;
		}
		public string Action { get; set; }
		public string Controller { get; set; }
		public string DisplayText { get; set; }
		public string Icon { get; set; }
		public int Permission { get; set; }
		public MenuItem[] ChildrenItems { get; set; }
	}

	public static class NavBar
	{
		public static List<MenuItem> Items = new List<MenuItem> {
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
		};
	}
}
