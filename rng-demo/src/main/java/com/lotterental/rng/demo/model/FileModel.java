package com.lotterental.rng.demo.model;

import com.lotterental.rng.common.base.BaseModel;

import lombok.Data;

@Data
public class FileModel implements BaseModel {
	private String originalFileName;
    private String logicalFfileName;
    private String filePath;
    private String fileUri;
}