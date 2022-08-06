using App.Data.Entities.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Repositories
{
	public partial class GenericRepository
	{
		protected readonly WebAppDbContext _db;
		protected readonly IHttpContextAccessor _httpContext;
		protected readonly ILogger<GenericRepository> _logger;
		public GenericRepository(WebAppDbContext db, IHttpContextAccessor httpContext, ILogger<GenericRepository> logger)
		{
			_db = db;
			_httpContext = httpContext;
			_logger = logger;
		}

		public virtual async Task BeginTransactionAsync()
		{
			await _db.Database.BeginTransactionAsync();
		}

		public virtual async Task CommitTransactionAsync()
		{
			await _db.Database.CommitTransactionAsync();
		}

		public virtual async Task RollbackTransactionAsync()
		{
			await _db.Database.RollbackTransactionAsync();
		}

		public virtual async Task<bool> AnyAsync<TEntity>(Expression<Func<TEntity, bool>> expr) where TEntity : AppEntityBase
		{
			return await _db.Set<TEntity>().AnyAsync(expr);
		}
	}
}
