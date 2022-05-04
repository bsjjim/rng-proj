package com.lotterental.rng.demo.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lotterental.rng.demo.common.cache.CacheKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableRedisHttpSession
@EnableCaching
public class RedisCacheConfig {

    @Autowired
    private ObjectMapper objectMapper;

    @Value("${spring.redis.object.host}")
    private String redisHost;

    @Value("${spring.redis.object.port}")
    private int redisPort;

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(redisHost, redisPort);
    }

    @Bean(name="redisCacheManager")
    @Primary
    public RedisCacheManager redisCacheManager() {

        RedisCacheConfiguration configuration = RedisCacheConfiguration.defaultCacheConfig()
                .disableCachingNullValues()
                .entryTtl(Duration.ofSeconds(CacheKey.COMMON.timeOut()))
                .prefixCacheNameWith("CCH:G:")
                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer()))
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer(objectMapper)));

        Map<String, RedisCacheConfiguration> cacheConfigurations = new HashMap<>();
        // 캐시 default 유효시간 설정
        cacheConfigurations.put(CacheKey.COMMON.key(), RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofSeconds(CacheKey.COMMON.timeOut())));

        return RedisCacheManager.RedisCacheManagerBuilder
                .fromConnectionFactory(redisConnectionFactory())
                .cacheDefaults(configuration)
                .withInitialCacheConfigurations(cacheConfigurations)
                .build();

    }
}
