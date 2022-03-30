package com.lotterental.rng.core.data.redis.local;

import com.lotterental.rng.core.data.redis.properties.RedisObjectProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.data.redis.connection.RedisClusterConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import redis.clients.jedis.JedisPoolConfig;

/**
 * Redis - Object용으로 환경을 구성한다.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */

@Slf4j
@Configuration
@Profile({ "local", "dev" })
public class RedisObjectConfig {

    @Value("${spring.redis.object.max-pooling:100}")
    private int maxPooling;

    @Value("${spring.redis.object.min-pooling:20}")
    private int minPooling;

    @Autowired
    protected RedisObjectProperties redisObjectProperties;

    @Bean
    @Profile("awsredis")
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    /**
     * Redis 연결용 Connection Pooling 설정.
     *
     * @return JedisPoolConfig 설정
     */
    @Bean
    public JedisPoolConfig jedisPoolConfig() {
        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        jedisPoolConfig.setMaxIdle(maxPooling);
        jedisPoolConfig.setMinIdle(minPooling);
        jedisPoolConfig.setTestOnBorrow(true);
        jedisPoolConfig.setTestOnReturn(true);
        return jedisPoolConfig;
    }

    /**
     * Redis 연결용 ConnectionFactory를 얻는다.
     *
     * @return JedisConnectionFactory Redis 연결용 ConnectionFactory
     */
    @Profile("awsredis")
    @Bean(name = "redisObjectConnectionFactory")
    public JedisConnectionFactory jedisConnectionFactory() {
        if (redisObjectProperties.getCluster() == null) {
            log.debug("RedisManager Object - redisClientType : NONE");
            JedisConnectionFactory factory = new JedisConnectionFactory(jedisPoolConfig());
            factory.setHostName(redisObjectProperties.getHost());
            factory.setPort(redisObjectProperties.getPort());
            factory.setDatabase(redisObjectProperties.getDatabase());
            factory.setTimeout((int)(redisObjectProperties.getTimeout().toMillis() * 1000)); // milliseconds이므로 seconds로변환
            factory.setUsePool(true);
            factory.afterPropertiesSet();
            return factory;
        } else {
            log.debug("RedisManager Object - redisClientType : CLUSTER");
            JedisConnectionFactory factory = new JedisConnectionFactory(new RedisClusterConfiguration(redisObjectProperties.getCluster().getNodes()));
            //factory.setDatabase(redisObjectProperties.getDatabase());
            factory.setTimeout((int)(redisObjectProperties.getTimeout().toMillis() * 1000)); // milliseconds이므로 seconds로변환
            return factory;

        }
    }

    /**
     * Redis Object사용을 위한 RedisTemplate를 얻는다.
     *
     * @return Redis Object사용을 위한 RedisTemplate
     */
    @Profile("awsredis")
    @Bean(name = "redisObjectTemplate")
    public RedisTemplate redisObjectTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        RedisSerializer<String> stringSerializer = new StringRedisSerializer();
        redisTemplate.setKeySerializer(stringSerializer);
        redisTemplate.setValueSerializer(stringSerializer);
        redisTemplate.setHashKeySerializer(stringSerializer);
        redisTemplate.setHashValueSerializer(stringSerializer);
        redisTemplate.setDefaultSerializer(stringSerializer);
        redisTemplate.setConnectionFactory(this.jedisConnectionFactory());
        return redisTemplate;
    }
}
