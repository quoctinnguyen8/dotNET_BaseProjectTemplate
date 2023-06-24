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

		public virtual IQueryable<TEntity> Get<TEntity>(bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere);
			LogDebugQuery(query);
			return query;
		}

		public virtual IQueryable<TEntity> GetMst<TEntity>(bool selectFromTrash = false)
			where TEntity : MstEntityBase
		{
			var defaultWhere = GetDefaultWhereExprMst<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere);
			LogDebugQuery(query);
			return query;
		}

		public virtual IQueryable<TEntity> GetWithTrash<TEntity>()
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>().AsNoTracking();
			LogDebugQuery(query);
			return query;
		}

		public virtual IQueryable<TEntity> GetWithTrashMst<TEntity>()
			where TEntity : MstEntityBase
		{
			var query = _db.Set<TEntity>().AsNoTracking();
			LogDebugQuery(query);
			return query;
		}
	}
}
