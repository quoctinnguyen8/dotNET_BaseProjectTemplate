using App.Share.Consts;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppConfirmPwdAttribute : CompareAttribute
	{
		public AppConfirmPwdAttribute(string otherProperty = "Password") : base(otherProperty)
		{
			this.ErrorMessage = AttributeErrMesg.CONFIRM_PWD;
		}
	}
}
