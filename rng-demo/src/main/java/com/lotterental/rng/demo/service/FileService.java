package com.lotterental.rng.demo.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import com.lotterental.rng.demo.vo.FileVo;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {

	FileVo uploadFile(MultipartFile file) throws FileNotFoundException, IOException;
	
	List<FileVo> uploadFileList(List<MultipartFile> fileList) throws FileNotFoundException, IOException;
	
}
