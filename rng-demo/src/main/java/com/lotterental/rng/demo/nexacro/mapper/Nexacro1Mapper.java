package com.lotterental.rng.demo.nexacro.mapper;

import java.util.List;

import com.lotterental.rng.demo.nexacro.model.NexacroModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Nexacro1Mapper {

    List<NexacroModel> selectNexacroList(NexacroVo nexacroVo);

    int insertNexacro(NexacroVo nexacroVo);

    int updateNexacro(NexacroVo nexacroVo);

    int deleteNexacro(NexacroVo nexacroVo);

}
