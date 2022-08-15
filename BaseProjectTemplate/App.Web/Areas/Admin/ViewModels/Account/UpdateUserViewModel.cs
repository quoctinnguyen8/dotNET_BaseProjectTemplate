using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Areas.Admin.ViewModels.Account
{
    public class UpdateUserViewModel
    {
		public int Id { get; set; }
		public string Username { get; set; }
        public string FullName { get; set; }
		public string PhoneNumber1 { get; set; }
		public string PhoneNumber2 { get; set; }
		public string Avatar { get; set; }
		public string Email { get; set; }
		public string Address { get; set; }
		public string RoleName { get; set; }
		public string Permission { get; set; }
    }
}
