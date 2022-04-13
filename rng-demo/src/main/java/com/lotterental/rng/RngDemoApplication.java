package com.lotterental.rng;

import com.lotterental.rng.config.AppStartingEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@Slf4j
@SpringBootApplication
public class RngDemoApplication {

	public static String redisServerStr = "redis-server.exe";
	public static String redisExecStr = "C:/Users/byun/Documents/rng/redis/redis-server.exe C:/Users/byun/Documents/rng/redis/redis.windows.conf";

	public static void main(String[] args)  {
		String profile = System.getProperty("spring.profiles.active");
		log.info("Profile test2: [{}]", profile);
		if (profile != null) {
			if(profile.equals("local")) {
				AppStartingEvent.getProcInfo(redisServerStr, redisExecStr);
			}
			System.setProperty("spring.profiles.active", profile);
		} else {
			profile = "local";
			AppStartingEvent.getProcInfo(redisServerStr, redisExecStr);
			System.setProperty("spring.profiles.active", profile);
		}

		SpringApplication.run(RngDemoApplication.class, args);
	}

}
