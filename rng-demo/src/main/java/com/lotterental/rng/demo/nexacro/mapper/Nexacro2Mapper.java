package com.lotterental.rng.demo.nexacro.mapper;

import java.util.List;
import java.util.Map;

import com.lotterental.rng.demo.nexacro.model.NexacroModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;
import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.common.base.BaseGridMapper;

@Mapper
public interface Nexacro2Mapper extends BaseGridMapper {

    List<NexacroModel> selectNexacroList1(NexacroVo nexacroVo);

    List<Map<String, Object>> selectNexacroList2(Map<String, Object> selectMap);

    int insertNexacro(NexacroVo nexacroVo);

    int updateNexacro(NexacroVo nexacroVo);

    int deleteNexacro(NexacroVo nexacroVo);

}
