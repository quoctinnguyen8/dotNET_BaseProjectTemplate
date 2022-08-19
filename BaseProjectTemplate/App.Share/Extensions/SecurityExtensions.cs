using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace App.Share.Extensions
{
	public static class SecurityExtensions
	{
		public static string RemoveAccents(this string text)
		{
			if (string.IsNullOrWhiteSpace(text))
				return text;

			text = text.Normalize(NormalizationForm.FormD);
			char[] chars = text
				.Where(c => CharUnicodeInfo.GetUnicodeCategory(c)
				!= UnicodeCategory.NonSpacingMark).ToArray();

			return new string(chars).Normalize(NormalizationForm.FormC);
		}
		public static string Slugify(this string phrase)
		{
			var number = new Random();
			string output = phrase.RemoveAccents().ToLower();
			output = Regex.Replace(output, @"[^A-Za-z0-9\s-]", "");
			output = Regex.Replace(output, @"\s+", " ").Trim();
			output = Regex.Replace(output, @"\s", "-");
			output += $"-{number.Next(1111,9999)}";
			return output;
		}
	}
}
