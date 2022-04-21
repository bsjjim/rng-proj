package com.lotterental.rng.demo.common.aspect.pointcut;

import org.aspectj.lang.annotation.Pointcut;

public class RentalPointcut {

	@Pointcut("@annotation(org.springframework.web.bind.annotation.PostMapping)")
	public void postMapping() {}
	
	@Pointcut("execution(* com.lotterental.rng.demo.example.controller.*Controller.*(..))")
	public void bizController() {}
	
}
