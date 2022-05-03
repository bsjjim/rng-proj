package com.lotterental.rng.demo.common.validation.impl;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.Objects;
import java.util.stream.Stream;

import com.lotterental.rng.core.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.validation.RngValidator;

public class RngReflectionValidator implements RngValidator {
	
	private static final RngBasicValidator validator = new RngBasicValidator();
		
	public void validate(BaseMetaVo vo) {
		Objects.requireNonNull(vo);
		Stream.of(vo.getClass().getDeclaredFields())
			.forEach(field -> {
				try {
					validate(vo, field);
				} catch (Exception e) {
					occurException("code", null);
				}
			});
	}
	
	private void validate(BaseMetaVo vo, Field field) throws IllegalAccessException {
		Annotation[] anns = field.getAnnotations();
		for (Annotation ann : anns) {
			validator.validate(ann.annotationType(), field, vo);
		}
	}
	
}
