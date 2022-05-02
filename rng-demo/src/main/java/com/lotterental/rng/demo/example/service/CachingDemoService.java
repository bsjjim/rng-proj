package com.lotterental.rng.demo.example.service;

import com.lotterental.rng.demo.example.vo.CachingDemoVo;

import java.util.List;

public interface CachingDemoService {
    List<CachingDemoVo> selectComCdList();

    CachingDemoVo getComCd(String id);
}
