package com.lotterental.rng.demo.common.validation.constraintvalidator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.lotterental.rng.demo.common.validation.annotation.RngNotBlank;
import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;
import com.lotterental.rng.demo.common.validation.annotation.RngNotNull;

public final class RngNotEmptyValidator {
	
	public static final class RngNotNullValidator implements ConstraintValidator<RngNotNull, Object> {
		@Override
		public boolean isValid(Object object, ConstraintValidatorContext constraintValidatorContext) {
			return object != null;
		}
	}
	
	public static final class RngNotEmptyValidatorForString implements ConstraintValidator<RngNotEmpty, String> {
		@Override
		public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
			return (str == null) ? false : str.length() > 0;
		}
	}
	
	public static final class RngNotBlankValidator implements ConstraintValidator<RngNotBlank, String> {
		@Override
		public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
			return (str == null) ? false : str.toString().trim().length() > 0;
		}
	}

}
