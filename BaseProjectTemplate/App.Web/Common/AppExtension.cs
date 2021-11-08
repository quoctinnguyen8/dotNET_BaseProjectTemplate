﻿using App.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace App.Web.Common
{
	public static class AppExtension
	{

		// Tạo số thứ tự từ PagedList
		public static IPagedList<TModel> GenRowIndex<TModel>(this IPagedList<TModel> list) where TModel : ListItemBaseVM
		{
			var pageSize = list.PageSize;
			var currentPage = list.PageNumber;
			for (int i = 0; i < list.Count; i++)
			{
				list[i].RowIndex = (currentPage - 1) * pageSize + i + 1;
			}
			return list;
		}
	}
}
