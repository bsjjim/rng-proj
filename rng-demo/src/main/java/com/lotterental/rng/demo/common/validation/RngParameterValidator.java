package com.lotterental.rng.demo.common.validation;

import java.util.Objects;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BaseMetaVo;

public class RngParameterValidator {

	private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
	
	public void validate(BaseMetaVo vo) {
		Objects.requireNonNull(vo);
		validator.validate(vo).stream()
			.sorted((v1, v2) -> getOrder(v1) - getOrder(v2))
			.findFirst()
			.ifPresent(violation -> {
				throw new BusinessException(getMessageCode(violation), getMessageParams(violation));
			});
	}
	
	private int getOrder(ConstraintViolation<BaseMetaVo> violation) {
		return (Integer) getDataFromViolation(violation, "order");
	}
	
	private String getMessageCode(ConstraintViolation<BaseMetaVo> violation) {
		return (String) getDataFromViolation(violation, "messageCode");
	}
	
	private String[] getMessageParams(ConstraintViolation<BaseMetaVo> violation) {
		return (String[]) getDataFromViolation(violation, "messageParams");
	}
	
	private Object getDataFromViolation(ConstraintViolation<BaseMetaVo> violation, String key) {
		return violation.getConstraintDescriptor().getAttributes().get(key);
	}
	
}
