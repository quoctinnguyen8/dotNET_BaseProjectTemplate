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
			if(model.PermissionIds == null)
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
			catch(Exception ex)
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
	}
}
