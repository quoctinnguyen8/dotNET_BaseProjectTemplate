using App.Data.Entities;
using App.Data.Repositories;
using App.Web.Areas.Admin.ViewModels.CategoryNews;
using App.Web.Areas.Admin.ViewModels.News;
using App.Web.WebConfig;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Areas.Admin.Components.Listcategory
{
	public class SelectListCategoryNewsComponent : ViewComponent
	{
		readonly GenericRepository repository;
		public SelectListCategoryNewsComponent(GenericRepository _db)
		{
			repository = _db;
		}
		public async Task<IViewComponentResult> InvokeAsync(AddOrUpdateNewsVM news)
		{
			var cate = repository.GetAll<AppCategoryNews>()
						.ProjectTo<ListItemCategoryNewsVM>(AutoMapperProfile.CategoryNewsConf)
						.ToList();
			var listCategory = new SelectList(cate, "Id", "Title");
			if (news != null)
			{
				listCategory = new SelectList(cate, "Id", "Title", news.CategoryId);
			}
			ViewBag.CategoryNews = listCategory;
			return View(news);
		}
	}
}
