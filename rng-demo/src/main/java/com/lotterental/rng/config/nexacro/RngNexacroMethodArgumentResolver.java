package com.lotterental.rng.config.nexacro;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.config.nexacro.processor.RngNexacroMethodArgumentProcessor;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;

public class RngNexacroMethodArgumentResolver extends NexacroMethodArgumentResolver {

	private RngNexacroMethodArgumentProcessor rngNexacroMethodArgumentProcessor;
	
	public RngNexacroMethodArgumentResolver() {
		this.rngNexacroMethodArgumentProcessor = new RngNexacroMethodArgumentProcessor();
	}
	
	@Override
    public Object resolveArgument(
			MethodParameter param,
			ModelAndViewContainer arg1,
			NativeWebRequest nativeWebRequest,
            WebDataBinderFactory arg3
	) throws Exception {
		Object object = super.resolveArgument(param, arg1, nativeWebRequest, arg3);
		rngNexacroMethodArgumentProcessor.handleInputValue(object);
		return object;
    }
	
}
