package com.lotterental.rng.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.lotterental.rng.common.aspect.RequestAspect;
import com.lotterental.rng.common.aspect.ResponseAspect;
import com.lotterental.rng.common.aspect.pointcut.RentalPointcut;

@Configuration
public class AspectConfig {

	/**
	 * 포인트컷 선언
	 */
	@Bean
	public RentalPointcut rentalPointcut() {
		return new RentalPointcut();
	}
	
	/**
     * 컨트롤러 진입시 기본 처리
     */
    @Bean
    public RequestAspect requestAspect() {
    	return new RequestAspect();
    }
    
    /**
     * 컨트롤러 응답시 기본 처리
     */
    @Bean
    public ResponseAspect responseAspect() {
    	return new ResponseAspect();
    }

}
