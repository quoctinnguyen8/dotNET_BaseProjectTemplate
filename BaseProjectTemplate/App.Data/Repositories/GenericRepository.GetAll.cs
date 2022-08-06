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
		public virtual IOrderedQueryable<TEntity> GetAll<TEntity>(bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
			LogDebugQuery(query);
			return query;
		}

		public virtual IQueryable<TViewModel> GetAll<TEntity, TViewModel>(
			MapperConfiguration mapperConfig,
			bool selectFromTrash = false,
			Expression<Func<TEntity, bool>> where = null)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere);
			if (where != null)
			{
				query = query.Where(where);
			}
			var query2 = query.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.ProjectTo<TViewModel>(mapperConfig);
			LogDebugQuery(query2);
			return query2;
		}

		public virtual IQueryable<TEntity> GetAll<TEntity>(
			Expression<Func<TEntity, bool>> where,
			bool selectFromTrash = false)
			where TEntity : AppEntityBase
		{
			var defaultWhere = GetDefaultWhereExpr<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.Where(where)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
			LogDebugQuery(query);
			return query;
		}

		public virtual IQueryable<TViewModel> GetAll<TEntity, TViewModel>(
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
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
			LogDebugQuery(query);
			return query;
		}

		public virtual IOrderedQueryable<TEntity> GetAllMst<TEntity>(bool selectFromTrash = false)
			where TEntity : MstEntityBase
		{
			var defaultWhere = GetDefaultWhereExprMst<TEntity>(selectFromTrash);
			var query = _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id);
			LogDebugQuery(query);
			return query;
		}

		public virtual IQueryable<TViewModel> GetAllMst<TEntity, TViewModel>(
			Expression<Func<TEntity, TViewModel>> selector,
			bool selectFromTrash = false)
			where TEntity : MstEntityBase
		{
			var defaultWhere = GetDefaultWhereExprMst<TEntity>(selectFromTrash);
			return _db.Set<TEntity>()
						.AsNoTracking()
						.Where(defaultWhere)
						.OrderByDescending(m => m.DisplayOrder)
						.ThenByDescending(m => m.Id)
						.Select(selector);
		}
	}
}