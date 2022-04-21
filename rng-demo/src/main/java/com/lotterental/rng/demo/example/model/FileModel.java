package com.lotterental.rng.demo.example.model;

import com.lotterental.rng.core.base.BaseModel;
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
        		.fileSize(fileModel.getFileSize())
        		.fileContentsTypeName(fileModel.getFileContentsTypeName())
        		.build();
    }
    
    public FileVo build() {
        return FileVo.builder()
        		.documentNo(documentNo)
        		.fileNo(fileNo)
        		.originalFileName(originalFileName)
        		.fileSize(fileSize)
        		.fileContentsTypeName(fileContentsTypeName)
                .build();
    }
}
