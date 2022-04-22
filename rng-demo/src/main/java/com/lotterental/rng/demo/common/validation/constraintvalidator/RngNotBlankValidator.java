package com.lotterental.rng.demo.common.validation.constraintvalidator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.lotterental.rng.demo.common.validation.annotation.RngNotBlank;

public class RngNotBlankValidator implements ConstraintValidator<RngNotBlank, String> {

	@Override
	public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
		if (str == null) {
			return false;
		}
		return str.toString().trim().length() > 0;
	}
	
}
