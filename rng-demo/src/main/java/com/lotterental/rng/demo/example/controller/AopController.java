package com.lotterental.rng.demo.example.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.annotation.TimeCheck;
import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.demo.example.service.AopService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class AopController {

    @Autowired
    private AopService aopService;

    @TimeCheck
    @PostMapping("/doaopsample")
    public RngResult doAopSample(@ParamDataSet(name = "dsImp") Map<String, Object> map) {
    	log.debug("parameter = {}", map);
    	RngResult result = new RngResult();
    	try {
    		aopService.doAopSample(map);
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
}
