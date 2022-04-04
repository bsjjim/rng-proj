package com.lotterental.rng.temp.cmmn.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Before;

import com.lotterental.rng.temp.cmmn.resolver.processor.HandlerExecPreProcessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
//@Aspect
public class RequestAspect {
	
	private final String postMappingPointcut = "com.lotterental.rng.temp.cmmn.aspect.pointcut.RentalPointcut.postMapping() ";	
	private final String bizControllerPointcut = "com.lotterental.rng.temp.cmmn.aspect.pointcut.RentalPointcut.bizController()";
	
	private final HandlerExecPreProcessor processor;
	
	public RequestAspect() {
		processor = new HandlerExecPreProcessor();
	}

	@Before(value = postMappingPointcut + "&&" + bizControllerPointcut)
	public void prepareRequest(JoinPoint joinPoint) {
		log.info("signature = {}", joinPoint.getSignature());
		log.info("args = {}", joinPoint.getArgs());
		for (Object object : joinPoint.getArgs()) {
			processor.handleInputValue(object);
		}
	}
	
}
