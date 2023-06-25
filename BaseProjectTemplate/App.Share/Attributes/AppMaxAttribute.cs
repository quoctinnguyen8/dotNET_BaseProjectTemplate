using App.Share.Consts;
using System;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppMaxAttribute : ValidationAttribute
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
	}
}
