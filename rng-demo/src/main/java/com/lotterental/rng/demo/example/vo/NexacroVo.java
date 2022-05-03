package com.lotterental.rng.demo.example.vo;

import com.lotterental.rng.core.common.base.BaseGridVo;

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
public final class NexacroVo extends BaseGridVo {
	private String sysCd;
	private String modId;
	private String modNm;
	private String modTy;
	private String modGcd;
	private String claNm;
	private String useYn;
	private String des2;
	private String dutL;
	private String dutM;
	private String dutS;
	private String inqYn;
	private String rgYn;
	private String delYn;
	private String prtYn;
	private String exlYn;
	private String conYn;
	private String ernam;
	private String ernamt;
	private String erdat;
	private String aenam;
	private String aenamt;
	private String aedat;
	private String message;
}
