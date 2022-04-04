package com.lotterental.rng.temp.demo.vo;

import org.apache.ibatis.type.Alias;

import com.lotterental.rng.temp.cmmn.model.base.BaseGridVo;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Alias("sampleVo")
public final class SampleVo extends BaseGridVo {
	private String sampleId;
	private int sampleName;
	private int sampleType;
	private String loc;
}
