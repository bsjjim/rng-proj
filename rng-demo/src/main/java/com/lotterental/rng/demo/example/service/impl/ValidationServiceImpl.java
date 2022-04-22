package com.lotterental.rng.demo.example.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.mapper.ValidationMapper;
import com.lotterental.rng.demo.example.model.ValidationModel;
import com.lotterental.rng.demo.example.service.ValidationService;
import com.lotterental.rng.demo.example.vo.ValidationVo;

@Service
public class ValidationServiceImpl implements ValidationService {
	
    @Autowired
    private ValidationMapper validationMapper;

    @Override
	public ValidationVo selectBusinessInfo(ValidationVo validationVo) {    	
    	ValidationModel model = validationMapper.selectBusinessInfo(validationVo);
    	return model != null ? model.build() : null;
	}
    
    @Override
    public List<ValidationVo> selectBusinessInfoList(ValidationVo validationVo) throws BusinessException {
    	ValidationModel model = validationMapper.selectBusinessRule(validationVo);
    	if (model == null) {
    		throw new BusinessException("error", "업무 룰");	// 업무 룰에 위반됩니다.
    	}		
		return validationMapper.selectBusinessInfoList(validationVo).stream()
				.map(d -> d.build())
				.collect(Collectors.toList());
    }

}