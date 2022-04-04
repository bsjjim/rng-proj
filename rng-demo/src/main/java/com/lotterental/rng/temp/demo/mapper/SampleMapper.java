package com.lotterental.rng.temp.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.temp.cmmn.model.BizDataMap;
import com.lotterental.rng.temp.demo.vo.SampleVo;

@Mapper
public interface SampleMapper {
    List<SampleVo> selectSampleList(SampleVo sampleVo);
    List<Map<String, Object>> selectSampleList(Map<String, Object> sampleMap);
    List<BizDataMap> selectSampleList(BizDataMap sampleMap);
    
    // 직접 구현시 추가, BasicGridBizComponent 사용시에는 삭제
    int insertSample(SampleVo sampleVo);
    int updateSample(SampleVo sampleVo);
    int deleteSample(SampleVo sampleVo);
    int insertSample(Map<String, Object> sampleMap);
    int updateSample(Map<String, Object> sampleMap);
    int deleteSample(Map<String, Object> sampleMap);
    int insertSample(BizDataMap sampleMap);
    int updateSample(BizDataMap sampleMap);
    int deleteSample(BizDataMap sampleMap);
}
