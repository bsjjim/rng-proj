package com.lotterental.rng.temp.cmmn.exception;

@SuppressWarnings("serial")
public final class SysException extends BaseException {
	
	public SysException() {}

	public SysException(String errorCode) {
		super(errorCode);
	}
	
	public SysException(String errorCode, String... params) {
		super(errorCode, params);
	}

}
