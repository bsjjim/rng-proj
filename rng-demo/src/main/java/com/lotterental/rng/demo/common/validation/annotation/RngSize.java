package com.lotterental.rng.demo.common.validation.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForBigDecimal;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForBigInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForByte;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForLong;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForShort;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngSizeValidator.RngSizeValidatorForString;

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = {
		RngSizeValidatorForString.class, RngSizeValidatorForByte.class, RngSizeValidatorForShort.class,
		RngSizeValidatorForInteger.class, RngSizeValidatorForLong.class, RngSizeValidatorForBigInteger.class,
		RngSizeValidatorForBigDecimal.class})
public @interface RngSize {

	String message() default "";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

	int min() default 0;

	int max() default Integer.MAX_VALUE;
	
	String messageCode();
	
	String[] messageParams() default "";
	
	int order() default Integer.MAX_VALUE;
	
}
