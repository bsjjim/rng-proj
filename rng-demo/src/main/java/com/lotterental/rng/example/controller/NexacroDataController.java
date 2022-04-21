package com.lotterental.rng.example.controller;

import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_MSG;

import java.util.List;

import com.lotterental.rng.example.service.NexacroDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.common.base.BusinessData;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroDataController {
    
    @Autowired
    private NexacroDataService nexacroService;

    @PostMapping("/selectnexacrodata")
    public NexacroResult selectNexacroData(@ParamDataSet(name = "dsImp") BusinessData nexacroData) throws Exception {
    	log.debug("parameter = {}", nexacroData);
    	NexacroResult result = new NexacroResult();
    	try {
	        BusinessData resultData = nexacroService.selectNexacroData(nexacroData);
	        result.addDataSet("dsRes", resultData);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrodatalist")
    public NexacroResult selectNexacroDataList(@ParamDataSet(name = "dsImp") BusinessData nexacroData) throws Exception {
    	log.debug("parameter = {}", nexacroData);
    	NexacroResult result = new NexacroResult();
    	try {
	        List<BusinessData> resultDataList = nexacroService.selectNexacroDataList(nexacroData);
	        result.addDataSet("dsList", resultDataList);
    	} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId()));
//    		result.addVariable(ErrorInfo.getMsg(), ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/savenexacrodata")
    public NexacroResult saveNexacroData(@ParamDataSet(name = "dsSave") BusinessData nexacroData) throws Exception {
    	log.debug("parameter = {}", nexacroData);
    	NexacroResult result = new NexacroResult();
    	try {
    		nexacroService.saveNexacroData(nexacroData);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/savenexacrodatalist")
    public NexacroResult saveNexacroDataList(@ParamDataSet(name = "dsList") List<BusinessData> nexacroDataList) throws Exception {
    	log.debug("parameter = {}", nexacroDataList);
    	NexacroResult result = new NexacroResult();
    	try {
    		nexacroService.saveNexacroDataList(nexacroDataList);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
}