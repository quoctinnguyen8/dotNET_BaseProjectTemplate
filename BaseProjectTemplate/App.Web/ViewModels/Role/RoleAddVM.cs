using App.Share.Consts;
using DNews.Shared.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.Role
{
	public class RoleAddVM
	{
		public int Id { get; set; }
		[AppRequired]
		[AppStringLength(2, DB.AppRole.NAME_LENGTH)]
		public string Name { get; set; }
		[AppRequired]
		[AppStringLength(2, DB.AppRole.DESC_LENGTH)]
		public string Desc { get; set; }
		public string StringListIdPermission { get; set; }
	}
}