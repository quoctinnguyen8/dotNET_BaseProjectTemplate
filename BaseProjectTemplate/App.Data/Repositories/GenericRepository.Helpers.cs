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
			if (_logger.IsEnabled(LogLevel.Debug))
			{
				var queryString = query.ToQueryString();
				LogDebugQuery(queryString);
			}
		}
		protected void LogDebugQuery(string query)
		{
			_logger.LogDebug(query);
			Console.WriteLine($"{DateTime.Now:dd/MM/yyyy HH:mm:ss}\n{query}");
		}

		protected virtual Expression<Func<TEntity, bool>> GetDefaultWhereExpr<TEntity>(bool selectFromTrash)
			where TEntity : AppEntityBase
		{
			Expression<Func<TEntity, bool>> defaultWhere;
			defaultWhere = selectFromTrash ? m => m.DeletedDate != null : m => m.DeletedDate == null;
			return defaultWhere;
		}

		protected virtual Expression<Func<TEntity, bool>> GetDefaultWhereExprMst<TEntity>(bool selectFromTrash)
			where TEntity : MstEntityBase
		{
			Expression<Func<TEntity, bool>> defaultWhere;
			defaultWhere = selectFromTrash ? m => m.DeletedDate != null : m => m.DeletedDate == null;
			return defaultWhere;
		}
	}
}
