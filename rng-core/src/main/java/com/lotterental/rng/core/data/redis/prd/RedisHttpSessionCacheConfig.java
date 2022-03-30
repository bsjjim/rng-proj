package com.lotterental.rng.core.data.redis.prd;

// import org.springframework.data.redis.connection.RedisClusterConfiguration;
// import org.springframework.data.redis.connection.RedisConnectionFactory;
// import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
// import org.springframework.session.data.redis.config.ConfigureRedisAction;

/**
 * Redis를 Session 서버로 환경을 구성한다.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */

// @Slf4j
// @Configuration
// @Profile({ "localxx", "devxx", "stgxx", "prdxx" })
public class RedisHttpSessionCacheConfig {

	// @Autowired
	// protected RedisHttpSessionProperties redisHttpSessionProperties;

	// /**
	//  * Redis 클러스터 접속을 위한 RedisConnectionFactory 객체를 얻는다.
	//  *
	//  * @return RedisConnectionFactory
	//  */
	// @Primary
	// @Bean(name = "httpSessionConnectionFactory")
	// public RedisConnectionFactory clusterConnectionFactory() {
	// 	if (redisHttpSessionProperties.getCluster() == null) {
	// 		return new JedisConnectionFactory();
	// 	} else {
	// 		return new JedisConnectionFactory(
	// 				new RedisClusterConfiguration(redisHttpSessionProperties.getCluster().getNodes()));
	// 	}
	// }

	// @Bean
	// public static ConfigureRedisAction configureRedisAction() {
	// 	return ConfigureRedisAction.NO_OP;
	// }

	/**
	 * Redis 객체 직렬기를 얻는다.
	 *
	 * @return RedisSerializer<Object>
	 */
//	@Primary
//	@Bean(name = "springSessionDefaultRedisSerializer")
//	public RedisSerializer<Object> springSessionDefaultRedisSerializer() {
//		Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<Object>(Object.class);
//		ObjectMapper objectMapper = JsonUtils.getObjectMapper();
//		jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
//		return jackson2JsonRedisSerializer;
//	}

}
