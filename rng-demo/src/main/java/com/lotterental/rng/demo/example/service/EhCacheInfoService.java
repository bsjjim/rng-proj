package com.lotterental.rng.demo.example.service;

import com.lotterental.rng.demo.example.vo.EhCacheKeyVo;
import com.lotterental.rng.demo.example.vo.EhCacheValueVo;

import java.util.List;

public interface EhCacheInfoService {
    List<EhCacheKeyVo> selectEhCacheKeyList();

    List<EhCacheValueVo> selectEhCacheValueList();

    void deleteAllEhCache();

    void deleteEhCache(String cachename);
}
