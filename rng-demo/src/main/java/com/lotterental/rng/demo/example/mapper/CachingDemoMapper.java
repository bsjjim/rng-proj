package com.lotterental.rng.demo.example.mapper;

import com.lotterental.rng.demo.example.model.CachingDemoModel;
import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CachingDemoMapper {
    CachingDemoVo selectComCd(String key);

    String getComName(String key);

    List<CachingDemoVo> selectCachingList(String key);

    void insertCaching(CachingDemoModel cachingDemoModel);
}
