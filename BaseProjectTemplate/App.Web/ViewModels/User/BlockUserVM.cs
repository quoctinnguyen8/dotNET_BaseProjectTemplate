using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.ViewModels.User
{
    public class BlockUserVM
    {
        public int Id { get; set; }
        public DateTime? BlockedTo { get; set; }
        public bool Permanentblock { get; set; }
    }
}
