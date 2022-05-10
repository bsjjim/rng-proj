package com.lotterental.rng.core.common.file;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class RngMultipartFile {
	
	private List<MultipartFile> fileList;
	
	private String documentNo;
	
	public RngMultipartFile(List<MultipartFile> fileList, String documentNo) {
		this.fileList = fileList;
		this.documentNo = documentNo.equals("undefined") ? null : documentNo;
	}
	
	public List<MultipartFile> getFileList() {
		return fileList;
	}
	
	public String getDocumentNo() {
		return documentNo;
	}

}
