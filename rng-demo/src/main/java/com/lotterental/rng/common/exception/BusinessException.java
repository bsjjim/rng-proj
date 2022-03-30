package com.lotterental.rng.common.exception;

import java.util.Locale;

/**
 * 업무 개발용 공통 Exception
 * 
 * @author Byun Sang June
 * @version 1.0
 * @since 2021. 08. 09.
 */
public class BusinessException extends AbstractRuntimeException {

	private static final long serialVersionUID = 1L;

	public BusinessException(String messageId) {
		super(messageId);
	}

	public BusinessException(String messageId, String messageEx) {
		super(messageId, messageEx);
	}

	public BusinessException(String messageId, Locale locale) {
		super(messageId, locale);
	}

	public BusinessException(String messageId, Object[] messageArgs) {
		super(messageId, messageArgs);
	}

	public BusinessException(String messageId, Object[] messageArgs, Locale locale) {
		super(messageId, messageArgs, locale);
	}

	public BusinessException(String messageId, Throwable cause) {
		super(messageId, cause);
	}

	public BusinessException(String messageId, Locale locale, Throwable cause) {
		super(messageId, locale, cause);
	}

	public BusinessException(String messageId, Object[] messageArgs, Throwable cause) {
		super(messageId, messageArgs, cause);
	}

	public BusinessException(String messageId, Object[] messageArgs, Locale locale, Throwable cause) {
		super(messageId, messageArgs, locale, cause);
	}
}
