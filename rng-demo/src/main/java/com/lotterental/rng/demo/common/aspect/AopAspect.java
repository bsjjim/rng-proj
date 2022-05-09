package com.lotterental.rng.demo.common.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Aspect
public class AopAspect {

	// 접근제어자, 반환타입 선언타입, 메서드 이름, 파라미터
//	@Around(value = "@annotation(com.lotterental.rng.core.common.annotation.TimeCheck)")
	@Around("execution(* com.lotterental.rng.demo.example.controller.*Controller.*(..))")
	public Object validate(ProceedingJoinPoint joinPoint) throws Throwable {
		long beforeTime = System.currentTimeMillis();
		Object result = joinPoint.proceed();
		long afterTime = System.currentTimeMillis();
		printProcessTime(beforeTime, afterTime, result);
		return result;
	}
	
	private void printProcessTime(long beforeTime, long afterTime, Object result) {
		log.debug("코드 수행 시간(ms) : " + (afterTime - beforeTime) + "ms");
        log.debug("코드 수행 시간(s) : " + ((afterTime - beforeTime) / 1000.0) + "s");
        log.debug("result = {}", result);
	}
	
}
