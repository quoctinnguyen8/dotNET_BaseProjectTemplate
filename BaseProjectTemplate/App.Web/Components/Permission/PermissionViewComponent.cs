using App.Data.Entities;
using App.Data.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Components.Permission
{
	public class PermissionViewComponent : ViewComponent
	{
		readonly RepositoryBase repository;
		public PermissionViewComponent(RepositoryBase _repository)
		{
			repository = _repository;
		}
		public async Task<IViewComponentResult> InvokeAsync()
		{
			var data = await repository
							.GetAllMst<MstPermission>()
							.AsEnumerable()
							.GroupBy(x => x.GroupName)
							.ToListAsync();
			return View(data);
		}
	}
}
