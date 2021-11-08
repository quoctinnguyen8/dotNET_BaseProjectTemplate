using App.Share.Consts;
using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppRegexAttribute : RegularExpressionAttribute
	{
		public AppRegexAttribute(string pattern) : base(pattern)
		{
			this.ErrorMessage = AttributeErrMesg.REGEX;
		}
	}
}
