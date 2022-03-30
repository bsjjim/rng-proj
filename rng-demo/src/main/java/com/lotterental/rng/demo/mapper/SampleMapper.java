package com.lotterental.rng.demo.mapper;


import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SampleMapper {
    List<Map<String,Object>> selectSampleList(Map<String, String> ds_search) throws Exception;
    int selectId() throws Exception;
    void updateId(Map<String,Object> idData) throws Exception;
    void insertSampleList(Map<String,Object> sampleData) throws Exception;
    void updateSampleList(Map<String,Object> sampleData) throws Exception;
    void deleteSampleList(Map<String,Object> sampleData) throws Exception;
}
