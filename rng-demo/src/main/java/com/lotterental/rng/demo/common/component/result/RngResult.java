package com.lotterental.rng.demo.common.component.result;

import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_MSG;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public class RngResult extends NexacroResult {
    
    public void setErrorCode(String errorCode) {
    	super.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
    	super.addVariable(ERROR_CODE.getColumn(), errorCode);
    }
    
    public void setErrorMsg(String errorMessage) {
    	super.setErrorMsg(errorMessage);
    	super.addVariable(ERROR_MSG.getColumn(), errorMessage);
    }
    
    public void setException(BusinessException e) {
    	setErrorCode(e.getMessageId());
    	setErrorMsg(e.getMessage());
    }
    
}
