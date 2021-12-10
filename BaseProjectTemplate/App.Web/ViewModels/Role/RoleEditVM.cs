using App.Share.Consts;
using App.Web.Common.Consts;
using DNews.Shared.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.Role
{
	public class RoleEditVM
	{
		public int Id { get; set; }
		[AppRequired]
		[AppMaxLength(DB.AppRole.NAME_LENGTH)]
		public string Name { get; set; }
		[AppRequired]
		[AppMaxLength(DB.AppRole.DESC_LENGTH)]
		public string Desc { get; set; }

		// Chuỗi chứa permissionId hiện tại, phân tách bởi dấu phẩy
		[AppRegex(VM.RoleVM.PERMISSION_IDS_REGEX, ErrorMessage = VM.RoleVM.PERMISSION_IDS_REGEX_ERR_MESG)]
		public string PermissionIds { get; set; }

		// Chuỗi chứa permissionId sẽ được xóa, phân tách bởi dấu phẩy
		public string DeletedPermissionIds { get; set; }

		// Chuỗi chứa permissionId được thêm mới, phân tách bởi dấu phẩy
		public string AddedPermissionIds { get; set; }
	}
}