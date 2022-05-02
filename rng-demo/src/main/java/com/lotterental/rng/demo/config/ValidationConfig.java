package com.lotterental.rng.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.lotterental.rng.demo.common.validation.RngValidator;
import com.lotterental.rng.demo.common.validation.impl.RngConstraintValidator;

@Configuration
public class ValidationConfig {

	@Bean
	public RngValidator rngValidator() {
		return new RngConstraintValidator();
	}
	
}
