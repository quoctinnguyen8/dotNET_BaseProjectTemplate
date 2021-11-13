using App.Data.Entities;
using App.Data.Repositories;
using App.Web.Common;
using App.Web.ViewModels.Role;
using App.Web.ViewModels.User;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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
		readonly RepositoryBase repository;

		public UserController(RepositoryBase _repository, IMapper _mapper) : base(_mapper)
		{
			this.repository = _repository;
		}

		public async Task<IActionResult> Index(int page = 1, int size = DEFAULT_PAGE_SIZE)
		{
			// Chú ý dấu ngoặc khi dùng await cùng với GenRowIndex
			var data = (await repository
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

			if (await repository.AnyAsync<AppUser>(u => u.Username == model.Username))
			{
				SetErrorMesg("Tên đăng nhập này đã tồn tại");
				return View(model);
			}

			try
			{
				var hashResult = HashHMACSHA512(model.Password);
				model.PasswordHash = hashResult.Value;
				model.PasswordSalt = hashResult.Key;
				var user = mapper.Map<AppUser>(model);
				await repository.AddAsync(user);
				SetSuccessMesg($"Thêm tài khoản [{user.Username}] thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogExceptionToConsole(ex);
				return View(model);
			}
		}

		public async Task<IActionResult> Edit(int id)
		{
			var user = await repository.GetOneAsync<AppUser>(id);
			if (user == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			var userEditVM = mapper.Map<UserAddOrEditVM>(user);
			return View(userEditVM);
		}

		[HttpPost]
		public async Task<IActionResult> Edit(UserAddOrEditVM model)
		{
			var user = await repository.GetOneAsync<AppUser>(model.Id);
			if (!ModelState.IsValid)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG);
				return View(model);
			}
			if (user == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			if (model.Username != user.Username)
			{
				SetErrorMesg("Không được thay đổi tên đăng nhập");
				return View(model);
			}

			try
			{
				//Cập nhật mật khẩu
				var hashResult = HashHMACSHA512(model.Password);
				model.PasswordHash = hashResult.Value;
				model.PasswordSalt = hashResult.Key;
				mapper.Map(model, user);
				await repository.UpdateAsync<AppUser>(user);
				SetSuccessMesg($"Cập nhật tài khoản [{user.Username}] thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogExceptionToConsole(ex);
				return View(model);
			}
		}

		public async Task<IActionResult> Delete(int id)
		{
			var user = await repository.GetOneAsync<AppUser>(id);
			if (user == null)
			{
				SetErrorMesg("Tài khoản không tồn tại hoặc đã được xóa trước đó");
				return RedirectToAction(nameof(Index));
			}
			await repository.DeleteAsync(user);
			SetSuccessMesg($"Tài khoản [{user.Username}] được xóa thành công");
			return RedirectToAction(nameof(Index));
		}
	}
}
