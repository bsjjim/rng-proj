package com.lotterental.rng.common.resolver.processor;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Stream;

import com.lotterental.rng.common.annotation.ResponseIgnore;
import com.lotterental.rng.common.cnst.HandlerParameterType;
import com.lotterental.rng.common.cnst.HandlerReturnType;
import com.lotterental.rng.common.exception.SysException;
import com.lotterental.rng.common.base.BaseGridVo;
import com.lotterental.rng.common.base.BaseVo;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public class HandlerExecPostProcessor {
	
	private final Field[] baseVoFields;	
	private final Field[] baseGridVoFields;
	
	public HandlerExecPostProcessor() {
		this.baseVoFields = BaseVo.class.getDeclaredFields();
		this.baseGridVoFields = BaseGridVo.class.getDeclaredFields();
	}
	
	public void handleReturnValue(Object object) {
		validateReturnType(object);
		executePostProcess(object);
	}
	
	private void validateReturnType(Object object) {
		if (!HandlerReturnType.isAllowedType(object)) {
			throw new SysException("허용되지 않은 리턴 타입");
		}
	}
	
	private void executePostProcess(Object object) {
		NexacroResult.class.cast(object).getDataSets().values().stream()
			.map(this::transElementToStream)
			.flatMap(Function.identity())
			.forEach(this::removeIgnoredField);
	}
	
	@SuppressWarnings("unchecked")
	private Stream<Object> transElementToStream(Object object) {
		if (object instanceof List) {
			validateElement(((List<?>) object).get(0));
			return ((List<Object>) object).stream();
		}
		validateElement(object);
		return Stream.of(object);
	}
	
	private void validateElement(Object object) {
		if (!HandlerParameterType.isAllowedType(object)) {
			throw new SysException("허용되지 않은 리턴 파라미터 타입");
		}
	}
	
	@SuppressWarnings("unchecked")
	private void removeIgnoredField(Object object) {
		if (object instanceof BaseVo) {
			assignVoModelPolicy((BaseVo) object);
			return;
		}
		assignIgnoredFieldToNull((Map<String, Object>) object);
	}
	
	private void assignVoModelPolicy(BaseVo baseVo) {
		assignIgnoredFieldToNull(baseVoFields, baseVo);
		if (baseVo instanceof BaseGridVo) {
			assignIgnoredFieldToNull(baseGridVoFields, (BaseGridVo) baseVo);
		}
	}
	
	private void assignIgnoredFieldToNull(Field[] fields, BaseVo baseVo) {
		Arrays.stream(fields)
			.filter(this::isIgnoredField)
			.forEach(field -> assginFieldToNull(field, baseVo));
	}
	
	private boolean isIgnoredField(Field field) {
		return field.isAnnotationPresent(ResponseIgnore.class);
	}
	
	private void assginFieldToNull(Field field, BaseVo baseVo) {
		try {
			field.setAccessible(true);
			field.set(baseVo, null);
		} catch (Exception e) {
		} finally {
			field.setAccessible(false);
		}
	}
	
	private void assignIgnoredFieldToNull(Map<String, Object> map) {
		Arrays.stream(baseVoFields)
			.filter(this::isIgnoredField)
			.map(Field::getName)
			.forEach(map::remove);
	}

}
