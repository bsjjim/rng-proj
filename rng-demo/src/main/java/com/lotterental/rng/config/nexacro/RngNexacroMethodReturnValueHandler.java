package com.lotterental.rng.config.nexacro;

import org.springframework.core.MethodParameter;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.config.nexacro.processor.RngNexacroMethodReturnValueProcessor;
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
		rngNexacroMethodReturnValueProcessor.handleReturnValue(returnValue);
		super.handleReturnValue(returnValue, returnType, mavContainer, webRequest);
	}
	
}
