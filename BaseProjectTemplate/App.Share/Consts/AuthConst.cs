﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Share.Consts
{
	public static class AuthConst
	{
		public const int NO_PERMISSION					= -1;
		public static class AppUser
		{
			public const int VIEW_LIST					= 1001;
			public const int VIEW_DETAIL				= 1002;
			public const int CREATE						= 1003;
			public const int UPDATE						= 1004;
			public const int UPDATE_PWD					= 1005;
			public const int BLOCK						= 1006;
			public const int UNBLOCK					= 1007;
			public const int DELETE						= 1008;
		}

		public static class AppRole
		{
			public const int VIEW_LIST					= 1101;
			public const int VIEW_DETAIL				= 1102;
			public const int CREATE						= 1103;
			public const int UPDATE						= 1104;
			public const int DELETE						= 1105;
		}

		public static class FileManager
		{
			public const int MANAGE_ALL_USER_FILES		= 1205;
		}
		public static class AppNews
        {
			public const int VIEW_LIST = 1301;
			public const int CREATE = 1302;
			public const int UPDATE = 1303;
			public const int DELETE = 1304;
			public const int PUBLIC = 1305;
			public const int UNPUBLIC = 1306;
		}
		public static class AppCategoryNews
		{
			public const int VIEW_LIST = 1401;
			public const int CREATE = 1402;
			public const int UPDATE = 1403;
			public const int DELETE = 1404;
		}
	}
}
