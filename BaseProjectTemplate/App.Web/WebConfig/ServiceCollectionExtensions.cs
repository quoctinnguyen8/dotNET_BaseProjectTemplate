using App.Web.Common.Mailer;
using Microsoft.Extensions.DependencyInjection;

namespace App.Web.WebConfig
{
	public static class ServiceCollectionExtensions
	{
		public static IServiceCollection AddServiceRepositories(this IServiceCollection services)
		{
			return services;
		}
	}
}
