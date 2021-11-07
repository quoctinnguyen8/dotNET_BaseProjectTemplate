using App.Share.Consts;
using App.Web.Common.Const;
using DNews.Shared.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.User
{
	public class CreateUserVM
	{
		[AppRequired]
		[AppUsername]
		[AppStringLength(VM.UserVM.USERNAME_MINLEN, DB.AppUser.USERNAME_LENGTH)]
		public string Username { get; set; }

		[AppRequired]
		[DataType(DataType.Password)]
		[AppStringLength(VM.UserVM.PWD_MINLEN, DB.AppUser.PWD_LENGTH)]
		public string Password { get; set; }

		[AppRequired]
		[AppConfirmPwd]
		[DataType(DataType.Password)]
		public string ConfirmPwd { get; set; }
		public byte[] PasswordHash { get; internal set; }
		public byte[] PasswordSalt { get; internal set; }
	}
}
