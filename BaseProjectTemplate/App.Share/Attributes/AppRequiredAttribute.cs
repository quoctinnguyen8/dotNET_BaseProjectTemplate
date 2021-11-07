using System.ComponentModel.DataAnnotations;

namespace DNews.Shared.Attributes
{
	public class AppRequiredAttribute : RequiredAttribute
	{
		public AppRequiredAttribute():base()
		{
			this.ErrorMessage = "Trường này là bắt buộc";
		}
	}
}
