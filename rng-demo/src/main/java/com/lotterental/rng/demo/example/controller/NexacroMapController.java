package com.lotterental.rng.demo.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.demo.example.service.NexacroMapService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroMapController {
	
    @Autowired
    private NexacroMapService nexacroService;

    @PostMapping("/selectnexacromap")
    public RngResult selectNexacroMap(@ParamDataSet(name = "dsImp") Map<String, Object> nexacroMap) {
    	log.debug("parameter = {}", nexacroMap);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet("dsRes", nexacroService.selectNexacroMap(nexacroMap));
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectnexacromaplist")
    public RngResult selectNexacroMapList(@ParamDataSet(name = "dsImp") Map<String, Object> nexacroMap) {
    	log.debug("parameter = {}", nexacroMap);
    	RngResult result = new RngResult();
    	if (!StringUtils.hasText((String) nexacroMap.get("modId"))) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈ID");
    	} else if (!StringUtils.hasText((String) nexacroMap.get("modNm"))) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈명");
    	}
    	try {    
	        result.addDataSet("dsList", nexacroService.selectNexacroMapList(nexacroMap));
    	} catch (BusinessException e) {
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/savenexacromap")
    public RngResult saveNexacroMap(@ParamDataSet(name = "dsSave") Map<String, Object> nexacroMap) {
    	log.debug("parameter = {}", nexacroMap);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroMap(nexacroMap);
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
    	return result;
    }
    
    @PostMapping("/savenexacromaplist")
    public RngResult saveNexacroMapList(@ParamDataSet(name = "dsList") List<Map<String, Object>> nexacroMapList) {
    	log.debug("parameter = {}", nexacroMapList);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroMapList(nexacroMapList);
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
    	return result;
    }
    
    @RequestMapping(value = "/echo")
    public RngResult echo(
            @ParamDataSet(name = "dsInput", required = false) Map<String, Object> selectNexacroMap
    ) {
        log.debug(selectNexacroMap.toString());
        RngResult result = new RngResult();
        result.addDataSet("dsList", null);
        return result;
    }
    
}