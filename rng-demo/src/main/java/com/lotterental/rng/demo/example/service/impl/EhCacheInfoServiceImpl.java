package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.demo.example.service.EhCacheInfoService;
import com.lotterental.rng.demo.example.vo.EhCacheKeyVo;
import com.lotterental.rng.demo.example.vo.EhCacheValueVo;
import net.sf.ehcache.Ehcache;
import net.sf.ehcache.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EhCacheInfoServiceImpl implements EhCacheInfoService {

    @Autowired
    private EhCacheCacheManager ehCacheCacheManager;

    @Override
    public List<EhCacheKeyVo> selectEhCacheKeyList() {
        List<EhCacheKeyVo> result = new ArrayList<>();
        for (String cacheName : ehCacheCacheManager.getCacheNames()) {
            EhCacheKeyVo vo = new EhCacheKeyVo();
            vo.setCacheName(cacheName);
            Ehcache ehcache = (Ehcache) Objects.requireNonNull(ehCacheCacheManager.getCache(cacheName)).getNativeCache();
            vo.setKeyList(ehcache.getKeys());
            result.add(vo);
        }

        return result;
    }

    @Override
    public List<EhCacheValueVo> selectEhCacheValueList() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<EhCacheValueVo> valueResult = new ArrayList<>();
        for (String cacheName : ehCacheCacheManager.getCacheNames()) {
            Ehcache ehcache = (Ehcache) Objects.requireNonNull(ehCacheCacheManager.getCache(cacheName)).getNativeCache();
            ehcache.getKeys().forEach(key -> {
                EhCacheValueVo vo = new EhCacheValueVo();
                try {
                    Element element = ehcache.get(key);
                    vo.setCacheName(cacheName);
                    vo.setKey((String) element.getObjectKey());
                    vo.setValue(Optional.ofNullable(element.getObjectValue()).orElse("null").toString());
                    vo.setVersion(element.getVersion());
                    vo.setHitCount(element.getHitCount());
                    vo.setCreationTime(simpleDateFormat.format(element.getCreationTime()));
                    vo.setLastAccessTime(simpleDateFormat.format(element.getLastAccessTime()));
                } catch (Exception e) {
                    return;
                }
                valueResult.add(vo);
            });
        }
        return valueResult;
    }

    @Override
    public void deleteAllEhCache() {
        for (String cacheName : ehCacheCacheManager.getCacheNames()) {
            Objects.requireNonNull(ehCacheCacheManager.getCache(cacheName)).clear();
        }
    }

    @Override
    public void deleteEhCache(String cachename) {
        Cache targetCache = ehCacheCacheManager.getCache(cachename);
        targetCache.clear();
    }
}
