using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Share.Extensions
{
	public static class DateTimeExtension
	{
		public static string ToDMY(this DateTime date)
		{
			return date.ToString("dd/MM/yyyy");
		}
		public static string ToDMY(this DateTime? date)
		{
			return date?.ToString("dd/MM/yyyy");
		}

		public static string ToDMYHM(this DateTime? date)
		{
			return date?.ToString("dd/MM/yyyy hh:mm");
		}
		public static string ToDMYHM(this DateTime date)
		{
			return date.ToString("dd/MM/yyyy hh:mm");
		}
	}
}
