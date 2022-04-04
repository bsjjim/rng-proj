package com.lotterental.rng.demo.nexacro.mapper;

import java.util.List;
import java.util.Map;

import com.lotterental.rng.demo.nexacro.vo.SampleVo;
import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.common.base.BaseGridMapper;

@Mapper
public interface SampleMapper2 extends BaseGridMapper {
    List<SampleVo> selectSampleList(SampleVo sampleVo);
    List<Map<String, Object>> selectSampleList2(Map<String, Object> sampleMap);
}
