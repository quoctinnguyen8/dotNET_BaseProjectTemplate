using App.Share.Consts;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppStringLengthAttribute : StringLengthAttribute
	{
		public AppStringLengthAttribute(int minimumLength, int maximumLength) : base(maximumLength)
		{
			this.MinimumLength = minimumLength;
			this.ErrorMessage = string.Format(AttributeErrMesg.STRING_LEN, minimumLength, maximumLength);
		}
	}
}
