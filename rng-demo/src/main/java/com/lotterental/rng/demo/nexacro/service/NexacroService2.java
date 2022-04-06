package com.lotterental.rng.demo.nexacro.service;

import java.util.List;
import java.util.Map;

public interface NexacroService2 {
	
	//단건 조회
	Map<String, Object> selectNexacro(Map<String, Object> nexacroMap);
	
	//다건 조회
    List<Map<String, Object>> selectNexacroList(Map<String, Object> nexacroMap);
    
    //데이터 추가/수정/삭제
    int saveNexacro(Map<String, Object> nexacroMap);
    
    int saveNexacroList(List<Map<String, Object>> nexacroMapList);
    
    int saveNexacroList2(List<Map<String, Object>> nexacroMapList);
    
    void updateNexacroList(List<Map<String, Object>> nexacroMapList);
    
}