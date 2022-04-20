package com.lotterental.rng.core.utils;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.AbstractMessageSource;
import org.springframework.context.support.MessageSourceSupport;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.Locale;

/**
 * 메시지 유틸리티 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Component
public class MessageUtil {

    @Resource(name = "messageSource")
    private MessageSourceSupport source;

    static MessageSourceSupport messageSource;

    /**
     * 빈후처리기: 주입된 메시지 소스를 messageSource 필드에 할당
     *
     */
    @PostConstruct
    public void initialize() {
        messageSource = source;
    }

    /**
     * 메시지 소스를 AbstractMessageSource 타입으로 변환하여 얻는다.
     *
     * @return 변환된 AbstractMessageSource 객체
     */
    public static AbstractMessageSource getMessageSource() {
        return (AbstractMessageSource) messageSource;
    }

    /**
     * 메시지 소스를 설정한다.
     *
     * @param source 메시지 소스
     */
    public void setSource(MessageSourceSupport source) {
        this.source = source;
    }

    /**
     * 사용자 로케일을 얻는다.
     *
     * @return 사용자 로케일
     */
    public static Locale getLocale() {
        return LocaleContextHolder.getLocale();
    }

    /**
     * 주어진 코드에 해당하는 메시지를 조회한다.
     *
     * @param code 메시지 코드
     * @return 코드에 해당하는 메시지
     */
    public static String getMessage(String code) {
        return getMessageSource().getMessage(code, null, getLocale());
    }

    /**
     * 주어진 코드에 해당하는 메시지를 조회한다.
     *
     * @param code 메시지 코드
     * @param args 인수
     * @return 코드에 해당하는 메시지
     */
    public static String getMessage(String code, Object[] args) {
        return getMessageSource().getMessage(code, args, getLocale());
    }
}