package com.lotterental.rng.demo.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.demo.vo.FileVo;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;

public interface FileService {
	
	FileVo uploadNexacroFiles(List<MultipartFile> fileList) throws FileNotFoundException, IOException;
	
	NexacroFileResult downloadNexacroFiles(String filePath, String fileSeq);
	
}
