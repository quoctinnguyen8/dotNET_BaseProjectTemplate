using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Extensions;
using App.Web.Common.Helpers;
using App.Web.Services.JWTService;
using App.Web.ViewModels.Account;
using App.Web.WebConfig;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace App.Web.Controllers
{
	public class AccountController : AppControllerBase
	{
		readonly GenericRepository _repository;
		private readonly TokenService _tokenService;

		public AccountController(GenericRepository repository, IMapper mapper, TokenService tokenService) : base(mapper)
		{
			_repository = repository;
			_tokenService = tokenService;
		}

		public IActionResult Login() => User.Identity.IsAuthenticated ? HomePage() : View();

		[HttpPost]
		public async Task<IActionResult> Login(LoginVM model)
		{
			var user = await _repository.GetOneAsync<AppUser, UserDataForApp>
							(
								where: x => x.Username == model.Username.ToLower(),
								AutoMapperProfile.LoginConf
							);
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

			if (!BCrypt.Net.BCrypt.Verify(model.Password, user.PasswordHash))
			{
				TempData["Mesg"] = "Tên đăng nhập hoặc mật khẩu không chính xác";
				return RedirectToAction(nameof(Login));
			}

			CreateDirIfNotExist(model.Username);
			var returnUrl = Request.Query["ReturnUrl"].ToString();

			var token = _tokenService.GenerateToken(user);
			if (token == null)
			{
				return View();
			}
			HttpContext.Response.Cookies.Append(AppConst.SESSION_TOKEN, token, new CookieOptions
			{
				HttpOnly = true,
			});
			if (returnUrl.IsNullOrEmpty())
			{
				return HomePage();
			}
			return Redirect(returnUrl);
		}

		public IActionResult Logout()
		{
			HttpContext.Response.Cookies.Delete(AppConst.SESSION_TOKEN);
			return RedirectToAction(nameof(Login));
		}

		public IActionResult AccessDenied() => View();

		public async Task<IActionResult> ChangePassword(ChangePassword model)
		{
			var user = await _repository.FindAsync<AppUser>(this.CurrentUserId);
			if (!BCrypt.Net.BCrypt.Verify(model.Pwd, user.PasswordHash))
			{
				SetErrorMesg("Mật khẩu cũ không chính xác");
				return Redirect(Referer);
			}

			user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.NewPwd);
			await _repository.UpdateAsync<AppUser>(user);

			if (model.LogoutAfterChangePwd)
			{
				return RedirectToAction(nameof(Logout));
			}

			SetSuccessMesg("Đổi mật khẩu thành công");
			return Redirect(Referer);
		}

		// Tạo thư mục lưu file cho user khi đăng nhập (nếu chưa có)
		private static void CreateDirIfNotExist(string username)
		{
			var userPath = $"{AppConst.SYSTEM_FILE_PATH}/{username}";
			var fullPath = PathHelper.MapPath(userPath);
			if (!Directory.Exists(fullPath))
			{
				Directory.CreateDirectory(fullPath);
				// Thêm file tạm để giữ folder
				var file = PathHelper.MapPath($"{userPath}/{username}.txt");
				System.IO.File.WriteAllText(file, $"Hello {username}!");
			}
		}
	}
}
