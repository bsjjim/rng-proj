package com.lotterental.rng.demo.example.service;

import com.lotterental.rng.demo.example.vo.CachingDemoVo;

import java.util.List;

public interface CachingDemoService {

    CachingDemoVo selectComCd(String key);

    String getComName(String key);

    List<CachingDemoVo> selectCachingList(String key);

    void insertCaching();
}
