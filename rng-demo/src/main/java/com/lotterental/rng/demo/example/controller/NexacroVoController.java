package com.lotterental.rng.demo.example.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.component.result.RngResult;
import com.lotterental.rng.demo.common.http.RestUtils;
import com.lotterental.rng.demo.example.service.NexacroVoService;
import com.lotterental.rng.demo.example.vo.NexacroVo;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroVoController {

    @Autowired
    private NexacroVoService nexacroService;

    @PostMapping("/selectnexacrovo")
    public RngResult selectNexacroVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		NexacroVo resultVo = nexacroService.selectNexacroVo(nexacroVo);
    		result.addDataSet("dsRes", resultVo);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public RngResult selectNexacroVoList(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		List<NexacroVo> resultVoList = nexacroService.selectNexacroVoList(nexacroVo);
    		result.addDataSet("dsList", resultVoList);
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
    
    @PostMapping("/savenexacrovo")
    public RngResult saveNexacroVo(@ParamDataSet(name = "dsSave") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroVo(nexacroVo);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
    @PostMapping("/savenexacrovolist")
    public RngResult saveNexacroVoList(@ParamDataSet(name = "dsList") List<NexacroVo> nexacroVoList) throws Exception {
    	log.debug("parameter = {}", nexacroVoList);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroVoList(nexacroVoList);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
    @PostMapping("/resttemplate")
    public RngResult resttemplate(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		Map<String, String> param = new HashMap<String, String>();
    		param.put("modId", nexacroVo.getModId());
    		param.put("modNm", nexacroVo.getModNm());
//    		result.add
    		List<NexacroVo> nxList = RestUtils.getObjectByGetApi("http://localhost:8080/getrestsample", param, NexacroVo.class);
    		log.debug("result = {}", nxList);
    		result.addDataSet("dsList", nxList);
    	} catch (Exception e) {
    		e.printStackTrace();
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
}