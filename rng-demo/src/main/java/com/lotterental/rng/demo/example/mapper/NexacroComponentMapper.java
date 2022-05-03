package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.core.common.base.BaseGridMapper;
import com.lotterental.rng.demo.example.model.NexacroModel;
import com.lotterental.rng.demo.example.vo.NexacroVo;

@Mapper
public interface NexacroComponentMapper extends BaseGridMapper {
	
	NexacroModel selectNexacroVo(NexacroVo nexacroVo);
	
	List<NexacroModel> selectNexacroVoList(NexacroVo nexacroVo);

}
