package com.lotterental.rng.demo.common.validation.information;

import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_MSG;

import com.lotterental.rng.demo.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RngErrorInfo implements Comparable<RngErrorInfo> {
	public static final String MESSAGE_CODE = "messageCode";
	public static final String MESSAGE_PARAMS = "messageParams";
	public static final String ORDER = "order";
	
	private final String fieldName;
	private final String fieldValue;
	private final String messageCode;
	private final String[] messageParams;
	private final int order;
	
	public String getMessage() {		
		return (messageParams == null || messageParams.length == 0) ? 
				ErrorCodeUtil.getErrorMsg(messageCode) : ErrorCodeUtil.getErrorMsg(messageCode, messageParams);
	}
	
	public NexacroResult getErrorResult() {
		NexacroResult result = new NexacroResult();
		result.addVariable(ERROR_CODE.getColumn(), getMessageCode());
		result.addVariable(ERROR_MSG.getColumn(), getMessage());
		return result;
	}
	
	public NexacroResult getErrorResult(String messageCode, String[] messageParams) {
		NexacroResult result = new NexacroResult();
		result.addVariable(ERROR_CODE.getColumn(), messageCode);
		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(messageCode, messageParams));
		return result;
	}

	@Override
	public int compareTo(RngErrorInfo errorInfo) {
		return this.order - errorInfo.order;
	}
}
