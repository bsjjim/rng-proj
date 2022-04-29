package com.lotterental.rng.demo.common.validation;

import javax.validation.ConstraintViolation;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BaseMetaVo;

public interface RngValidator {
	
	void validate(BaseMetaVo vo);
	
	default int sort(ConstraintViolation<BaseMetaVo> violation, ConstraintViolation<BaseMetaVo> violation2) {
		return getOrder(violation) - getOrder(violation2);
	}
	
	default int getOrder(ConstraintViolation<BaseMetaVo> violation) {
		return (Integer) getDataFromViolation(violation, RngValidatorParams.ORDER);
	}
	
	default String getMessageCode(ConstraintViolation<BaseMetaVo> violation) {
		return (String) getDataFromViolation(violation, RngValidatorParams.MESSAGE_CODE);
	}
	
	default String[] getMessageParams(ConstraintViolation<BaseMetaVo> violation) {
		return (String[]) getDataFromViolation(violation, RngValidatorParams.MESSAGE_PARAMS);
	}
	
	default Object getDataFromViolation(ConstraintViolation<BaseMetaVo> violation, RngValidatorParams key) {
		return violation.getConstraintDescriptor().getAttributes().get(key.getParam());
	}
	
	default void occurException(ConstraintViolation<BaseMetaVo> violation) {
		throw new BusinessException(getMessageCode(violation), getMessageParams(violation));
	}
	
	default void occurException(String messagecode, String messageParams) {
		throw new BusinessException(messagecode, messageParams);
	}
	
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
	
}
