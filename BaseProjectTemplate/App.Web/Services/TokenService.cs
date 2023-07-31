using App.Web.Services.Interfaces;
using App.Web.ViewModels.Account;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using App.Web.WebConfig;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

namespace App.Web.Services
{
	public class TokenService : ITokenService
	{
		private readonly IConfiguration _configuration;
		public TokenService(IConfiguration configuration)
		{
			_configuration = configuration;
		}
		public string GenerateToken(UserDataForApp user)
		{
			var claims = new List<Claim> {
							new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
							new Claim(ClaimTypes.Name, user.Username),
							new Claim(ClaimTypes.Email, user.Email),
							new Claim(AppClaimTypes.FullName, user.FullName),
							new Claim(AppClaimTypes.PhoneNumber, user.PhoneNumber1),
							new Claim(AppClaimTypes.RoleName, user.RoleName),
							new Claim(AppClaimTypes.Permissions, user.Permission),
						};
			var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
			var secretKey = new SymmetricSecurityKey(key);
			var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256Signature);

			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Issuer = _configuration.GetSection("Jwt:Issuer").Value,
				Audience = _configuration.GetSection("Jwt:Audience").Value,
				Subject = new ClaimsIdentity(claims),
				Expires = DateTime.UtcNow.AddHours(AppConst.EXPIRED_DURATIONS_HOURS),
				SigningCredentials = signingCredentials
			};

			var tokenHandler = new JwtSecurityTokenHandler();
			var token = tokenHandler.CreateJwtSecurityToken(tokenDescriptor);

			return tokenHandler.WriteToken(token);
		}

		public bool ValidateToken(string key, string issuer, string audience, string token)
		{
			var mySecret = Encoding.UTF8.GetBytes(key);
			var mySecurityKey = new SymmetricSecurityKey(mySecret);
			var tokenHandler = new JwtSecurityTokenHandler();
			try
			{
				tokenHandler.ValidateToken(token,
				new TokenValidationParameters
				{
					ValidateIssuerSigningKey = true,
					ValidateIssuer = true,
					ValidateAudience = true,
					ValidIssuer = issuer,
					ValidAudience = issuer,
					IssuerSigningKey = mySecurityKey,
				}, out SecurityToken validatedToken);
			}
			catch
			{
				return false;
			}
			return true;
		}
	}
}
