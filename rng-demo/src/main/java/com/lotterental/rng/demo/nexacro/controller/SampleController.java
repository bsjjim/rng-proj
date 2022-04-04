package com.lotterental.rng.demo.nexacro.controller;

import java.util.List;

import com.lotterental.rng.demo.nexacro.service.SampleService;
import com.lotterental.rng.demo.nexacro.vo.SampleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class SampleController {

    @Autowired
    private SampleService sampleService;
    
    @PostMapping("/selectsamplelist")
    public NexacroResult selectSampleList(@ParamDataSet(name = "dsImp") SampleVo sampleVo) {
    	log.debug("sampleVo = {}", sampleVo);
        List<SampleVo> sampleVoList = sampleService.selectSampleList(sampleVo);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", sampleVoList);
        return result;
    }
    
    @PostMapping("/savesamplelist")
    public NexacroResult saveSampleList(@ParamDataSet(name = "dsList") List<SampleVo> sampleVoList) {
    	sampleService.saveSampleList(sampleVoList);
        return new NexacroResult();
    }
    
}
