using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace App.Web.Common.TagHelpers
{
	[HtmlTargetElement("label", Attributes = "asp-for")]
	public class AppLabelTagHelper : LabelTagHelper
	{
		public AppLabelTagHelper(IHtmlGenerator generator) : base(generator)
		{
		}

		public override Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
		{
			if (For.Metadata.IsRequired)
			{
				output.AddClass("required", HtmlEncoder.Default);
			}
			return base.ProcessAsync(context, output);
		}
	}
}
