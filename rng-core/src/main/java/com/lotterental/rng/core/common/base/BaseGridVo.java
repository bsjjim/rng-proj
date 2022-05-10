package com.lotterental.rng.core.common.base;

import com.lotterental.rng.core.common.annotation.ResponseIgnore;
import com.lotterental.rng.core.common.cnst.DataRowStatus;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public abstract class BaseGridVo extends BaseMetaVo {
	
	private String _chk;
	
	@ResponseIgnore
	private String _gubun;
	
	@Override
	public boolean isInsertedRow() {
		return isValidRowStatus(DataRowStatus.INSERT);
	}
	
	@Override
	public boolean isUpdatedRow() {
		return isValidRowStatus(DataRowStatus.UPDATE);
	}
	
	@Override
	public boolean isDeletedRow() {
		return isValidRowStatus(DataRowStatus.DELETE);
	}
	
	private boolean isValidRowStatus(DataRowStatus rowStatus) {
		return isGridRow()
				? rowStatus.getGridRowStatus().equals(_gubun)
				: isValidSuperRowStatus(rowStatus);
	}
	
	private boolean isGridRow() {
		return _gubun != null;
	}
	
	private boolean isValidSuperRowStatus(DataRowStatus status) {
		switch (status) {
		case INSERT:
			return super.isInsertedRow();
		case UPDATE:
			return super.isUpdatedRow();
		case DELETE:
			return super.isDeletedRow();
		default:
			return false;
		}
	}
	
}
