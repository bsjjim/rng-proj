package com.lotterental.rng.common.interceptor.mybatis;

import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.executor.resultset.ResultSetHandler;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Signature;
import org.springframework.jdbc.support.JdbcUtils;

import com.lotterental.rng.core.common.exception.BusinessException;

@Intercepts({@Signature(type = ResultSetHandler.class, method = "handleResultSets", args = {Statement.class})})
public class RngMybatisResultSetHandler implements Interceptor {
	
	@Override
	public Object intercept(Invocation invocation) throws Throwable {
		Object object = invocation.proceed();
		if (object instanceof List) {
			return processListedData(object);
		} else if (isInappositedType(object)) {
			return object;
		}
		return applyCamelCase(object);
	}
	
	private Object processListedData(Object object) {
		if (isInappositedType(((List<?>) object))) {
			return object;
		}
		return applyCamelCaseToList(((List<?>) object));
	}
	
	private boolean isInappositedType(Object object) {
		if (object instanceof List) {
			return ((List<?>) object).size() == 0
					|| isInappositedType(((List<?>) object).get(0));
		}
		return !(object instanceof Map);
	}
	
	private List<Object> applyCamelCaseToList(List<?> targetList) {
		List<Object> resultList = new ArrayList<>();
		targetList.forEach(obj -> resultList.add(applyCamelCase(obj)));
		return resultList;
	}
	
	@SuppressWarnings("unchecked")
	private Map<String, Object> applyCamelCase(Object object) {
		Map<String, Object> returnData = getReturnDataObject(object);
		((Map<String, Object>) object).forEach((key, value) ->			
			returnData.put(JdbcUtils.convertUnderscoreNameToPropertyName(key), value));
		return returnData;
	}
	
	@SuppressWarnings("unchecked")
	private Map<String, Object> getReturnDataObject(Object object) {
		Class<?> clazz = (Class<? extends Map<String, Object>>) object.getClass();
		try {
			return (Map<String, Object>) clazz.getDeclaredConstructor().newInstance();
		} catch (Exception e) {
			throw new BusinessException("error code");
		}
	}

}