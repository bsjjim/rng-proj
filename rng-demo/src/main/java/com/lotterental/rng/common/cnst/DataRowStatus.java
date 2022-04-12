package com.lotterental.rng.common.cnst;

import java.util.Map;
import java.util.Optional;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

public enum DataRowStatus {
	
	NORMAL("N", String.valueOf(DataSet.ROW_TYPE_NORMAL)),
	INSERT("I", String.valueOf(DataSet.ROW_TYPE_INSERTED)),
	UPDATE("U", String.valueOf(DataSet.ROW_TYPE_UPDATED)),
	DELETE("D", String.valueOf(DataSet.ROW_TYPE_DELETED));
	
	private static final String gridRowStatusColumn = "gubun";
	
	private static final String rowStatusColumn = DataSetRowTypeAccessor.NAME;
	
	private String gridRowStatus;
	
	private String rowStatus;
	
	DataRowStatus(String gridRowStatus, String rowStatus) {
		this.gridRowStatus = gridRowStatus;
		this.rowStatus = rowStatus;
	}
	
	public String getGridRowStatus() {
		return gridRowStatus;
	}
	
	public String getRowStatus() {
		return rowStatus;
	}
	
	public static boolean isInsertedRow(Map<String, Object> map) {
		return isValidStatus(map, INSERT);
	}
	
	public static boolean isUpdatedRow(Map<String, Object> map) {
		return isValidStatus(map, UPDATE);
	}
	
	public static boolean isDeletedRow(Map<String, Object> map) {
		return isValidStatus(map, DELETE);
	}
	
	private static boolean isValidStatus(Map<String, Object> map, DataRowStatus rowStatus) {
		return getOptional(map, gridRowStatusColumn, rowStatus)
				.orElseGet(() -> {
					return getOptional(map, rowStatusColumn, rowStatus)
								.orElseThrow(DataRowStatus::raiseException);
				});
	}
	
	private static Optional<Boolean> getOptional(Map<String, Object> map, String statusColumn, DataRowStatus rowStatus) {
		return Optional.ofNullable(map.get(statusColumn))
				.map(status -> {
					return String.valueOf(status).equals(getRowStatus(statusColumn, rowStatus));
				});
	}
	
	private static String getRowStatus(String statusColumn, DataRowStatus rowStatus) {
		return statusColumn.equals(gridRowStatusColumn) ? 
				rowStatus.getGridRowStatus() : rowStatus.getRowStatus();
	}
	
	private static RuntimeException raiseException() {
		return new BusinessException("비정상적인 데이터 상태 존재");
	}
	
}
