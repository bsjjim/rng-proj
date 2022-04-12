package com.lotterental.rng.core.data.redis.properties;

import org.springframework.boot.autoconfigure.data.redis.RedisProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

/**
 * 환경변수 Properties
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */


@Configuration
@Profile({ "local", "dev", "prd" })
@ConfigurationProperties(prefix = "spring.redis.object")
public class RedisObjectProperties extends RedisProperties {
}