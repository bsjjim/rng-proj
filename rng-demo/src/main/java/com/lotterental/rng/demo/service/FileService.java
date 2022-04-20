package com.lotterental.rng.demo.service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.common.file.RngFileResult;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.vo.FileVo;

public interface FileService {
	
	List<FileVo> selectNexacroFiles(String documentNo) throws BusinessException;
	
	FileVo uploadNexacroFiles(List<MultipartFile> fileList) throws FileNotFoundException, IOException;
	
	RngFileResult downloadNexacroFiles(FileVo fileVo);
	
}
