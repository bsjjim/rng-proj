package com.lotterental.rng.demo.nexacro.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import org.apache.ibatis.type.Alias;

import com.lotterental.rng.common.base.BaseGridVo;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Alias("nexacroVo")
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
