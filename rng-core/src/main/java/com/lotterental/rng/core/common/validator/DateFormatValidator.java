package com.lotterental.rng.core.common.validator;

import com.lotterental.rng.core.common.validator.annotation.ValidDateFormat;
import org.apache.commons.lang3.StringUtils;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateFormatValidator implements ConstraintValidator<ValidDateFormat, String> {
	private String pattern;
	
	@Override
	public void initialize(ValidDateFormat constraintAnnotation) {
		this.pattern = constraintAnnotation.pattern();
	}
	
	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		if(StringUtils.isBlank(value)) return true;
		
		try {
			Date date = new SimpleDateFormat(this.pattern).parse(value);
			return true;
		} catch(Exception e) {
			return false;
		}
	}
}
