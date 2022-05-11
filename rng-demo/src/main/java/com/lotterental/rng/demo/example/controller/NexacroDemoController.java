package com.lotterental.rng.demo.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lotterental.rng.core.common.base.BusinessData;
import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.NexacroDataService;
import com.lotterental.rng.demo.example.service.NexacroMapService;
import com.lotterental.rng.demo.example.service.NexacroVoService;
import com.lotterental.rng.demo.example.vo.NexacroVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroDemoController {

	@Autowired
    private NexacroVoService nexacroVoService;
	
	@Autowired
    private NexacroMapService nexacroMapService;
	
	@Autowired
    private NexacroDataService nexacroDataService;

    @PostMapping("/selectNexacroVo")
    public RngResult selectNexacroVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet("dsRes", nexacroVoService.selectNexacroVoByVoAndVo(nexacroVo));
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
    @PostMapping("/selectNexacroVoListByVoAndVo")
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
    		result.addDataSet("dsList", nexacroVoService.selectNexacroVoListByVoAndVo(nexacroVo));
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
    
    @PostMapping("/selectNexacroVoListByVo2ModelAndVo")
    public RngResult selectNexacroVoListByVo2ModelAndVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet("dsList", nexacroVoService.selectNexacroVoListByVo2ModelAndVo(nexacroVo));
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
    
    @PostMapping("/selectNexacroVoListByVoAndModel2Vo")
    public RngResult selectNexacroVoListByVoAndModel2Vo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.debug("parameter = {}", nexacroVo);
    	RngResult result = new RngResult();
    	if (!StringUtils.hasText(nexacroVo.getModId())) {
    		result.setErrorCode("required");
    		result.setErrorParams("모듈ID");
    	}
    	try {
    		result.addDataSet("dsList", nexacroVoService.selectNexacroVoListByVoAndModel2Vo(nexacroVo));
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
    
    @PostMapping("/selectNexacroVoListByVo2ModelAndModel2Vo")
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
    		result.addDataSet("dsList", nexacroVoService.selectNexacroVoListByVo2ModelAndModel2Vo(nexacroVo));
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
    		nexacroVoService.saveNexacroVo(nexacroVo);
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
    		nexacroVoService.saveNexacroVoList(nexacroVoList);
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
    	return result;
    }
    
    @PostMapping("/selectnexacromap")
    public RngResult selectNexacroMap(@ParamDataSet(name = "dsImp") Map<String, Object> nexacroMap) {
    	log.debug("parameter = {}", nexacroMap);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet("dsRes", nexacroMapService.selectNexacroMap(nexacroMap));
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
	        result.addDataSet("dsList", nexacroMapService.selectNexacroMapList(nexacroMap));
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
    		nexacroMapService.saveNexacroMap(nexacroMap);
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
    		nexacroMapService.saveNexacroMapList(nexacroMapList);
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
    
    @PostMapping("/selectnexacrodata")
    public RngResult selectNexacroData(@ParamDataSet(name = "dsImp") BusinessData nexacroData) {
    	log.debug("parameter = {}", nexacroData);
    	RngResult result = new RngResult();
    	try {
	        result.addDataSet("dsRes", nexacroDataService.selectNexacroData(nexacroData));
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
	        result.addDataSet("dsList", nexacroDataService.selectNexacroDataList(nexacroData));
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
    		nexacroDataService.saveNexacroData(nexacroData);
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
    		nexacroDataService.saveNexacroDataList(nexacroDataList);
    	} catch (Exception e) {
    		// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
    	}
        return result;
    }
    
}
