using App.Data.Entities.Base;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Repositories
{
	public class RepositoryBase
	{
		protected readonly WebAppDbContext db;
		protected readonly IHttpContextAccessor httpContext;
		public RepositoryBase(WebAppDbContext _db, IHttpContextAccessor _httpContext)
		{
			db = _db;
			httpContext = _httpContext;
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
			where TViewModel : class
		{
			var query = db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null && m.Id == id)
						.Select(selector);
			LogToConsole(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TEntity> GetOneAsync<TEntity>(Expression<Func<TEntity, bool>> expr) where TEntity : AppEntityBase
		{
			return await db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.SingleOrDefaultAsync(expr);
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(Expression<Func<TEntity, bool>> expr, Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
			where TViewModel : class
		{
			var query = db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(expr)
						.Select(selector);
			LogToConsole(query);
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
			where TViewModel : class
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
			where TViewModel : class
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
		}

		public virtual IEnumerable<TEntity> GetAll<TEntity>(Expression<Func<TEntity, bool>> expr) where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(expr)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
		}

		public virtual IQueryable<TViewModel> GetAll<TEntity, TViewModel>(Expression<Func<TEntity, bool>> expr, Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
			where TViewModel : class
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(expr)
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

		public virtual async Task HardDeleteAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var tableName = GetTableName<TEntity>();
			var deleteQuery = $"DELETE {tableName} WHERE Id = {id}";
			LogToConsole(deleteQuery);
			await db.Database.ExecuteSqlRawAsync(deleteQuery);
		}

		public virtual async Task HardDeleteAsync<TEntity>(IEnumerable<int> ids) where TEntity : AppEntityBase
		{
			var tableName = GetTableName<TEntity>();
			var deleteQuery = $"DELETE {tableName} WHERE Id IN ({string.Join(',', ids)})";
			LogToConsole(deleteQuery);
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

		protected void LogToConsole(IQueryable query)
		{
			Console.WriteLine($"{DateTime.Now:dd/MM/yyyy HH:mm:ss}\n{query.ToQueryString()}");
		}
		protected void LogToConsole(string query)
		{
			Console.WriteLine($"{DateTime.Now:dd/MM/yyyy HH:mm:ss}\n{query}");
		}
		#endregion
	}
}
