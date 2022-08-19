using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Extensions;
using App.Web.Common.Helpers;
using App.Web.Areas.Admin.ViewModels.Account;
using App.Web.WebConfig;
using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using App.Web.Common.Mailer;
using Microsoft.AspNetCore.Hosting;
using RazorEngine;
using RazorEngine.Templating;
using Microsoft.AspNetCore.Authorization;
using App.Web.Services.AppUser;

namespace App.Web.Areas.Admin.Controllers
{
	public class AccountController : AppControllerBase
	{
		readonly GenericRepository _repository;
		private readonly AppMailConfiguration _mailConfig;
		private readonly IAccountService _accountService;
		private readonly IHostingEnvironment _env;

		public AccountController(IAccountService  accountService,IHostingEnvironment env, AppMailConfiguration mailConfig, GenericRepository repository, IMapper mapper) : base(mapper)
		{
			_repository = repository;
			_mailConfig = mailConfig;
			_env = env;
			_accountService = accountService;
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

            var pwdHash = this.HashHMACSHA512WithKey(model.Password, user.PasswordSalt);
            if (!pwdHash.SequenceEqual(user.PasswordHash))
            {
                TempData["Mesg"] = "Tên đăng nhập hoặc mật khẩu không chính xác";
                return RedirectToAction(nameof(Login));
            }

            var claims = new List<Claim> {
                            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                            new Claim(ClaimTypes.Name, user.Username),
                            new Claim(ClaimTypes.Email, user.Email),
                            new Claim(AppClaimTypes.FullName, user.FullName),
                            new Claim(AppClaimTypes.PhoneNumber, user.PhoneNumber1),
                            new Claim(AppClaimTypes.RoleName, user.RoleName),
                            new Claim(AppClaimTypes.Permissions, user.Permission),
                        };
            var claimsIdentity = new ClaimsIdentity(claims, AppConst.COOKIES_AUTH);
            var principal = new ClaimsPrincipal(claimsIdentity);
            var authenPropeties = new AuthenticationProperties()
            {
                ExpiresUtc = DateTime.UtcNow.AddHours(AppConst.LOGIN_TIMEOUT),
                IsPersistent = model.RememberMe
            };
            await HttpContext.SignInAsync(AppConst.COOKIES_AUTH, principal, authenPropeties);

            CreateDirIfNotExist(model.Username);
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
			return Redirect("/admin/account/login");
		}

        public IActionResult AccessDenied() => View();

