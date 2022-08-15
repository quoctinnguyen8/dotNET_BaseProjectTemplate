using App.Data.Entities;
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
	public class AppVerifyCodeConfig : IEntityTypeConfiguration<AppVerifyCode>
	{
		public void Configure(EntityTypeBuilder<AppVerifyCode> builder)
		{
			builder.ToTable(DB.AppVerifyCode.TABLE_NAME);

			builder.HasKey(s => s.Id);

			builder.Property(s => s.Id)

				.UseIdentityColumn();
			builder.Property(s => s.TokenString)
				.IsRequired();

			builder.Property(s => s.Expired)
				.HasDefaultValueSql(DB.AppVerifyCode.DEFAULT_DATE);

			builder.Property(s => s.IsVerified)
				.HasDefaultValue(DB.AppVerifyCode.IS_VERIFIED);

			builder.Property(s => s.CreatedDate)
				.HasDefaultValueSql(DB.AppVerifyCode.DEFAULT_DATE);

			builder.HasOne(s => s.AppUser)
				.WithMany(s => s.AppVerifyCodeNavigation)
				.HasForeignKey(s => s.IdUser)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
