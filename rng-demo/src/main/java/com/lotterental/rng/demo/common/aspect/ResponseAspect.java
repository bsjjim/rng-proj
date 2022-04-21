package com.lotterental.rng.demo.common.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;

import com.lotterental.rng.demo.config.nexacro.processor.RngNexacroMethodReturnValueProcessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
//@Aspect
public class ResponseAspect {
	
	private final String postMappingPointcut = "com.lotterental.rng.temp.cmmn.aspect.pointcut.RentalPointcut.postMapping() ";	
	private final String bizControllerPointcut = "com.lotterental.rng.temp.cmmn.aspect.pointcut.RentalPointcut.bizController()";
	
	private final RngNexacroMethodReturnValueProcessor processor;
	
	public ResponseAspect() {
		processor = new RngNexacroMethodReturnValueProcessor();
	}
	
	@AfterReturning(value = postMappingPointcut + "&&" + bizControllerPointcut, returning = "result")
	public void handleReturnValue(JoinPoint joinPoint, Object result) {
		log.info("[return] {} return={}", joinPoint.getSignature(), result);
		processor.handleReturnValue(result);
	}
	
}
