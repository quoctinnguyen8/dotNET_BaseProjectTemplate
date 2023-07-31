using App.Web.ViewModels.Account;

namespace App.Web.Services.Interfaces
{
	public interface ITokenService
	{
		string GenerateToken(UserDataForApp user);
		bool ValidateToken(string key, string issuer, string audience, string token);
	}
}
