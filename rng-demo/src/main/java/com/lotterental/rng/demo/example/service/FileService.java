package com.lotterental.rng.demo.example.service;

import java.util.List;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.file.RngMultipartFile;
import com.lotterental.rng.demo.example.vo.FileVo;

public interface FileService {
	
	List<FileVo> selectNexacroFiles(String documentNo) throws BusinessException;
	
	FileVo uploadNexacroFiles(RngMultipartFile multipartFile)  throws BusinessException;
	
//	RngFileResult downloadNexacroFiles(FileVo fileVo);
	
	FileVo downloadNexacroFiles(FileVo fileVo);
	
	void deleteNexacroFiles(List<FileVo> fileVo);
	
}
