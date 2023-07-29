using App.Share.Consts;
using Microsoft.AspNetCore.Routing;
using System.Collections.Generic;

namespace App.Web.Common.NavBar
{
	/// <summary>
	/// Class dùng để tạo data cho navbar
	/// </summary>
	public class NavBarVelzonViewModel
	{
		/// <param name="linkGenerator">Được inject khi build trang web</param>
		public NavBarVelzonViewModel(LinkGenerator linkGenerator)
		{
			Items = new List<NavBarItemLv1>();

			// Menu cấp 2 cũng phải có CodePage để xử lý dropdown
			Items.AddRange(new NavBarItemLv1[]
			{
				new NavBarItemLv1
				{
					IsNavBarTitle = true,
					DisplayText = "MENU"
				},
				new NavBarItemLv1
				{
					CodePage = NavBarCodePage.USER_LIST,
					Url = linkGenerator.GetPathByAction("Index", "User"),
					DisplayText = "Quản lý tài khoản",
					Icon = "mdi-account-cog",
					Permission = AuthConst.AppUser.VIEW_LIST,
				},
				new NavBarItemLv1
				{
					CodePage = NavBarCodePage.ROLE_LIST,
					Url = linkGenerator.GetPathByAction("Index", "Role"),
					DisplayText = "Quản lý phân quyền",
					Icon = "mdi-shield-account",
					Permission = AuthConst.AppRole.VIEW_LIST,
				},
				new NavBarItemLv1
				{
					CodePage = NavBarCodePage.FILE_MANAGER,
					Url = linkGenerator.GetPathByAction("Index", "FileManager"),
					DisplayText = "Quản lý tệp",
					Icon = "mdi-folder",
				},
				//new NavBarItemLv1
				//{
				//	DisplayText = "Menu 2 cấp",
				//	Icon = "mdi-alert",
				//	CodePage = "1000",
				//	NavBarItemLv2 = new NavBarItemLv2[]
				//	{
				//		new NavBarItemLv2
				//		{
				//			CodePage = NavBarCodePage.USER_LIST,
				//			Url = linkGenerator.GetPathByAction("Index", "User"),
				//			DisplayText = "Quản lý tài khoản",
				//			Permission = AuthConst.AppUser.VIEW_LIST,
				//		},
				//		new NavBarItemLv2
				//		{
				//			CodePage = NavBarCodePage.ROLE_LIST,
				//			Url = linkGenerator.GetPathByAction("Index", "Role"),
				//			DisplayText = "Quản lý phân quyền",
				//			Permission = AuthConst.AppRole.VIEW_LIST,
				//			NavBarItemLv3 = new NavBarItemLv3[]
				//			{
				//				new NavBarItemLv3
				//				{
				//					CodePage = NavBarCodePage.FILE_MANAGER,
				//					Url = linkGenerator.GetPathByAction("Index", "FileManager"),
				//					DisplayText = "Quản lý tệp",
				//				},
				//				new NavBarItemLv3
				//				{
				//					CodePage = "",
				//					Url = linkGenerator.GetPathByAction("Index", "Home"),
				//					DisplayText = "Home",
				//				},
				//			}
				//		}
				//	}
				//},
			});
		}
		public List<NavBarItemLv1> Items { get; set; }
	}

	public abstract class NavBarItemBase
	{
		/// <summary>
		/// Mã của menu, là duy nhất. Dùng để xác định 1 trang có thuộc menu item này hay không
		/// </summary>
		public string CodePage { get; set; }
		public string Url { get; set; }
		public string DisplayText { get; set; }
		public int Permission { get; set; } = AuthConst.NO_PERMISSION;
	}

	public class NavBarItemLv1 : NavBarItemBase
	{
		public bool IsNavBarTitle { get; set; } = false;
		public string Icon { get; set; }
		public NavBarItemLv2[] NavBarItemLv2 { get; set; }
	}

	public class NavBarItemLv2 : NavBarItemBase
	{
		public NavBarItemLv3[] NavBarItemLv3 { get; set; }
	}
	public class NavBarItemLv3 : NavBarItemBase
	{
	}
}
