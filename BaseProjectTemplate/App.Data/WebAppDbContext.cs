using App.Data.Configurations;
using App.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data
{
	public class WebAppDbContext : DbContext
	{
		public DbSet<AppUser> AppUsers { get; set; }


		public WebAppDbContext(DbContextOptions options) : base(options)
		{
		}
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration<AppUser>(new AppUserConfig());
		}
	}
}
