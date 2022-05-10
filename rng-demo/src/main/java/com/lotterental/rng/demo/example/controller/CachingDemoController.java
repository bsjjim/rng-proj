package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.demo.example.service.CachingDemoService;
import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/caching/demo")
public class CachingDemoController{

    @Autowired
    private CachingDemoService cachingDemoService;

    @RequestMapping("/select/{key}")
    public CachingDemoVo selectComCd(@PathVariable("key") String key) {
        return cachingDemoService.selectComCd(key);
    }

    @RequestMapping("/get/{key}")
    public String getComName(@PathVariable("key") String key) {
        return cachingDemoService.getComName(key);
    }

    @RequestMapping("/select/list/{key}")
    public List<CachingDemoVo> selectCachingList(@PathVariable("key") String key) {
        return cachingDemoService.selectCachingList(key);
    }

    @RequestMapping("/insert/{key}/{value}")
    public void insertCaching(@PathVariable("key") String key, @PathVariable("value") String value) {
        cachingDemoService.insertCaching(key, value);
    }

    @RequestMapping("/update/{key}/{value}")
    public void updateCaching(@PathVariable("key") String key, @PathVariable("value") String value) {
        String reVal = cachingDemoService.updateCaching(key, value);
        log.info("updateCaching ===== {}", reVal);
    }

    @RequestMapping("/get/ehcache/{key}")
    public String getEhCacheComName(@PathVariable("key") String key) {
        return cachingDemoService.getEhCacheComName(key);
    }

    @RequestMapping("/insert/ehcache/{key}/{value}")
    public void insertEhCaching(@PathVariable("key") String key, @PathVariable("value") String value) {
        cachingDemoService.insertEhCaching(key, value);
    }

    @RequestMapping("/update/ehcache/{key}/{value}")
    public void updateEhCaching(@PathVariable("key") String key, @PathVariable("value") String value) {
        String reVal = cachingDemoService.updateEhCaching(key, value);
        log.info("updateEhCaching ===== {}", reVal);
    }
}
