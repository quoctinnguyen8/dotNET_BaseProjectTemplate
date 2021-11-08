using App.Share.Consts;
using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppEmailAttribute : RegularExpressionAttribute
	{
		public AppEmailAttribute(string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$") : base(pattern)
		{
			this.ErrorMessage = AttributeErrMesg.EMAIL;
		}
	}
}
