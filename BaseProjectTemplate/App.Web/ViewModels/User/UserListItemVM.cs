using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.User
{
	public class UserListItemVM : ListItemBaseVM
	{
		public string Username { get; set; }
		public string FullName { get; set; }
		public string PhoneNumber1 { get; set; }
		public string Email { get; set; }
		public DateTime? CreatedDate { get; set; }
		public string RoleName { get; set; }
	}
}
