package com.lotterental.rng.demo.nexacro.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.common.base.BizDataMap;
import com.lotterental.rng.demo.nexacro.model.NexacroModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

@Mapper
public interface Nexacro1Mapper {
	
	NexacroModel selectNexacro(NexacroVo nexacroVo);
	
	Map<String, Object> selectNexacro(Map<String, Object> nexacroMap);
	
	BizDataMap selectNexacro(BizDataMap nexacroMap);
	
	List<NexacroModel> selectNexacroList(NexacroVo nexacroVo);
	
    List<Map<String, Object>> selectNexacroList2(Map<String, Object> nexacroMap);
    
    List<BizDataMap> selectNexacroList3(BizDataMap nexacroMap);
    
    int insertNexacro(NexacroVo nexacroVo);

    int updateNexacro(NexacroVo nexacroVo);

    int deleteNexacro(NexacroVo nexacroVo);
    
    int insertNexacro(Map<String, Object> nexacroMap);
    
    int updateNexacro(Map<String, Object> nexacroMap);
    
    int deleteNexacro(Map<String, Object> nexacroMap);
    
    int insertNexacro(BizDataMap nexacroMap);
    
    int updateNexacro(BizDataMap nexacroMap);
    
    int deleteNexacro(BizDataMap nexacroMap);

}
