using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppStringLengthAttribute : StringLengthAttribute
	{
		public AppStringLengthAttribute(int minimumLength, int maximumLength) : base(maximumLength)
		{
			this.MinimumLength = minimumLength;
			this.ErrorMessage = $"Phải từ {minimumLength} ký tự đến {maximumLength} ký tự";
		}
	}
}
