package com.lotterental.rng.common.component;

import java.util.List;

import com.lotterental.rng.common.base.BaseGridMapper;
import com.lotterental.rng.common.base.BaseGridVo;

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
	
	private int process(BaseGridVo vo) {
		if (vo.isInsertedRow()) {
			return mapper.insert(vo);
		} else if (vo.isUpdatedRow()) {
			return mapper.update(vo);
		} else if (vo.isDeletedRow()) {
			return mapper.delete(vo);
		}
		return 0;
	}	
}
