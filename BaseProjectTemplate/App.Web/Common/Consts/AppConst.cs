﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Common.Consts
{
	public class AppConst
	{
		// Bật/tắt chức năng xác thực người dùng
		public const bool ENABLE_AUTH					= true;

		// Cách xác thực người dùng
		public const string COOKIES_AUTH				= "Cookies";

		// Tên trang web, xuất hiện ở góc trên trái của giao diện
		public const string APP_NAME					= "Base Template";

		// Đường dẫn trang đăng nhập
		public const string LOGIN_PATH					= "/login";

		// Thời gian đăng nhập tối đa
		public const byte LOGIN_TIMEOUT					= 10; // 10 giờ
	}
}