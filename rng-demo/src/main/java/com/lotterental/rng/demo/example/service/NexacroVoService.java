package com.lotterental.rng.demo.example.service;

import java.util.List;

import com.lotterental.rng.demo.example.vo.NexacroVo;

public interface NexacroVoService {
	
	//단건 조회
	NexacroVo selectNexacroVoByVoAndVo(NexacroVo nexacroVo);
	
	NexacroVo selectNexacroVoByVo2VoAndVo(NexacroVo nexacroVo);
	
	NexacroVo selectNexacroVoByVo2ModelAndVo(NexacroVo nexacroVo);
		
	NexacroVo selectNexacroVoByVoAndModel2Vo(NexacroVo nexacroVo);
		
	NexacroVo selectNexacroVoByVo2ModelAndModel2Vo(NexacroVo nexacroVo);

    //다건 조회
    List<NexacroVo> selectNexacroVoListByVoAndVo(NexacroVo nexacroVo);
    
    List<NexacroVo> selectNexacroVoListByVo2VoAndVo(NexacroVo nexacroVo);
    
    List<NexacroVo> selectNexacroVoListByVo2ModelAndVo(NexacroVo nexacroVo);
    
    List<NexacroVo> selectNexacroVoListByVoAndModel2Vo(NexacroVo nexacroVo);
    
    List<NexacroVo> selectNexacroVoListByVo2ModelAndModel2Vo(NexacroVo nexacroVo);

    //데이터 추가/수정/삭제
    int saveNexacroVo(NexacroVo nexacroVo);
    
    int saveNexacroVoList(List<NexacroVo> nexacroVoList);
    
    int saveNexacroVoListByStream(List<NexacroVo> nexacroVoList);
    
    int saveNexacroVoListByComponent(List<NexacroVo> nexacroVoList);
    
}