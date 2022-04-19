package com.lotterental.rng.demo.file.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.demo.file.vo.FileVo;

public interface FileService {

	FileVo uploadFile(MultipartFile file) throws FileNotFoundException, IOException;
	
	List<FileVo> uploadFileList(List<MultipartFile> fileList) throws FileNotFoundException, IOException;
	
}
