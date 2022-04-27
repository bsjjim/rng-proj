package com.lotterental.rng.demo.common.validation;

import java.util.Objects;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import org.springframework.stereotype.Component;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BaseMetaVo;

@Component
public class RngParameterValidator {
	
	enum RngValidatorParams {
		MESSAGE_CODE("messageCode"),
		MESSAGE_PARAMS("messageParams"),
		ORDER("order");
		
		private final String commonParam;
		
		RngValidatorParams(String commonParam) {
			this.commonParam = commonParam;
		}
		
		String getParam() {
			return commonParam;
		}
	}

	private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
	
	public void validate(BaseMetaVo vo) {
		Objects.requireNonNull(vo);
		validator.validate(vo).stream()
			.sorted(this::sort)
			.findFirst()
			.ifPresent(this::occurException);
	}
	
	private int sort(ConstraintViolation<BaseMetaVo> violation, ConstraintViolation<BaseMetaVo> violation2) {
		return getOrder(violation) - getOrder(violation2);
	}
	
	private int getOrder(ConstraintViolation<BaseMetaVo> violation) {
		return (Integer) getDataFromViolation(violation, RngValidatorParams.ORDER);
	}
	
	private String getMessageCode(ConstraintViolation<BaseMetaVo> violation) {
		return (String) getDataFromViolation(violation, RngValidatorParams.MESSAGE_CODE);
	}
	
	private String[] getMessageParams(ConstraintViolation<BaseMetaVo> violation) {
		return (String[]) getDataFromViolation(violation, RngValidatorParams.MESSAGE_PARAMS);
	}
	
	private Object getDataFromViolation(ConstraintViolation<BaseMetaVo> violation, RngValidatorParams key) {
		return violation.getConstraintDescriptor().getAttributes().get(key.getParam());
	}
	
	private void occurException(ConstraintViolation<BaseMetaVo> violation) {
		throw new BusinessException(getMessageCode(violation), getMessageParams(violation));
	}
	
}
