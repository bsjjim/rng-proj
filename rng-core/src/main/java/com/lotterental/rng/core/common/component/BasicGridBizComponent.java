package com.lotterental.rng.core.common.component;

import java.util.List;

import com.lotterental.rng.core.common.base.BaseGridMapper;
import com.lotterental.rng.core.common.base.BaseGridVo;

public class BasicGridBizComponent<T extends BaseGridVo> {
	private List<T> bizVoList;
	private BaseGridMapper mapper;
	
	private BasicGridBizComponent(List<T> bizVoList, BaseGridMapper mapper) {
		this.bizVoList = bizVoList;
		this.mapper = mapper;
	}
	
	public static <T extends BaseGridVo> BasicGridBizComponent<T> newInstance(List<T> bizVoList, BaseGridMapper mapper) {
		return new BasicGridBizComponent<>(bizVoList, mapper);
	}
	
	public int process() {
		return bizVoList.stream()
				.mapToInt(this::process)
				.sum();
    }
	
	private int process(BaseGridVo baseGridVo) {
		if (baseGridVo.isInsertedRow()) {
			return mapper.insert(baseGridVo);
		} else if (baseGridVo.isUpdatedRow()) {
			return mapper.update(baseGridVo);
		} else if (baseGridVo.isDeletedRow()) {
			return mapper.delete(baseGridVo);
		}
		return 0;
	}
}
