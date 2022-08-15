using App.Data.Entities.Base;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Data.Entities
{
	public class AppNews : AppEntityBase
	{
		public string Title { get; set; }
		public string Slug { get; set; }
		public string? Summary { get; set; }
		public string? Content { get; set; }
		public long Views { get; set; }
		public float Votes { get; set; }
		public bool Published { get; set; }
		public DateTime? PublishedAt { get; set; }
		public string? PathImagePost { get; set; }
		[NotMapped]
		public IFormFile FormFileImageNews { get; set; }
		public int UserId { get; set; }
		public int CategoryId { get; set; }
		public AppUser Users { get; set; }
		public AppCategoryNews CategoryNews { get; set; }
	}
}
