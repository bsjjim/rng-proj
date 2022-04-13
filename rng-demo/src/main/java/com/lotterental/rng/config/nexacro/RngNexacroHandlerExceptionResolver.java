package com.lotterental.rng.config.nexacro;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class RngNexacroHandlerExceptionResolver {
	
//	@Autowired
//    private MessageSource messageSource;
//
//	@ResponseStatus(HttpStatus.BAD_REQUEST)
//	@ExceptionHandler
//	public NexacroResult handleBizException(BusinessException ex, Locale locale) {
//		log.debug("exception = {}", ex);
//		return getErrorResult(100, "비즈에러발생");
//	}
//	
//	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//	@ExceptionHandler
//	public NexacroResult handleSysException(BusinessException ex, Locale locale) {
//		log.debug("exception = {}", ex);
//		return getErrorResult(100, "시스에러발생");
//	}
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler
	public NexacroResult handleException(Exception ex) {
		log.debug("exception = {}", ex);
		return getErrorResult(100, "에러발생");
	}
	
//	@SuppressWarnings("unused")
//	private String getErrorMessage(BusinessException ex, Locale locale) {
//		return messageSource.getMessage(ex.getMessageId(), ex.getMessageArgs(), locale);
//	}
	
	private NexacroResult getErrorResult(int errorCode, String errorMessage) {
		NexacroResult result = new NexacroResult();
        result.setErrorCode(errorCode);
        result.setErrorMsg(errorMessage);
        return result;
	}

}

