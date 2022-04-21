package com.lotterental.rng.example.service;

import java.util.List;

import com.lotterental.rng.example.vo.NexacroVo;

public interface NexacroVoService {
	
	//단건 조회
	NexacroVo selectNexacroVo(NexacroVo nexacroVo) throws Exception;

    //다건 조회
    List<NexacroVo> selectNexacroVoList(NexacroVo nexacroVo) throws Exception;

    //데이터 추가/수정/삭제
    int saveNexacroVo(NexacroVo nexacroVo) throws Exception;
    
    int saveNexacroVoList(List<NexacroVo> nexacroVoList) throws Exception;
    
    int saveNexacroVoList2(List<NexacroVo> nexacroVoList) throws Exception;
    
    int saveNexacroVoList3(List<NexacroVo> nexacroVoList) throws Exception;
    
}