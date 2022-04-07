package com.lotterental.rng.core.common.exception;

import org.apache.commons.lang3.StringUtils;

/**
 * @author S06864
 * @version 1.0
 * @projectName : 올댓플랫폼 구축 프로젝트
 * @className : ValidationException
 * @see <pre>
 *  Modification Information
 *  수정일       수정자   수정내용
 *  ---------- -------- ---------------------------
 *  2021.10.20  S06864   최초 생성
 * </pre>
 * <p>
 * Copyright (C) 2021 by Shinhancard., All right reserved.
 * @since 2021.10.20
 */
public class ValidationException extends BusinessException {
    private static final String valicationExceptionMsgId = "nap.opt.00001";
	private static final long serialVersionUID = 1L;
    private String validMessage;
    private String[] fieldNames;

    public ValidationException(String validMessage) {
        super(valicationExceptionMsgId);
        this.validMessage = validMessage;
    }

    public ValidationException(String validMessage, String... fieldNames) {
        super(valicationExceptionMsgId);
        this.validMessage = validMessage;
        this.fieldNames = fieldNames;
    }

    public ValidationException(String messageId, String validMessage) {
        super(messageId);
        this.validMessage = validMessage;
    }

    public ValidationException(String messageId, String validMessage, String... fieldNames) {
        super(messageId);
        this.validMessage = validMessage;
        this.fieldNames = fieldNames;
    }

    public String getValidMessage() {
        return this.validMessage;
    }

    public String[] getFieldNames() {
        return this.fieldNames;
    }

    public final BusinessException getBusinessException() {
        return new BusinessException(StringUtils.isEmpty(this.messageId) ? valicationExceptionMsgId : this.messageId);
    }
}
