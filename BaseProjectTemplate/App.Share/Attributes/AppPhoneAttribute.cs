using App.Share.Consts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace App.Shared.Attributes
{
	public class AppPhoneAttribute : RegularExpressionAttribute
	{
		public AppPhoneAttribute(string pattern = @"^\+*\d{10,15}$") : base(pattern)
		{
			this.ErrorMessage = AttributeErrMesg.PHONE;
		}
	}
}
