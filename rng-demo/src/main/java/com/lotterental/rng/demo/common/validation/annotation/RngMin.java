package com.lotterental.rng.demo.common.validation.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForBigDecimal;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForBigInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForByte;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForDouble;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForFloat;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForLong;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MinValidatorForShort;

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = {
		MinValidatorForByte.class, MinValidatorForShort.class, MinValidatorForInteger.class, MinValidatorForLong.class, 
		MinValidatorForFloat.class, MinValidatorForDouble.class, MinValidatorForBigInteger.class, MinValidatorForBigDecimal.class})
public @interface RngMin {

	String message() default "";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

	long value();
	
	String messageCode();
	
	String[] messageParams() default "";
	
	int order() default Integer.MAX_VALUE;

}
