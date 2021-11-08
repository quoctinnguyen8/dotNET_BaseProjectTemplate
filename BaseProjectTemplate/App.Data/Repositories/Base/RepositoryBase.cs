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

namespace App.Data.Repositories.Base
{
	public abstract class RepositoryBase
	{
		protected readonly WebAppDbContext db;
		protected readonly IHttpContextAccessor httpContext;
		public RepositoryBase(WebAppDbContext _db, IHttpContextAccessor _httpContext)
		{
			db = _db;
			httpContext = _httpContext;
		}

		public virtual async Task DeleteAsync(AppEntityBase entity)
		{
			var now = DateTime.Now;
			entity.DeletedDate = now;
			if (httpContext != null)
			{
				entity.UpdatedBy = CurrentUserId();
			}
			await db.SaveChangesAsync();
		}

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

		public virtual async Task<bool> AnyAsync<TEntity>(Expression<Func<TEntity, bool>> expr) where TEntity : AppEntityBase
		{
			return await db.Set<TEntity>().AnyAsync(expr);
		}

		public virtual IOrderedQueryable<TEntity> GetAll<TEntity>() where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
		}

		public virtual IEnumerable<TViewModel> GetAll<TEntity, TViewModel>(Expression<Func<TEntity, TViewModel>> selector)
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

		public virtual IEnumerable<TEntity> GetAll<TEntity>(Expression<Func<TEntity, bool>> expr) where TEntity : AppEntityBase
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(expr)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
		}

		public virtual IEnumerable<TViewModel> GetAll<TEntity, TViewModel>(Expression<Func<TEntity, bool>> expr, Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
			where TViewModel : class
		{
			return db.Set<TEntity>()
						.AsNoTracking()
						.Where(expr)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
		}

		public virtual async Task Create<TEntity>(TEntity entity) where TEntity : AppEntityBase
		{
			this.BeforeAdd(entity);
			await db.Set<TEntity>().AddAsync(entity);
			await db.SaveChangesAsync();
		}

		public virtual async Task UpdateAsync<TEntity>(TEntity entity) where TEntity : AppEntityBase
		{
			this.BeforeUpdate(entity);
			db.Update(entity);
			await db.SaveChangesAsync();
		}

		#region Helpers
		public WebAppDbContext GetDbContext()
		{
			return this.db;
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
		#endregion
	}
}
