package com.lotterental.rng.core.utils;

import org.apache.commons.lang3.StringUtils;

/**
 * 기타 공용 유틸리티 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
public class CommonUtil {


    /**
     * 특수문자 배열
     */
    final private static String[] SPECIAL_CHARS = {
        "|",
        "/"
    };

    /**
     * 주어진 문자열에서 특수문자를 필터링한다.
     *
     * @param str 문자열
     * @return 특수문자가 필터링된 문자열
     */
    public static String filterSpecialChars(String str) {
        String _str = StringUtils.trim(str);
        for(String s : SPECIAL_CHARS) {
            _str = StringUtils.remove(_str, s);
        }
        return _str;
    }

}
