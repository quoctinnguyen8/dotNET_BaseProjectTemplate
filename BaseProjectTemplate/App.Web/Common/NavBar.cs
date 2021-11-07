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
			ChildrenItems = new List<MenuItem>();
		}
		public string Action { get; set; }
		public string Controller { get; set; }
		public string DisplayText { get; set; }
		public string Icon { get; set; }
		public string Policy { get; set; }
		public List<MenuItem> ChildrenItems { get; set; }
	}

	public static class NavBar
	{
		public static List<MenuItem> Items = new List<MenuItem> {
			new MenuItem
			{
				Action = "Create",
				Controller = "User",
				DisplayText = "Thêm tài khoản (demo)",
				Icon = "fa-user-plus"
			}
		};
	}
}
