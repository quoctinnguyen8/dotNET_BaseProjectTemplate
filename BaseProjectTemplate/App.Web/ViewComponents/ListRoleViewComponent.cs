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
		public async Task<IViewComponentResult> InvokeAsync()
		{
			var data = await repository
					.GetAll<AppRole>()
					.ToListAsync();
			return View(data);
		}
	}
}
