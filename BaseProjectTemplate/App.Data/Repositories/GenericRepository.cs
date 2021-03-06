using App.Data.Entities.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Repositories
{
	public class GenericRepository
	{
		protected readonly WebAppDbContext db;
		protected readonly IHttpContextAccessor httpContext;
		protected readonly ILogger<GenericRepository> logger;
		public GenericRepository(WebAppDbContext _db, IHttpContextAccessor _httpContext, ILogger<GenericRepository> _logger)
		{
			db = _db;
			httpContext = _httpContext;
			logger = _logger;
		}

		public virtual async Task BeginTransactionAsync()
		{
			await db.Database.BeginTransactionAsync();
		}

		public virtual async Task CommitTransactionAsync()
		{
			await db.Database.CommitTransactionAsync();
		}

		public virtual async Task RollbackTransactionAsync()
		{
			await db.Database.RollbackTransactionAsync();
		}

		public virtual async Task<bool> AnyAsync<TEntity>(Expression<Func<TEntity, bool>> expr) where TEntity : AppEntityBase
		{
			return await db.Set<TEntity>().AnyAsync(expr);
		}

		#region GetOne
		public virtual async Task<TEntity> GetOneAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			return await db.Set<TEntity>()
						.AsNoTracking()
						.SingleOrDefaultAsync(m => m.DeletedDate == null && m.Id == id);
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(int id, Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			var query = db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null && m.Id == id)
						.Select(selector);
			LogQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TEntity> GetOneAsync<TEntity>(Expression<Func<TEntity, bool>> where) where TEntity : AppEntityBase
		{
			return await db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.SingleOrDefaultAsync(where);
		}

		public virtual IQueryable<TEntity> Get<TEntity>(Expression<Func<TEntity, bool>> where) where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where);
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(Expression<Func<TEntity, bool>> where, Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			var query = db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where)
						.Select(selector);
			LogQuery(query);
			return await query.SingleOrDefaultAsync();
		}
		#endregion

		#region GetAll
		public virtual IOrderedQueryable<TEntity> GetAll<TEntity>() where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
		}

		public virtual IQueryable<TViewModel> GetAll<TEntity, TViewModel>(Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
		}

		public virtual IOrderedQueryable<TEntity> GetAllMst<TEntity>() where TEntity : MstEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
		}

		public virtual IQueryable<TViewModel> GetAllMst<TEntity, TViewModel>(Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : MstEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
		}

		public virtual IQueryable<TEntity> GetAll<TEntity>(Expression<Func<TEntity, bool>> where) where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
		}

		public virtual IQueryable<TViewModel> GetAll<TEntity, TViewModel>(Expression<Func<TEntity, bool>> where, Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
		}
		#endregion

		public virtual async Task AddAsync<TEntity>(TEntity entity, bool isDeleted = false) where TEntity : AppEntityBase
		{
			this.BeforeAdd(entity, isDeleted);
			await db.Set<TEntity>().AddAsync(entity);
			await db.SaveChangesAsync();
		}

		/// <summary>
		/// Nếu dữ liệu cần thêm > 1000 record mỗi lần thì không nên dùng hàm này
		/// </summary>
		public virtual async Task AddAsync<TEntity>(IEnumerable<TEntity> entities) where TEntity : AppEntityBase
		{
			var len = entities.Count();
			for (int i = 0; i < len; i++)
			{
				this.BeforeAdd(entities.ElementAt(i));
			}
			await db.AddRangeAsync(entities);
			await db.SaveChangesAsync();
		}

		public virtual async Task UpdateAsync<TEntity>(TEntity entity) where TEntity : AppEntityBase
		{
			this.BeforeUpdate(entity);
			db.Update(entity);
			await db.SaveChangesAsync();
		}

		public virtual async Task UpdateAsync<TEntity>(IEnumerable<TEntity> entities) where TEntity : AppEntityBase
		{
			var len = entities.Count();
			for (int i = 0; i < len; i++)
			{
				this.BeforeUpdate(entities.ElementAt(i));
			}
			db.UpdateRange(entities);
			await db.SaveChangesAsync();
		}

		public virtual async Task DeleteAsync(AppEntityBase entity)
		{
			var now = DateTime.Now;
			entity.DeletedDate = now;
			if (httpContext != null)
			{
				entity.UpdatedBy = CurrentUserId();
			}
			db.Update(entity);
			await db.SaveChangesAsync();
		}

		public virtual async Task DeleteAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var tableName = GetTableName<TEntity>();
			int? updateUserId = null;
			if (httpContext != null)
			{
				updateUserId = CurrentUserId();
			}
			var query = $"UPDATE {tableName} SET DeletedDate = GETDATE(), UpdatedBy = {updateUserId} WHERE Id = {id}";
			await db.Database.ExecuteSqlRawAsync(query);
		}

		public virtual async Task HardDeleteAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var tableName = GetTableName<TEntity>();
			var deleteQuery = $"DELETE {tableName} WHERE Id = {id}";
			LogQuery(deleteQuery);
			await db.Database.ExecuteSqlRawAsync(deleteQuery);
		}

		public virtual async Task HardDeleteAsync<TEntity>(IEnumerable<int> ids) where TEntity : AppEntityBase
		{
			if (ids == null || !ids.Any())
			{
				throw new Exception("Danh sách ID rỗng");
			}
			var tableName = GetTableName<TEntity>();
			var deleteQuery = $"DELETE {tableName} WHERE Id IN ({string.Join(',', ids)})";
			LogQuery(deleteQuery);
			await db.Database.ExecuteSqlRawAsync(deleteQuery);
		}

		#region Helpers
		public WebAppDbContext DbContext { get => this.db; }

		protected string GetTableName<TEntity>() where TEntity : AppEntityBase
		{
			return db.Model.FindEntityType(typeof(TEntity)).GetTableName();
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
			if (httpContext != null)
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
			if (httpContext != null)
			{
				entity.UpdatedBy = CurrentUserId();
			}
		}

		protected int? CurrentUserId()
		{
			var nameIdentifier = httpContext.HttpContext.User?.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
			if (nameIdentifier != null)
			{
				return Convert.ToInt32(nameIdentifier.Value);
			}
			return null;
		}

		protected void LogQuery(IQueryable query)
		{
			var queryString = query.ToQueryString();
			LogQuery(queryString);
		}
		protected void LogQuery(string query)
		{
			logger.LogDebug(query);
			Console.WriteLine($"{DateTime.Now:dd/MM/yyyy HH:mm:ss}\n{query}");
		}
		#endregion
	}
}
