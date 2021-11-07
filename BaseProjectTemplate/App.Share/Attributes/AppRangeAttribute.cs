using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppRangeAttribute : RangeAttribute
	{
		public AppRangeAttribute(double minimum, double maximum) : base(minimum, maximum)
		{
			this.ErrorMessage = $"Phải thuộc khoảng {minimum} - {maximum}";
		}
	}
}
