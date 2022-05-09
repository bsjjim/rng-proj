package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.demo.example.mapper.CachingDemoMapper;
import com.lotterental.rng.demo.example.model.CachingDemoModel;
import com.lotterental.rng.demo.example.service.CachingDemoService;
import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
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

    @Cacheable(cacheNames = "COMNAME", key="#key", cacheManager = "redisCacheManager", unless = "#result == null")
    @Override
    public String getComName(String key) {
        return cachingDemoMapper.getComName(key);
    }

    @Cacheable(cacheNames = "COMCDLIST", key= "#key", cacheManager = "redisCacheManager")
    @Override
    public List<CachingDemoVo> selectCachingList(String key) {
        List<CachingDemoVo> comCdList = cachingDemoMapper.selectCachingList(key);
        log.info("selectComCd ================= {}", comCdList);
        return comCdList;
    }

    @CacheEvict(cacheNames = "COMNAME", key= "#key", cacheManager = "redisCacheManager")
    @Override
    public void insertCaching(String key, String value) {
        CachingDemoModel cachingDemoModel = new CachingDemoModel();
        cachingDemoModel.setComCd(key);
        cachingDemoModel.setComName(value);
        cachingDemoMapper.insertCaching(cachingDemoModel);
    }

    @Cacheable(value = "CCH:L:COMMON", key="#key", cacheManager = "ehCacheManager", unless = "#result == null")
    @Override
    public String getEhCacheComName(String key) {
        return cachingDemoMapper.getComName(key);
    }

}
