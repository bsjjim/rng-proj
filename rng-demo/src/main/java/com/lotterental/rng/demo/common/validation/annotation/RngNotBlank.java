package com.lotterental.rng.demo.common.validation.annotation;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

import com.lotterental.rng.demo.common.validation.constraintvalidator.RngNotBlankValidator;

@Constraint(validatedBy=RngNotBlankValidator.class)
@Target(FIELD)
@Retention(RUNTIME)
public @interface RngNotBlank {
	
	String message() default "";

	Class<?>[] groups() default { };

	Class<? extends Payload>[] payload() default { };
	
	String messageCode();
	
	String[] messageParams() default "";
	
	int order() default Integer.MAX_VALUE;
	
}
