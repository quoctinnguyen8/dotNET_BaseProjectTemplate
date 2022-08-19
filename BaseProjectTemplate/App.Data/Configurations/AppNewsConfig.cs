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
	public class AppNewsConfig : IEntityTypeConfiguration<AppNews>
	{
		public void Configure(EntityTypeBuilder<AppNews> builder)
		{
			builder.ToTable(DB.AppNews.TABLE_NAME);

			builder.HasKey(s => s.Id);

			builder.Property(s => s.Id).UseIdentityColumn();

			builder.Property(s => s.UserId)
				.IsRequired();

			builder.Property(s => s.Title)
				.HasMaxLength(DB.AppNews.MAX_LENGTH)
				.IsRequired();

			builder.Property(s => s.Slug)
				.HasMaxLength(DB.AppNews.MAX_LENGTH)
				.IsRequired();

			builder.Property(s => s.Summary)
				.HasMaxLength(DB.AppNews.MAX_LENGTH);

			builder.Property(s => s.Published)
				.HasDefaultValue(DB.AppNews.PUBLIC_NEWS);

			builder.Property(s => s.CreatedDate)
				.IsRequired()
				.HasDefaultValueSql(DB.AppNews.DEFAULT_DATE);

			builder.Property(s => s.PublishedAt)
				.HasDefaultValue(DB.AppNews.DEFAULT_VALUE);

			builder.Property(s => s.Votes)
				.HasDefaultValue(DB.AppNews.COUNT);

			builder.Property(s => s.Views)
				.HasDefaultValue(DB.AppNews.COUNT);

			builder.Property(s => s.PathImagePost)
				.IsRequired(false)
				.HasDefaultValue(DB.AppNews.DEFAULT_VALUE);

			builder.HasIndex(s => s.Slug, $"uq_slug")
				.IsUnique();

			builder.HasOne(s => s.CategoryNews)
				.WithMany(s => s.NewsNavigation)
				.HasForeignKey(s => s.CategoryId)
				.OnDelete(DeleteBehavior.NoAction);

			builder.HasOne(s => s.Users)
				.WithMany(s => s.AppNewsNavigation)
				.HasForeignKey(s => s.UserId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
