package com.lotterental.rng.core.utils;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.*;

/**
 * HTTP 요청 처리 유틸리티 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public class RequestUtil {

    /**
     * 요청 객체의 헤더 값을 맵 형태로 추출한다.
     *
     * @param request 요청 객체
     * @return 헤더 키-값이 포함된 맵
     */
    public Map<String, String> headerMap(HttpServletRequest request) {
        Map<String, String> convertedHeaderMap = new HashMap<String, String>();

        Enumeration<String> headerMap = request.getHeaderNames();

        while (headerMap.hasMoreElements()) {
            String name = headerMap.nextElement();
            String value = request.getHeader(name);
            convertedHeaderMap.put(name, value);
        }
        return convertedHeaderMap;
    }

    /**
     * 요청 객체의 매개변수 값을 맵 형태로 추출한다.
     *
     * @param request 요청 객체
     * @return 매개변수 키-값이 포함된 타입의 맵
     */
    public Map<String, String> parameterMap(HttpServletRequest request) {
        Map<String, String> convertedParameterMap = new HashMap<String, String>();
        Map<String, String[]> parameterMap = request.getParameterMap();

        for (String key : parameterMap.keySet()) {
            String[] values = parameterMap.get(key);
            StringJoiner valueString = new StringJoiner(",");

            for (String value : values) {
                valueString.add(value);
            }

            convertedParameterMap.put(key, valueString.toString());
        }
        return convertedParameterMap;
    }

    /**
     * 쿼리 문자열을 맵 형태로 변환한다.
     *
     * @param queryString 쿼리 문자열
     * @return 쿼리 키-값이 포함된 맵
     */
    public static Map<String, String> getParameterFromQueryString(String queryString) {
        if (StringUtils.isBlank(queryString))
            return Collections.emptyMap();
        Map<String, String> map = new LinkedHashMap<String, String>();
        for (String s : queryString.split("&")) {
            if (StringUtils.isBlank(s))
                continue;
            String arr[] = s.split("=", 2);
            if (!map.containsKey(arr[0]))
                map.put(arr[0], arr.length == 2 ? arr[1] : "");
        }
        return map;
    }

    /**
     * 요청 객체에서 사용자 IP를 조회한다.
     *
     * @param request 요청 객체
     * @return 사용자 IP 문자열
     */
    public String getClientIp(HttpServletRequest request) {
        String ipAddress = request.getHeader("X-FORWARDED-FOR");
        if (ipAddress == null) {
            ipAddress = request.getRemoteAddr();
        }
        return ipAddress;
    }

    /**
     * 쿼리 문자열에서 주어진 키에 해당하는 문자열 값을 얻는다.
     *
     * @param queryString 쿼리 문자열
     * @param name 키
     * @return 키에 해당하는 문자열 값
     */
    public String getValueFromQueryString(String queryString, String name) {
        if (StringUtils.isBlank(queryString))
            return null;
        String[] arr = queryString.split("&");
        for (String s : arr) {
            String[] arr2 = s.split("=", 2);
            if (arr2[0].equals(name)) {
                if (arr2.length == 1)
                    return null;
                String value = arr2[1];
                try {
                    value = URLDecoder.decode(value, "UTF-8");
                } catch (UnsupportedEncodingException e) {
                    log.error("UnsupportedEncodingException: ", e);
                }
                return value;
            }
        }
        return null;
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 문자열 값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키 키
     * @return 키에 해당하는 문자열 값
     */
    public String getString(HttpServletRequest request, String key) {
        return request.getParameter(key);
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 문자열 값을 배열 형태로 얻는다.
     *
     * @param request 요청 객체
     * @param key 키 키
     * @return 키에 해당하는 문자열 값의 배열
     */
    public String[] getStringArray(HttpServletRequest request, String key) {
        String str = getString(request, key);

        String[] targets = null;
        if (str != null) {
            targets = str.split(",");
        }
        return targets;
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 문자열 값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키 키
     * @param defaultValue 기본값 기본값
     * @return 키에 해당하는 문자열 값
     */
    public String getString(HttpServletRequest request, String key, String defaultValue) {
        String value = getString(request, key);

        if (StringUtils.isEmpty(value)) {
            return defaultValue;
        }

        return value;
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 정수 값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 키에 해당하는 정수 값
     */
    public int getInt(HttpServletRequest request, String key) {
        try {
            return Integer.parseInt(getString(request, key));
        } catch (Exception e) {
            return 0;
        }
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 정수 값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @param defaultValue 기본값
     * @return 키에 해당하는 정수 값
     */
    public int getInt(HttpServletRequest request, String key, int defaultValue) {
        String value = getString(request, key);

        if (StringUtils.isEmpty(value)) {
            return defaultValue;
        }

        return getInt(request, key);
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 long 값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 주어진 키에 해당하는 long 값
     */
    public long getLong(HttpServletRequest request, String key) {
        try {
            return Long.parseLong(getString(request, key));
        } catch (Exception e) {
            return 0L;
        }
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 long 값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @param defaultValue 기본값
     * @return 주어진 키에 해당하는 long 값
     */
    public long getLong(HttpServletRequest request, String key, long defaultValue) {
        String value = getString(request, key);

        if (StringUtils.isEmpty(value)) {
            return defaultValue;
        }

        return getLong(request, key);
    }

    /**
     * 요청 객체에 주어진 키-값으로 요청 속성을 추가한다.
     *
     * @param request 요청 객체
     * @param key 키
     * @param value 값
     */
    public void setAttribute(HttpServletRequest request, String key, String value) {
        request.setAttribute(key, value);
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 문자열 속성값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 키에 해당하는 문자열 속성값
     */
    public String getStringAttribute(HttpServletRequest request, String key) {
        return getStringAttribute(request, key, "");
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 문자열 속성값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @param defaultValue 기본값
     * @return 키에 해당하는 문자열 속성값
     */
    public String getStringAttribute(HttpServletRequest request, String key, String defaultValue) {
        Object value = request.getAttribute(key);

        if (value == null) {
            return defaultValue;
        }

        return value.toString();
    }

    /**
     * 요청 객체에 주어진 키-값으로 세션 속성을 추가한다.
     *
     * @param request 요청 객체
     * @param key 키
     * @param value 값
     */
    public void setSessionAttribute(HttpServletRequest request, String key, Object value) {
        request.getSession().setAttribute(key, value);
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 세션 속성 객체를 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 키에 해당하는 세션 속성 객체
     */
    public Object getSessionAttributeObject(HttpServletRequest request, String key) {
        return request.getSession().getAttribute(key);
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 세션 속성 객체를 얻는다. (타입을 지정)
     *
     * @param <T> 타입
     * @param request 요청 객체
     * @param key 키
     * @param clazz 클래스
     * @return 키에 해당하는 세션 속성 객체
     */
    public <T> T getSessionAttributeObject(HttpServletRequest request, String key, Class<T> clazz) {
        Object object = getSessionAttributeObject(request, key);

        if (object != null) {
            return clazz.cast(object);
        }
        return null;
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 세션 속성값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 키에 해당하는 세션 속성값
     */
    public String getSessionAttributeString(HttpServletRequest request, String key) {
        return getSessionAttributeString(request, key, "");
    }

    /**
     * 요청 객체에서 주어진 키에 해당하는 세션 속성값을 얻는다.
     *
     * @param request 요청 객체
     * @param key 키
     * @param defaultValue 기본값
     * @return 키에 해당하는 세션 속성값
     */
    public String getSessionAttributeString(HttpServletRequest request, String key, String defaultValue) {
        Object value = getSessionAttributeObject(request, key);

        if (value == null) {
            return defaultValue;
        }

        return value.toString();
    }

    /**
     * 주어진 키에 해당하는 세션 속성값이 존재하는지 검사한다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 키에 해당하는 세션 속성값이 존재하면 true, 아니면 false
     */
    public boolean hasSessionAttribute(HttpServletRequest request, String key) {
        return getSessionAttributeObject(request, key) != null;
    }

    /**
     * 요청 객체에 주어진 키에 해당하는 요청 매개변수 값이 존재하는지 검사한다.
     *
     * @param request 요청 객체
     * @param key 키
     * @return 키에 해당하는 요청 매개변수 값이 존재하면 true, 아니면 false
     */
    public boolean hasParameter(HttpServletRequest request, String key) {
        if (request.getParameterMap() != null) {
            return request.getParameterMap().containsKey(key);
        }
        return false;
    }

    /**
     * 요청 객체에서 본문을 가져온다.
     *
     * @param request 요청 객체
     * @return 본문 문자열
     */
    public String getRequestBody(HttpServletRequest request) {
        try {
            return IOUtils.toString(request.getInputStream());
        } catch (IOException e) {
            // ignored

            exLogging("getRequestBody", e);
        }
        return "";
    }

    /**
     * 요청 본문을 JSON 노드 형태로 가져온다.
     *
     * @param request 요청 객체
     * @return 요청 본문의 JSON 노드
     */
    public JsonNode getJson(HttpServletRequest request) {
        Map<String, String> requestBodyParameterMap = parameterMap(request);

        if (requestBodyParameterMap.size() > 0) {
            return JsonUtil.toJsonNode(requestBodyParameterMap);
        }

        String requestBody = getRequestBody(request);

        if (!StringUtils.isEmpty(requestBody)) {
            return JsonUtil.readJson(requestBody);
        }

        return null;
    }

    /**
     * e.printStackTrace(); 대신 공통 로그를 출력하기 위해 사용한다.
     *
     * @param method 메서드명
     * @param e 예외 객체
     */
    private void exLogging(String method, Exception e) {
        log.debug(this.getClass().getName() + "." + method + " => " + e.getClass().getName() + "\n" + " 발생원인 : "
                + e.getMessage());
    }
}