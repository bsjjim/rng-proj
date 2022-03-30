package com.lotterental.rng.core.common.maskcrypt.annotation;

import com.lotterental.rng.core.common.maskcrypt.enums.MaskType;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface MaskCryptAno {
	 MaskType type() default MaskType.NONE;
	 boolean encDecrypt() default false;
}
