using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppEmailAttribute : RegularExpressionAttribute
	{
		public AppEmailAttribute(string pattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$") : base(pattern)
		{
			this.ErrorMessage = "Địa chỉ mail không hợp lệ";
		}
	}
}
