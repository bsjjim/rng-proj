package com.lotterental.rng.temp.demo.service;

import java.util.List;

import com.lotterental.rng.temp.demo.vo.SampleVo;

public interface SampleService {
    List<SampleVo> selectSampleList(SampleVo sampleVo);
    
    int saveSampleList(List<SampleVo> sampleVoList);
    
    int saveSampleList2(List<SampleVo> sampleVoList);
    
    int saveSampleList3(List<SampleVo> sampleVoList);    
}