package com.lotterental.rng.common.converter;

import java.util.Map;

import com.lotterental.rng.common.base.BizDataMap;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.data.convert.ConvertDefinition;
import com.nexacro.uiadapter.spring.core.data.convert.NexacroConvertException;
import com.nexacro.uiadapter.spring.core.data.support.DataSetToObjectConverter;
import com.nexacro.uiadapter.spring.core.util.ReflectionUtil;

public class RentalDataSetToObjectConverter extends DataSetToObjectConverter {
	
	@Override
    public Object convert(DataSet source, ConvertDefinition definition) throws NexacroConvertException {
	    if (definition == null) {
	        throw new NexacroConvertException(ConvertDefinition.class.getSimpleName() + " must not be null.");
	    }	    
	    Class<?> genericType = definition.getGenericType();
	    if (source == null) {
	        return ReflectionUtil.instantiateClass(genericType);
	    } else if(genericType == null) {
	        throw new NexacroConvertException("generic type must be declared.");
	    }
	    return generateTargetObject(source, definition, genericType);
	}
	
	@SuppressWarnings("unchecked")
	private Object generateTargetObject(DataSet source, ConvertDefinition definition, Class<?> genericType) throws NexacroConvertException {
	    if (Map.class.isAssignableFrom(genericType)) {
	    	definition.setGenericType(Map.class);
	    	Object object = (Map<String, Object>) super.convert(source, definition);
	    	return (BizDataMap.class.equals(genericType)) ? new BizDataMap(object) : object;
	    }
	    return super.convert(source, definition);
	}
    
}
