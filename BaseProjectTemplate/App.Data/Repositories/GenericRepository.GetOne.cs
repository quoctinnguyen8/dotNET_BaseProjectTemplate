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
		public virtual async Task<TEntity> FindAsync<TEntity>(
			int id,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(m => m.Id == id);
			LogDebugQuery(query);
			return await query.FirstOrDefaultAsync();
		}

		public virtual async Task<TViewModel> FindAsync<TEntity, TViewModel>(
			int id,
			MapperConfiguration mapperConfig,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(m => m.Id == id)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(
			int id,
			Expression<Func<TEntity, TViewModel>> selector,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(m => m.Id == id)
						.Select(selector);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TEntity> GetOneAsync<TEntity>(
			Expression<Func<TEntity, bool>> where,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(where);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(
			Expression<Func<TEntity, bool>> where,
			MapperConfiguration mapperConfig,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(where)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}

		public virtual async Task<TViewModel> GetOneAsync<TEntity, TViewModel>(
			Expression<Func<TEntity, bool>> where,
			Expression<Func<TEntity, TViewModel>> selector,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(where)
						.Select(selector);
			LogDebugQuery(query);
			return await query.SingleOrDefaultAsync();
		}
	}
}
