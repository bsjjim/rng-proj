package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.demo.example.service.CachingDemoService;
import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/caching")
public class CachingDemoController {

    @Autowired
    private CachingDemoService cachingDemoService;

    @GetMapping("/getcomcd")
    public CachingDemoVo getComCd(@RequestParam("id") String id) {
        return cachingDemoService.getComCd(id);
    }

    @GetMapping("/selectcomcdlist")
    public List<CachingDemoVo> selectComCdList() {
        return cachingDemoService.selectComCdList();
    }

}
