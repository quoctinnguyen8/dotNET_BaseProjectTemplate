using App.Share.Consts;
using App.Web.WebConfig;
using DNews.Shared.Attributes;

namespace App.Web.Areas.Admin.ViewModels.News
{
	public class AddOrUpdateNewsVM
	{
		public int Id { get; set; }
		[AppRequired]
		[AppStringLength(VM.CategoryNewsVM.MIN_LENGTH, DB.AppNews.MAX_LENGTH)]
		public string Title { get; set; }
		[AppStringLength(VM.CategoryNewsVM.MIN_LENGTH, DB.AppNews.MAX_LENGTH)]
		public string? Summary { get; set; }
		public string? Content { get; set; }
		[AppRequired]
		public string PathImagePost { get; set; }
		[AppRequired]
		public int CategoryId { get; set; }
		[AppRequired]
		public string? StampLink { get; set; }
	}
}
