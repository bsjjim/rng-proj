package com.lotterental.rng.common.base;

import com.lotterental.rng.common.annotation.ResponseIgnore;
import com.lotterental.rng.common.cnst.DataRowStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public abstract class BaseGridVo extends BaseMetaVo {
	@ResponseIgnore
	private String chk;
	@ResponseIgnore
	private String GUBUN;
	
	@Override
	public boolean isInsertedRow() {
		return isValidRowStatus(DataRowStatus.INSERT) || super.isInsertedRow();
	}
	
	@Override
	public boolean isUpdatedRow() {
		return isValidRowStatus(DataRowStatus.UPDATE) || super.isUpdatedRow();
	}
	
	@Override
	public boolean isDeletedRow() {
		return isValidRowStatus(DataRowStatus.DELETE) || super.isDeletedRow();
	}
	
	private boolean isValidRowStatus(DataRowStatus rowStatus) {
		return (GUBUN != null) ? false : rowStatus.getGridRowStatus().equals(GUBUN);
	}
}
