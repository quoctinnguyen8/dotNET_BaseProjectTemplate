using App.Data.Entities.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Entities.Policy
{
    public class Policy : AppEntityBase
    {
        public string Name { get; set; }
        public string CoverImage { get; set; }
        public string Content { get; set; }
        public int Like { get; set; }
    }
}
