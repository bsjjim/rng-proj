package com.lotterental.rng.demo.example.vo;

import com.lotterental.rng.demo.common.base.BaseMetaVo;

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
	private String id;
	private String name;
	private String major;
	private int age;
	private int height;
	private int weight;
}
