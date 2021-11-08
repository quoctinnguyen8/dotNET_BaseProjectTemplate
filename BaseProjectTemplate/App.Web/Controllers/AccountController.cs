using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Extensions;
using App.Web.ViewModels.Account;
using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
			if (User.Identity.IsAuthenticated)
			{
				return HomePage();
			}
			return View();
		}

		[HttpPost]
		public async Task<IActionResult> Login(LoginVM model)
		{
			var user = await userRepository.GetOneAsync<AppUser>(x => x.Username == model.Username.ToLower());
			if (user == null)
			{
				TempData["Mesg"] = "Tài khoản không tồn tại";
				return RedirectToAction(nameof(Login));
			}

			if (user.BlockedTo.HasValue && user.BlockedTo.Value >= DateTime.Now)
			{
				TempData["Mesg"] = $"Tài khoản của bạn bị khóa đến {user.BlockedTo.Value:dd/MM/yyyy HH:mm}";
				return RedirectToAction(nameof(Login));
			}

			var pwdHash = this.HashHMACSHA512WithKey(model.Password, user.PasswordSalt);
			if (!pwdHash.SequenceEqual(user.PasswordHash))
			{
				TempData["Mesg"] = "Tên đăng nhập hoặc mật khẩu không chính xác";
				return RedirectToAction(nameof(Login));
			}

			var claims = new List<Claim> {
							new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
							new Claim(ClaimTypes.Name, user.Username)
						};
			var claimsIdentity = new ClaimsIdentity(claims, "Cookies");
			var principal = new ClaimsPrincipal(claimsIdentity);
			var authenPropeties = new AuthenticationProperties()
			{
				ExpiresUtc = DateTime.UtcNow.AddHours(6),
				IsPersistent = model.RememberMe
			};
			await HttpContext.SignInAsync("Cookies", principal, authenPropeties);

			var returnUrl = Request.Query["ReturnUrl"].ToString();
			if (returnUrl.IsNullOrEmpty())
			{
				return HomePage();
			}
			return Redirect(returnUrl);
		}

		public async Task<IActionResult> Logout()
		{
			await HttpContext.SignOutAsync("Cookies");
			return RedirectToAction(nameof(Login));
		}

		public IActionResult AccessDenied() => View();
	}
}
