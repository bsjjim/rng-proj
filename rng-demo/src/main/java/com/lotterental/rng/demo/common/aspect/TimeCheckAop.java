package com.lotterental.rng.demo.common.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class TimeCheckAop {

    private long beforeTime;
    private long afterTime;

    @Pointcut("@annotation(com.lotterental.rng.core.common.annotation.TimeCheck)")
    public void TimeCheck() {}

    @Before("TimeCheck()")
    public void before(JoinPoint joinPoint) {
        beforeTime = System.currentTimeMillis();
    }

    @AfterReturning(pointcut = "TimeCheck()", returning = "result")
    public void AfterReturning(JoinPoint joinPoint, Object result) {
        afterTime = System.currentTimeMillis();
        log.info("코드 수행 시간(ms) : " + (afterTime - beforeTime) + "ms");
        log.info("코드 수행 시간(s) : " + ((afterTime - beforeTime)/1000.0) + "s");
        log.info("result = {}", result);
    }
}
