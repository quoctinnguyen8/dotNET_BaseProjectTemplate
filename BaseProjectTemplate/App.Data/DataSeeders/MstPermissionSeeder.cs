using App.Data.Entities;
using App.Share.Consts;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.DataSeeders
{
	public static class MstPermissionSeeder
	{
		public static void SeedData(this EntityTypeBuilder<MstPermission> builder)
		{
			var now = new DateTime(year: 2021, month: 11, day: 10);
			var groupName = "";
			// Permission liên quan đến bảng AppRole
			groupName = "Quản lý phân quyền";
			builder.HasData(
				new MstPermission
				{
					Id = AuthConst.AppRole.CREATE,
					Code = "CREATE",
					Table = DB.AppRole.TABLE_NAME,
					GroupName = groupName,
					Desc = "Thêm quyền",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppRole.DELETE,
					Code = "DELETE",
					Table = DB.AppRole.TABLE_NAME,
					GroupName = groupName,
					Desc = "Xóa quyền",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppRole.UPDATE,
					Code = "UPDATE",
					Table = DB.AppRole.TABLE_NAME,
					GroupName = groupName,
					Desc = "Sửa quyền",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppRole.VIEW_DETAIL,
					Code = "VIEW_DETAIL",
					Table = DB.AppRole.TABLE_NAME,
					GroupName = groupName,
					Desc = "Xem chi tiết quyền",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppRole.VIEW_LIST,
					Code = "VIEW_LIST",
					Table = DB.AppRole.TABLE_NAME,
					GroupName = groupName,
					Desc = "Xem danh sách quyền",
					CreatedDate = now
				}
			);

			// Permission liên quan đến bảng AppUser
			groupName = "Quản lý người dùng";
			builder.HasData(
				new MstPermission
				{
					Id = AuthConst.AppUser.BLOCK,
					Code = "BLOCK",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Khóa người dùng",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.CREATE,
					Code = "CREATE",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Thêm người dùng",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.DELETE,
					Code = "DELETE",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Xóa người dùng",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.UNBLOCK,
					Code = "UNBLOCK",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Mở khóa người dùng",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.UPDATE,
					Code = "UPDATE",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Cập nhật người dùng",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.UPDATE_PWD,
					Code = "UPDATE_PWD",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Đổi mật khẩu",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.VIEW_DETAIL,
					Code = "VIEW_DETAIL",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Xem chi tiết người dùng",
					CreatedDate = now
				},
				new MstPermission
				{
					Id = AuthConst.AppUser.VIEW_LIST,
					Code = "VIEW_LIST",
					Table = DB.AppUser.TABLE_NAME,
					GroupName = groupName,
					Desc = "Xem danh sách người dùng",
					CreatedDate = now
				}
			);
		}
	}
}
