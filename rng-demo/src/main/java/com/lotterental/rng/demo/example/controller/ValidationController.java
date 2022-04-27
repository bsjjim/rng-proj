package com.lotterental.rng.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.component.result.RngResult;
import com.lotterental.rng.demo.example.service.ValidationService;
import com.lotterental.rng.demo.example.vo.ValidationUsedVo;
import com.lotterental.rng.demo.example.vo.ValidationVo;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;
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
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("required", new String[] {"ID"}));
    		return result;
    	}
		
		try {			
			result.addDataSet("dsBiz", validationService.selectBusinessInfo(validationVo));
		} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
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
    		// 에러시 처리 할 업무로직 존재시 처리
			result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
			result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
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
    		// 에러시 처리 할 업무로직 존재시 처리
			result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
			result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
		}
		return result;
	}
	
	@PostMapping("/validatebyframeworkwith2params")
	public RngResult validateByFrameworkWith2Params(
			@ParamDataSet(name = "dsData") ValidationUsedVo validationUsedVo,
			@ParamDataSet(name = "dsList") List<ValidationUsedVo> validationUsedVoList) {
		log.debug("parameter = {}, {}", validationUsedVo, validationUsedVoList);
		RngResult result = new RngResult();
		try {
			result.addDataSet("dsBizList", validationService.selectBusinessInfoList(validationUsedVo));
		} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
			result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
			result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
		}
		return result;
	}
	
}
