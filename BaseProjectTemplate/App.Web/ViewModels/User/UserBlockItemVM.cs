using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.User
{
	public class UserBlockItemVM
	{
		public int Minute { get; set; }
		public int Hour { get; set; }
		public int Day { get; set; }
		public int Month { get; set; }
		public int Year { get; set; }
		public int IdUserBlock { get; set; }
	}
}
