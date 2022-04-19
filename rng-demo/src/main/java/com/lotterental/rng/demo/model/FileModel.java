package com.lotterental.rng.demo.model;

import com.lotterental.rng.common.base.BaseModel;
import com.lotterental.rng.demo.vo.FileVo;

import lombok.Data;

@Data
public class FileModel implements BaseModel {
	private String originalFileName;
    private String logicalFileName;
    private String filePath;
    private String fileUri;
    
    public FileVo build(BaseModel baseModel) {
        FileModel fileModel = (FileModel) baseModel;
        return FileVo.builder()
        		.originalFileName(fileModel.getOriginalFileName())
        		.logicalFileName(fileModel.getLogicalFileName())
        		.filePath(fileModel.getFilePath())
        		.fileUri(fileModel.getFileUri())
        		.build();
    }

    public FileVo build() {
        return FileVo.builder()
        		.originalFileName(originalFileName)
        		.logicalFileName(logicalFileName)
        		.filePath(filePath)
        		.fileUri(fileUri)
                .build();
    }
}