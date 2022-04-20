package com.lotterental.rng.config.nexacro;

import org.springframework.core.MethodParameter;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.lotterental.rng.config.nexacro.processor.RngNexacroMethodArgumentProcessor;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.resolve.NexacroMethodArgumentResolver;

public class RngNexacroMethodArgumentResolver extends NexacroMethodArgumentResolver {

	private final RngNexacroMethodArgumentProcessor rngNexacroMethodArgumentProcessor;
	
	public RngNexacroMethodArgumentResolver() {
		this.rngNexacroMethodArgumentProcessor = new RngNexacroMethodArgumentProcessor();
	}
	
	@Override
	public Object resolveArgument(MethodParameter parameter, @Nullable ModelAndViewContainer mavContainer,
			NativeWebRequest webRequest, @Nullable WebDataBinderFactory binderFactory) throws Exception {
		Object object = super.resolveArgument(parameter, mavContainer, webRequest, binderFactory);
		if (parameter.getParameterAnnotation(ParamVariable.class) == null) {
			rngNexacroMethodArgumentProcessor.handleInputValue(object);
		}
		return object;
    }
	
}
