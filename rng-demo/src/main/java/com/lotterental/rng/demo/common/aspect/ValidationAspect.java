package com.lotterental.rng.demo.common.aspect;

import java.util.Arrays;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.component.RngResult;
import com.lotterental.rng.demo.common.validation.RngParameterValidator;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Aspect
public class ValidationAspect {
	
	public static final RngParameterValidator validator = new RngParameterValidator();
		
	private final String bizControllerPointcut = "com.lotterental.rng.demo.common.aspect.pointcut.RngPointcut.bizController()";
	
	@Around(value = bizControllerPointcut)
	public Object validate(ProceedingJoinPoint joinPoint) throws Throwable {
		log.info("signature = {}", joinPoint.getSignature());
		log.info("args = {}", joinPoint.getArgs());		
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
		if (object instanceof BaseMetaVo) {
			validator.validate((BaseMetaVo) object);
		}
	}
	
	private RngResult getErrorResult(BusinessException e) {
		RngResult result = new RngResult();
        result.setErrorCode(e.getMessageId());
        result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
        return result;
	}
	
}
