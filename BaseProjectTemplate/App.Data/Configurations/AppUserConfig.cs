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
	public class AppUserConfig : IEntityTypeConfiguration<AppUser>
	{
		public void Configure(EntityTypeBuilder<AppUser> builder)
		{
			builder.ToTable(DB.AppUser.TABLE_NAME);

			// Khóa chính
			builder.HasKey(m => m.Id);

			// Tên đăng nhập là varchar, bắt buộc & không trùng lặp
			builder.Property(m => m.Username)
				.HasMaxLength(DB.AppUser.USERNAME_LENGTH)
				.IsUnicode(false)	// varchar (không chứa unicode)
				.IsRequired();
			builder.HasIndex(m => m.Username).IsUnique();

			builder.Property(m => m.Address)
				.HasMaxLength(DB.AppUser.ADDRESS_LENGTH);

			builder.Property(m => m.Avatar)
				.HasMaxLength(DB.AppUser.AVATAR_LENGTH);

			builder.Property(m => m.Email)
				.HasMaxLength(DB.AppUser.EMAIL_LENGTH)
				.IsUnicode(false);

			builder.Property(m => m.FullName)
				.HasMaxLength(DB.AppUser.FULLNAME_LENGTH);

			builder.Property(m => m.PasswordHash)
				.HasMaxLength(DB.AppUser.PWD_LENGTH);

			builder.Property(m => m.PhoneNumber1)
				.HasMaxLength(DB.AppUser.PHONE_LENGTH)
				.IsUnicode(false);

			builder.Property(m => m.PhoneNumber2)
				.HasMaxLength(DB.AppUser.PHONE_LENGTH)
				.IsUnicode(false);

			// Khóa ngoại với AppRole
			builder.HasOne(m => m.AppRole)
				.WithMany(m => m.AppUsers)
				.HasForeignKey(m => m.AppRoleId);
			//.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
