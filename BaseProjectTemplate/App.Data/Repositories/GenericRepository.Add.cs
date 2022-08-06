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
		/// <summary>
		/// Thêm 1 record vào database
		/// </summary>
		/// <typeparam name="TEntity">Model của bảng trong DB</typeparam>
		/// <param name="entity">Record cần thêm</param>
		/// <param name="isDeleted">Record này có bị đánh dấu là  "đã xóa" hay không, True => đã xóa</param>
		public virtual async Task AddAsync<TEntity>(
			TEntity entity,
			bool isDeleted = false)
			where TEntity : AppEntityBase
		{
			this.BeforeAdd(entity, isDeleted);
			await _db.Set<TEntity>().AddAsync(entity);
			await _db.SaveChangesAsync();
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
			await _db.AddRangeAsync(entities);
			await _db.SaveChangesAsync();
		}
	}
}
