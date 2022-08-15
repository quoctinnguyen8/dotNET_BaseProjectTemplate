using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Extensions;
using App.Web.Common.Helpers;
using App.Web.Areas.Admin.ViewModels.Account;
using App.Web.WebConfig;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using App.Web.Services.AppUser;

namespace App.Web.Areas.Admin.Controllers
{
    public class AccountController : AppControllerBase
    {
        readonly GenericRepository _repository;
        private readonly IAccountService _accountService;

        public AccountController(GenericRepository repository, IMapper mapper, IAccountService accountService) : base(mapper)
        {
            _repository = repository;
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
            return RedirectToAction(nameof(Login));
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

        [Authorize(AuthenticationSchemes = AppConst.COOKIES_AUTH)]
        public async Task<IActionResult> MyProfile()
        {
            ViewBag.Title = "Tài khoản của tôi";
            var currentUserId = Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));
            return View(await _accountService.GetUserById(currentUserId));
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
