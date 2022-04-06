package com.lotterental.rng.common.cnst;

import java.util.Arrays;
import java.util.Optional;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public enum HandlerReturnType {

	NEXACRORESULT(NexacroResult.class);
	
	private Class<?> type;
	
	HandlerReturnType(Class<?> type) {
		this.type = type;
	}
	
	public Class<?> getType() {
		return type;
	}
	
	public static boolean isAllowedType(Object object) {
		Optional.ofNullable(object)
			.orElseThrow(() -> new IllegalArgumentException("null 파라미터 불가"));
		return Arrays.stream(values())
				.map(HandlerReturnType::getType)
				.filter(type -> isAssignableFrom(type, object))
				.findAny()
				.isPresent();
	}
	
	private static boolean isAssignableFrom(Class<?> type, Object object) {
		log.info("object.getClass() = {}", object.getClass());
		return type.isAssignableFrom(object.getClass());
	}
	
}
