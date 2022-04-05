package com.lotterental.rng;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@Slf4j
@ComponentScan("com.lotterental")
@SpringBootApplication
public class RngDemoApplication {

	public static void main(String[] args)  {

		String profile = System.getProperty("spring.profiles.active");
		log.info("Profile : [{}]", profile);
		if (profile != null) {
			System.setProperty("spring.profiles.active", profile);
		} else {
			profile = "local";
			System.setProperty("spring.profiles.active", profile);
		}

		SpringApplication.run(RngDemoApplication.class, args);
	}

}
