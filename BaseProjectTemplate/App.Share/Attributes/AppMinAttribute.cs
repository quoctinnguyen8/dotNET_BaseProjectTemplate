using App.Share.Consts;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppMinAttribute : ValidationAttribute, IClientModelValidator
	{
		public double Min { get; set; }

		public string GetErrorMessage() => string.Format(AttributeErrMesg.MIN, Min);
		public AppMinAttribute(double min)
		{
			Min = min;
		}

		protected override ValidationResult IsValid(object value, ValidationContext validationContext)
		{
			var val = Convert.ToDouble(value);
			if (val >= Min)
			{
				return ValidationResult.Success;
			}
			return new ValidationResult(GetErrorMessage());
		}

		public void AddValidation(ClientModelValidationContext context)
		{
			MergeAttribute(context.Attributes, "data-min", Min.ToString());
			MergeAttribute(context.Attributes, "data-val-min", GetErrorMessage());
		}

		private static bool MergeAttribute(IDictionary<string, string> attributes, string key, string value)
		{
			if (attributes.ContainsKey(key))
			{
				return false;
			}

			attributes.Add(key, value);
			return true;
		}
	}
}
