using App.Data.Entities;
using App.Data.Repositories;
using App.Web.ViewModels.User;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Controllers
{
	public class UserController : AppControllerBase
	{
		readonly UserRepository userRepository;

		public UserController(UserRepository _userRepository, IMapper _mapper):base(_mapper)
		{
			this.userRepository = _userRepository;
		}

		public IActionResult Create()
		{
			return View();
		}

		[HttpPost]
		public async Task<IActionResult> Create(CreateUserVM model)
		{
			this.HashHMACSHA512(model);
			var user = mapper.Map<AppUser>(model);
			await userRepository.Create(user);
			return View();
		}
	}
}
