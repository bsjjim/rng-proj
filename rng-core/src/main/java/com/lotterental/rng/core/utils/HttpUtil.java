package com.lotterental.rng.core.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * HTTP 처리 유틸리티 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public class HttpUtil {

    /**
     * 현재 HTTP 서블릿 요청 객체를 얻는다.
     *
     * @return 현재 HttpServletRequest 객체
     */
    public static HttpServletRequest getCurrentRequest() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
    }

    /**
     * 현재 HTTP 서블릿 응답 객체를 얻는다.
     *
     * @return 현재 HttpServletResponse 객체
     */
    public static HttpServletResponse getCurrentResponse() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getResponse();
    }

    /**
     * 멀티파트 폼 데이터 요청인지 판별한다.
     *
     * @param request 요청 객체
     * @return 멀티파트 폼 데이터 요청이면 true, 그 외에는 false
     */
    public static boolean isMultipartFormData(HttpServletRequest request) {
        try {
            return request.getHeader("content-type").contains("multipart");
        } catch (Exception e) {
            log.error("request.getHeader(\"content-type\").contains(\"multipart\")", e);
        }
        return false;
    }

    /**
     * 멀티파트 폼 데이터 요청인지 판별한다.
     *
     * @return 멀티파트 폼 데이터 요청이면 true, 그 외에는 false
     */
    public static boolean isMultipartFormData() {
        return isMultipartFormData(getCurrentRequest());
    }

    /**
     * IP 앞의 세 자리 숫자를 얻는다.
     *
     * @param ip IP
     * @return 앞의 세 자리 숫자
     */
    private static String getFirstIp(String ip) {

        if (ip == null) {
            return null;
        }

        String[] split = ip.split(",");
        return split[0];
    }

    /**
     * 사용자의 원격 접속 주소를 조회한다.
     *
     * @param request 요청 객체
     * @return 사용자 원격 접속 주소
     */
    public static String getRemoteAddr(HttpServletRequest request) {

        String clientIp = request.getHeader("X-Forwarded-For");
        if (!StringUtils.isEmpty(clientIp)) {
            return getFirstIp(clientIp);
        }

        clientIp = request.getHeader("Proxy-Client-IP");
        if (!StringUtils.isEmpty(clientIp)) {
            return getFirstIp(clientIp);
        }

        clientIp = request.getHeader("WL-Proxy-Client-IP");
        if (!StringUtils.isEmpty(clientIp)) {
            return getFirstIp(clientIp);
        }

        clientIp = request.getHeader("HTTP_CLIENT_IP");
        if (!StringUtils.isEmpty(clientIp)) {
            return getFirstIp(clientIp);
        }

        clientIp = request.getHeader("HTTP_X_FORWARDED_FOR");
        if (!StringUtils.isEmpty(clientIp)) {
            return getFirstIp(clientIp);
        }

        return request.getRemoteAddr();
    }
    
    public static String getHttpRequestBody(HttpServletRequest request) throws IOException {
		 
        String body = null;
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader = null;
 
        try {
            InputStream inputStream = request.getInputStream();
            if (inputStream != null) {
                bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                char[] charBuffer = new char[128];
                int bytesRead = -1;
                while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
                    stringBuilder.append(charBuffer, 0, bytesRead);
                }
            }
        } catch (IOException ex) {
            throw ex;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException ex) {
                    throw ex;
                }
            }
        }
 
        body = stringBuilder.toString();
        return body;
    }
}