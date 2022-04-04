package com.lotterental.rng.demo.nexacro.service;

import java.util.List;

import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

public interface NexacroService {
    List<NexacroVo> selectSampleList(NexacroVo sampleVo);
    
    int saveSampleList(List<NexacroVo> sampleVoList);
    
    int saveSampleList2(List<NexacroVo> sampleVoList);
    
    int saveSampleList3(List<NexacroVo> sampleVoList);    
}