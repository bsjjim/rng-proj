package com.lotterental.rng.core.utils;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.HashSet;

/**
 * 랜덤 문자열 생성기
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
public class RandomStringBuilder {

    /**
     * 숫자
     */
    public static final String NUMBER = "0123456789";

    /**
     * 영문 알파벳 소문자
     */
    public static final String ALPHABET_LOWER_CASE = "abcdefghijkmnlopqrstuvwxyz";

    /**
     * 영문 알파벳 대문자
     */
    public static final String ALPHABET_UPPER_CASE = "ABCDEFGHIJKMNLOPQRSTUVWXYZ";

    /**
     * 영문 알파벳 대소문자 + 숫자
     */
    public static final String ALPHABET = ALPHABET_LOWER_CASE + ALPHABET_UPPER_CASE + NUMBER;

    /**
     * 특수 문자
     */
    public static final String SPECIAL = "~!@#$%^&*()_+{}|\\\"`;:'<>?,./=-[]";

    private HashSet<Character> mExcludedCharSet = new HashSet<Character>();
    private ArrayList<Character> mLimitCharList = new ArrayList<Character>();

    int mLength = 16;

    /**
     * 생성기를 얻는다.
     *
     * @return 랜덤 문자열
     */
    public String build() {
        return generateRandomString(mLength);
    }

    /**
     * 최소 길이를 설정한다.
     *
     * @param length 최소 길이
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder setLength(int length) {
        mLength = length;
        return this;
    }

    /**
     * 최소 길이를 조회한다.
     *
     * @return 최소 길이
     */
    public int getLength() {
        return mLength;
    }

    /**
     * 주어진 문자를 제외 문자 세트에 포함시킨다.
     *
     * @param excluded 제외할 문자
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder putExcludedChar(char excluded) {
        mExcludedCharSet.add(excluded);
        return this;
    }

    /**
     * 주어진 문자 배열을 제외 문자 세트에 포함시킨다.
     *
     * @param excludedList 제외할 문자 배열
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder putExcludedChar(char[] excludedList) {
        for (char excluded : excludedList)
            putExcludedChar(excluded);
        return this;
    }

    /**
     * 주어진 문자열을 제외 문자 세트에 포함시킨다.
     *
     * @param excluded 제외할 문자
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder putExcludedChar(String excluded) {
        putExcludedChar(excluded.toCharArray());
        return this;
    }

    /**
     * 주어진 문자를 제한 문자 리스트에 포함시킨다.
     *
     * @param limited 제한할 문자
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder putLimitedChar(char limited) {
        mLimitCharList.add(limited);
        return this;
    }

    /**
     * 주어진 문자 배열을 제한 문자 리스트에 포함시킨다.
     *
     * @param limitedList 제한할 문자 배열
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder putLimitedChar(char[] limitedList) {
        for (char limited : limitedList)
            putLimitedChar(limited);
        return this;
    }

    /**
     * 주어진 문자열을 제한 문자 리스트에 포함시킨다.
     *
     * @param limited 제한할 문자
     * @return 메서드 체이닝을 위해 RandomStringBuilder를 반환
     */
    public RandomStringBuilder putLimitedChar(String limited) {
        putLimitedChar(limited.toCharArray());
        return this;
    }

    /**
     * 주어진 문자를 제외 문자 세트에서 제외시킨다.
     *
     * @param excluded 제외할 문자
     * @return 제외할 문자 포함 여부
     */
    public boolean removeExcluded(char excluded) {
        return mExcludedCharSet.remove(excluded);
    }

    /**
     * 주어진 문자를 제한 문자 리스트에서 제외시킨다.
     *
     * @param limited 제한할 문자
     * @return 제외할 문자 포함 여부
     */
    public boolean removeLimitedChar(char limited) {
        return mLimitCharList.remove((Character) limited);
    }

    /**
     * 제외 문자 세트를 초기화한다.
     *
     */
    public void clearExcluded() {
        mExcludedCharSet.clear();
    }

    /**
     * 제한 문자 리스트를 초기화한다.
     *
     */
    public void clearLimited() {
        mLimitCharList.clear();
    }

    /**
     * 랜덤 문자열을 생성한다
     *
     * @param length 문자열 길이
     * @return 랜덤 문자열
     */
    public String generateRandomString(int length) {
        boolean runExcludeChar = !isExcludedCharInLimitedChar();
        StringBuilder strBuffer = new StringBuilder(length);
        SecureRandom rand = new SecureRandom();
        for (int i = 0; i < length; ++i) {
            char randomChar = makeChar(rand);
            if (runExcludeChar)
                randomChar = excludeChar(rand, randomChar);
            strBuffer.append(randomChar);
        }
        return strBuffer.toString();
    }

    private boolean isExcludedCharInLimitedChar() {
        return mExcludedCharSet.containsAll(mLimitCharList);
    }

    private char excludeChar(SecureRandom rand, char arg) {
        while (mExcludedCharSet.contains(arg)) {
            arg = makeChar(rand);
        }
        return arg;
    }

    private char makeChar(SecureRandom rand) {
        if (mLimitCharList.isEmpty())
            return (char) (rand.nextInt(94) + 33);
        else
            return mLimitCharList.get(rand.nextInt(mLimitCharList.size()));
    }

}
