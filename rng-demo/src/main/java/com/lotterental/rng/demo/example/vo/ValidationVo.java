package com.lotterental.rng.demo.example.vo;

import java.util.List;
import java.util.Map;

import com.lotterental.rng.demo.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.validation.annotation.RngMax;
import com.lotterental.rng.demo.common.validation.annotation.RngMin;
import com.lotterental.rng.demo.common.validation.annotation.RngNotBlank;
import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class ValidationVo extends BaseMetaVo {
	@RngNotBlank(messageCode = "CD0001", messageParams = {"이름", "확인"}, order = 1)
	private String name;	
	@RngMax(value = 20, messageCode = "CD0002", messageParams = "나이", order = 2)
	private int age;	
	@RngMax(value = 20, messageCode = "CD0003", messageParams = "키")
	private int height;	
	@RngMin(value = 10, messageCode = "CD0021")
	private int weight;	
	@RngNotEmpty(messageCode = "CD0004", messageParams = "성적")
	private String grade;	
	@RngNotEmpty(messageCode = "CD0005")
	private Map<String, Object> testMap;	
	@RngNotEmpty(messageCode = "CD0006")
	private List<Map<String, Object>> testList;
}
