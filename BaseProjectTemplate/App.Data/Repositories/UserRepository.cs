using App.Data.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Repositories
{
	public class UserRepository : RepositoryBase
	{
		public UserRepository(WebAppDbContext _db, IHttpContextAccessor _httpContext) : base(_db, _httpContext)
		{
		}
	}
}
