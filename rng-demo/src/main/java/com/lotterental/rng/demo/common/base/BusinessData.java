package com.lotterental.rng.demo.common.base;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Optional;

import com.lotterental.rng.demo.common.cnst.DataRowStatus;
import com.lotterental.rng.core.common.exception.BusinessException;

@SuppressWarnings("serial")
public class BusinessData extends HashMap<String,Object> {
	
	public BusinessData() {}
	
	@SuppressWarnings("unchecked")
	public BusinessData(Object object) {
		Object obj = Optional.ofNullable(object).orElseThrow(() -> new BusinessException("error_code"));		
		Optional.of(obj)
			.filter(o -> HashMap.class.isAssignableFrom(o.getClass()))
			.ifPresent(e -> putAll((HashMap<String,Object>) e));
	}
	
	@SuppressWarnings("unchecked")
	public <T> T get(String key, Class<? extends T> type) {
		return (T) super.get(key);
	}
	
	public String getString(String key) {
		return (String) super.get(key);
	}
	
	public int getInt(String key) {
		return (Integer) super.get(key);
	}
	
	public double getDouble(String key) {
		return (Double) super.get(key);
	}
	
	public BigDecimal getBigDecimal(String key) {
		return (BigDecimal) super.get(key);
	}
	
	public boolean isInsertedRow() {
		return DataRowStatus.isInsertedRow(this);
	}
	
	public boolean isUpdatedRow() {
		return DataRowStatus.isUpdatedRow(this);
	}
	
	public boolean isDeletedRow() {
		return DataRowStatus.isDeletedRow(this);
	}
	
}
