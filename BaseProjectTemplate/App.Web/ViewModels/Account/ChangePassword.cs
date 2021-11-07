using App.Web.Common.Const;
using DNews.Shared.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.Account
{
	public class ChangePassword
	{
		[DataType(DataType.Password)]
		[AppRequired]
		public string Pwd { get; set; }

		[DataType(DataType.Password)]
		[AppRequired]
		[AppMinLength(VM.UserVM.PWD_MINLEN)]
		public string NewPwd { get; set; }

		[DataType(DataType.Password)]
		[AppConfirmPwd("NewPwd")]
		public string ConfirmPwd { get; set; }

		public bool LogoutAfterChangePwd { get; set; }
	}
}
