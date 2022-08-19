using App.Data.Entities;
using App.Data.Repositories;
using App.Share.Consts;
using App.Share.Extensions;
using App.Web.Areas.Admin.ViewModels.CategoryNews;
using App.Web.Common;
using App.Web.Common.Helpers;
using App.Web.WebConfig;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
using System.Text.RegularExpressions;
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
		//[AppAuthorize()]
		public async Task<IActionResult> Index(int page = 1, int size = DEFAULT_PAGE_SIZE)
		{
			var data = (await _repository
			.GetAll<AppCategoryNews>()
			.ProjectTo<ListItemCategoryNewsVM>(AutoMapperProfile.CategoryNewsConf)
			.ToPagedListAsync(page, size))
			.GenRowIndex();
			return View(data);
		}
		//[AppAuthorize(AuthConst.AppUser.CREATE)]
		public IActionResult Create() => View();
		//[AppAuthorize(AuthConst.AppUser.CREATE)]
		[HttpPost]
		public async Task<IActionResult> Create(AddOrUpdateCategoryNewsVM model)
		{
			if (!ModelState.IsValid)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG, true);
				return View(model);
			}

			if (await _repository.AnyAsync<AppCategoryNews>(u => u.Title.Equals(model.Title)))
			{
				SetErrorMesg("Thể loại này đã tồn tại");
				return View(model);
			}
			try
			{
				var category = _mapper.Map<AppCategoryNews>(model);
				category.Slug =  category.Title.Slugify();
				await _repository.AddAsync(category);
				SetSuccessMesg($"Thêm thể loại '{category.Title}' thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogException(ex);
				return View(model);
			}
		}
		//[AppAuthorize(AuthConst.AppUser.UPDATE)]
		public async Task<IActionResult> Edit(int id)
		{
			var cate = await _repository.FindAsync<AppCategoryNews>(id);
			if (cate == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			var categoryVM = _mapper.Map<AddOrUpdateCategoryNewsVM>(cate);
			return View(categoryVM);
		}
		//[AppAuthorize(AuthConst.AppUser.UPDATE)]
		[HttpPost]
		public async Task<IActionResult> Edit(AddOrUpdateCategoryNewsVM model)
		{
			var category = await _repository.FindAsync<AppCategoryNews>(model.Id);

			if (!ModelState.IsValid)
			{
				SetErrorMesg(MODEL_STATE_INVALID_MESG, true);
				return View(model);
			}
			if (category == null)
			{
				SetErrorMesg(PAGE_NOT_FOUND_MESG);
				return RedirectToAction(nameof(Index));
			}
			if (await _repository.AnyAsync<AppCategoryNews>(u => u.Title.Equals(model.Title)))
			{
				SetErrorMesg("Thể loại này đã tồn tại !");
				return View(model);
			}
			try
			{
				_mapper.Map<AddOrUpdateCategoryNewsVM, AppCategoryNews>(model, category);
				category.UpdatedDate = DateTime.Now;
				category.Slug = model.Title.Slugify();
				await _repository.UpdateAsync(category);
				SetSuccessMesg($"Cập nhật thể loại [{category.Title}] thành công");
				return RedirectToAction(nameof(Index));
			}
			catch (Exception ex)
			{
				LogException(ex);
				return View(model);
			}
		}
		//[AppAuthorize(AuthConst.AppUser.DELETE)]
		public async Task<IActionResult> Delete(int id)
		{
			var category = await _repository.FindAsync<AppCategoryNews>(id);
			if (category == null)
			{
				SetErrorMesg("Thể loại không tồn tại hoặc đã được xóa trước đó");
				return RedirectToAction(nameof(Index));
			}
			if(await _repository.AnyAsync<AppNews>(s => s.CategoryId.Equals(category.Id)))
			{
				SetErrorMesg("Thể loại có tồn tại bài viết nên không thể xóa !");
				return RedirectToAction(nameof(Index));
			}	
			await _repository.DeleteAsync(category);
			SetSuccessMesg($"Thê loại '{category.Title}' được xóa thành công");
			return RedirectToAction(nameof(Index));
		}

	}
}
