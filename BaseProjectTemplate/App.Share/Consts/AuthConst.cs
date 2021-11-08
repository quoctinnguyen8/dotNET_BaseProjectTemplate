using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Share.Consts
{
	public static class AuthConst
	{
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
	}
}
