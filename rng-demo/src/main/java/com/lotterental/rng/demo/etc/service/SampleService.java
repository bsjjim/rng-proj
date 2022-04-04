package com.lotterental.rng.demo.etc.service;


import com.lotterental.rng.demo.etc.model.SampleModel;

import java.util.List;
import java.util.Map;

public interface SampleService {
    //데이터 조회
    List<SampleModel> selectSampleList(Map<String,String> ds_search) throws Exception;

    //데이터 추가/수정/삭제
    void updateSampleList(List<Map<String,Object>> sampleList) throws Exception;
}