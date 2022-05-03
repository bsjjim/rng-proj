package com.lotterental.rng.core.common.component.result;

import static com.lotterental.rng.core.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.core.common.cnst.ErrorColumn.ERROR_MSG;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public class RngResult extends NexacroResult {
	
	public void setError(BusinessException e) {
		setBizErrorCode(e.getMessageId());
		setBizErrorMessage((String[]) e.getMessageArgs());
    }
	
    public void setErrorCode(String errorCode) {    	
    	setBizErrorCode(errorCode);
    	setBizErrorMessage(null);
    }
    
    public void setErrorParams(String... params) {
    	setBizErrorMessage(params);
    }
    
    public void setErrorMsg(String errorMessage) {
    	super.setErrorMsg(errorMessage);
    }
    
    private void setBizErrorCode(String errorCode) {
    	super.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
    	super.addVariable(ERROR_CODE.getColumn(), errorCode);
    }
    
    private void setBizErrorMessage(String[] params) {
    	super.setErrorMsg(getErrorMessage(params));
    	super.addVariable(ERROR_MSG.getColumn(), getErrorMessage(params));
    }
    
    private String getErrorMessage(String[] params) {
    	return ErrorCodeUtil.getErrorMsg(getBizErrorCode(), params);
    }
    
    private String getBizErrorCode() {
    	return (String) super.getVariables().get(ERROR_CODE.getColumn());
    }
    
}
