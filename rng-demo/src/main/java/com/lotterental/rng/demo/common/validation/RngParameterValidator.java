package com.lotterental.rng.demo.common.validation;

import java.util.Optional;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.metadata.ConstraintDescriptor;

import com.lotterental.rng.demo.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.validation.information.RngErrorInfo;
import com.lotterental.rng.demo.common.validation.information.RngBindingResult;

public class RngParameterValidator {

	private static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
	
	public void validate(BaseMetaVo vo) throws IllegalAccessException {
		RngBindingResult result = new RngBindingResult();
		validator.validate(vo).stream()
			.forEach(violation -> {
				System.out.println(violation);
				result.add(mapErrorInfo(violation));
			});
		vo.setErrorResult(result);
	}
	
	private RngErrorInfo mapErrorInfo(ConstraintViolation<BaseMetaVo> violation) {
		return createErrorInfo(violation, (ConstraintDescriptor<?>) violation.getConstraintDescriptor());
	}
	
	private RngErrorInfo createErrorInfo(ConstraintViolation<BaseMetaVo> violation, ConstraintDescriptor<?> descriptor) {
		String fieldName = violation.getPropertyPath().toString();
		String fieldValue = Optional.ofNullable(violation.getInvalidValue()).map(Object::toString).orElse(null);
		String messageCode = (String) descriptor.getAttributes().get(RngErrorInfo.MESSAGE_CODE);
		String[] messageParams = (String[]) descriptor.getAttributes().get(RngErrorInfo.MESSAGE_PARAMS);
		int order = (Integer) descriptor.getAttributes().get(RngErrorInfo.ORDER);
		return new RngErrorInfo(fieldName, fieldValue, messageCode, messageParams, order);
	}
	
}
