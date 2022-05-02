package com.lotterental.rng.demo.example.service;

import java.util.List;

import com.lotterental.rng.demo.example.vo.NexacroVo;

public interface NexacroVoService {
	
	//단건 조회
	NexacroVo selectNexacroVo(NexacroVo nexacroVo);

    //다건 조회
    List<NexacroVo> selectNexacroVoList(NexacroVo nexacroVo);

    //데이터 추가/수정/삭제
    int saveNexacroVo(NexacroVo nexacroVo);
    
    int saveNexacroVoList(List<NexacroVo> nexacroVoList);
    
    int saveNexacroVoListByStream(List<NexacroVo> nexacroVoList);
    
    int saveNexacroVoListByComponent(List<NexacroVo> nexacroVoList);
    
}