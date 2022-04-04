package com.lotterental.rng.temp.cmmn.model.base;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.lotterental.rng.temp.cmmn.annotation.ResponseIgnore;

import lombok.Data;

@Data
public abstract class BaseVo {
	
	@ResponseIgnore
	private final String employeeId;
	@ResponseIgnore
	private final String currentTime;
	
	public BaseVo() {
		this.employeeId = "TEST_ID";
		this.currentTime = getCurrentTime();
	}
	
	private String getCurrentTime() {
		LocalDateTime now = LocalDateTime.now();
		return now.format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
	}
	
}
