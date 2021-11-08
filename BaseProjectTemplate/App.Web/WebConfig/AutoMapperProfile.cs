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
			// Map dữ liệu từ kiểu UserAddOrEditVM sang AppUser
			CreateMap<UserAddOrEditVM, AppUser>();

			// Map dữ liệu từ kiểu AppUser sang UserAddOrEditVM
			CreateMap<AppUser, UserAddOrEditVM>();
		}
	}
}
