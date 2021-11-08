using App.Data.Entities;
using App.Data.Entities.Base;
using App.Share.Consts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Configurations
{
	public class AppRolePermissionConfig : IEntityTypeConfiguration<AppRolePermission>
	{
		public void Configure(EntityTypeBuilder<AppRolePermission> builder)
		{
			builder.ToTable(DB.AppRolePermission.TABLE_NAME);

			// Khóa chính
			builder.HasKey(m => m.Id);

			// Khóa ngoại
			builder.HasOne(m => m.AppRole)
				.WithMany(m => m.AppRolePermissions)
				.HasForeignKey(m => m.AppRoleId);
				//.OnDelete(DeleteBehavior.NoAction);

			builder.HasOne(m => m.MstPermission)
				.WithMany(m => m.AppRolePermissions)
				.HasForeignKey(m => m.MstPermissionId);
				//.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
