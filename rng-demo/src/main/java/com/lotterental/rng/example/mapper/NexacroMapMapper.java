package com.lotterental.rng.example.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NexacroMapMapper {
	
	Map<String, Object> selectNexacroMap(Map<String, Object> nexacroMap);
	
    List<Map<String, Object>> selectNexacroMapList(Map<String, Object> nexacroMap);
    
    int insertNexacroMap(Map<String, Object> nexacroMap);
    
    int updateNexacroMap(Map<String, Object> nexacroMap);
    
    int deleteNexacroMap(Map<String, Object> nexacroMap);
    
}
