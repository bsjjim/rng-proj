package com.lotterental.rng.core.data.redis.prd;

import com.lambdaworks.redis.RedisException;
import com.lambdaworks.redis.RedisURI;
import com.lambdaworks.redis.cluster.ClusterClientOptions;
import com.lambdaworks.redis.cluster.ClusterTopologyRefreshOptions;
import com.lambdaworks.redis.cluster.ClusterTopologyRefreshOptions.RefreshTrigger;
import com.lambdaworks.redis.cluster.RedisClusterClient;
import com.lambdaworks.redis.cluster.api.StatefulRedisClusterConnection;
import com.lambdaworks.redis.resource.ClientResources;
import com.lambdaworks.redis.resource.DefaultClientResources;
import com.lotterental.rng.core.data.redis.properties.RedisSequenceProperties;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Redis - Sequence용으로 환경을 구성하는 Class.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */

//@Slf4j
//@Configuration
//@Profile({ "stg", "prd" })
public class RedisSequenceConfig {

//    @Autowired
//    protected RedisSequenceProperties redisSequenceProperties;
//
//    @Bean(name = "redisSequenceClientResources", destroyMethod = "shutdown")
//    ClientResources clientResources() {
//        return DefaultClientResources.create();
//    }
//
//    @Bean(name = "redisSequenceRedisClient", destroyMethod = "shutdown")
//    RedisClusterClient redisClusterClient() {
//
//        RedisURI radisURI;
//
//        if (redisSequenceProperties.getCluster() == null) {
//            radisURI = new RedisURI(redisSequenceProperties.getHost(), redisSequenceProperties.getPort(), 10,
//                    TimeUnit.SECONDS);
//            return RedisClusterClient.create(radisURI);
//        }
//        try {
//            List<String> nodeList = redisSequenceProperties.getCluster().getNodes();
//            List<RedisURI> nodes = new ArrayList<RedisURI>();
//            for (int i = 0; i < nodeList.size(); i++) {
//                String host_port = nodeList.get(i);
//                log.debug("Redis Sequence - host_port :" + host_port);
//                radisURI = RedisURI.Builder
//                        .redis(StringUtils.substringBefore(host_port, ":"),
//                                Integer.parseInt(StringUtils.substringAfter(host_port, ":")))
//                        //.withDatabase(redisSequenceProperties.getDatabase())
//                        .build();
//                nodes.add(radisURI);
//            }
//
//            // redisClusterClient를 사용하지 않는이유는 cluster관련 명령을 사용하지 않고, 가볍게 사용하기 위함.
//            RedisClusterClient clusterClient = RedisClusterClient.create(nodes);
//            ClusterTopologyRefreshOptions topologyRefreshOptions = ClusterTopologyRefreshOptions.builder()
//                    .enableAdaptiveRefreshTrigger(RefreshTrigger.MOVED_REDIRECT, RefreshTrigger.PERSISTENT_RECONNECTS)
//                    .adaptiveRefreshTriggersTimeout(30, TimeUnit.SECONDS).build();
//
//            clusterClient
//                    .setOptions(ClusterClientOptions.builder().topologyRefreshOptions(topologyRefreshOptions).build());
//
//            clusterClient.setDefaultTimeout(redisSequenceProperties.getTimeout().toMillis(), TimeUnit.SECONDS);
//
//            return clusterClient;
//        } catch (RedisException e) {
//            log.info("RedisSequence Not Connected");
//            return null;
//        }
//    }
//
//    /**
//     * redis-sequence사용을 위한 connection을 리턴함.
//     * * lettuce는 내부적으로 thread로 실행되므로 pool이 필요없음
//     *
//     * @return Cluster 커넥션
//     */
//    @Bean(name = "redisSequenceConnection", destroyMethod = "close")
//    StatefulRedisClusterConnection<String, String> connection() {
//        try {
//            StatefulRedisClusterConnection<String, String> connection = this.redisClusterClient().connect();
//            return connection;
//        } catch (RedisException e) {
//            log.info("RedisSequence Not Connected");
//            return null;
//        }
//    }
}
