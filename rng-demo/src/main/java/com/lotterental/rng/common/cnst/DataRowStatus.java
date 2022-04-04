package com.lotterental.rng.common.cnst;

import java.util.Arrays;
import java.util.Optional;

import com.lotterental.rng.common.exception.SysException;

public enum DataRowStatus {
	
	INSERT("I"),
	UPDATE("U"),
	DELETE("D");
	
	private static final String rowStatusColumn = "GUBUN";
	
	private String rowStatus;
	
	DataRowStatus(String rowStatus) {
		this.rowStatus = rowStatus;
	}
	
	public String getRowStatus() {
		return rowStatus;
	}
	
	public static String getRowStatusColumn() {
		return rowStatusColumn;
	}
	
	public static boolean isInsertedRow(String rowStatus) {
		validateRowStatus(rowStatus);
		return INSERT.getRowStatus().equals(rowStatus);
	}
	
	public static boolean isUpdatedRow(String rowStatus) {
		validateRowStatus(rowStatus);
		return UPDATE.getRowStatus().equals(rowStatus);
	}
	
	public static boolean isDeletedRow(String rowStatus) {
		validateRowStatus(rowStatus);
		return DELETE.getRowStatus().equals(rowStatus);
	}
	
	private static void validateRowStatus(String rowStatus) {
		checkNull(rowStatus);
		checkValidStatus(rowStatus);
	}
	
	private static void checkNull(String rowStatus) {
		Optional.ofNullable(rowStatus)
			.orElseThrow(DataRowStatus::raiseException);
	}
	
	private static void checkValidStatus(String rowStatus) {
		Arrays.stream(values())
			.map(DataRowStatus::getRowStatus)
			.filter(rowStatus::equals)
			.findAny()
			.orElseThrow(DataRowStatus::raiseException);
	}
	
	private static RuntimeException raiseException() {
		return new SysException("비정상적인 데이터 상태 존재");
	}
	
}
