package com.lotterental.rng.demo.config.nexacro;

import java.util.Locale;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.component.result.RngErrorResult;
import com.lotterental.rng.demo.common.component.result.RngResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class RngGlobalExceptionHandler {
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler
	public RngResult handleBusinessException(BusinessException ex, Locale locale) {
		log.debug("exception = {}", ex);
		return getErrorResult(ex.getMessageId(), ex.getMessage());
	}
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler
	public RngResult handleException(Exception ex) {
		log.debug("exception = {}", ex);
		return getErrorResult("기본에러메시지코드", "기본에러메시지");
	}
	
	private RngResult getErrorResult(String errorCode, String errorMessage) {
		RngErrorResult result = new RngErrorResult();
        result.setErrorCode(errorCode);
        result.setErrorMsg(errorMessage);
        return result.getResult();
	}

}

