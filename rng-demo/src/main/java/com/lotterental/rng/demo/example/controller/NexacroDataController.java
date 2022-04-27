package com.lotterental.rng.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BusinessData;
import com.lotterental.rng.demo.common.component.result.RngResult;
import com.lotterental.rng.demo.example.service.NexacroDataService;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroDataController {
    
    @Autowired
    private NexacroDataService nexacroService;

    @PostMapping("/selectnexacrodata")
    public RngResult selectNexacroData(@ParamDataSet(name = "dsImp") BusinessData nexacroData) throws Exception {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	try {
	        BusinessData resultData = nexacroService.selectNexacroData(nexacroData);
	        result.addDataSet("dsRes", resultData);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrodatalist")
    public RngResult selectNexacroDataList(@ParamDataSet(name = "dsImp") BusinessData nexacroData) throws Exception {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	try {
	        List<BusinessData> resultDataList = nexacroService.selectNexacroDataList(nexacroData);
	        result.addDataSet("dsList", resultDataList);
    	} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
//    		result.addVariable(ErrorInfo.getMsg(), ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/savenexacrodata")
    public RngResult saveNexacroData(@ParamDataSet(name = "dsSave") BusinessData nexacroData) throws Exception {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroData(nexacroData);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/savenexacrodatalist")
    public RngResult saveNexacroDataList(@ParamDataSet(name = "dsList") List<BusinessData> nexacroDataList) throws Exception {
    	log.debug("parameter = {}", nexacroDataList);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroDataList(nexacroDataList);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
}