package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.demo.example.service.EhCacheInfoService;
import com.lotterental.rng.demo.example.vo.EhCacheKeyVo;
import com.lotterental.rng.demo.example.vo.EhCacheValueVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/ehcache/info")
public class EhCacheInfoController {

    @Autowired
    private EhCacheInfoService ehCacheInfoService;

    @RequestMapping("/selectkey")
    public List<EhCacheKeyVo> selectEhCacheKeyList() {
        return ehCacheInfoService.selectEhCacheKeyList();
    }

    @RequestMapping("/selectvalue")
    public List<EhCacheValueVo> selectEhCacheValueList() {
        return ehCacheInfoService.selectEhCacheValueList();
    }

    @RequestMapping("/deleteall")
    public void deleteAllEhCache() {
        ehCacheInfoService.deleteAllEhCache();
    }

    @RequestMapping("/delete/{cachename}")
    public void deleteEhCache(@PathVariable("cachename") String cachename) {
        ehCacheInfoService.deleteEhCache(cachename);
    }
}
