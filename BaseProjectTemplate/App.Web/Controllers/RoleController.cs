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

namespace App.Web.Controllers
{
	public class RoleController : AppControllerBase
	{
		readonly RepositoryBase repository;
		public RoleController(RepositoryBase _repository, IMapper _mapper) : base(_mapper)
		{
			this.repository = _repository;
		}
		public async Task<IActionResult> Index()
		{
			var data = await repository
				.GetAll<AppRole>()
				.ToListAsync();
			return View(data);
		}
		public IActionResult Create() => View();
		[HttpPost]
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
				await repository.AddAsync(role);
				foreach (var item in arrIdPermission)
				{
					var idPer = Convert.ToInt32(item);
					role.AppRolePermissions.Add(new AppRolePermission
					{
						MstPermissionId = idPer
					});
				}
				await repository.AddAsync(role.AppRolePermissions);
				SetSuccessMesg($"Thêm vai trò [{role.Name}] thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogExceptionToConsole(ex);
				return View();
			}
		}

		public async Task<IActionResult> Edit(int? id)
		{
			if (!id.HasValue)
			{
				SetErrorMesg(PAGE_NOT_FOUND);
				return RedirectToAction(nameof(Index));
			}
			var data = await repository.GetOneAsync<AppRole, RoleEditVM>(id.Value, r => new RoleEditVM
			{
				Id = r.Id,
				Name = r.Name,
				Desc = r.Desc,
				PermissionIds = string.Join(',', r.AppRolePermissions.Select(rp => rp.MstPermissionId)),
			});
			if (data == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND);
				return RedirectToAction(nameof(Index));
			}
			return View(data);
		}
		[HttpPost]

		public async Task<IActionResult> Edit(RoleEditVM model)
		{
			var role = await repository.GetOneAsync<AppRole>(model.Id);
			var rolePermisstions = repository.GetAll<AppRolePermission>(s => s.AppRoleId == role.Id).ToList();

			if (role == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND);
				return RedirectToAction(nameof(Index));
			}
			var arrIdDeletedPermission = model.DeletedPermissionIds == null ? null : model.DeletedPermissionIds.Split(',');
			var arrIdAddedPermission = model.AddedPermissionIds == null ? null : model.AddedPermissionIds.Split(',');
			if (arrIdDeletedPermission != null)
			{
				foreach (var rolePer in rolePermisstions)
				{
					if (arrIdDeletedPermission.Contains(rolePer.MstPermissionId.ToString()))
					{
						repository.HardDeleteAsync<AppRolePermission>(rolePer.Id);
					}
				}
			}
			if (arrIdAddedPermission != null)
			{
				foreach (var item in arrIdAddedPermission)
				{
					var idPer = Convert.ToInt32(item);
					role.AppRolePermissions.Add(new AppRolePermission
					{
						MstPermissionId = idPer
					});
				}
			}
			await repository.UpdateAsync(role);
			SetSuccessMesg($"Cập nhật vai trò [{role.Name}] thành công");
			return RedirectToAction(nameof(Index));
		}
	}
}
