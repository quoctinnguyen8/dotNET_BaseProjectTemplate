using App.Data.Entities;
using App.Web.ViewModels.Account;
using App.Web.ViewModels.Role;
using App.Web.ViewModels.User;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Common
{
	public class AutoMapperProfile : Profile
	{
		public AutoMapperProfile()
		{
			// Map dữ liệu từ kiểu UserAddOrEditVM sang AppUser
			CreateMap<UserAddOrEditVM, AppUser>();

			// Map dữ liệu từ kiểu AppUser sang UserAddOrEditVM
			CreateMap<AppUser, UserAddOrEditVM>();

			// Map dữ liệu từ kiểu AppRole sang RoleListItemVM
			CreateMap<AppRole, RoleListItemVM>();
		}

		// Cấu hình mapping cho UserController, action Index
		public static MapperConfiguration UserIndexConf = new(mapper =>
		{
			// Map dữ liệu từ AppUser sang UserListItemVM, map thuộc tính RoleName
			mapper.CreateMap<AppUser, UserListItemVM>()
				.ForMember(uItem => uItem.RoleName, opts => opts.MapFrom(uEntity => uEntity.AppRole.Name));
		});

		// Cấu hình mapping cho AccountController, action Login
		public static MapperConfiguration LoginConf = new(mapper =>
		{
			// Map dữ liệu từ AppUser sang UserListItemVM, map thuộc tính RoleName
			mapper.CreateMap<AppUser, UserDataForApp>()
				.ForMember(uItem => uItem.RoleName, opts => opts.MapFrom(uEntity => uEntity.AppRole == null ? "" : uEntity.AppRole.Name))
				.ForMember(uItem => uItem.Permission, opts => opts.MapFrom
				(
					uEntity => string.Join(',', uEntity.AppRole
														.AppRolePermissions
														.Select(p => p.MstPermissionId))
				)
			);
		});

		// Cấu hình mapping cho RoleController, action Delete
		public static MapperConfiguration RoleDeleteConf = new (mapper =>
		{
			// Map dữ liệu thuộc tính con
			mapper.CreateMap<AppUser, RoleDeleteVM_User>();
			// Map dữ liệu thuộc tính cha
			mapper.CreateMap<AppRole, RoleDeleteVM>();
		});
	}
}
