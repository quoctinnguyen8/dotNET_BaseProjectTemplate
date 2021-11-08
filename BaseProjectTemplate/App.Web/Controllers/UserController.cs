using App.Data.Entities;
using App.Data.Repositories;
using App.Web.Common;
using App.Web.ViewModels.User;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Controllers
{
	public class UserController : AppControllerBase
	{
		readonly UserRepository userRepository;

		public UserController(UserRepository _userRepository, IMapper _mapper) : base(_mapper)
		{
			this.userRepository = _userRepository;
		}

		public async Task<IActionResult> Index(int page = 1, int size = DEFAULT_PAGE_SIZE)
		{
			// Chú ý dấu ngoặc khi dùng await cùng với GenRowIndex
			var data = (await userRepository
				.GetAll<AppUser, UserListItemVM>(
					u => u.Username != this.CurrentUsername,
					u => new UserListItemVM
					{
						Id = u.Id,
						Username = u.Username,
						FullName = u.FullName,
						Email = u.Email,
						PhoneNumber1 = u.PhoneNumber1,
						CreatedDate = u.CreatedDate
					})
				.ToPagedListAsync(page, size))
				.GenRowIndex();
			return View(data);
		}

		public IActionResult Create() => View();

		[HttpPost]
		public async Task<IActionResult> Create(UserAddOrEditVM model)
		{
			model.Username = model.Username.ToLower();
			if (!ModelState.IsValid)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG);
				return View(model);
			}

			if (await userRepository.AnyAsync<AppUser>(u => u.Username == model.Username))
			{
				SetErrorMesg("Tên đăng nhập này đã tồn tại");
				return View(model);
			}

			try
			{
				this.HashHMACSHA512(model);
				var user = mapper.Map<AppUser>(model);
				await userRepository.AddAsync(user);
				SetSuccessMesg("Thêm tài khoản thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogExceptionToConsole(ex);
				SetErrorMesg(EXCEPTION_ERR_MESG);
				return View(model);
			}
		}
	}
}
