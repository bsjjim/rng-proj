package com.lotterental.rng.common.resolver.processor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import com.lotterental.rng.common.cnst.HandlerParameterType;
import com.lotterental.rng.core.common.exception.BusinessException;


public class HandlerExecPreProcessor {
	
	public void handleInputValue(Object object) {
		validateParameterType(object);
		executePreProcess(object);
	}
	
	public void validateParameterType(Object object) {
		if (!isAllowedParameterType(object)) {
			throw new BusinessException("허용되지 않은 파라미터 타입");
		}
	}
	
	private boolean isAllowedParameterType(Object object) {
		if (object instanceof List) {
			return isAllowedParameterType(((List<?>) object).get(0));
		}
		return HandlerParameterType.isAllowedType(object);
	}
	
	@SuppressWarnings("unchecked")
	public void executePreProcess(Object object) {
		if (object instanceof List) {
			((List<?>) object).stream()
				.forEach(this::executePreProcess);
		} else if (object instanceof Map) {
			assignDefaultField((Map<String,Object>) object);
		}
	}
		
	private void assignDefaultField(Map<String,Object> map) {
		LocalDateTime now = LocalDateTime.now();
		map.put("currentTime", now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss")));
		map.put("employeeId", "TEST_ID");	// TODO: user id
	}
	
}
