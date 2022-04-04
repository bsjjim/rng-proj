package com.lotterental.rng.demo.nexacro.vo;

import org.apache.ibatis.type.Alias;

import com.lotterental.rng.common.base.BaseGridVo;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@Alias("nexacroVo")
public final class NexacroVo extends BaseGridVo {
	private String sampleId;
	private int sampleName;
	private int sampleType;
	private String loc;
}
