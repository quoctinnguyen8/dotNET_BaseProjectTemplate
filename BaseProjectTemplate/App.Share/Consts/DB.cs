using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Share.Consts
{
	public static class DB
	{
		public static class AppUser
		{
			public const string TABLE_NAME					= "AppUser";
			public const short USERNAME_LENGTH				= 200;
			public const short PWD_LENGTH					= 200;
			public const short FULLNAME_LENGTH				= 50;
			public const short PHONE_LENGTH					= 20;
			public const short EMAIL_LENGTH					= 200;
			public const short ADDRESS_LENGTH				= 100;
			public const short AVATAR_LENGTH				= 200;
		}

	}
}
