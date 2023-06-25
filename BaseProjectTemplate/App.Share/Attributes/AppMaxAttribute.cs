using App.Share.Consts;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppMaxAttribute : ValidationAttribute, IClientModelValidator
	{
		public double Max { get; set; }

		public string GetErrorMessage() => string.Format(AttributeErrMesg.MAX, Max);
		public AppMaxAttribute(double max)
		{
			Max = max;
		}

		protected override ValidationResult IsValid(object value, ValidationContext validationContext)
		{
			var val = Convert.ToDouble(value);
			if (val <= Max)
			{
				return ValidationResult.Success;
			}
			return new ValidationResult(GetErrorMessage());
		}

		public void AddValidation(ClientModelValidationContext context)
		{
			MergeAttribute(context.Attributes, "data-max", Max.ToString());
			MergeAttribute(context.Attributes, "data-val-max", GetErrorMessage());
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
