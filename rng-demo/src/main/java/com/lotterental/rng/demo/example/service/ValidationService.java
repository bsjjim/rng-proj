package com.lotterental.rng.demo.example.service;

import java.util.List;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.vo.ValidationUsedVo;
import com.lotterental.rng.demo.example.vo.ValidationVo;

public interface ValidationService {
	
	ValidationVo selectBusinessInfo(ValidationVo validationVo);
    
    List<ValidationVo> selectBusinessInfoList(ValidationVo validationVo) throws BusinessException;
    
    List<ValidationUsedVo> selectBusinessInfoList(ValidationUsedVo validationVo) throws BusinessException;
    
}