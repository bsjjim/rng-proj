package com.lotterental.rng.example.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import com.lotterental.rng.example.vo.FileVo;
import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.common.file.RngFileResult;
import com.lotterental.rng.core.common.exception.BusinessException;

public interface FileService {
	
	List<FileVo> selectNexacroFiles(String documentNo) throws BusinessException;
	
	FileVo uploadNexacroFiles(List<MultipartFile> fileList) throws FileNotFoundException, IOException;
	
	RngFileResult downloadNexacroFiles(FileVo fileVo);
	
}
