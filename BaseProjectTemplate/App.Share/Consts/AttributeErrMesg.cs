using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Share.Consts
{
	public static class AttributeErrMesg
	{
		public const string CONFIRM_PWD			= "Mật khẩu không khớp";
		public const string EMAIL				= "Địa chỉ mail không hợp lệ";
		public const string MAXLEN				= "Không được nhiều hơn {0} ký tự";
		public const string MINLEN				= "Không được ít hơn {0} ký tự";
		public const string PHONE				= "Số điện thoại không hợp lệ";
		public const string RANGE				= "Phải thuộc khoảng {0} - {1}";
		public const string REGEX				= "Giá trị không hợp lệ";
		public const string REQUIRED			= "Trường này là bắt buộc";
		public const string STRING_LEN			= "Phải từ {0} ký tự đến {1} ký tự";
		public const string USERNAME			= "Tên đăng nhập không hợp lệ";
	}
}
