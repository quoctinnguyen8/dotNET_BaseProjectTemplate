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
	public class SysEnvConfig : IEntityTypeConfiguration<SysEnv>
	{
		public void Configure(EntityTypeBuilder<SysEnv> builder)
		{
			builder.ToTable(DB.SysEnv.TABLE_NAME);

			builder.HasKey(m => m.Key);

			builder.Property(m => m.Key)
				.HasMaxLength(DB.SysEnv.KEY_LENGTH)
				.IsRequired();

			builder.Property(m => m.Value)
				.HasMaxLength(DB.SysEnv.VALUE_LENGTH);
		}
	}
}
