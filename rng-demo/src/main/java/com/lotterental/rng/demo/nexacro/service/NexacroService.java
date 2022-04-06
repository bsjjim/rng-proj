package com.lotterental.rng.demo.nexacro.service;

import java.util.List;

import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

public interface NexacroService {
	
	//단건 조회
	NexacroVo selectNexacro(NexacroVo nexacroVo);

    //다건 조회
    List<NexacroVo> selectNexacroList(NexacroVo nexacroVo);

    //데이터 추가/수정/삭제
    int saveNexacro(NexacroVo nexacroVo);
    
    int saveNexacroList(List<NexacroVo> nexacroVoList);
    
    int saveNexacroList2(List<NexacroVo> nexacroVoList);
    
    int saveNexacroList3(List<NexacroVo> nexacroVoList);

}