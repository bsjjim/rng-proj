package com.lotterental.rng.demo.common.validation.information;

import java.util.ArrayList;
import java.util.List;

public class RngValidationResult {
	
	private final List<RngErrorInfo> errorList = new ArrayList<>();
	
	public void add(RngErrorInfo errorInfo) {
		errorList.add(errorInfo);
	}
	
	public List<RngErrorInfo> getErrors() {
		return errorList;
	}
	
	public boolean hasErrors() {
		return errorList.size() > 0;
	}
	
	public RngErrorInfo findFirst() {
		return errorList.get(0);
	}
	
}
