package com.lotterental.rng.temp.cmmn.model.base;

public interface BaseGridMapper {
	<T extends BaseGridVo> int insert(T baseGridVo);
	<T extends BaseGridVo> int update(T baseGridVo);
	<T extends BaseGridVo> int delete(T baseGridVo);
}
