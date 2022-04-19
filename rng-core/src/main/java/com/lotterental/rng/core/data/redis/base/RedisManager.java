package com.lotterental.rng.core.data.redis.base;

import com.lotterental.rng.core.data.redis.vo.SortedSetVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Profile;
import org.springframework.data.redis.core.*;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.*;
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
@Profile({ "local", "dev", "prd" })
public class RedisManager<T> {

    @Autowired
    @Qualifier("redisObjectTemplate")
    private RedisTemplate redisTemplate;

    @Resource(name = "redisObjectTemplate")
    private ValueOperations<String, T> redisValueOps;

    @Resource(name = "redisObjectTemplate")
    private ListOperations<String, T> redisListOps;

    @Resource(name = "redisObjectTemplate")
    private HashOperations<String, T, T> redisHashOps;

    @Resource(name = "redisObjectTemplate")
    private SetOperations<String, T> redisSetOps;

    @Resource(name = "redisObjectTemplate")
    private ZSetOperations<String, T> redisZSetOps;

    /**
     * Redis에 저장된 값을 리턴한다.
     *
     * @param key redis-key
     * @return value redis-value (에러시 null을 리턴함)
     */
    public T getValueOps(String key) {
        try {
            log.debug("redisManager getValue --- key : [{}]", key);
            return redisValueOps.get(key);
        } catch (Exception e) {
            log.error("redisManager getValue error : [{}]", e.toString());
            return null;
        }
    }

    /**
     * Redis에 string값을 저장한다.
     *
     * @param key redis-key
     * @param val redis-value
     * @param timeout redis-해당 값이 유지(ttl)할 시간
     * @param timeUnit redis-해당 값이 유지(ttl)할 시간의 단위
     */
    public void setValueOps(String key, T val, long timeout, TimeUnit timeUnit) {
        try {
            // redisTemplate.opsForValue().set(key, val);
            redisValueOps.set(key, val, timeout, timeUnit);
            log.debug("redisManager setValue --- key : [{}]", key);
        } catch (Exception e) {
            log.error("redisManager setValue error : [{}]", e.toString());
        }
    }

    /**
     * Redis에 저장된 List값을 리턴한다.
     *
     * @param key redis-key
     * @return value redis-list value (에러시 null을 리턴함)
     */
    public  List<T> getListOps(String key) {
        try {
            return redisListOps.range(key, 0, -1);
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * Redis에 list값을 저장한다.
     *
     * @param key redis-key
     * @param list redis-hashmap value
     */
    public void setListOps(String key, List<T> list) {
        try {
            redisListOps.rightPushAll(key, list);
            // for (T t : list) {
            // redisListOps.rightPush(key, t);
            // }
            log.debug("redisManager setRedisListOps --- key : [{}]", key);
        } catch (Exception e) {
            log.error("redisManager error setRedisListOps : [{}]", e.toString());
        }
    }

    /**
     * Redis에 hash값을 리턴한다.
     *
     * @param key redis-key
     * @param hashKey value
     */
    public String getHashOps(String key, String hashKey) {
        try {
            log.debug("redisManager getHashOps --- key : [{}]", key);
            return redisHashOps.hasKey(key, hashKey) ? (String) redisHashOps.get(key, hashKey) : "";
        } catch (Exception e) {
            log.error("redisManager getHashOps error : [{}]", e.toString());
            return "";
        }
    }

    /**
     * Redis에 hash값을 저장한다.
     *
     * @param key redis-key
     * @param value value
     */
    public void setHashOps(String key, HashMap<String, String> value) {
        try {
            log.debug("redisManager setHashOps --- key : [{}]", key);
            redisHashOps.putAll(key, (Map<? extends T, ? extends T>) value);
        } catch (Exception e) {
            log.error("redisManager setHashOps error : [{}]", e.toString());
        }
    }

    /**
     * Redis에 set값을 리턴한다
     *
     * @param key redis-key
     */
    @SuppressWarnings("unchecked")
    public Set<String> getSetOps(String key) {
        try {
            log.debug("redisManager getSetOps --- key : [{}]", key);
            return (Set<String>) redisSetOps.members(key);
        } catch (Exception e) {
            log.error("redisManager getSetOps error : [{}]", e.toString());
            return null;
        }
    }

    /**
     * Redis에 set값을 저장한다.
     *
     * @param key redis-key
     * @param values value
     */
    public void setSetOps(String key, T... values) {
        try {
            redisSetOps.add(key, values);
            log.debug("redisManager setSetOps --- key : [{}]", key);
        } catch (Exception e) {
            log.error("redisManager setSetOps error : [{}]", e.toString());
        }
    }

    /**
     * Redis에 sortedSet값을 리턴한다.
     *
     * @param key redis-key
     */
    public Set getSortedSetOps(String key) {
        try {
            Long len = redisZSetOps.size(key);
            return len == 0 ? new HashSet<String>() : redisZSetOps.range(key, 0, len-1);
        } catch (Exception e) {
            log.error("redisManager getSortedSetOps error : [{}]", e.toString());
            return null;
        }
    }

    /**
     * Redis에 sortedSet값을 저장한다.
     *
     * @param key redis-key
     * @param values value
     */
    @SuppressWarnings("unchecked")
    public void setSortedSetOps(String key, List<SortedSetVo.SetVal> values) {
        try {
            for (SortedSetVo.SetVal v : values) {
                redisZSetOps.add(key, (T) v.getValue(), v.getScore());
            }
            log.debug("redisManager setSortedSetOps --- key : [{}]", key);
        } catch (Exception e) {
            log.error("redisManager setSortedSetOps error : [{}]", e.toString());
        }
    }

    /**
     * redis저장소로 부터 해당key의 값을 삭제한다.
     *
     * @param key redis-key
     */
    @SuppressWarnings("unchecked")
    public void delete(String key) {
        try {
            redisTemplate.delete(key);
            log.debug("redisManager delete --- key : [{}]", key);
        } catch (Exception e) {
            log.error("redisManager delete error : [{}]", e.toString());
        }
    }
}
