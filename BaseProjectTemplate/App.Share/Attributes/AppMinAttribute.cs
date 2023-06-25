using App.Share.Consts;
using System;
using System.ComponentModel.DataAnnotations;

namespace App.Shared.Attributes
{
	public class AppMinAttribute : ValidationAttribute
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
	}
}
