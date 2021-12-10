using App.Data.Entities;
using App.Data.Repositories;
using App.Web.ViewModels.Role;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.ViewComponents
{
	public class ListRoleViewComponent : ViewComponent
	{
		readonly RepositoryBase repository;
		public ListRoleViewComponent(RepositoryBase _db)
		{
			this.repository = _db;
		}	
		public async Task<IViewComponentResult> InvokeAsync(int? seletetedId, IEnumerable<int> excludeIds)
		{
			var data = await repository
					.GetAll<AppRole>(where: r => excludeIds == null || (excludeIds.Any() && !excludeIds.Contains(r.Id)))
					.ToListAsync();
			ViewBag.SelectedId = seletetedId;
			return View(data);
		}
	}
}
