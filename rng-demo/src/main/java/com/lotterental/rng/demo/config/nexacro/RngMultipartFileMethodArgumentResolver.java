package com.lotterental.rng.demo.config.nexacro;

import java.util.Collection;
import java.util.List;
import java.util.Map.Entry;
import java.util.stream.Collectors;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.DefaultMultipartHttpServletRequest;

import com.lotterental.rng.demo.common.file.RngMultipartFile;

public class RngMultipartFileMethodArgumentResolver implements HandlerMethodArgumentResolver {

	@Override
	public boolean supportsParameter(MethodParameter parameter) {
		return parameter.getParameterType() == RngMultipartFile.class;
	}

	@Override
	public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer,
			NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
		DefaultMultipartHttpServletRequest request = (DefaultMultipartHttpServletRequest) webRequest.getNativeRequest();
		List<MultipartFile> fileList = request.getMultiFileMap().entrySet().stream()
				.map(Entry::getValue)
				.flatMap(Collection::stream)
				.collect(Collectors.toList());
		return new RngMultipartFile(fileList);
	}
	
}
