package com.lotterental.rng.temp.cmmn.model;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Optional;

import org.apache.ibatis.type.Alias;

import com.lotterental.rng.temp.cmmn.constant.DataRowStatus;
import com.lotterental.rng.temp.cmmn.exception.SysException;

@Alias("bizDataMap")
@SuppressWarnings("serial")
public class BizDataMap extends HashMap<String,Object> {
	
	@SuppressWarnings("unchecked")
	public BizDataMap(Object object) {
		Object obj = Optional.ofNullable(object).orElseThrow(() -> new SysException());		
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
		return DataRowStatus.isInsertedRow(getRowStatus());
	}
	
	public boolean isUpdatedRow() {
		return DataRowStatus.isUpdatedRow(getRowStatus());
	}
	
	public boolean isDeletedRow() {
		return DataRowStatus.isDeletedRow(getRowStatus());
	}
	
	private String getRowStatus() {
		return (String) get(DataRowStatus.getRowStatusColumn());
	}
	
}
