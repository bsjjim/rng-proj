package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.demo.example.model.ValidationModel;
import com.lotterental.rng.demo.example.vo.ValidationVo;

@Mapper
public interface ValidationMapper {
	
	ValidationModel selectBusinessRule(ValidationVo validationVo);
		
	ValidationModel selectBusinessInfo(ValidationVo validationVo);
	
	List<ValidationModel> selectBusinessInfoList(ValidationVo validationVo);
	
}
