package com.lotterental.rng.core.data.redis.local;

// import org.springframework.data.redis.connection.RedisClusterConfiguration;
// import org.springframework.data.redis.connection.RedisConnectionFactory;
// import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
// import org.springframework.data.redis.core.RedisTemplate;
// import org.springframework.data.redis.serializer.RedisSerializer;
// import org.springframework.data.redis.serializer.StringRedisSerializer;
// import org.springframework.session.data.redis.config.ConfigureRedisAction;
//import lombok.extern.slf4j.Slf4j;
//import redis.clients.jedis.JedisPoolConfig;

/**
 * Redis를 Session 서버로 환경을 구성한다.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */

// @Slf4j
// @Configuration
// @Profile({ "local-old" })
public class RedisHttpSessionCacheConfig {

// 	@Autowired
// 	protected RedisHttpSessionProperties redisHttpSessionProperties;

// 	@Value("${spring.redis.object.max-pooling:100}")
// 	private int maxPooling;
	
// 	@Value("${spring.redis.object.min-pooling:20}")
// 	private int minPooling;

// //	@Bean
// //	public static PropertySourcesPlaceholderConfigurer httpSessionPropertySourcesPlaceholderConfigurer() {
// //		return new PropertySourcesPlaceholderConfigurer();
// //	}
	
// 	/**
// 	 * Redis 단일 노드 접속을 위한 RedisConnectionFactory 객체를 얻는다.
// 	 *
// 	 * @return RedisConnectionFactory
// 	 */
// 	@Primary
// 	@Bean(name = "httpSessionConnectionFactory")
// 	public RedisConnectionFactory httpSessionConnectionFactory() {
		
// 		if (redisHttpSessionProperties.getCluster() == null) {
// 			log.debug("RedisManager Object - redisClientType : NONE");
// 			JedisConnectionFactory factory = new JedisConnectionFactory(httpSessionJedisPoolConfig());
// 			factory.setHostName(redisHttpSessionProperties.getHost());
// 			factory.setPort(redisHttpSessionProperties.getPort());
// 			factory.setDatabase(redisHttpSessionProperties.getDatabase());
// 			factory.setTimeout((int)(redisHttpSessionProperties.getTimeout().toMillis() * 1000)); // milliseconds이므로 seconds로변환
// 			factory.setUsePool(true);
// 			factory.afterPropertiesSet();
// 			return factory;
// 		} else {
// 			log.debug("RedisManager Object - redisClientType : CLUSTER");
// 			JedisConnectionFactory factory = new JedisConnectionFactory(new RedisClusterConfiguration(redisHttpSessionProperties.getCluster().getNodes()));
// 			//factory.setDatabase(redisObjectProperties.getDatabase());
// 			factory.setTimeout((int)(redisHttpSessionProperties.getTimeout().toMillis() * 1000)); // milliseconds이므로 seconds로변환
// 			return factory;

// 		}
		
// //		JedisConnectionFactory jedisConnectionFactory = new JedisConnectionFactory();
// //		jedisConnectionFactory.setUsePool(false);
// //		jedisConnectionFactory.setHostName(redisHttpSessionProperties.getHost());
// //		jedisConnectionFactory.setPort(redisHttpSessionProperties.getPort());
// //		jedisConnectionFactory.setDatabase(redisHttpSessionProperties.getDatabase());
// 	}

// 	@Bean
// 	public static ConfigureRedisAction httpSessionConfigureRedisAction() {
// 		return ConfigureRedisAction.NO_OP;
// 	}

// 	/**
// 	 * Redis 연결용 Connection Pooling 설정.
// 	 * 
// 	 * @return JedisPoolConfig 설정
// 	 */
// 	@Bean
//     public JedisPoolConfig httpSessionJedisPoolConfig() {
//         JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
//         jedisPoolConfig.setMaxIdle(maxPooling);
//         jedisPoolConfig.setMinIdle(minPooling);
//         jedisPoolConfig.setTestOnBorrow(true);
//         jedisPoolConfig.setTestOnReturn(true);
//         return jedisPoolConfig;
//     }

// 	@Bean(name = "httpSessionRedisObjectTemplate")
// 	public RedisTemplate httpSessionRedisObjectTemplate() {
// 		RedisTemplate<String, Object> redisTemplate = new RedisTemplate<String, Object>();
// 		RedisSerializer<String> stringSerializer = new StringRedisSerializer();
// 		redisTemplate.setKeySerializer(stringSerializer);
// 		redisTemplate.setValueSerializer(stringSerializer);
// 		redisTemplate.setHashKeySerializer(stringSerializer);
// 		redisTemplate.setHashValueSerializer(stringSerializer);
// 		redisTemplate.setDefaultSerializer(stringSerializer);
//      	redisTemplate.setConnectionFactory(this.httpSessionConnectionFactory());
// 		return redisTemplate;
// 	}

//	/**
//	 * Redis 객체 직렬기를 얻는다.
//	 *
//	 * @return RedisSerializer<Object>
//	 */
//	@Primary
//	@Bean(name = "springSessionDefaultRedisSerializer")
//	public RedisSerializer<Object> springSessionDefaultRedisSerializer() {
//		Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<Object>(Object.class);
//		ObjectMapper objectMapper = JsonUtils.getObjectMapper();
//		jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
//		return jackson2JsonRedisSerializer;
//	}

}
