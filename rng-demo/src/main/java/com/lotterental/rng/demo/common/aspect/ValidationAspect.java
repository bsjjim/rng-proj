package com.lotterental.rng.demo.common.aspect;

import java.util.Arrays;
import java.util.List;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.component.result.RngErrorResult;
import com.lotterental.rng.demo.common.component.result.RngResult;
import com.lotterental.rng.demo.common.validation.RngParameterValidator;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Aspect
public class ValidationAspect {
	
	public static final RngParameterValidator validator = new RngParameterValidator();
		
	private final String bizControllerPointcut = "com.lotterental.rng.demo.common.aspect.pointcut.RngPointcut.bizController()";
	
	@Around(value = bizControllerPointcut)
	public Object validate(ProceedingJoinPoint joinPoint) throws Throwable {
		log.debug("signature = {}", joinPoint.getSignature());
		log.debug("args = {}", joinPoint.getArgs());		
		try {
			validateHandlerParameters(joinPoint);
		} catch (BusinessException e) {
			return getErrorResult(e);
		}
		return joinPoint.proceed();
	}
	
	private void validateHandlerParameters(ProceedingJoinPoint joinPoint) {
		Arrays.stream(joinPoint.getArgs())
			.forEach(this::validateHandlerParameter);
	}
	
	private void validateHandlerParameter(Object object) {
		if (!isVerifiableParameterType(object)) {
			return;
		}
		validateObject(object);
	}
	
	private boolean isVerifiableParameterType(Object object) {
		if (object instanceof List) {
			return isVerifiableParameterType(((List<?>) object).get(0));
		}
		return object instanceof BaseMetaVo;
	}
	
	@SuppressWarnings("unchecked")
	private void validateObject(Object object) {
		if (object instanceof List) {
			((List<? extends BaseMetaVo>) object).stream()
			.forEach(this::validateTarget);
		} else {
			validateTarget((BaseMetaVo) object);
		}
	}
	
	private void validateTarget(BaseMetaVo vo) {
		validator.validate(vo);
	}
	
	private RngResult getErrorResult(BusinessException e) {
		return new RngErrorResult(e).getResult();
	}
	
}
