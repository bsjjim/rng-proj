package com.lotterental.rng.demo.nexacro.controller;

import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_MSG;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.common.http.RestUtils;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.nexacro.service.NexacroVoService;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;
import com.lotterental.rng.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroVoController {

    @Autowired
    private NexacroVoService nexacroService;

    @PostMapping("/selectnexacrovo")
    public NexacroResult selectNexacroVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	NexacroResult result = new NexacroResult();
    	try {
    		NexacroVo resultVo = nexacroService.selectNexacroVo(nexacroVo);
    		result.addDataSet("dsRes", resultVo);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public NexacroResult selectNexacroVoList(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	NexacroResult result = new NexacroResult();
    	try {
    		List<NexacroVo> resultVoList = nexacroService.selectNexacroVoList(nexacroVo);
    		result.addDataSet("dsList", resultVoList);
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
    
    @PostMapping("/savenexacrovo")
    public NexacroResult saveNexacroVo(@ParamDataSet(name = "dsSave") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	NexacroResult result = new NexacroResult();
    	try {
    		nexacroService.saveNexacroVo(nexacroVo);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
    @PostMapping("/savenexacrovolist")
    public NexacroResult saveNexacroVoList(@ParamDataSet(name = "dsList") List<NexacroVo> nexacroVoList) throws Exception {
    	log.debug("parameter = {}", nexacroVoList);
    	NexacroResult result = new NexacroResult();
    	try {
    		nexacroService.saveNexacroVoList(nexacroVoList);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
    @PostMapping("/resttemplate")
    public NexacroResult resttemplate(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) throws Exception {
    	log.debug("parameter = {}", nexacroVo);
    	NexacroResult result = new NexacroResult();
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
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
}