package com.lotterental.rng.demo.nexacro.service;

import java.util.List;

import com.lotterental.rng.common.base.BizDataMap;

public interface NexacroService3 {
	
	//단건 조회
	BizDataMap selectNexacro(BizDataMap nexacroMap);
	
	//다건조회
    List<BizDataMap> selectNexacroList(BizDataMap nexacroMap);
    
    //데이터 추가/수정/삭제
    int saveNexacro(BizDataMap nexacroMap);
    
    int saveNexacroList(List<BizDataMap> nexacroMapList);
    
    int saveNexacroList2(List<BizDataMap> nexacroMapList);
    
}