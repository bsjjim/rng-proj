package com.lotterental.rng.config.nexacro;

import com.lotterental.rng.config.nexacro.processor.RngNexacroMethodArgumentProcessor;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

public class RngNexacroMethodArgumentResolver extends NexacroMethodArgumentResolver {

//	private static final HandlerExecPreProcessor processor;
//
//	static {
//		processor = new HandlerExecPreProcessor();
//	}

	@Autowired
	RngNexacroMethodArgumentProcessor rngNexacroMethodArgumentProcessor;
	
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
