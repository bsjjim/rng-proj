package com.lotterental.rng.demo.nexacro.vo;

import com.lotterental.rng.common.base.BaseGridVo;

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
	private int id;
	private String name;
	private String description;
	private String useYn;
	private String regUser;
}
