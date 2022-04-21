package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.demo.example.model.NexacroModel;
import com.lotterental.rng.demo.example.vo.NexacroVo;

@Mapper
public interface NexacroVoMapper {
	
	NexacroModel selectNexacroVo(NexacroVo nexacroVo);
		
	List<NexacroModel> selectNexacroVoList(NexacroVo nexacroVo);
	
    int insertNexacroVo(NexacroVo nexacroVo);

    int updateNexacroVo(NexacroVo nexacroVo);

    int deleteNexacroVo(NexacroVo nexacroVo);
    
}
