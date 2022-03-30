package com.lotterental.rng.common.exception;

import com.lotterental.rng.util.MessageUtil;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * Exception Abstract Base Class
 *
 * @author soo
 * @version 1.0
 * @since 2017. 10. 19.
 */
@Slf4j
public abstract class AbstractRuntimeException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	protected String messageId;
	protected String messageEx;
	protected Object[] messageArgs;
	protected Locale locale;

	protected AbstractRuntimeException() {
		super();
		this.messageId = null;
		this.messageEx = null;
		this.messageArgs = null;
		this.locale = null;
	}

	protected AbstractRuntimeException(String messageId) {
		super();
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = null;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, String message) {
		super();
		this.messageId = messageId;
		this.messageEx = message;
		this.messageArgs = null;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Locale locale) {
		super();
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = null;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Object[] messageArgs) {
		super();
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = messageArgs;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Object[] messageArgs, Locale locale) {
		super();
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = messageArgs;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(Throwable cause) {
		super(cause);
		this.messageId = null;
		this.messageEx = null;
		this.messageArgs = null;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Throwable cause) {
		super(cause);
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = null;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Locale locale, Throwable cause) {
		super(cause);
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = null;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Object[] messageArgs, Throwable cause) {
		super(cause);
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = messageArgs;
		this.locale = MessageUtil.getLocale();
	}

	protected AbstractRuntimeException(String messageId, Object[] messageArgs, Locale locale, Throwable cause) {
		super(cause);
		this.messageId = messageId;
		this.messageEx = null;
		this.messageArgs = messageArgs;
		this.locale = MessageUtil.getLocale();
	}

	/**
	 * 로케일을 설정합니다.
	 * 
	 * @param locale
	 *            국가/언어지정
	 */
	public void setLocale(Locale locale) {
		this.locale = locale;
	}

	public Locale getLocale() {
		return this.locale;
	}

	public String getMessageId() {
		return this.messageId;
	}

	public String getMessageEx() {
		return this.messageEx;
	}

	public List<String> getMessageArgs() {
		if (this.messageArgs == null)
			return null;

		List<String> list = new ArrayList<>();
		for (Object obj : this.messageArgs) {
			try {
				list.add(obj.toString());
			} catch (Exception e) {
				log.error("meaageArgs Convert Exception : " + this.messageArgs);
				list.add("");
			}
		}
		return list;
	}
}
