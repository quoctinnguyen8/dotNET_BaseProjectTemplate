using App.Data.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Entities
{
	public class AppRolePermission : AppEntityBase
	{
		public int AppRoleId { get; set; }
		public int MstPermissionId { get; set; }

		public AppRole AppRole { get; set; }
		public MstPermission MstPermission { get; set; }
	}
}
