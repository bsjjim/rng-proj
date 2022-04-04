package com.lotterental.rng.common.converter;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.lotterental.rng.common.base.BizDataMap;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.data.convert.ConvertDefinition;
import com.nexacro.uiadapter.spring.core.data.convert.NexacroConvertException;
import com.nexacro.uiadapter.spring.core.data.support.DataSetToListConverter;

public class RentalDataSetToListConverter extends DataSetToListConverter {
	
	@Override
    public List<?> convert(DataSet ds, ConvertDefinition definition) throws NexacroConvertException {
        if (definition == null) {
            throw new NexacroConvertException(ConvertDefinition.class.getSimpleName() + " must not be null.");
        }
        Class<?> genericType = definition.getGenericType();
        if (ds == null) {
            return new ArrayList<>();
        } else if (genericType == null) {
            throw new NexacroConvertException("List<> generic type must be declared.");
        }
        return generateTargetList(ds, definition, genericType);
    }
	
	@SuppressWarnings("unchecked")
	private List<?> generateTargetList(DataSet ds, ConvertDefinition definition, Class<?> genericType) throws NexacroConvertException {
		if (BizDataMap.class.equals(genericType)) {
			definition.setGenericType(Map.class);
			return (List<?>) super.convert(ds, definition).stream()
        			.map(BizDataMap::new)
        			.collect(Collectors.toList());
		} else if (Map.class.isAssignableFrom(genericType)) {
        	definition.setGenericType(Map.class);
        	return (List<?>) super.convert(ds, definition).stream()
        			.collect(Collectors.toList());
        }
        return super.convert(ds, definition);
	}
    
}
