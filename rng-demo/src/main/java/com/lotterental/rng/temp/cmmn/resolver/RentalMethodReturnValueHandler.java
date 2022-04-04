package com.lotterental.rng.temp.cmmn.resolver;

import org.springframework.core.MethodParameter;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.temp.cmmn.resolver.processor.HandlerExecPostProcessor;
import com.nexacro.uiadapter.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;

public class RentalMethodReturnValueHandler extends NexacroHandlerMethodReturnValueHandler {

	private static final HandlerExecPostProcessor processor;
	
	static {
		processor = new HandlerExecPostProcessor();
	}
	
	@Override
	public void handleReturnValue(Object returnValue, MethodParameter returnType, ModelAndViewContainer mavContainer,
            NativeWebRequest webRequest) throws Exception {
		processor.handleReturnValue(returnValue);
		super.handleReturnValue(returnValue, returnType, mavContainer, webRequest);
	}
	
}
