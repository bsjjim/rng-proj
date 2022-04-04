package com.lotterental.rng.common.aspect.pointcut;

import org.aspectj.lang.annotation.Pointcut;

public class RentalPointcut {

	@Pointcut("@annotation(org.springframework.web.bind.annotation.PostMapping)")
	public void postMapping() {}
	
	@Pointcut("execution(* com.lotterental.rng.temp.demo.controller.*Controller.*(..))")
	public void bizController() {}
	
}
