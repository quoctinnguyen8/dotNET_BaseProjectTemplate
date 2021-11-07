using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppConfirmPwdAttribute : CompareAttribute
	{
		public AppConfirmPwdAttribute(string otherProperty = "Password") : base(otherProperty)
		{
			this.ErrorMessage = $"Mật khẩu không khớp";
		}
	}
}
