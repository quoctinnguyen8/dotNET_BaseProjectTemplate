using App.Web.Common.Mailer;
using App.Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;
		private readonly AppMailConfiguration _mailConfig;

		public HomeController(ILogger<HomeController> logger, AppMailConfiguration mailConfig)
		{
			_logger = logger;
			_mailConfig = mailConfig;
		}

		public IActionResult Index()
		{
			var emails = new List<AppMailReciver>()
				{
					new AppMailReciver
					{
						Name = "Tiến Nguyễn",
						Email = "tiensi180801@gmail.com"
					},
					new AppMailReciver
					{
						Name = "Tiến Nguyễn",
						Email = "ntt180801@gmail.com"
					},
					//new AppMailReciver
					//{
					//	Name = "TinNQ",
					//	Email = "nguyenquoctin9x@gmail.com"
					//},
					//new AppMailReciver
					//{
					//	Name = "TinNQ",
					//	Email = "tinnq8@gmail.com"
					//}
				};
			AppMailSender sender = new();
			sender.Name = "Tiến Sĩ";
			sender.Subject = "Test chức năng gửi email";
			sender.Content = "Đừng nói gì cả :v";

			//AppMailer.SendEmailToAllUser(sender, emails, _mailConfig);

			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error(int statusCode)
		{
			return View(statusCode.ToString());
		}
	}
}
