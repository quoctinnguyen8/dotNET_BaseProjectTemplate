using App.Data.Entities;
using App.Web.ViewModels.User;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.WebConfig
{
	public class AutoMapperProfile:Profile
	{
		public AutoMapperProfile()
		{
			// Map dữ liệu từ kiểu CreateUserVM sang AppUser
			CreateMap<UserAddOrEditVM, AppUser>();
		}
	}
}
