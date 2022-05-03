package com.lotterental.rng.demo.config.nexacro;

import org.springframework.core.MethodParameter;
import org.springframework.lang.Nullable;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.core.common.file.RngFileResult;
import com.lotterental.rng.demo.config.nexacro.processor.RngNexacroMethodReturnValueProcessor;
import com.nexacro.uiadapter.spring.core.resolve.NexacroHandlerMethodReturnValueHandler;

public class RngMethodReturnValueHandler extends NexacroHandlerMethodReturnValueHandler {

	private final RngNexacroMethodReturnValueProcessor rngNexacroMethodReturnValueProcessor;
	
	public RngMethodReturnValueHandler() {
		this.rngNexacroMethodReturnValueProcessor = new RngNexacroMethodReturnValueProcessor();
	}
	
	@Override
    public boolean supportsReturnType(MethodParameter returnType) {
		return RngResult.class.isAssignableFrom(returnType.getParameterType());
    }
	
	@Override
	public void handleReturnValue(@Nullable Object returnValue, MethodParameter returnType,
			ModelAndViewContainer mavContainer, NativeWebRequest webRequest) throws Exception {
		if (!RngFileResult.class.isAssignableFrom(returnValue.getClass())) {
			rngNexacroMethodReturnValueProcessor.handleReturnValue(returnValue);
		}
		super.handleReturnValue(returnValue, returnType, mavContainer, webRequest);
	}
	
}
