package com.lotterental.rng.demo.common.validation.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForBigDecimal;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForBigInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForByte;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForDouble;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForFloat;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForInteger;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForLong;
import com.lotterental.rng.demo.common.validation.constraintvalidator.RngValidatorForNumber.MaxValidatorForShort;

@Target(FIELD)
@Retention(RUNTIME)
@Constraint(validatedBy = {
		MaxValidatorForByte.class, MaxValidatorForShort.class, MaxValidatorForInteger.class, MaxValidatorForLong.class, 
		MaxValidatorForFloat.class, MaxValidatorForDouble.class, MaxValidatorForBigInteger.class, MaxValidatorForBigDecimal.class})
public @interface RngMax {

	String message() default "";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };

	long value();
	
	String messageCode();
	
	String[] messageParams() default "";
	
	int order() default Integer.MAX_VALUE;
	
}
