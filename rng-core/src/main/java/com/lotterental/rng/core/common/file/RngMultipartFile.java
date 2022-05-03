package com.lotterental.rng.core.common.file;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class RngMultipartFile {
	
	private List<MultipartFile> fileList;
	
	public RngMultipartFile(List<MultipartFile> fileList) {
		this.fileList = fileList;
	}
	
	public List<MultipartFile> getFileList() {
		return fileList;
	}

}
