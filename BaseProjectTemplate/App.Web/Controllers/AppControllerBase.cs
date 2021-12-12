using App.Web.Common;
using App.Web.ViewModels;
using App.Web.ViewModels.User;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Controllers
{
	public class AppControllerBase : Controller
	{
		protected const int DEFAULT_PAGE_SIZE = 15;
		protected const string EXCEPTION_ERR_MESG = "Đã xảy ra lỗi trong quá trình xử lý dữ liệu (500)";
		protected const string MODEL_STATE_INVALID_MESG = "Dữ liệu không hợp lệ, vui lòng kiểm tra lại";
		protected const string PAGE_NOT_FOUND_MESG = "Không tìm thấy trang";

		protected readonly IMapper mapper;
		protected int CurrentUserId { get => Convert.ToInt32(HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier)); }
		protected string CurrentUsername { get => HttpContext.User.Identity.Name; }
		protected string Referer { get => Request.Headers["Referer"].ToString(); }

		public AppControllerBase(IMapper _mapper)
		{
			mapper = _mapper;
		}

		protected RedirectToActionResult HomePage() => RedirectToAction("Index", "Home");

		protected void SetErrorMesg(string mesg, bool ModelStateIsInvalid = false) {
			TempData["Err"] = mesg;
			if (ModelStateIsInvalid)
			{
				// hiển thị tin nhắn lỗi ở console
				var invalidMesg = string.Join("\n", ModelState.Values
												.SelectMany(v => v.Errors)
												.Select(e => e.ErrorMessage));
				Console.WriteLine($"\n==> Model state is invalid: {invalidMesg}");
			}
		}

		protected void SetSuccessMesg(string mesg) => TempData["Success"] = mesg;

		protected void LogExceptionToConsole(Exception ex)
		{
			Console.WriteLine("\n--- EXCEPTION ---");
			Console.WriteLine(ex.Message);
			Console.WriteLine(ex.InnerException);
			Console.WriteLine(ex.StackTrace);
			SetErrorMesg(EXCEPTION_ERR_MESG);
		}

		protected byte[] HashHMACSHA512WithKey(string pwd, byte[] key)
		{
			HMACSHA512 hmac = new(key);
			var pwdByte = Encoding.UTF8.GetBytes(pwd);
			return hmac.ComputeHash(pwdByte);
		}

		protected HashResult HashHMACSHA512(string pwd)
		{
			var hashResult = new HashResult();
			HMACSHA512 hmac = new();
			var pwdByte = Encoding.UTF8.GetBytes(pwd);
			hashResult.Value = hmac.ComputeHash(pwdByte);
			hashResult.Key = hmac.Key;
			return hashResult;
		}
	}
}