package com.lotterental.rng.common.base.exception;

public abstract class BaseException extends RuntimeException {

	private static final long serialVersionUID = 1574021538524375363L;
	
	private final String errorCode;
	
	private String[] errorParams;
	
	public BaseException() {
		errorCode = "";	// TODO: default error code
	}
	
	public BaseException(String errorCode) {
		this.errorCode = errorCode;
	}
	
	public BaseException(String errorCode, String... errorParams) {
		this.errorCode = errorCode;
		this.errorParams = errorParams;
	}
	
	public String getErrorCode() {
		return errorCode;
	}
	
	public String[] getErrorParams() {
		return errorParams;
	}

}
