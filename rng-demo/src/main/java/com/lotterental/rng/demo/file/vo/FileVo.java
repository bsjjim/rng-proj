package com.lotterental.rng.demo.file.vo;

import lombok.Data;

@Data
public class FileVo {
	private String originalFileName;
    private String logicalFileName;
    private String filePath;
    private String fileUri;
}
