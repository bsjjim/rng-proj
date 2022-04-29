package com.lotterental.rng.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BusinessData;
import com.lotterental.rng.demo.common.component.result.RngResult;
import com.lotterental.rng.demo.example.service.NexacroDataService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroDataController {
    
    @Autowired
    private NexacroDataService nexacroService;

    @PostMapping("/selectnexacrodata")
    public RngResult selectNexacroData(@ParamDataSet(name = "dsImp") BusinessData nexacroData) {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	try {
	        result.addDataSet("dsRes", nexacroService.selectNexacroData(nexacroData));
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrodatalist")
    public RngResult selectNexacroDataList(@ParamDataSet(name = "dsImp") BusinessData nexacroData) {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	if (!StringUtils.hasText(nexacroData.getString("modId"))) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈ID");
    	} else if (!StringUtils.hasText(nexacroData.getString("modNm"))) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈명");
    	}
    	try {
	        result.addDataSet("dsList", nexacroService.selectNexacroDataList(nexacroData));
    	} catch (BusinessException e) {
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/savenexacrodata")
    public RngResult saveNexacroData(@ParamDataSet(name = "dsSave") BusinessData nexacroData) {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroData(nexacroData);
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/savenexacrodatalist")
    public RngResult saveNexacroDataList(@ParamDataSet(name = "dsList") List<BusinessData> nexacroDataList) {
    	log.debug("parameter = {}", nexacroDataList);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroDataList(nexacroDataList);
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
}
