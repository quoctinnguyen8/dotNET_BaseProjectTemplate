using App.Data.Entities;
using App.Data.Repositories;
using App.Web.Areas.Admin.ViewModels.CategoryNews;
using App.Web.Common;
using App.Web.WebConfig;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Areas.Admin.Controllers
{
	public class CategoryNewsController : AppControllerBase
	{
		readonly GenericRepository _repository;
		public CategoryNewsController(GenericRepository repository, IMapper mapper) : base(mapper)
		{
			_repository = repository;
		}

		public async Task<IActionResult> Index(int page = 1, int size = DEFAULT_PAGE_SIZE)
		{
			var data = (await _repository
			.GetAll<AppCategoryNews>()
			.ProjectTo<ListItemCategoryNewsVM>(AutoMapperProfile.CategoryNewsConf)
			.ToPagedListAsync(page, size))
			.GenRowIndex();
			return View(data);
		}
	}
}
