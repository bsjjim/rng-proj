package com.lotterental.rng.demo.nexacro.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.demo.nexacro.service.NexacroMapService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroMapController {

    @Autowired
    private NexacroMapService nexacroService;

    @PostMapping("/selectnexacromap")
    public NexacroResult selectNexacroMap(@ParamDataSet(name = "dsSearch") Map<String, Object> nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	Map<String, Object> resultMap = nexacroService.selectNexacroMap(nexacroMap);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRes", resultMap);
        return result;
    }
    
    @PostMapping("/selectnexacromaplist")
    public NexacroResult selectNexacroMapList(@ParamDataSet(name = "dsSearch") Map<String, Object> nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
        List<Map<String, Object>> resultMapList = nexacroService.selectNexacroMapList(nexacroMap);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", resultMapList);
        return result;
    }
    
    @PostMapping("/savenexacromap")
    public NexacroResult saveNexacroMap(@ParamDataSet(name = "dsSave") Map<String, Object> nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	nexacroService.saveNexacroMap(nexacroMap);
        return new NexacroResult();
    }
    
    @PostMapping("/savenexacromaplist")
    public NexacroResult saveNexacroMapList(@ParamDataSet(name = "dsSaveList") List<Map<String, Object>> nexacroMapList) {
    	log.info("parameter = {}", nexacroMapList);
    	nexacroService.saveNexacroMapList(nexacroMapList);
        return new NexacroResult();
    }
    
}