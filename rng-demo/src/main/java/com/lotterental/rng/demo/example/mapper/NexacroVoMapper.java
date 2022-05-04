package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.demo.example.model.NexacroModel;
import com.lotterental.rng.demo.example.vo.NexacroVo;

@Mapper
public interface NexacroVoMapper {
	
	NexacroVo selectNexacroVoByVo(NexacroVo nexacroVo);
	
	NexacroVo selectNexacroVoByModel(NexacroModel nexacroModel);
	
	NexacroModel selectNexacroModelByVo(NexacroVo nexacroVo);
	
	NexacroModel selectNexacroModelByModel(NexacroModel nexacroModel);
		
	List<NexacroVo> selectNexacroVoListByVo(NexacroVo nexacroVo);
	
	List<NexacroVo> selectNexacroVoListByModel(NexacroModel nexacroModel);
	
	List<NexacroModel> selectNexacroModelListByVo(NexacroVo nexacroVo);
	
	List<NexacroModel> selectNexacroModelListByModel(NexacroModel nexacroModel);
	
	NexacroVo selectBusinessRule(NexacroVo nexacroVo);
	
    int insertNexacroVo(NexacroVo nexacroVo);
    
    int insertNexacroVo(NexacroModel nexacroModel);

    int updateNexacroVo(NexacroVo nexacroVo);
    
    int updateNexacroVo(NexacroModel nexacroModel);

    int deleteNexacroVo(NexacroVo nexacroVo);
    
    int deleteNexacroVo(NexacroModel nexacroModel);
    
}
