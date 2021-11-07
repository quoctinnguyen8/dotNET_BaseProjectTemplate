using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppUsernameAttribute : RegularExpressionAttribute
	{
		public AppUsernameAttribute(string pattern = @"^(?!.*[_.]{2})[a-zA-Z0-9._]+$") : base(pattern)
		{
			this.ErrorMessage = "Tên đăng nhập không hợp lệ";

			/*
			^(?!.*[_.]{2})[a-zA-Z0-9._]+$
			 └─────┬─────┘└─────┬─────┘
				   │            chỉ chấp nhận chữ thường, chữ hoa, số và _.
				   |
				   chông chấp nhận __ hoặc .. hoặc _. hoặc ._
			*/
		}
	}
}
