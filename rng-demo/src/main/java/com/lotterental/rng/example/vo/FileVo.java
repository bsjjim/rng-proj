package com.lotterental.rng.example.vo;

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
	private String documentNo;
	private String fileNo;
	private String originalFileName;
	private String savedFileName;
	private long fileSize;
	private String filePath;
	private String fileContentsTypeName;
	private String deleteYn;
	private String deleteDtm;
	private String regId;
	private String regDtm;
	private String updId;
	private String updDtm;
	
	public FileVo(String documentNo) {
		this.documentNo = documentNo;
	}
}
