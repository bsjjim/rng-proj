package com.lotterental.rng.demo.common.base;

import com.lotterental.rng.core.base.BaseVo;
import com.lotterental.rng.demo.common.annotation.ResponseIgnore;
import com.lotterental.rng.demo.common.cnst.DataRowStatus;
import com.lotterental.rng.demo.common.validation.information.RngValidationResult;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public abstract class BaseMetaVo implements BaseVo, DataSetRowTypeAccessor {
	@ResponseIgnore
	private int rowType = -1;
	
	@ResponseIgnore
	private RngValidationResult errorResult;
		
	public boolean isInsertedRow() {
		return isSameType(DataRowStatus.INSERT);
	}
	
	public boolean isUpdatedRow() {
		return isSameType(DataRowStatus.UPDATE);
	}
	
	public boolean isDeletedRow() {
		return isSameType(DataRowStatus.DELETE);
	}
	
	private boolean isSameType(DataRowStatus rowStatus) {
		return this.rowType == Integer.valueOf(rowStatus.getRowStatus());
	}
	
	@Override
    public int getRowType() {
    	return rowType;
    }

	@Override
    public void setRowType(int rowType) {
    	if (this.rowType == -1) {
    		this.rowType = rowType;
    	}
    }
	
	public void setErrorResult(RngValidationResult errorResult) throws IllegalAccessException {
		if (this.errorResult != null) {
			throw new IllegalAccessException("접근 불가 필드");
		}
		this.errorResult = errorResult;
	}
}
