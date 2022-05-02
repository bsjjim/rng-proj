package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.demo.common.cache.CacheKey;
import com.lotterental.rng.demo.example.mapper.CachingDemoMapper;
import com.lotterental.rng.demo.example.service.CachingDemoService;
import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class CachingDemoServiceImpl implements CachingDemoService {

    @Autowired
    private CachingDemoMapper cachingDemoMapper;

//    @Cacheable(value = CacheKey.COMCD, key = "#id", unless = "#result == null")
    @Override
    public CachingDemoVo getComCd(String id) {
        return cachingDemoMapper.getComCd(id);
    }

    @Cacheable(value = CacheKey.POST)
    @Override
    public List<CachingDemoVo> selectComCdList() {
        List<CachingDemoVo> comCdList = cachingDemoMapper.selectComCdList();
        log.info("selectComCd ================= {}", comCdList);
        return comCdList;
    }


}
