package com.lotterental.rng.demo.nexacro.service;

import java.util.List;

import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

public interface NexacroVoService {
	
	//단건 조회
	NexacroVo selectNexacroVo(NexacroVo nexacroVo);

    //다건 조회
    List<NexacroVo> selectNexacroVoList(NexacroVo nexacroVo);

    //데이터 추가/수정/삭제
    int saveNexacroVo(NexacroVo nexacroVo);
    
    int saveNexacroVoList(List<NexacroVo> nexacroVoList);
    
    int saveNexacroVoList2(List<NexacroVo> nexacroVoList);
    
    int saveNexacroVoList3(List<NexacroVo> nexacroVoList);
    
}