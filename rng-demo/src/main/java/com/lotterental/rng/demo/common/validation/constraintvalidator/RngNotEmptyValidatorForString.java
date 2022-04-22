package com.lotterental.rng.demo.common.validation.constraintvalidator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;

public class RngNotEmptyValidatorForString implements ConstraintValidator<RngNotEmpty, String> {

	@Override
	public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
		if (str == null) {
			return false;
		}
		return str.length() > 0;
	}
	
}
