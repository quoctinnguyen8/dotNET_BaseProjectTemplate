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

		public virtual async Task UpdateAsync<TEntity>(TEntity entity) where TEntity : AppEntityBase
		{
			this.BeforeUpdate(entity);
			_db.Update(entity);
			await _db.SaveChangesAsync();
		}

		public virtual async Task UpdateAsync<TEntity>(IEnumerable<TEntity> entities) where TEntity : AppEntityBase
		{
			var len = entities.Count();
			for (int i = 0; i < len; i++)
			{
				this.BeforeUpdate(entities.ElementAt(i));
			}
			_db.UpdateRange(entities);
			await _db.SaveChangesAsync();
		}

		public virtual async Task DeleteAsync(AppEntityBase entity)
		{
			var now = DateTime.Now;
			entity.DeletedDate = now;
			if (_httpContext != null)
			{
				entity.UpdatedBy = CurrentUserId();
			}
			_db.Update(entity);
			await _db.SaveChangesAsync();
		}

		public virtual async Task DeleteAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var tableName = GetTableName<TEntity>();
			int? updateUserId = null;
			if (_httpContext != null)
			{
				updateUserId = CurrentUserId();
			}
			var query = $"UPDATE {tableName} SET DeletedDate = GETDATE(), UpdatedBy = {updateUserId} WHERE Id = {id}";
			await _db.Database.ExecuteSqlRawAsync(query);
		}

		public virtual async Task HardDeleteAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var tableName = GetTableName<TEntity>();
			var deleteQuery = $"DELETE {tableName} WHERE Id = {id}";
			LogDebugQuery(deleteQuery);
			await _db.Database.ExecuteSqlRawAsync(deleteQuery);
		}

		public virtual async Task HardDeleteAsync<TEntity>(IEnumerable<int> ids) where TEntity : AppEntityBase
		{
			if (ids == null || !ids.Any())
			{
				throw new Exception("Danh sách ID rỗng");
			}
			var tableName = GetTableName<TEntity>();
			var deleteQuery = $"DELETE {tableName} WHERE Id IN ({string.Join(',', ids)})";
			LogDebugQuery(deleteQuery);
			await _db.Database.ExecuteSqlRawAsync(deleteQuery);
		}

		#region Helpers
		public WebAppDbContext DbContext { get => this._db; }

		protected string GetTableName<TEntity>() where TEntity : AppEntityBase
		{
			return _db.Model.FindEntityType(typeof(TEntity)).GetTableName();
		}

		protected void BeforeAdd(AppEntityBase entity, bool isDeleted = false)
		{
			var now = DateTime.Now;
			entity.CreatedDate = now;
			entity.UpdatedDate = now;
			if (isDeleted)
			{
				entity.DeletedDate = now;
			}
			else
			{
				entity.DeletedDate = null;
			}
			if (_httpContext != null)
			{
				var userId = CurrentUserId();
				entity.CreatedBy = userId;
				entity.UpdatedBy = userId;
			}
		}

		protected void BeforeUpdate(AppEntityBase entity)
		{
			var now = DateTime.Now;
			entity.UpdatedDate = now;
			if (_httpContext != null)
			{
				entity.UpdatedBy = CurrentUserId();
			}
		}

		protected int? CurrentUserId()
		{
			var nameIdentifier = _httpContext.HttpContext.User?.FindFirst(ClaimTypes.NameIdentifier);
			if (nameIdentifier != null)
			{
				return Convert.ToInt32(nameIdentifier.Value);
			}
			return null;
		}

		protected void LogDebugQuery(IQueryable query)
		{
			var queryString = query.ToQueryString();
			LogDebugQuery(queryString);
		}
		protected void LogDebugQuery(string query)
		{
			_logger.LogDebug(query);
			Console.WriteLine($"{DateTime.Now:dd/MM/yyyy HH:mm:ss}\n{query}");
		}
		#endregion
	}
}
