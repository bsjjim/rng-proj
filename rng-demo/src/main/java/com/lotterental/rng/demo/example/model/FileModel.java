package com.lotterental.rng.demo.example.model;

import com.lotterental.rng.core.common.base.BaseModel;
import com.lotterental.rng.demo.example.vo.FileVo;

import lombok.Data;

@Data
public class FileModel {
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
	private String regId;
	private String regDtm;
	private String updId;
	private String updDtm;
    
    public FileVo build(BaseModel baseModel) {
        FileModel fileModel = (FileModel) baseModel;
        return FileVo.builder()
        		.documentNo(fileModel.getDocumentNo())
        		.fileNo(fileModel.getFileNo())
        		.originalFileName(fileModel.getOriginalFileName())
        		.savedFileName(fileModel.getSavedFileName())
        		.fileSize(fileModel.getFileSize())
        		.filePath(fileModel.getFilePath())
        		.fileContentsTypeName(fileModel.getFileContentsTypeName())
        		.deleteYn(fileModel.getDeleteYn())
        		.build();
    }
    
    public FileVo build() {
        return FileVo.builder()
        		.documentNo(documentNo)
        		.fileNo(fileNo)
        		.originalFileName(originalFileName)
        		.savedFileName(savedFileName)
        		.fileSize(fileSize)
        		.filePath(filePath)
        		.fileContentsTypeName(fileContentsTypeName)
        		.deleteYn(deleteYn)
                .build();
    }
}
