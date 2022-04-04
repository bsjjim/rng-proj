package com.lotterental.rng.temp.cmmn.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;

import com.lotterental.rng.temp.cmmn.resolver.processor.HandlerExecPostProcessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
//@Aspect
public class ResponseAspect {
	
	private final String postMappingPointcut = "com.lotterental.rng.temp.cmmn.aspect.pointcut.RentalPointcut.postMapping() ";	
	private final String bizControllerPointcut = "com.lotterental.rng.temp.cmmn.aspect.pointcut.RentalPointcut.bizController()";
	
	private final HandlerExecPostProcessor processor;
	
	public ResponseAspect() {
		processor = new HandlerExecPostProcessor();
	}
	
	@AfterReturning(value = postMappingPointcut + "&&" + bizControllerPointcut, returning = "result")
	public void handleReturnValue(JoinPoint joinPoint, Object result) {
		log.info("[return] {} return={}", joinPoint.getSignature(), result);
		processor.handleReturnValue(result);
	}
	
}
