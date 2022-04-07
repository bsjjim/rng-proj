package com.lotterental.rng.core.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.commons.lang3.time.FastDateFormat;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * 날짜 유틸리티 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public abstract class DateUtils extends org.apache.commons.lang3.time.DateUtils {

    private static final String DEFAULT_PATTERN = "yyyyMMddHHmmss";

    private static final String DATETIME = "yyyy-MM-dd HH:mm:ss";

    private static final String DATETIME_ISO = "yyyy-MM-dd'T'HH:mm:ss.SSSZ";

    private static final String[] ACCEPT_DATE_FORMATS = { DATETIME, DATETIME_ISO };

    /**
     * 오늘 날짜를 조회한다.
     *
     * @return Date 객체
     */
    public static Date getDate() {
        return new GregorianCalendar().getTime();
    }

    /**
     * 날짜 형식에 맞게 파싱한다.
     *
     * @param dateString 날짜 문자열
     * @return Date 객체 또는 null(파싱이 불가능할 경우)
     */
    public static Date parse(String dateString) {
        try {
            return parseDate(dateString, DEFAULT_PATTERN);
        } catch (ParseException e) {
            log.error("Unable to parse date : " + dateString, e);
        }
        return null;
    }

    /**
     * 날짜 허용된 형식에 맞게 파싱한다.
     *
     * @param string 날짜 문자열
     * @return Date 객체 또는 null(허용된 형식이 아닐 경우)
     */
    public static Date parseFast(String string) {
        if (StringUtils.isNumeric(string) || string.length() >= 13) {
            try {
                Long timestamp = Long.valueOf(string);
                return new Date(timestamp);
            } catch (NumberFormatException nfe) {
                exLogging("parseFast", nfe);

            }
        }
        for (String format : ACCEPT_DATE_FORMATS) {
            try {
                return FastDateFormat.getInstance(format).parse(string);
            } catch (ParseException e) {
                continue;
            }
        }
        return null;
    }

    /**
     * 날짜 문자열을 얻는다. (yyyyMMddHHmmss)
     *
     * @return 형식에 맞춘 문자열
     */
    public static String getDateString() {
        return getDateString("yyyyMMddHHmmss");
    }

    /**
     * 주어진 형식의 날짜 문자열을 얻는다.
     *
     * @param pattern 날짜 형식
     * @return 형식에 맞춘 문자열
     */
    public static String getDateString(String pattern) {
        Calendar cal = new GregorianCalendar();
        return DateFormatUtils.format(cal, pattern);
    }

    /**
     * 날짜 문자열을 얻는다. (yyyyMMddHHmmss)
     *
     * @param date Date 객체
     * @return 형식에 맞춘 문자열
     */
    public static String format(Date date) {
        return format(date, "yyyyMMddHHmmss");
    }

    /**
     * 주어진 형식의 날짜 문자열을 얻는다.
     *
     * @param date Date 객체
     * @param pattern 형식
     * @return 형식에 맞춘 문자열
     */
    public static String format(Date date, String pattern) {
        return DateFormatUtils.format(date, pattern);
    }

    /**
     * 경과 시간을 측정한다.
     *
     * @param fromDate 시작일시
     * @param toDate 종료일시
     * @return 경과 시간(밀리 초)
     */
    public static long hoursBetween(Date fromDate, Date toDate) {
        long term = toDate.getTime() - fromDate.getTime();
        return term / 3600000L;
    }

    /**
     * e.printStackTrace(); 대신 공통 로그를 출력하기 위해 사용한다.
     *
     * @param method 메서드명
     * @param e 예외 객체
     */
    private static void exLogging(String method, Exception e) {
        log.debug(DateUtils.class.getName() + "." + method + " => " + e.getClass().getName() + "\n" + " 발생원인 : "
                + e.getMessage());
    }
}
