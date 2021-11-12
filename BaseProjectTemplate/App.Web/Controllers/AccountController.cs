﻿using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Extensions;
using App.Web.Common.Consts;
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
		readonly RepositoryBase userRepository;

		public AccountController(RepositoryBase _userRepository, IMapper _mapper) : base(_mapper)
		{
			userRepository = _userRepository;
		}

		public IActionResult Login() => User.Identity.IsAuthenticated ? HomePage() : View();

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
			var claimsIdentity = new ClaimsIdentity(claims, AppConst.COOKIES_AUTH);
			var principal = new ClaimsPrincipal(claimsIdentity);
			var authenPropeties = new AuthenticationProperties()
			{
				ExpiresUtc = DateTime.UtcNow.AddHours(AppConst.LOGIN_TIMEOUT),
				IsPersistent = model.RememberMe
			};
			await HttpContext.SignInAsync(AppConst.COOKIES_AUTH, principal, authenPropeties);

			var returnUrl = Request.Query["ReturnUrl"].ToString();
			if (returnUrl.IsNullOrEmpty())
			{
				return HomePage();
			}
			return Redirect(returnUrl);
		}

		public async Task<IActionResult> Logout()
		{
			await HttpContext.SignOutAsync(AppConst.COOKIES_AUTH);
			return RedirectToAction(nameof(Login));
		}

		public IActionResult AccessDenied() => View();

		public async Task<IActionResult> ChangePassword(ChangePassword model)
		{
			var user = await userRepository.GetOneAsync<AppUser>(this.CurrentUserId);
			var encryptPassword = this.HashHMACSHA512WithKey(model.Pwd, user.PasswordSalt);
			if (!encryptPassword.SequenceEqual(user.PasswordHash))
			{
				TempData["Err"] = "Mật khẩu cũ không chính xác";
				return Redirect(Request.Headers["Referer"].ToString());
			}

			var hashResult = this.HashHMACSHA512(model.NewPwd);
			user.PasswordHash = hashResult.Value;
			user.PasswordSalt = hashResult.Key;
			await userRepository.UpdateAsync<AppUser>(user);

			if (model.LogoutAfterChangePwd)
			{
				return RedirectToAction(nameof(Logout));
			}

			TempData["Success"] = "Đổi mật khẩu thành công";
			return Redirect(Request.Headers["Referer"].ToString());
		}
	}
}
