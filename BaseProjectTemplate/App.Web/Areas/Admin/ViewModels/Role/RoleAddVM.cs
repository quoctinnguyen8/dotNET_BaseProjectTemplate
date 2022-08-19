using App.Share.Consts;
using App.Web.WebConfig;
using DNews.Shared.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Areas.Admin.ViewModels.Role
{
	public class RoleAddVM
	{
		[AppRequired]
		[AppMaxLength(DB.AppRole.NAME_LENGTH)]
		public string Name { get; set; }
		
		[AppRequired]
		[AppMaxLength(DB.AppRole.DESC_LENGTH)]
		public string Desc { get; set; }

		// Chuỗi chứa permissionId, phân tách bởi dấu phẩy
		[AppRequired(ErrorMessage = VM.RoleVM.PERMISSION_IDS_REQUIRED_ERR_MESG)]
		[AppRegex(VM.RoleVM.PERMISSION_IDS_REGEX, ErrorMessage = VM.RoleVM.PERMISSION_IDS_REGEX_ERR_MESG)]
		public string PermissionIds { get; set; }
	}
}