using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.Role
{
	public class RoleListItemVM : ListItemBaseVM
	{
		public string Name { get; set; }
		public string Desc { get; set; }
		public DateTime? CreatedDate { get; set; }
	}
}
