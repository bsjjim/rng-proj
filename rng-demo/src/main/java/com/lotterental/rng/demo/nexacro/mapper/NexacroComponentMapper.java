package com.lotterental.rng.demo.nexacro.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.common.base.BaseGridMapper;
import com.lotterental.rng.demo.nexacro.model.NexacroModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

@Mapper
public interface NexacroComponentMapper extends BaseGridMapper {
	
	NexacroModel selectNexacroVo(NexacroVo nexacroVo);
	
	List<NexacroModel> selectNexacroVoList(NexacroVo nexacroVo);

}
