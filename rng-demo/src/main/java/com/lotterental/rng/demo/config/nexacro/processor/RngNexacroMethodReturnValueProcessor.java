package com.lotterental.rng.demo.config.nexacro.processor;

import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Stream;

import com.lotterental.rng.demo.common.annotation.ResponseIgnore;
import com.lotterental.rng.demo.common.base.BaseGridVo;
import com.lotterental.rng.demo.common.cnst.HandlerParameterType;
import com.lotterental.rng.demo.common.cnst.HandlerReturnType;
import com.lotterental.rng.core.base.BaseVo;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public class RngNexacroMethodReturnValueProcessor {
	
	private static final Field[] baseVoFields = BaseVo.class.getDeclaredFields();
	private static final Field[] baseGridVoFields = BaseGridVo.class.getDeclaredFields();
	
	public void handleReturnValue(Object object) {
		validateReturnType(object);
		executePostProcess(object);
	}
	
	private void validateReturnType(Object object) {
		if (!HandlerReturnType.isAllowedType(object)) {
			throw new BusinessException("허용되지 않은 리턴 타입");
		}
	}
	
	private void executePostProcess(Object object) {
		NexacroResult.class.cast(object).getDataSets().values().stream()
			.filter(this::isExistsDataObject)
			.map(this::transElementToStream)
			.flatMap(Function.identity())
			.forEach(this::removeIgnoredField);
	}
	
	private boolean isExistsDataObject(Object object) {
		if (object instanceof List) {
			return ((List<?>) object).size() > 0;
		}
		return object != null;
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
			throw new BusinessException("허용되지 않은 리턴 파라미터 타입");
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
//		assignIgnoredFieldToNull(baseVoFields, baseVo);
		if (baseVo instanceof BaseGridVo) {
//			assignIgnoredFieldToNull(baseGridVoFields, (BaseGridVo) baseVo);
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
		field.setAccessible(true);
		try {
			field.set(baseVo, null);
		} catch (IllegalArgumentException | IllegalAccessException e) {
			throw new BusinessException("", e);	// TODO: 적절한 시스템 에러 메시지
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
