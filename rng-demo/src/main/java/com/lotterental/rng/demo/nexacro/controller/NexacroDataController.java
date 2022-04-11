package com.lotterental.rng.demo.nexacro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.common.base.BusinessData;
import com.lotterental.rng.demo.nexacro.service.NexacroDataService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroDataController {
    
    @Autowired
    private NexacroDataService nexacroService;

    @PostMapping("/selectnexacrodata")
    public NexacroResult selectNexacroData(@ParamDataSet(name = "dsImp") BusinessData nexacroData) {
    	log.info("parameter = {}", nexacroData);
        BusinessData resultData = nexacroService.selectNexacroData(nexacroData);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRes", resultData);
        return result;
    }
    
    @PostMapping("/selectnexacrodatalist")
    public NexacroResult selectNexacroDataList(@ParamDataSet(name = "dsImp") BusinessData nexacroData) {
    	log.info("parameter = {}", nexacroData);
        List<BusinessData> resultDataList = nexacroService.selectNexacroDataList(nexacroData);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", resultDataList);
        return result;
    }
    
    @PostMapping("/savenexacrodata")
    public NexacroResult saveNexacroData(@ParamDataSet(name = "dsSave") BusinessData nexacroData) {
    	log.info("parameter = {}", nexacroData);
    	nexacroService.saveNexacroData(nexacroData);
        return new NexacroResult();
    }
    
    @PostMapping("/savenexacrodatalist")
    public NexacroResult saveNexacroDataList(@ParamDataSet(name = "dsList") List<BusinessData> nexacroDataList) {
    	log.info("parameter = {}", nexacroDataList);
    	nexacroService.saveNexacroDataList(nexacroDataList);
        return new NexacroResult();
    }
    
}