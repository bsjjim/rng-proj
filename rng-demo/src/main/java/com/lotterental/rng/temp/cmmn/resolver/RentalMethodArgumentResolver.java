package com.lotterental.rng.temp.cmmn.resolver;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.temp.cmmn.resolver.processor.HandlerExecPreProcessor;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;

public class RentalMethodArgumentResolver extends NexacroMethodArgumentResolver {

	private static final HandlerExecPreProcessor processor;
	
	static {
		processor = new HandlerExecPreProcessor();
	}
	
	@Override
    public Object resolveArgument(MethodParameter param, ModelAndViewContainer arg1, NativeWebRequest nativeWebRequest,
            WebDataBinderFactory arg3) throws Exception {
		Object object = super.resolveArgument(param, arg1, nativeWebRequest, arg3);
		processor.handleInputValue(object);
		return object;
    }
	
}
