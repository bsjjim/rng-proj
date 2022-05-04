package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.demo.example.mapper.CachingDemoMapper;
import com.lotterental.rng.demo.example.model.CachingDemoModel;
import com.lotterental.rng.demo.example.service.CachingDemoService;
import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class CachingDemoServiceImpl implements CachingDemoService {

    @Autowired
    private CachingDemoMapper cachingDemoMapper;

    @Cacheable(cacheNames = "selectComCd", key="#key", cacheManager = "redisCacheManager")
    @Override
    public CachingDemoVo selectComCd(String key) {
        return cachingDemoMapper.selectComCd(key);
    }

//  (value = "LocalCacheData", key="getComName", cacheManager = "ehCacheManager")
    @Cacheable(cacheNames = "getComName", key="#key", cacheManager = "redisCacheManager")
    @Override
    public String getComName(String key) {
        return cachingDemoMapper.getComName(key);
    }

    @Cacheable(cacheNames = "selectCachingList", key= "#key", cacheManager = "redisCacheManager")
    @Override
    public List<CachingDemoVo> selectCachingList(String key) {
        List<CachingDemoVo> comCdList = cachingDemoMapper.selectCachingList(key);
        log.info("selectComCd ================= {}", comCdList);
        return comCdList;
    }

    @Override
    public void insertCaching() {
        CachingDemoModel cachingDemoModel = new CachingDemoModel();
        cachingDemoModel.setComCd("code008");
        cachingDemoModel.setComName("lmh8");
        cachingDemoMapper.insertCaching(cachingDemoModel);
    }

}
