package com.lotterental.rng.common.base;

import com.lotterental.rng.common.annotation.ResponseIgnore;
import com.lotterental.rng.common.cnst.DataRowStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public abstract class BaseGridVo implements BaseVo {
	@ResponseIgnore
	private String chk;
	@ResponseIgnore
	private String GUBUN;
	@ResponseIgnore
	private String datasetRowType;
	
	public boolean isInsertedRow() {
		return DataRowStatus.isInsertedRow(GUBUN);
	}
	
	public boolean isUpdatedRow() {
		return DataRowStatus.isUpdatedRow(GUBUN);
	}
	
	public boolean isDeletedRow() {
		return DataRowStatus.isDeletedRow(GUBUN);
	}
}
