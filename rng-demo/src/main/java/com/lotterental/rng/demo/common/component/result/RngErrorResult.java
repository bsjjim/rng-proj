package com.lotterental.rng.demo.common.component.result;

import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_MSG;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.NexacroException;

public class RngErrorResult {
	
	private RngResult result;
	
	public RngErrorResult() {
		this.result = new RngResult();
	}
	
	public RngErrorResult(BusinessException e) {
		this();
		setErrorInfo(e);
	}
	
	public RngResult getResult() {
		return result;
	}
	
	private void setErrorInfo(BusinessException e) {
		result.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
		result.setErrorMsg(getMessage(e));
		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
		result.addVariable(ERROR_MSG.getColumn(), getMessage(e));
	}
	
	public void setErrorCode(String errorCode) {
		result.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
		result.addVariable(ERROR_CODE.getColumn(), errorCode);
	}
	
	public void setErrorMsg(String errorMsg) {
		result.setErrorMsg(errorMsg);
		result.addVariable(ERROR_MSG.getColumn(), errorMsg);
	}
    
	private String getMessage(BusinessException e) {
		return ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs());
	}
    
}
