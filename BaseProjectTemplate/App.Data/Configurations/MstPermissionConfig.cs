using App.Data.DataSeeders;
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
	public class MstPermissionConfig : IEntityTypeConfiguration<MstPermission>
	{
		public void Configure(EntityTypeBuilder<MstPermission> builder)
		{
			builder.ToTable(DB.MstPermission.TABLE_NAME);

			// Khóa chính
			builder.HasKey(m => m.Id);
			builder.Property(m => m.Id).ValueGeneratedNever();

			// CODE là varchar & bắt buộc
			builder.Property(m => m.Code)
				.HasMaxLength(DB.MstPermission.CODE_LENGTH)
				.IsUnicode(false)	// varchar (không chứa unicode)
				.IsRequired();

			builder.Property(m => m.Table)
				.HasMaxLength(DB.MstPermission.TABLE_LENGTH)
				.IsUnicode(false)	// varchar (không chứa unicode)
				.IsRequired();
			builder.Property(m => m.GroupName)
				.HasMaxLength(DB.MstPermission.TABLE_LENGTH)
				.IsUnicode()
				.IsRequired();
			builder.Property(m => m.Desc)
				.HasMaxLength(DB.MstPermission.TABLE_LENGTH)
				.IsUnicode()
				.IsRequired();
		}
	}
}
