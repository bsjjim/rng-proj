package com.lotterental.rng.common.exception;

import com.lotterental.rng.common.base.exception.BaseException;

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
