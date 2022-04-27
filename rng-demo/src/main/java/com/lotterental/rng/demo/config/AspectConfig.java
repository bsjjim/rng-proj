package com.lotterental.rng.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.lotterental.rng.demo.common.aspect.ValidationAspect;
import com.lotterental.rng.demo.common.aspect.pointcut.RngPointcut;

@Configuration
public class AspectConfig {

	/**
	 * 포인트컷 선언
	 */
	@Bean
	public RngPointcut rngPointcut() {
		return new RngPointcut();
	}
	
	/**
	 * 프레임워크 기본 validation
	 */
    @Bean
    public ValidationAspect validationAspect() {
    	return new ValidationAspect();
    }

}
