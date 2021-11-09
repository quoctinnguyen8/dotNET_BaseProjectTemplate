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
			if(model.StringListIdPermission == null)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG);
				return View(model);
			}
			var arrIdPermission = model.StringListIdPermission.Split(',');

			var role = new AppRole();
			try
			{
				role.Name = model.Name;
				role.Desc = model.Desc;
				await repository.AddAsync(role);

				foreach (var item in arrIdPermission)
				{
					var idPer = Convert.ToInt32(item);
					Console.WriteLine(idPer);
					role.AppRolePermissions.Add(new AppRolePermission
					{
						MstPermissionId = idPer
					});
				}
				Console.WriteLine(role.AppRolePermissions);
				await repository.AddAsync<AppRolePermission>(role.AppRolePermissions);
				SetSuccessMesg($"Thêm Role thành công");
				return RedirectToAction(nameof(Index));
			}
			catch(Exception ex)
			{
				LogExceptionToConsole(ex);
				return View();
			}
		}
	}
}
