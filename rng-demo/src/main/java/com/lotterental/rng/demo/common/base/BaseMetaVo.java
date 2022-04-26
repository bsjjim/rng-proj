package com.lotterental.rng.demo.common.base;

import com.lotterental.rng.core.base.BaseVo;
import com.lotterental.rng.demo.common.annotation.ResponseIgnore;
import com.lotterental.rng.demo.common.cnst.DataRowStatus;
import com.lotterental.rng.demo.common.validation.information.RngBindingResult;
import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public abstract class BaseMetaVo implements BaseVo, DataSetRowTypeAccessor {
	@ResponseIgnore
	private int rowType = -1;
	
	@ResponseIgnore
	private RngBindingResult bindingResult;
		
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
	
	public void setErrorResult(RngBindingResult errorResult) throws IllegalAccessException {
		if (this.bindingResult != null) {
			throw new IllegalAccessException("접근 불가 필드");
		}
		this.bindingResult = errorResult;
	}
}
