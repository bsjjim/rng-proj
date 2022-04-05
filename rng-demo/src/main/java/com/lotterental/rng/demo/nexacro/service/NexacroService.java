package com.lotterental.rng.demo.nexacro.service;

import java.util.List;
import java.util.Map;

import com.lotterental.rng.demo.nexacro.model.NexacroModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

public interface NexacroService {

    //데이터 조회
    List<Map<String, Object>> selectNexacroList(Map<String, Object> selectMap) throws Exception;

    List<NexacroVo> selectNexacroList(NexacroVo nexacroVo);

    //데이터 추가/수정/삭제
    int saveNexacroList1(List<NexacroVo> nexacroVoList);

    int saveNexacroList2(List<NexacroVo> nexacroVoList);

    int saveNexacroList3(List<NexacroVo> nexacroVoList);

    void updateNexacroList(List<Map<String,Object>> mapList) throws Exception;

}