        public async Task<IActionResult> ChangePassword(ChangePassword model)
        {
            var user = await _repository.FindAsync<AppUser>(this.CurrentUserId);
            var encryptPassword = this.HashHMACSHA512WithKey(model.Pwd, user.PasswordSalt);
            if (!encryptPassword.SequenceEqual(user.PasswordHash))
            {
                SetErrorMesg("Mật khẩu cũ không chính xác");
                return Redirect(Referer);
            }

            var hashResult = this.HashHMACSHA512(model.NewPwd);
            user.PasswordHash = hashResult.Value;
            user.PasswordSalt = hashResult.Key;
            await _repository.UpdateAsync<AppUser>(user);

            if (model.LogoutAfterChangePwd)
            {
                return RedirectToAction(nameof(Logout));
            }

			SetSuccessMesg("Đổi mật khẩu thành công");
			return Redirect(Referer);
		}
		[HttpGet]
		public IActionResult ForgotPassword()
		{
			return View();
		}
		[HttpPost]
		public async Task<IActionResult> ForgotPassword(string email = "")
		{
			var user = await _repository.GetOneAsync<AppUser>(s => s.Email.Equals(email));

			if (user == null)
			{
				TempData["Mesg"] = "Tài khoản không tồn tại";
				return RedirectToAction(nameof(ForgotPassword));
			}
			if (user.BlockedTo.HasValue && user.BlockedTo.Value >= DateTime.Now)
			{
				TempData["Mesg"] = $"Tài khoản của bạn bị khóa đến {user.BlockedTo.Value:dd/MM/yyyy HH:mm}";
				return RedirectToAction(nameof(ForgotPassword));
			}
			var code = SecurityHelper.CreateCode();
			if (user != null)
			{
				var verifyCode = new AppVerifyCode()
				{
					TokenString = code,
					CreatedDate = DateTime.Now,
					Expired = DateTime.Now.AddMinutes(10),
					IdUser = user.Id
				};
				await _repository.AddAsync<AppVerifyCode>(verifyCode);

				var pathToFile = $"{_env.WebRootPath}" +
					$"{Path.DirectorySeparatorChar}" +
					$"emailTemplate{Path.DirectorySeparatorChar}emailTemplate.html";

				var appMailSender = new AppMailSender()
				{
					Name = $"Công ty TNHH AConCept",
					Subject = $"Quên mật khẩu? Chúng tôi có thể giúp"
				};

				using (StreamReader SourceReader = System.IO.File.OpenText(pathToFile))
				{
					appMailSender.Content = SourceReader.ReadToEnd();
				};

				var appMailReciver = new AppMailReciver()
				{
					Email = user.Email,
					Name = user.Username
				};

				var contentMessage = Engine.Razor
					.RunCompile(appMailSender.Content, "@",
					null,
					new
					{
						Name = appMailReciver.Name,
						Code = code,
						Signature = _mailConfig.Signature,
						Year = DateTime.Now.Year,
						CompanyName = appMailSender.Name
					});
				appMailSender.Content = contentMessage;

				AppMailer _emailMap = new AppMailer(_mailConfig);
				_emailMap.Sender = appMailSender;
				_emailMap.Reciver = appMailReciver;
				_emailMap.Send();
			}
			return RedirectToAction("CheckCodeChangePass", "Account");
		}
		[HttpGet]
		public IActionResult CheckCodeChangePass()
		{
			return View();
		}
		[HttpPost]
		public async Task<IActionResult> CheckCodeChangePass(string code)
		{
			var checkCodeUser = await _repository.GetOneOrderAsync<AppVerifyCode>(s => s.TokenString.Equals(code));
			if (checkCodeUser == null)
			{
				TempData["Mesg"] = "Code không tồn tại !";
				return RedirectToAction(nameof(CheckCodeChangePass));
			}
			if (SecurityHelper.IsCodeExpired(checkCodeUser.Expired))
			{
				TempData["Mesg"] = "Code hết hạn !";
				return RedirectToAction(nameof(CheckCodeChangePass));
			}
			return RedirectToAction(nameof(CreateNewPass), new { code = checkCodeUser.TokenString });
		}
		[HttpGet]
		public IActionResult CreateNewPass(string code)
		{
			TempData["CodeUser"] = code;
			return View();
		}
		[HttpPost]
		public async Task<IActionResult> CreateNewPass(ForgotPassword model)
		{
			var code = TempData["CodeUser"];
			var infoCode = await _repository.GetOneOrderAsync<AppVerifyCode>(s => s.TokenString.Equals(code));
			var infoUser = await _repository.GetOneAsync<AppUser>(s => s.Id.Equals(infoCode.IdUser));
			if (infoUser != null)
			{
				var hashResult = this.HashHMACSHA512(model.NewPwd);
				infoUser.PasswordHash = hashResult.Value;
				infoUser.PasswordSalt = hashResult.Key;
				await _repository.UpdateAsync<AppUser>(infoUser);

				var pathToFile = $"{_env.WebRootPath}" +
					$"{Path.DirectorySeparatorChar}" +
					$"emailTemplate{Path.DirectorySeparatorChar}emailSuccess.html";

				var appMailSender = new AppMailSender()
				{
					Name = $"Công ty TNHH AConCept",
					Subject = $"Đổi mật khẩu thành công"
				};

				using (StreamReader SourceReader = System.IO.File.OpenText(pathToFile))
				{
					appMailSender.Content = SourceReader.ReadToEnd();
				};

				var appMailReciver = new AppMailReciver()
				{
					Email = infoUser.Email,
					Name = infoUser.Username
				};

				var contentMessage = Engine.Razor
					.RunCompile(appMailSender.Content, "@Model",
					null,
					new
					{
						Name = appMailReciver.Name,
						Signature = _mailConfig.Signature,
						Year = DateTime.Now.Year,
						CompanyName = appMailSender.Name
					});

				appMailSender.Content = contentMessage;

				AppMailer _emailMap = new AppMailer(_mailConfig);
				_emailMap.Sender = appMailSender;
				_emailMap.Reciver = appMailReciver;
				_emailMap.Send();

				SetSuccessMesg("Đổi mật khẩu thành công");
			}
			return RedirectToAction("Login", "Account");
		}
		[Authorize(AuthenticationSchemes = AppConst.COOKIES_AUTH)]
		public async Task<IActionResult> MyProfile()
		{
			ViewBag.Title = "Tài khoản của tôi";
			return View(await _accountService.GetUserById(CurrentUserId));
		}

		[HttpPost]
		[Authorize(AuthenticationSchemes = AppConst.COOKIES_AUTH)]
		public async Task<IActionResult> MyProfile(AcceptUpdateViewModel data)
		{
			try
			{
				data.Id = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
				await _accountService.UpdateUser(data);
				ViewBag.Title = "Tài khoản của tôi";
				ViewBag.UpdateMessage = new UpdateStatusViewModel()
				{
					IsSuccess = true,
					Message = "Cập nhật thành công"
				};
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
				ViewBag.UpdateMessage = new UpdateStatusViewModel()
				{
					IsSuccess = false,
					Message = "Cập nhật thất bại, thử lại sau ít phút"
				};
			}

			return View(await _accountService.GetUserById(Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier))));
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
