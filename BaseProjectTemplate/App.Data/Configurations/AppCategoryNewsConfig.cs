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
	public class AppCategoryNewsConfig : IEntityTypeConfiguration<AppCategoryNews>
	{
		public void Configure(EntityTypeBuilder<AppCategoryNews> builder)
		{
			builder.ToTable(DB.AppCategoryNews.TABLE_NAME);

			builder.HasKey(c => c.Id);

			builder.Property(s => s.Id).UseIdentityColumn();

			builder.Property(s => s.Title)
				.IsRequired()
				.HasMaxLength(DB.AppCategoryNews.MAX_LENGTH);

			builder.Property(s => s.Content)
				.HasMaxLength(DB.AppCategoryNews.MAX_LENGTH);

			builder.Property(s => s.Slug)
				.HasMaxLength(DB.AppCategoryNews.MAX_LENGTH);

			builder.Property(s => s.CreatedDate)
				.HasDefaultValueSql(DB.AppCategoryNews.DEFAULT_DATE);
		}
	}
}
