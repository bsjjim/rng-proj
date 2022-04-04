package com.lotterental.rng.demo.nexacro.mapper;

import java.util.List;
import java.util.Map;

import com.lotterental.rng.demo.nexacro.vo.NexacroVo;
import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.common.base.BaseGridMapper;

@Mapper
public interface NexacroMapper2 extends BaseGridMapper {
    List<NexacroVo> selectSampleList(NexacroVo sampleVo);
    List<Map<String, Object>> selectSampleList2(Map<String, Object> sampleMap);
}
