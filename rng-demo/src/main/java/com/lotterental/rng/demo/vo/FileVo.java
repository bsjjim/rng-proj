package com.lotterental.rng.demo.vo;

import com.lotterental.rng.common.base.BaseMetaVo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class FileVo extends BaseMetaVo {
	private String fileKey;
	private String originalFileName;
    private String logicalFileName;
    private String filePath;
    private String fileUri;
}
