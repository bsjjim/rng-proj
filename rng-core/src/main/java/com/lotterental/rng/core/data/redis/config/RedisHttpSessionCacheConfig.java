package com.lotterental.rng.core.data.redis.config;

import com.lotterental.rng.core.data.redis.properties.RedisHttpSessionProperties;
import com.lotterental.rng.core.utils.JsonUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.data.redis.connection.RedisClusterConfiguration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import lombok.extern.slf4j.Slf4j;
import redis.clients.jedis.JedisPoolConfig;
/**
 * Redis를 Session 서버로 환경을 구성한다.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */

@Slf4j
@Configuration
@Profile({ "local", "dev", "prd" })
public class RedisHttpSessionCacheConfig {

 	@Autowired
 	protected RedisHttpSessionProperties redisHttpSessionProperties;

 	@Value("${spring.redis.session.max-pooling:100}")
 	private int maxPooling;
	
 	@Value("${spring.redis.session.min-pooling:20}")
 	private int minPooling;

 	/**
 	 * Redis 단일 노드 접속을 위한 RedisConnectionFactory 객체를 얻는다.
 	 *
 	 * @return RedisConnectionFactory
 	 */
 	@Primary
 	@Bean(name = "httpSessionConnectionFactory")
 	public RedisConnectionFactory httpSessionConnectionFactory() {
		
 		if (redisHttpSessionProperties.getCluster() == null) {
 			log.debug("RedisManager Object - redisClientType : NONE");
 			JedisConnectionFactory jedisConnectionFactory = new JedisConnectionFactory(httpSessionJedisPoolConfig());
			jedisConnectionFactory.setHostName(redisHttpSessionProperties.getHost());
			jedisConnectionFactory.setPort(redisHttpSessionProperties.getPort());
			jedisConnectionFactory.setDatabase(redisHttpSessionProperties.getDatabase());
			jedisConnectionFactory.setTimeout((int)(redisHttpSessionProperties.getTimeout().toMillis() * 1000)); // milliseconds이므로 seconds로변환
			jedisConnectionFactory.setUsePool(true);
			jedisConnectionFactory.afterPropertiesSet();

			return jedisConnectionFactory;
 		} else {
 			log.debug("RedisManager Object - redisClientType : CLUSTER");
 			JedisConnectionFactory jedisConnectionFactory = new JedisConnectionFactory(
					 new RedisClusterConfiguration(redisHttpSessionProperties.getCluster().getNodes())
			);
 			//factory.setDatabase(redisObjectProperties.getDatabase());
			jedisConnectionFactory.setTimeout((int)(redisHttpSessionProperties.getTimeout().toMillis() * 1000)); // milliseconds이므로 seconds로변환
 			return jedisConnectionFactory;
 		}
 	}

 	/**
 	 * Redis 연결용 Connection Pooling 설정.
 	 *
 	 * @return JedisPoolConfig 설정
 	 */
 	@Bean
	public JedisPoolConfig httpSessionJedisPoolConfig() {
		JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
		jedisPoolConfig.setMaxIdle(maxPooling);
		jedisPoolConfig.setMinIdle(minPooling);
		jedisPoolConfig.setTestOnBorrow(true);
		jedisPoolConfig.setTestOnReturn(true);
		return jedisPoolConfig;
	}

 	@Bean(name = "httpSessionRedisObjectTemplate")
 	public RedisTemplate<String, Object> httpSessionRedisObjectTemplate() {
 		RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
 		RedisSerializer<String> stringSerializer = new StringRedisSerializer();
 		redisTemplate.setKeySerializer(stringSerializer);
 		redisTemplate.setValueSerializer(httpSessionDefaultRedisSerializer());
 		redisTemplate.setHashKeySerializer(stringSerializer);
 		redisTemplate.setHashValueSerializer(httpSessionDefaultRedisSerializer());
 		redisTemplate.setDefaultSerializer(stringSerializer);
      	redisTemplate.setConnectionFactory(this.httpSessionConnectionFactory());
 		return redisTemplate;
 	}

	@Primary
	@Bean(name = "httpSessionDefaultRedisSerializer")
	public RedisSerializer<Object> httpSessionDefaultRedisSerializer() {
		return new GenericJackson2JsonRedisSerializer(JsonUtil.getObjectMapper());
	}
}
