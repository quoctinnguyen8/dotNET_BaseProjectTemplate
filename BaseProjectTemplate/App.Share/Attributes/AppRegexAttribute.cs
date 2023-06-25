using App.Share.Consts;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppRegexAttribute : RegularExpressionAttribute
	{
		public AppRegexAttribute(string pattern) : base(pattern)
		{
			this.ErrorMessage = AttributeErrMesg.REGEX;
		}
	}
}
