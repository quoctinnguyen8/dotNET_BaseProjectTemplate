using App.Data.Entities;
using App.Data.Repositories;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;
using App.Web.Common;
using App.Web.ViewModels.Role;
using App.Share.Extensions;
using AutoMapper.QueryableExtensions;
using App.Web.WebConfig;
using Microsoft.EntityFrameworkCore;
using App.Share.Consts;

namespace App.Web.Controllers
{
	public class RoleController : AppControllerBase
	{
		readonly GenericRepository _repository;
		public RoleController(GenericRepository repository, IMapper mapper) : base(mapper)
		{
			_repository = repository;
		}

		[AppAuthorize(AuthConst.AppRole.VIEW_LIST)]
		public async Task<IActionResult> Index(int page = 1, int size = DEFAULT_PAGE_SIZE)
		{
			var data = (await _repository
				.GetAll<AppRole, RoleListItemVM>(AutoMapperProfile.RoleIndexConf)
				.ToPagedListAsync(page, size))
				.GenRowIndex();
			return View(data);
		}

		[AppAuthorize(AuthConst.AppRole.CREATE)]
		public IActionResult Create() => View();

		[HttpPost]
		[AppAuthorize(AuthConst.AppRole.CREATE)]
		public async Task<IActionResult> Create(RoleAddVM model)
		{
			if (model.PermissionIds == null)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG);
				return View(model);
			}
			var arrIdPermission = model.PermissionIds.Split(',');

			var role = new AppRole
			{
				Name = model.Name,
				Desc = model.Desc
			};
			try
			{
				await _repository.AddAsync(role);
				foreach (var item in arrIdPermission)
				{
					var idPer = Convert.ToInt32(item);
					role.AppRolePermissions.Add(new AppRolePermission
					{
						MstPermissionId = idPer
					});
				}
				await _repository.AddAsync(role.AppRolePermissions);
				SetSuccessMesg($"Thêm vai trò [{role.Name}] thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogException(ex);
				return View();
			}
		}

		[AppAuthorize(AuthConst.AppRole.UPDATE)]
		public async Task<IActionResult> Edit(int? id)
		{
			if (!id.HasValue)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			var data = await _repository.GetOneAsync<AppRole, RoleEditVM>(id.Value, r => new RoleEditVM
			{
				Id = r.Id,
				Name = r.Name,
				Desc = r.Desc,
				PermissionIds = string.Join(',', r.AppRolePermissions.Select(rp => rp.MstPermissionId)),
			});
			if (data == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			return View(data);
		}

		[HttpPost]
		[AppAuthorize(AuthConst.AppRole.UPDATE)]
		public async Task<IActionResult> Edit(RoleEditVM model)
		{
			if (!ModelState.IsValid)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG, true);
				return RedirectToAction(nameof(Index));
			}
			var role = await _repository.FindAsync<AppRole>(model.Id);
			var curPermisssionIds = _repository
								.GetAll<AppRolePermission>(where: s => s.AppRoleId == role.Id)
								.ToList();
			if (role == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}

