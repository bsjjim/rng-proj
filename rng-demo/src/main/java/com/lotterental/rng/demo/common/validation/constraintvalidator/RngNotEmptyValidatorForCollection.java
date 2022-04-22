package com.lotterental.rng.demo.common.validation.constraintvalidator;

import java.util.Collection;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;

@SuppressWarnings("rawtypes")
public class RngNotEmptyValidatorForCollection implements ConstraintValidator<RngNotEmpty, Collection> {

	@Override
	public boolean isValid(Collection collection, ConstraintValidatorContext constraintValidatorContext) {
		if (collection == null) {
			return false;
		}
		return collection.size() > 0;
	}
	
}
