using App.Data.Entities.Base;
using AutoMapper;
using AutoMapper.QueryableExtensions;
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
		public virtual async Task<TEntity> FindAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null && m.Id == id);
			LogDebugQuery(query);
			return await query.FirstOrDefaultAsync();
		}

		public virtual async Task<TViewModel> FindAsync<TEntity, TViewModel>(
			int id,
			MapperConfiguration mapperConfig)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null && m.Id == id)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(
			int id,
			Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null && m.Id == id)
						.Select(selector);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TEntity> GetOneAsync<TEntity>(Expression<Func<TEntity, bool>> where)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(
			Expression<Func<TEntity, bool>> where,
			MapperConfiguration mapperConfig)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(
			Expression<Func<TEntity, bool>> where,
			Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate == null)
						.Where(where)
						.Select(selector);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		/*
		 * Các hàm GetOne lấy dữ liệu bị đánh dấu là đã xóa
		 */

#warning: Các hàm bên dưới chưa test (2022/08/04)
		public virtual async Task<TEntity> FindInTrashAsync<TEntity>(int id) where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate != null && m.Id == id);
			LogDebugQuery(query);
			return await query.FirstOrDefaultAsync();
		}

		public virtual async Task<TViewModel> FindInTrashAsync<TEntity, TViewModel>(
			int id,
			MapperConfiguration mapperConfig)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate != null && m.Id == id)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneInTrashAsync<TEntity, TViewModel>(
			int id,
			Expression<Func<TEntity, TViewModel>> selector)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate != null && m.Id == id)
						.Select(selector);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TEntity> GetOneInTrashAsync<TEntity>(Expression<Func<TEntity, bool>> where)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate != null)
						.Where(where);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneInTrashAsync<TEntity, TViewModel>(
			Expression<Func<TEntity, bool>> where,
			MapperConfiguration mapperConfig)
			where TEntity : AppEntityBase
		{
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(m => m.DeletedDate != null)
						.Where(where)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}
	}
}
