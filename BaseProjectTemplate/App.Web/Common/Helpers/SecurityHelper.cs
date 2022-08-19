using App.Web.WebConfig;
using System;
using System.Text.RegularExpressions;

namespace App.Web.Common.Helpers
{
	public static class SecurityHelper
	{
		public static string CreateCode()
		{
			Random random = new Random();
			return Convert.ToString(random.Next(111111, 999999));
		}
		public static bool IsCodeExpired(DateTime expired)
		{
			TimeSpan restTime = expired - DateTime.Now;
			var totalMinutes = restTime.TotalMinutes;
			if (totalMinutes < 0)
				return true;
			return false;
		}
		public static string MakeSecretEmail(string strEmail)
		{
			var content = strEmail.Split("@");
			var replace = "";
			for (int i = 0; i < content[0].Length; i++)
			{
				if (i <= 5)
				{
					replace += "*";
				}
				else
				{
					replace += content[0][i];
				}
			}
			strEmail = Regex.Replace(strEmail, @"\w+([-+.']\w+)*@", $"{replace}@");
			return strEmail;
		}

		public static string MakeSecretPhoneNumber(string phone)
		{
			var numPhone = "";
			foreach (var item in phone.Substring(3, 4))
			{
				numPhone += "*";
			}
			return $"({phone.Substring(0, 3)}){numPhone}{phone.Substring(7, 3)}";
		}

		public static string MakeRandomPassword(int length)
		{
			string allCharacters = AppConst.UPPER_CASE + AppConst.LOWER_CASE + AppConst.DIGITS;
			Random random = new Random();
			String password = "";
			for (int i = 0; i < length; i++)
			{
				double rand = random.NextDouble();
				if (i == 0)
				{
					password += AppConst.UPPER_CASE.ToCharArray()[(int)Math.Floor(rand * AppConst.UPPER_CASE.Length)];
				}
				else
				{
					password += allCharacters.ToCharArray()[(int)Math.Floor(rand * allCharacters.Length)];
				}
			}
			return password;
		}
	}
}
