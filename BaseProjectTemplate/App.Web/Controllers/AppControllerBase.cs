using App.Web.ViewModels.User;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace App.Web.Controllers
{
	public class AppControllerBase : Controller
	{
		protected readonly IMapper mapper;
		public AppControllerBase(IMapper _mapper)
		{
			mapper = _mapper;
		}

		protected RedirectToActionResult HomePage()
		{
			return RedirectToAction("Index", "Home");
		}

		protected void HashHMACSHA512(CreateUserVM user)
		{
			HMACSHA512 hmac = new();
			var pwByte = Encoding.UTF8.GetBytes(user.Password);
			user.PasswordHash = hmac.ComputeHash(pwByte);
			user.PasswordSalt = hmac.Key;
		}

		protected byte[] HashHMACSHA512WithKey(string pwd, byte[] key)
		{
			HMACSHA512 hmac = new(key);
			var pwdByte = Encoding.UTF8.GetBytes(pwd);
			return hmac.ComputeHash(pwdByte);
		}
	}
}
