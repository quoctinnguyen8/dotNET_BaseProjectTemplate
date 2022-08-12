using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Areas.Admin.ViewModels.Account
{
    public class AcceptUpdateViewModel
    {
		public int Id { get; set; }
        public string FullName { get; set; }
		public string PhoneNumber1 { get; set; }
		public string PhoneNumber2 { get; set; }
		public string Avatar { get; set; }
		public string Address { get; set; }
    }
}
