using App.Data.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Entities
{
	public class AppRole : AppEntityBase
	{
		public AppRole()
		{
			AppUsers = new HashSet<AppUser>();
			AppRolePermissions = new HashSet<AppRolePermission>();
		}
		public string Name { get; set; }
		public string Desc { get; set; }

		public ICollection<AppUser> AppUsers { get; set; }
		public ICollection<AppRolePermission> AppRolePermissions { get; set; }
	}
}
