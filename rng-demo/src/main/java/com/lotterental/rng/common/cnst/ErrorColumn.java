package com.lotterental.rng.common.cnst;

public enum ErrorColumn {
	ERROR_CODE("BIZ_ERROR_CODE"),
	ERROR_MSG("BIZ_ERROR_MSG");

	private String column;
	
	ErrorColumn(String column) {
		this.column = column;
	}
	
	public String getColumn() {
		return column;
	}
	
}
