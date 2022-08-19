using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Areas.Admin.Controllers
{
    public class PolicyController : AppControllerBase
    {
        public PolicyController(IMapper mapper) : base(mapper)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
