package com.lotterental.rng.temp.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.temp.cmmn.model.base.BaseGridMapper;
import com.lotterental.rng.temp.demo.vo.SampleVo;

@Mapper
public interface SampleMapper2 extends BaseGridMapper {
    List<SampleVo> selectSampleList(SampleVo sampleVo);
    List<Map<String, Object>> selectSampleList2(Map<String, Object> sampleMap);
}
