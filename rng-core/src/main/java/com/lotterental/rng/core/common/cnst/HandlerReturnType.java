package com.lotterental.rng.core.common.cnst;

import java.util.Arrays;
import java.util.Optional;

import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.core.common.file.RngFileResult;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public enum HandlerReturnType {

	RNG_RESULT(RngResult.class),
	RNG_FILE_RESULT(RngFileResult.class);
	
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
				.anyMatch(value -> isAssignableFrom(value, object));
	}
	
	private static boolean isAssignableFrom(HandlerReturnType type, Object object) {
		log.debug("object.getClass() = {}", object.getClass());
		return type.getType().isAssignableFrom(object.getClass());
	}
	
}
