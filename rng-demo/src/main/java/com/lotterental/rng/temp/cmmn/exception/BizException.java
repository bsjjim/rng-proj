package com.lotterental.rng.temp.cmmn.exception;

@SuppressWarnings("serial")
public final class BizException extends BaseException {

	public BizException(String errorCode) {
		super(errorCode);
	}
	
	public BizException(String errorCode, String... params) {
		super(errorCode, params);
	}

}
