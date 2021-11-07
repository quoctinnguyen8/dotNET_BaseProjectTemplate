using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppMinLengthAttribute : MinLengthAttribute
	{
		public AppMinLengthAttribute(int length) : base(length)
		{
			this.ErrorMessage = $"Không được ít hơn {length} ký tự";
		}
	}
}
