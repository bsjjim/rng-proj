package com.lotterental.rng.demo.service;

import java.util.List;
import java.util.Map;

public interface NexacroMapService {
	
	//단건 조회
	Map<String, Object> selectNexacroMap(Map<String, Object> nexacroMap) throws Exception;
	
	//다건 조회
    List<Map<String, Object>> selectNexacroMapList(Map<String, Object> nexacroMap) throws Exception;
    
    //데이터 추가/수정/삭제
    int saveNexacroMap(Map<String, Object> nexacroMap) throws Exception;
    
    int saveNexacroMapList(List<Map<String, Object>> nexacroMapList) throws Exception;
    
    int saveNexacroMapList2(List<Map<String, Object>> nexacroMapList) throws Exception;
    
    void updateNexacroList(List<Map<String, Object>> nexacroMapList) throws Exception;
    
}