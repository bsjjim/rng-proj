package com.lotterental.rng.demo.common.aspect.pointcut;

import org.aspectj.lang.annotation.Pointcut;

public class RngPointcut {

	@Pointcut("execution(* com.lotterental.rng.demo.example.controller.*Controller.*(..))")
	public void bizController() {}
	
}
