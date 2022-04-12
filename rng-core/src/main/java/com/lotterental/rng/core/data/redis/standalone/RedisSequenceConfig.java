package com.lotterental.rng.core.data.redis.standalone;

import com.lambdaworks.redis.RedisClient;
import com.lambdaworks.redis.RedisException;
import com.lambdaworks.redis.RedisURI;
import com.lambdaworks.redis.api.StatefulRedisConnection;
import com.lambdaworks.redis.resource.ClientResources;
import com.lambdaworks.redis.resource.DefaultClientResources;
import com.lotterental.rng.core.data.redis.properties.RedisSequenceProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.concurrent.TimeUnit;

/**
 * Redis - Sequence용으로 환경을 구성하는 Class.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */

@Slf4j
@Configuration
@Profile({ "local", "dev" })
public class RedisSequenceConfig {

    @Autowired
    protected RedisSequenceProperties redisSequenceProperties;

    @Bean(name = "redisSequenceClientResources", destroyMethod = "shutdown")
    ClientResources clientResources() {
        return DefaultClientResources.create();
    }

    @Bean(name = "redisSequenceRedisClient", destroyMethod = "shutdown")
    RedisClient redisClient() {
        // redisClusterClient를 사용하지 않는이유는 cluster관련 명령을 사용하지 않고, 가볍게 사용하기 위함.
        RedisURI redisURI = RedisURI.Builder
                .redis(redisSequenceProperties.getHost(), redisSequenceProperties.getPort())
                .withDatabase(redisSequenceProperties.getDatabase())
                .build();
        RedisClient client = RedisClient.create(this.clientResources(), redisURI);
        client.setDefaultTimeout(redisSequenceProperties.getTimeout().toMillis(), TimeUnit.SECONDS);
        return client;
    }

    /**
     * redis-sequence사용을 위한 connection을 리턴함.
     * * lettuce는 내부적으로 thread로 실행되므로 pool이 필요없음
     *
     * @return 커넥션
     */
    @Bean(name = "redisSequenceConnection", destroyMethod = "close")
    StatefulRedisConnection<String, String> connection() {

        RedisClient redisclient = this.redisClient();
        try {
            StatefulRedisConnection<String, String> connection = redisclient.connect();
            return connection;
        } catch (RedisException e) {
            log.info("RedisSequence Not Connected");
            return null;
        }
    }
}
