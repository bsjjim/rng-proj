package com.lotterental.rng.common.exception;

import com.lotterental.rng.common.base.exception.BaseException;

@SuppressWarnings("serial")
public final class BizException extends BaseException {

	public BizException(String errorCode) {
		super(errorCode);
	}
	
	public BizException(String errorCode, String... params) {
		super(errorCode, params);
	}

}
