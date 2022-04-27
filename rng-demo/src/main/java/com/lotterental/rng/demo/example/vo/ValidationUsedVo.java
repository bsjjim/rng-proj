package com.lotterental.rng.demo.example.vo;

import com.lotterental.rng.demo.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.validation.annotation.RngMax;
import com.lotterental.rng.demo.common.validation.annotation.RngMin;
import com.lotterental.rng.demo.common.validation.annotation.RngNotBlank;
import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;
import com.lotterental.rng.demo.common.validation.annotation.RngNotNull;
import com.lotterental.rng.demo.common.validation.annotation.RngSize;

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
public class ValidationUsedVo extends BaseMetaVo {
	@RngNotNull(messageCode = "CODE0001", messageParams = {"ID", "필수"}, order = 1)		// id != null
	private String id;
	
	@RngNotEmpty(messageCode = "CODE0001", messageParams = {"이름", "필수"}, order = 2)	// name != null && name.length() > 0
	private String name;
	
	@RngNotBlank(messageCode = "CODE0001", messageParams = {"전공", "필수"})				// major != null && major.length().trim() > 0
	private String major;
	
	@RngMax(value = 20, messageCode = "CODE0002", messageParams = "나이", order = 3)		// age <= 20
	private int age;
	
	@RngMin(value = 99, messageCode = "CODE0003", messageParams = "키")					// height >= 99
	private int height;
	
	@RngSize(min = 40, max = 150, messageCode = "CODE0004", messageParams = "시력")		// 40 <= weight <= 150
	private int weight;
}