			// danh sách permission bị xóa khỏi role
			var deletedPermissionIds = model.DeletedPermissionIds.IsNullOrEmpty() ? null : model.DeletedPermissionIds.Split(',').Select(i => Convert.ToInt32(i));
			// danh sách permission được thêm vào role
			var addedPermissionIds = model.AddedPermissionIds.IsNullOrEmpty() ? null : model.AddedPermissionIds.Split(',').Select(i => Convert.ToInt32(i)).OrderBy(i => i);
			// danh sách permission hiện tại
			var rolePermissionIds = curPermisssionIds
								.Where(x => deletedPermissionIds != null && deletedPermissionIds.Contains(x.MstPermissionId))
								.Select(x => x.Id)
								.OrderBy(x => x);
			// nếu xóa hết permission mà không thêm mới thì không cho thêm
			if ((addedPermissionIds == null || !addedPermissionIds.Any()) && deletedPermissionIds != null && rolePermissionIds.SequenceEqual(deletedPermissionIds))
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG);
				return RedirectToAction(nameof(Edit), new { id = model.Id });
			}

			if (deletedPermissionIds != null && deletedPermissionIds.Any())
			{
				await _repository.HardDeleteAsync<AppRolePermission>(rolePermissionIds);
			}

			if (addedPermissionIds != null && addedPermissionIds.Any())
			{
				var addedRolePermisson = new List<AppRolePermission>();
				foreach (var item in addedPermissionIds)
				{
					addedRolePermisson.Add(new AppRolePermission
					{
						AppRoleId = role.Id,
						MstPermissionId = item
					});
				}
				await _repository.AddAsync(addedRolePermisson);
			}
			role.Name = model.Name;
			role.Desc = model.Desc;
			await _repository.UpdateAsync(role);
			SetSuccessMesg($"Cập nhật vai trò [{role.Name}] thành công");
			return RedirectToAction(nameof(Index));
		}

		[AppAuthorize(AuthConst.AppRole.DELETE)]
		public async Task<IActionResult> Delete(int? id)
		{
			if (!id.HasValue)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}

			var data = await _repository.FindAsync<AppRole, RoleDeleteVM>(id.Value, AutoMapperProfile.RoleDeleteConf);

			if (data == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			// Xóa không cần xác nhận nếu không có dữ liệu user liên quan
			if (data.AppUsers == null || data.AppUsers.Count == 0)
			{
				await _repository.DeleteAsync<AppRole>(data.Id);
				SetSuccessMesg($"Xóa vai trò [{data.Name}] thành công");
				return RedirectToAction(nameof(Index));
			}

			var userDeletedCount = data.AppUsers.Where(u => u.DeletedDate != null).Count();
			if (userDeletedCount == data.AppUsers.Count)
			{
				await _repository.DeleteAsync<AppRole>(data.Id);
				var users = await _repository.GetAll<AppUser>(where: u => u.AppRoleId == data.Id).ToListAsync();
				// Cập nhật vai trò mới
				users.ForEach(u => u.AppRoleId = null);
				await _repository.UpdateAsync(users);
				SetSuccessMesg($"Xóa vai trò [{data.Name}] thành công");
				return RedirectToAction(nameof(Index));
			}
			// Chỉ hiển thị user chưa bị xóa
			data.AppUsers = data.AppUsers.Where(u => u.DeletedDate == null).ToList();
			return View(data);
		}

		[HttpPost]
		[AppAuthorize(AuthConst.AppRole.DELETE)]
		public async Task<IActionResult> Delete(RoleDeleteVM data)
		{
			if (!ModelState.IsValid)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG, true);
				return RedirectToAction(nameof(Index));
			}

			try
			{
				var users = await _repository.GetAll<AppUser>(where: u => u.AppRoleId == data.Id).ToListAsync();
				// Cập nhật vai trò mới
				users.ForEach(u => u.AppRoleId = data.NewId);

				await _repository.BeginTransactionAsync();

				// Cập nhật role mới cho users
				await _repository.UpdateAsync(users);
				// Xóa role cũ
				await _repository.DeleteAsync<AppRole>(data.Id);
				// Lấy thông tin role mới
				var newRolwName = await _repository.GetOneAsync<AppRole, string>(data.NewId, selector: r => r.Name);
				await _repository.CommitTransactionAsync();

				SetSuccessMesg($"Xóa vai trò [{data.Name}] thành công và đã chuyển {users.Count} tài khoản sang vai trò [{newRolwName}]");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				// Rollback
				await _repository.RollbackTransactionAsync();

				SetErrorMesg(EXCEPTION_ERR_MESG);
				LogException(ex);
				return RedirectToAction(nameof(Delete), new { id = data.Id });
			}
		}
	}
}
