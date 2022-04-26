package com.lotterental.rng.demo.example.controller;

import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.demo.common.cnst.ErrorColumn.ERROR_MSG;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.validation.information.RngErrorInfo;
import com.lotterental.rng.demo.common.validation.information.RngBindingResult;
import com.lotterental.rng.demo.example.service.ValidationService;
import com.lotterental.rng.demo.example.vo.ValidationVo;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ValidationController {
	
	@Autowired
	private ValidationService validationService;
	
	@PostMapping("/validatesimplecase")
	public NexacroResult validateSimpleCase(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		NexacroResult result = new NexacroResult();
		if (!StringUtils.hasText(validationVo.getId())) {
			result.addVariable(ERROR_CODE.getColumn(), "required");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("required", new String[] {"ID"}));
    		return result;
    	} else if (!StringUtils.hasText(validationVo.getName())) {
    		result.addVariable(ERROR_CODE.getColumn(), "required");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("required", new String[] {"이름"}));
    		return result;
    	}
		
		try {			
			result.addDataSet("dsBiz", validationService.selectBusinessInfo(validationVo));
		} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
		}
		return result;
	}
	
	@PostMapping("/validatecommoncase")
	public NexacroResult validateCommonCase(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("dsBizList", validationService.selectBusinessInfoList(validationVo));
		} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
		}
		return result;
	}
	
	@PostMapping("/validatebycommonerrorinfo")
	public NexacroResult validateByCommonErrorInfo(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		NexacroResult result = new NexacroResult();
		RngBindingResult errorResult = validationVo.getBindingResult();
		if (errorResult.hasErrors()) {
			RngErrorInfo errorInfo = errorResult.findFirst();
			result.addVariable(ERROR_CODE.getColumn(), errorInfo.getMessageCode());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(errorInfo.getMessageCode(), errorInfo.getMessageParams()));
    		return result;
		}
		return doBusiness(result);
	}
	
	@PostMapping("/validatebycommonerror2info")
	public NexacroResult validateByCommonError2Info(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		NexacroResult result = new NexacroResult();
		RngBindingResult errorResult = validationVo.getBindingResult();
		if (errorResult.hasErrors()) {
			RngErrorInfo errorInfo = errorResult.findFirst();
			result.addVariable(ERROR_CODE.getColumn(), errorInfo.getMessageCode());
    		result.addVariable(ERROR_MSG.getColumn(), errorInfo.getMessage());
    		return result;
		}
		return doBusiness(result);
	}
	
	@PostMapping("/validatebycommonerrorresult")
	public NexacroResult validateByCommonErrorResult(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		RngBindingResult errorResult = validationVo.getBindingResult();
		if (errorResult.hasErrors()) {
			RngErrorInfo errorInfo = errorResult.findFirst();
			return errorInfo.getErrorResult();
		}
		return doBusiness(new NexacroResult());
	}
	
	@PostMapping("/validatebycommonerror2result")
	public NexacroResult validateByCommonError2Result(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}", validationVo);
		RngBindingResult errorResult = validationVo.getBindingResult();
		if (errorResult.hasErrors()) {
			RngErrorInfo errorInfo = errorResult.findFirst();
			return errorInfo.getErrorResult("E0005", new String[] {"이름", "나이"});
		}
		return doBusiness(new NexacroResult());
	}
	
	@PostMapping("/validatebyallcommonerrorresult")
	public NexacroResult validateByAllCommonErrorResult(@ParamDataSet(name = "dsData") ValidationVo validationVo) {
		log.debug("parameter = {}, error = {}", validationVo, validationVo.getBindingResult());
		RngBindingResult errorResult = validationVo.getBindingResult();
		if (errorResult.hasErrors()) {
			List<RngErrorInfo> errors = errorResult.getErrors();
			errors.forEach(error -> {
				// 전체 에러에 대한 처리 가능
				log.debug("error = {}", error);
			});
		}
		return doBusiness(new NexacroResult());
	}
	
	private NexacroResult doBusiness(NexacroResult result) {
		try {
			// 업무로직 처리
			// ...
		} catch (BusinessException e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
		} catch (Exception e) {
			// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
		}
		return result;
	}
	
}
