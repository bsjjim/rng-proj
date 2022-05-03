package com.lotterental.rng.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.demo.example.service.ValidationService;
import com.lotterental.rng.demo.example.vo.ValidationUsedVo;
import com.lotterental.rng.demo.example.vo.ValidationVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ValidationController {
	
	@Autowired
	private ValidationService validationService;
	
	@PostMapping("/validatebycontroller")
	public RngResult validateByController(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		RngResult result = new RngResult();
		if (!StringUtils.hasText(validationVo.getId())) {
			result.setErrorCode("required");
    		result.setErrorParams("ID", "학번");
    		return result;
    	}
		try {
			result.addDataSet("dsBiz", validationService.selectBusinessInfo(validationVo));
		} catch (BusinessException e) {
    		// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
		} catch (Exception e) {
			// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
		}
		return result;
	}
	
	@PostMapping("/validatebyservice")
	public RngResult validateByService(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		RngResult result = new RngResult();
		try {
			result.addDataSet("dsBizList", validationService.selectBusinessInfoList(validationVo));
		} catch (BusinessException e) {
			// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
		} catch (Exception e) {
			// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
		}
		return result;
	}
	
	@PostMapping("/validatebyframework")
	public RngResult validateByFramework(@ParamDataSet(name = "dsData") ValidationUsedVo validationUsedVo) {
		log.debug("parameter = {}", validationUsedVo);
		RngResult result = new RngResult();
		try {
			result.addDataSet("dsBizList", validationService.selectBusinessInfoList(validationUsedVo));
		} catch (BusinessException e) {
			// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
		} catch (Exception e) {
			// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
		}
		return result;
	}
	
	@PostMapping("/validatebyframeworkwith2params")
	public RngResult validateByFrameworkWith2Params(
			@ParamDataSet(name = "dsData") ValidationUsedVo validationUsedVo,
			@ParamDataSet(name = "dsList") List<ValidationUsedVo> validationUsedVoList) {
		log.debug("parameters = {}, {}", validationUsedVo, validationUsedVoList);
		RngResult result = new RngResult();
		try {
			result.addDataSet("dsBizList", validationService.selectBusinessInfoList(validationUsedVo));
		} catch (BusinessException e) {
			// 필요한 업무로직 존재시 처리
    		result.setError(e);	// 에러코드 : e.getMessageId(), 파라미터 : e.getMessageArgs()
		} catch (Exception e) {
			// 필요한 업무로직 존재시 처리
    		result.setErrorCode("E0001");	// 보여주고 싶은 에러 메시지
		}
		return result;
	}
	
}
