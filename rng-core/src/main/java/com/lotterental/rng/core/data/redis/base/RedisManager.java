package com.lotterental.rng.core.data.redis.base;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Profile;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * Redis - Object 사용을 위한 Class.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
@Repository
//@Profile({ "local", "dev", "stg", "prd" })
//@Profile({ "dev", "stg", "prd" })
public class RedisManager<T> {

//    @Autowired
//    @Qualifier("redisObjectTemplate")
//    private RedisTemplate redisTemplate;
//
//    @Resource(name = "redisObjectTemplate")
//    private ValueOperations<String, T> valueOps;
//
////    @Resource(name = "redisObjectTemplate")
////    private ValueOperations<String, List<T>> valueOpsList;
//
//    @Resource(name = "redisObjectTemplate")
//    private ListOperations<String, T> valueOpsList;
//
//    /**
//     * Redis에 저장된 값을 리턴한다.
//     *
//     * @param key redis-key
//     * @return value redis-value (에러시 null을 리턴함)
//     */
//    @Profile("redis")
//    public T getValue(String key) {
//        try {
//            log.debug("redisManager getValue --- key : [{}]", key);
//            return valueOps.get(key);
//        } catch (Exception e) {
//            log.error("redisManager getValue error : [{}]", e.toString());
//            return null;
//        }
//    }
//
//    /**
//     * Redis에 값을 저장한다.
//     *
//     * @param key redis-key
//     * @param val redis-value
//     * @param timeout redis-해당 값이 유지(ttl)할 시간
//     * @param timeUnit redis-해당 값이 유지(ttl)할 시간의 단위
//     */
//    @SuppressWarnings("unchecked")
//    @Profile("redis")
//    public void putValue(String key, T val, long timeout, TimeUnit timeUnit) {
//        try {
//            valueOps.set(key, val, timeout, timeUnit);
//            log.debug("redisManager put --- key : [{}]", key);
//        } catch (Exception e) {
//            log.error("redisManager put error : [{}]", e.toString());
//        }
//    }
//
//    /**
//     * Redis에 저장된 List값을 리턴한다.
//     *
//     * @param key redis-key
//     * @return value redis-list value (에러시 null을 리턴함)
//     */
//    @Profile("redis")
//    public List<T> getListValue(String key) {
//        try {
//            log.debug("redisManager getListValue --- key : [{}]", key);
////            return valueOpsList.get(key);
//            long size = valueOpsList.size(key);
//            return valueOpsList.range(key, 0, size-1);
//        } catch (Exception e) {
//            log.error("redisManager getListValue error : [{}]", e.toString());
//            return null;
//        }
//    }
//
//    /**
//     * Redis에 list값을 저장한다.
//     *
//     * @param key redis-key
//     * @param list redis-list value
//     * @param timeout redis-해당 값이 유지(ttl)할 시간
//     * @param timeUnit redis-해당 값이 유지(ttl)할 시간의 단위
//     */
//    @Profile("redis")
//    public void putListValue(String key, List<T> list, long timeout, TimeUnit timeUnit){
//        try {
//            for (T t : list) {
//                valueOpsList.rightPush(key, t);
//            }
//            log.debug("redisManager putList --- key : [{}]", key);
//        } catch (Exception e) {
//            log.error("redisManager putListerror : [{}]", e.toString());
//        }
//    }
//
//    /**
//     * redis저장소로 부터 해당key의 값을 삭제한다.
//     *
//     * @param key redis-key
//     */
//    @SuppressWarnings("unchecked")
//    @Profile("redis")
//    public void delete(String key) {
//        try {
//            redisTemplate.delete(key);
//            log.debug("redisManager delete --- key : [{}]", key);
//        } catch (Exception e) {
//            log.error("redisManager delete error : [{}]", e.toString());
//        }
//    }
}
