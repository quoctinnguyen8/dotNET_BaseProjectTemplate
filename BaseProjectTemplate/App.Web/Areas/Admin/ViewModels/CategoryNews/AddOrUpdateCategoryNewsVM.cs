using App.Share.Consts;
using App.Web.WebConfig;
using DNews.Shared.Attributes;
using System;

namespace App.Web.Areas.Admin.ViewModels.CategoryNews
{
	public class AddOrUpdateCategoryNewsVM
	{
		public int Id { get; set; }

		[AppRequired]
		[AppStringLength(VM.CategoryNewsVM.MIN_LENGTH, DB.AppCategoryNews.MAX_LENGTH)]
		public string Title { get; set; }
		[AppStringLength(VM.CategoryNewsVM.MIN_LENGTH, DB.AppCategoryNews.MAX_LENGTH)]
		public string? Content { get; set; }
		public DateTime? UpdatedDate { get; set; }
	}
}
