package com.lotterental.rng.demo.common.validation.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMaxValidatorForBigDecimal;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMaxValidatorForBigInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMaxValidatorForByte;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMaxValidatorForInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMaxValidatorForLong;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNumberValidator.RngMaxValidatorForShort;

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = {
		RngMaxValidatorForByte.class, RngMaxValidatorForShort.class, RngMaxValidatorForInteger.class, 
		RngMaxValidatorForLong.class, RngMaxValidatorForBigInteger.class, RngMaxValidatorForBigDecimal.class})
public @interface RngMax {

	String message() default "";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

	long value();
	
	String messageCode();
	
	String[] messageParams() default "";
	
	int order() default Integer.MAX_VALUE;
	
}
