using App.Data.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Entities
{
	public class MstPermission : MstEntityBase
	{
		public MstPermission()
		{
			AppRolePermissions = new HashSet<AppRolePermission>();
		}
		public string Code { get; set; }
		public string Table { get; set; }
		public string GroupName { get; set; }
		public string Desc { get; set; }

		public ICollection<AppRolePermission> AppRolePermissions { get; set; }
	}
}
