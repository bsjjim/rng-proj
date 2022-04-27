package com.lotterental.rng.demo.common.component;

import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_MSG;

import java.util.List;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

public class RngResult {

	private NexacroResult result;
	
	public RngResult() {
		this.result = new NexacroResult();
	}
	
    public void addDataSet(DataSet dataSet) {
    	result.addDataSet(dataSet);
    }
    
    public void addDataSet(String dataSetName, List<?> beans) {
    	result.addDataSet(dataSetName, beans);
    }
    
    public void addDataSet(String dataSetName, Object beans) {
    	result.addDataSet(dataSetName, beans);
    }
    
    public void setErrorCode(String errorCode) {
    	result.setErrorCode(NexacroException.DEFAULT_ERROR_CODE);
    	result.addVariable(ERROR_CODE.getColumn(), errorCode);
    }
    
    public void setErrorMsg(String errorMessage) {
    	result.setErrorMsg(errorMessage);
    	result.addVariable(ERROR_MSG.getColumn(), errorMessage);
    }
    
    public void setException(BusinessException e) {
    	setErrorCode(e.getMessageId());
    	setErrorMsg(e.getMessage());
    }
    
    public NexacroResult getResult() {
    	return result;
    }
    
}
