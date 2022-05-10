package com.lotterental.rng.demo.example.vo;

import com.lotterental.rng.core.common.base.BaseGridVo;

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
public class FileVo extends BaseGridVo {
	private String documentNo;
	private String fileNo;
	private String originalFileName;
	private String savedFileName;
	private long fileSize;
	private String filePath;
	private String fileContentsTypeName;
	private int fileCount;
	private String tempYn;
	private String deleteYn;
	private String deleteDtm;
		
	public FileVo(String documentNo) {
		this.documentNo = documentNo;
	}
}
