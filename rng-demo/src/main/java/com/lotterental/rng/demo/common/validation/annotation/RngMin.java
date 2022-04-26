package com.lotterental.rng.demo.common.validation.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMinValidatorForBigDecimal;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMinValidatorForBigInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMinValidatorForByte;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMinValidatorForInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMinValidatorForLong;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMinValidatorForShort;

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = {
		RngMinValidatorForByte.class, RngMinValidatorForShort.class, RngMinValidatorForInteger.class,
		RngMinValidatorForLong.class, RngMinValidatorForBigInteger.class, RngMinValidatorForBigDecimal.class})
public @interface RngMin {

	String message() default "";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

	long value();
	
	String messageCode();
	
	String[] messageParams() default "";
	
	int order() default Integer.MAX_VALUE;

}
