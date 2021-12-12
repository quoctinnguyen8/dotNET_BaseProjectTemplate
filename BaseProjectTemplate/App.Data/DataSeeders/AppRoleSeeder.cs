using App.Data.Entities;
using App.Share.Consts;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.DataSeeders
{
	public static class AppRoleSeeder
	{
		public static void SeedData(this EntityTypeBuilder<AppRole> builder)
		{
			var now = new DateTime(year: 2021, month: 12, day: 10);
			// Danh sách các class chứa permission
			Type[] classType = new Type[]
			{
				typeof(AuthConst.AppRole),
				typeof(AuthConst.AppUser),
				typeof(AuthConst.FileManager)
			};

			// Tạo vai trò
			var roleAdmin = new AppRole
			{
				Id = 1,
				Name = "Quản trị hệ thống",
				Desc = "Quản trị toàn bộ hệ thống",
				CreatedDate = now,
				UpdatedDate = now,
			};

			// Cấp quyền cho vai trò
			var rolePermission = new List<AppRolePermission>();
			foreach (var type in classType)
			{
				var allPermission = GetConstants(type);
				foreach (var permission in allPermission)
				{
					rolePermission.Add(new AppRolePermission
					{
						MstPermissionId = Convert.ToInt32(permission.GetRawConstantValue()),
						UpdatedDate = now,
						CreatedDate = now,
						AppRoleId = 1,
					});
				}
			}

			builder.HasData(roleAdmin);
		}
		private static List<FieldInfo> GetConstants(Type type)
		{
			FieldInfo[] fieldInfos = type.GetFields(BindingFlags.Public |
				 BindingFlags.Static | BindingFlags.FlattenHierarchy);

			return fieldInfos.Where(fi => fi.IsLiteral && !fi.IsInitOnly).ToList();
		}
	}
}
