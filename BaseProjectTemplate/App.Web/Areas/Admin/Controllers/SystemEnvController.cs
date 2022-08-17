using App.Web.Common;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace App.Web.Areas.Admin.Controllers
{
	public class SystemEnvController : AppControllerBase
	{
		private readonly SystemEnv _sysEnv;
		public SystemEnvController(IMapper mapper, SystemEnv sysEnv) : base(mapper)
		{
			_sysEnv = sysEnv;
		}
		public IActionResult Index()
		{
			return View(_sysEnv);
		}

		[HttpPost]
		public IActionResult Update(Dictionary<string, string> model)
		{
			foreach(var item in model)
			{
				_sysEnv.UpdateSysEnv(item.Key, item.Value);
			}
			return RedirectToAction(nameof(Index));
		}
	}
}
