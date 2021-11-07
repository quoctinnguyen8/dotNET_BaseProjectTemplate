using App.Data.Repositories;
using App.Web.ViewModels.Account;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Controllers
{
	public class AccountController : AppControllerBase
	{
		readonly UserRepository userRepository;
		public AccountController(UserRepository _userRepository, IMapper _mapper) : base(_mapper)
		{
			userRepository = _userRepository;
		}

		public IActionResult Login()
		{
			return View();
		}

		[HttpPost]
		public IActionResult Login(LoginVM model)
		{
			return View();
		}
	}
}
