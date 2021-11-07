using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.Account
{
	public class LoginVM
	{
		public string Username { get; set; }

		[DataType(DataType.Password)]
		public string Password { get; set; }


		[DisplayName("Ghi nhớ mật khẩu")]
		public bool RememberMe { get; set; }
	}
}
