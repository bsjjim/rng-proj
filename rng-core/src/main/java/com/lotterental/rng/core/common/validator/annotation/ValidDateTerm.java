package com.lotterental.rng.core.common.validator.annotation;

import com.lotterental.rng.core.common.validator.DateTermValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * ValidDateFormat Annotation
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Target({ElementType.TYPE, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = DateTermValidator.class)
public @interface ValidDateTerm {
	String message() default "";
	Class<?>[] groups() default { };
	Class<? extends Payload>[] payload() default {};
	String sdd();
	String edd();
	int term();
	
}
