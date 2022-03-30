package com.lotterental.rng.core.data.redis.local;

import com.lambdaworks.redis.api.StatefulRedisConnection;
import com.lambdaworks.redis.api.sync.RedisCommands;
import com.lotterental.rng.core.data.redis.base.RedisSequence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

/**
 * Lettuce API를 이용한 공통 Redis 공통채번 구현 Class.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Repository
@Profile({ "local", "dev" })
public class RedisSequenceImpl implements RedisSequence {

    @Autowired
    @Qualifier("redisSequenceConnection")
    private StatefulRedisConnection<String, String> connection;

    /**
     * 해당 sequence(채번)값을 리턴한다.
     * (해당 key가 없으면 1을 리턴함)
     *
     * @param key	 : 채번에 사용되는 key값
     * @return       : 리턴값(int) = 현재값(int) + 1. (Max : 2147483647)
     * @throws Exception 에러 throw함
     */
    public int getSequence(String key) throws Exception {
        return Long.valueOf(this.connection.sync().incr(key)).intValue();
    }

    /**
     * 해당 sequence(채번)값을 리턴 && TTL(존속)값을 일수만큼 유지한다
     * (해당 key가 없으면 1을 리턴함)
     *
     * @param key	 : 채번에 사용되는 key값
     * @param ttlDays: 해당 key가 존속(TimeToLive)할 일수를 입력한다.
     * @return       : 리턴값(int) = 현재값(int) + 1. (Max : 2147483647)
     * @throws Exception
     */
	/*public int getSequenceDays(String key, int ttlDays) throws Exception {
		RedisCommands<String, String> rc =  this.connection.sync();
		long rslt = rc.incr(key);
		rc.expire(key, TimeUnit.DAYS.toSeconds(ttlDays));
		return Long.valueOf(rslt).intValue();
	}*/

    /**
     * 해당 sequence(채번)값을 리턴 and 값이 입력Max값보타 크면 1을 리턴한다. (cycling)
     * (해당 key가 없으면 1을 리턴함)
     *
     * @param key	  : 채번에 사용되는 key값
     * @param maxValue: 해당 key가 가질 수 있는 최대값. 넘으면 1을 리턴한다.
     * @return        : 리턴값(int) = 현재값(int) + 1. (Max : 2147483647)
     * @throws Exception 에러 throw함
     */
    public int getSequenceMax(String key, int maxValue) throws Exception {
        RedisCommands<String, String> rc =  this.connection.sync();
        int rslt = Long.valueOf(rc.incr(key)).intValue();
        if (rslt > maxValue) {
            rc.set(key, String.valueOf(1));
            rslt = 1;
        } //if
        return rslt;
    }

}	