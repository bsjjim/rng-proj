package com.lotterental.rng.temp.cmmn.constant;

import java.util.Arrays;
import java.util.Map;
import java.util.Optional;

import com.lotterental.rng.temp.cmmn.model.base.BaseVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public enum HandlerParameterType {

	VO(BaseVo.class), MAP(Map.class);
	
	private Class<?> type;
	
	HandlerParameterType(Class<?> type) {
		this.type = type;
	}
	
	public Class<?> getType() {
		return type;
	}
	
	public static boolean isAllowedType(Object object) {
		Optional.ofNullable(object)
			.orElseThrow(() -> new IllegalArgumentException("null 파라미터 불가"));
		return Arrays.stream(values())
				.map(HandlerParameterType::getType)
				.filter(type -> isAssignableFrom(type, object))
				.findAny()
				.isPresent();
	}
	
	private static boolean isAssignableFrom(Class<?> type, Object object) {
		log.info("object.getClass() = {}", object.getClass());
		boolean flag = type.isAssignableFrom(object.getClass());
		return flag;
	}
	
}
