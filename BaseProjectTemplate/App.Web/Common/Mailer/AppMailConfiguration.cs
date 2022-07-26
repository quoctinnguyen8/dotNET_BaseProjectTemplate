using Microsoft.Extensions.Configuration;

namespace App.Web.Common.Mailer
{
	public class AppMailConfiguration
	{
		public string Email { get; set; }
		public string Password { get; set; }
		public string SmtpServer { get; set; }
		public int Port { get; set; }
		public string Signature { get; set; }

		public void LoadFromConfig(IConfiguration Configuration)
		{
			Configuration.Bind("Mail", this);
		}
	}
}
