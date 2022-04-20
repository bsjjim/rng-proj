package com.lotterental.rng.config.nexacro;

import org.springframework.core.MethodParameter;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.common.cnst.ErrorColumn;
import com.lotterental.rng.config.nexacro.processor.RngNexacroMethodReturnValueProcessor;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.nexacro.uiadapter.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;

public class RngNexacroMethodReturnValueHandler extends NexacroHandlerMethodReturnValueHandler {

	private RngNexacroMethodReturnValueProcessor rngNexacroMethodReturnValueProcessor;
	
	public RngNexacroMethodReturnValueHandler() {
		this.rngNexacroMethodReturnValueProcessor = new RngNexacroMethodReturnValueProcessor();
	}

	@Override
	public void handleReturnValue(
			Object returnValue,
			MethodParameter returnType,
			ModelAndViewContainer mavContainer,
            NativeWebRequest webRequest
	) throws Exception {
		if (returnValue.getClass() != NexacroFileResult.class) {
			rngNexacroMethodReturnValueProcessor.handleReturnValue(returnValue);
			handleException(returnValue);
		}
		super.handleReturnValue(returnValue, returnType, mavContainer, webRequest);
	}
	
	private void handleException(Object returnValue) {
		if (returnValue instanceof NexacroResult) {
			setErrorInfo((NexacroResult) returnValue);
		}
	}
	
	private void setErrorInfo(NexacroResult result) {
		if (result.getVariables().containsKey(ErrorColumn.ERROR_CODE.getColumn())) {
			result.setErrorCode(-1);
			result.setErrorMsg("");
		}
	}
	
}
