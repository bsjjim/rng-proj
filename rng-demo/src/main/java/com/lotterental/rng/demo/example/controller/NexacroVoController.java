package com.lotterental.rng.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.NexacroVoService;
import com.lotterental.rng.demo.example.vo.NexacroVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroVoController {

    @Autowired
    private NexacroVoService nexacroService;

    @PostMapping("/selectnexacrovo")
    public RngResult selectNexacroVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet("dsRes", nexacroService.selectNexacroVoByVoAndVo(nexacroVo));
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public RngResult selectNexacroVoListByVoAndVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	if (!StringUtils.hasText(nexacroVo.getModId())) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈ID");
    	} else if (!StringUtils.hasText(nexacroVo.getModNm())) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈명");
    	}
    	try {
    		result.addDataSet("dsList", nexacroService.selectNexacroVoListByVoAndVo(nexacroVo));
    	} catch (BusinessException e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public RngResult selectNexacroVoListByVo2ModelAndVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet("dsList", nexacroService.selectNexacroVoListByVo2ModelAndVo(nexacroVo));
    	} catch (BusinessException e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public RngResult selectNexacroVoListByVoAndModel2Vo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	if (!StringUtils.hasText(nexacroVo.getModId())) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈ID");
    	}
    	try {
    		result.addDataSet("dsList", nexacroService.selectNexacroVoListByVoAndModel2Vo(nexacroVo));
    	} catch (BusinessException e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public RngResult selectNexacroVoListByVo2ModelAndModel2Vo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	if (!StringUtils.hasText(nexacroVo.getModId())) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈ID");
    	} else if (!StringUtils.hasText(nexacroVo.getModNm())) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈명");
    	}
    	try {
    		result.addDataSet("dsList", nexacroService.selectNexacroVoListByVo2ModelAndModel2Vo(nexacroVo));
    	} catch (BusinessException e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    @PostMapping("/savenexacrovo")
    public RngResult saveNexacroVo(@ParamDataSet(name = "dsSave") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroVo(nexacroVo);
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
    	return result;
    }
    
    @PostMapping("/savenexacrovolist")
    public RngResult saveNexacroVoList(@ParamDataSet(name = "dsList") List<NexacroVo> nexacroVoList) {
    	log.debug("parameter = {}", nexacroVoList);
    	RngResult result = new RngResult();
    	try {
    		nexacroService.saveNexacroVoList(nexacroVoList);
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
    	return result;
    }
    
//    @PostMapping("/resttemplate")
//    public RngResult resttemplate(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
//    	log.debug("parameter = {}", nexacroVo);
//    	RngResult result = new RngResult();
//    	try {
//    		Map<String, String> param = new HashMap<String, String>();
//    		param.put("modId", nexacroVo.getModId());
//    		param.put("modNm", nexacroVo.getModNm());
////    		result.add
//    		List<NexacroVo> nxList = RestUtils.getObjectByGetApi("http://localhost:8080/getrestsample", param, NexacroVo.class);
//    		log.debug("result = {}", nxList);
//    		result.addDataSet("dsList", nxList);
//    	} catch (Exception e) {
//    		e.printStackTrace();
//    		// 필요한 업무로직 존재시 처리
//    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
//    	}
//    	return result;
//    }
    
}
