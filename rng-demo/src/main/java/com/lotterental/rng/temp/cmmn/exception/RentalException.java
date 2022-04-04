package com.lotterental.rng.temp.cmmn.exception;

public class RentalException {
	
	public static BizException occurException(String errorCode) {
		throw new BizException(errorCode);
	}
	
	public static BizException occurException(String errorCode, String... params) {
		throw new BizException(errorCode, params);
	}

}
