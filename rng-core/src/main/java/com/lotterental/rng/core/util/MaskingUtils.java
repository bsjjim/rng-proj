package com.lotterental.rng.core.util;

import com.lotterental.rng.core.common.maskcrypt.annotation.MaskCryptAno;
import lombok.extern.slf4j.Slf4j;
import java.lang.reflect.Field;

/**
 * 문자열 마스킹 유틸리티
 *
 * @author Byun Sang june
 * @version 1.0
 * @since 2017. 09. 01
 */
@Slf4j
public abstract class MaskingUtils {

    protected MaskingUtils() {

    }

    public static final char DEFAULT_REPLACE = '*';
    public static final String LAST_4_CHAR_PATTERN = "(?!.{5}).";

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param pattern  정규식
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, String pattern) {
        return src.replaceAll(pattern, "*");
    }

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param startIdx 시작위치
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, int startIdx) {
        return masking(src, DEFAULT_REPLACE, null, startIdx, src.length());
    }

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param startIdx 시작위치
     * @param length   길이
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, int startIdx, int length) {
        return masking(src, DEFAULT_REPLACE, null, startIdx, length);
    }

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param replace  대치문자
     * @param startIdx 시작위치
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, char replace, int startIdx) {
        return masking(src, replace, null, startIdx, src.length());
    }

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param replace  대치문자
     * @param startIdx 시작위치
     * @param length   길이
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, char replace, int startIdx,
                                 int length) {
        return masking(src, replace, null, startIdx, length);
    }

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param replace  대치문자
     * @param exclude  제외문자
     * @param startIdx 시작위치
     * @param length   길이
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, char replace,char exclude, int startIdx,int length) {
        char[] arrExclude = new char[1];
        arrExclude[0] = exclude;
        return masking(src, replace, arrExclude, startIdx, length);
    }

    /**
     * 문자열 마스킹
     *
     * @param src      원본
     * @param replace  대치문자
     * @param exclude  제외문자
     * @param startIdx 시작위치
     * @param length   길이
     * @return 마스킹 적용된 문자열
     */
    public static String masking(String src, char replace, char[] exclude, int startIdx, int length) {
        StringBuffer sb = new StringBuffer(src);

        // 종료 인덱스
        int endIdx = startIdx + length;
        if (sb.length() < endIdx)
            endIdx = sb.length();

        // 치환
        for (int i = startIdx; i < endIdx; i++) {
            boolean isExclude = false;
            // 제외 문자처리
            if (exclude != null && 0 < exclude.length) {
                char currentChar = sb.charAt(i);

                for (char excludeChar : exclude) {
                    if (currentChar == excludeChar)
                        isExclude = true;
                }
            }

            if (!isExclude)
                sb.setCharAt(i, replace);
        }
        return sb.toString();
    }

    /**
     * 문자열 마스킹
     *
     * @param object 마스킹 어노테이션 적용된 컬럼이 있는 오브젝트
     * @return object 마스킹이 된 오브젝트
     */
    public static Object maskAnnotation(Object object) {
        try {
            Class<? extends Object> clazz = object.getClass();
            for (Field field : clazz.getDeclaredFields()) {
                if (field.getAnnotation(MaskCryptAno.class) != null) {
                    field.setAccessible(true);
                    Object value = field.get(object);
                    if (value == null) {
                        log.debug("");
                    } else {
                        log.debug(value.toString());
                        if(!value.equals("")) {
                            String valueStr = value.toString();
                            field.set(object, MaskingUtils.masking(valueStr, 0, valueStr.length()));
                        }
                    }
                }
            }
        } catch (Exception e) {
            log.error("maskAnnotation : [{}]", e.toString());
        }
        return object;
    }

}