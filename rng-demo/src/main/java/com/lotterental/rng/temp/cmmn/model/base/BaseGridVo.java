package com.lotterental.rng.temp.cmmn.model.base;

import com.lotterental.rng.temp.cmmn.annotation.ResponseIgnore;
import com.lotterental.rng.temp.cmmn.constant.DataRowStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public abstract class BaseGridVo extends BaseVo {
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
	
//	public BaseGridVo() {
//		chk = "1";
//		GUBUN = "2";
//	}
	
}
