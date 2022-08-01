using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Security.Claims;
using System.Threading.Tasks;

namespace App.Web.WebConfig.Middlewares
{
	public class AppLoggingMiddleware
	{
		private readonly RequestDelegate _next;
		private readonly ILogger<AppLoggingMiddleware> _logger;

		public AppLoggingMiddleware(RequestDelegate next, ILogger<AppLoggingMiddleware> logger)
		{
			_next = next;
			_logger = logger;
		}

		public async Task Invoke(HttpContext context)
		{
			var user = "ANONYMOUS_USER";

			if (context.User.Identity.IsAuthenticated)
			{
				user = $"USER_ID: " + context.User.FindFirstValue(ClaimTypes.NameIdentifier)
						+ ", USERNAME: " + context.User.FindFirstValue(ClaimTypes.Name);
			}
			try
			{
				await _next(context);
			}
			catch (System.Exception ex)
			{
				throw;
			}
			finally
			{
				_logger.LogInformation($"{user}; {context.Request.Method} {context.Request.Path.Value} => {context.Response.StatusCode}");
			}
		}
	}
}
