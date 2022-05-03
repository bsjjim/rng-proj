package com.lotterental.rng.demo.common.validation.impl;

import java.util.Objects;

import javax.validation.Validation;
import javax.validation.Validator;

import com.lotterental.rng.core.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.validation.RngValidator;

public class RngConstraintValidator implements RngValidator {
	
	private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
	
	public void validate(BaseMetaVo vo) {
		Objects.requireNonNull(vo);
		validator.validate(vo).stream()
			.sorted(this::sort)
			.findFirst()
			.ifPresent(this::occurException);
	}
	
}
