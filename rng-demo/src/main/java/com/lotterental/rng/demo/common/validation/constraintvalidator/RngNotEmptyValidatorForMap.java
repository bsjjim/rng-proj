package com.lotterental.rng.demo.common.validation.constraintvalidator;

import java.util.Map;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;

@SuppressWarnings("rawtypes")
public class RngNotEmptyValidatorForMap implements ConstraintValidator<RngNotEmpty, Map> {

	@Override
	public boolean isValid(Map map, ConstraintValidatorContext constraintValidatorContext) {
		if (map == null) {
			return false;
		}
		return map.size() > 0;
	}
	
}
