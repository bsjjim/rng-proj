package com.lotterental.rng.core.data.redis.base;

/**
 * Lettuce API를 이용한 공통 Redis 공통채번 Interface.
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
public interface RedisSequence {

	/**
	 * 해당 sequence(채번)값을 리턴한다.  
	 * (해당 key가 없으면 1을 리턴함) 
	 * 
	 * @param key	 : 채번에 사용되는 key값
	 * @return       : 리턴값(int) = 현재값(int) + 1. (Max : 2147483647)
	 * @throws Exception 에러 throw함
	 */
	public int getSequence(String key) throws Exception;
	
	/**
	 * 해당 sequence(채번)값을 리턴 && TTL(존속)값을 일수만큼 유지한다 
	 * (해당 key가 없으면 1을 리턴함) 
	 * 
	 * @param key	 : 채번에 사용되는 key값
	 * @param ttlDays: 해당 key가 존속(TimeToLive)할 일수를 입력한다.
	 * @return       : 리턴값(int) = 현재값(int) + 1. (Max : 2147483647)
	 * @throws Exception
	 */
	//public int getSequenceDays(String key, int ttlDays) throws Exception ;

	
	/**
	 * 해당 sequence(채번)값을 리턴 and 값이 입력Max값보타 크면 1을 리턴한다. (cycling)
	 * (해당 key가 없으면 1을 리턴함) 
	 * 
	 * @param key	  : 채번에 사용되는 key값
	 * @param maxValue: 해당 key가 가질 수 있는 최대값. 넘으면 1을 리턴한다.
	 * @return        : 리턴값(int) = 현재값(int) + 1. (Max : 2147483647)
	 * @throws Exception 에러 throw함
	 */
	public int getSequenceMax(String key, int maxValue) throws Exception ;

	
}	
