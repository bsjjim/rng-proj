package com.lotterental.rng.demo.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.component.result.RngResult;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.file.RngFileResult;
import com.lotterental.rng.core.common.file.RngMultipartFile;
import com.lotterental.rng.core.utils.ErrorCodeUtil;
import com.lotterental.rng.demo.example.service.FileService;
import com.lotterental.rng.demo.example.vo.FileVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class FileController {
	
	private static final String FILE_DATASET = "fileInfo";
	
	private static final String File_GROUP_KEY = "documentNo";
	
	@Autowired
	private FileService fileService;
	
	@PostMapping(value = "/selectnexacrofiles")
	public RngResult selectNexacroFiles(@ParamVariable(name = File_GROUP_KEY) String documentNo) throws BusinessException {
		log.debug("parameter = {}", documentNo);
		RngResult result = new RngResult();
		if (!StringUtils.hasText(documentNo)) {
			result.setErrorCode("required");
			result.setErrorParams("문서번호");
			return result;
    	}
		try {
			result.addDataSet("dsUpload", fileService.selectNexacroFiles(documentNo));
		} catch (BusinessException e) {
    		result.setError(e);
    	} catch (Exception e) {
    		result.setErrorCode("E0001");
    	}
        return result;
	}
	
    @PostMapping(value = "/uploadnexacrofiles", headers = ("content-type=multipart/*"), consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public RngResult uploadNexacroFile(RngMultipartFile rngMultipartFile) {
    	log.debug("rngMultipartFile = {}", rngMultipartFile);
    	log.debug("documentNo = {}", rngMultipartFile.getDocumentNo());
    	RngResult result = new RngResult();
    	if (rngMultipartFile.getFileList().isEmpty()) {
			result.setErrorCode("NO_FILE");
			return result;
		}
    	try {
    		result.addDataSet(FILE_DATASET, fileService.uploadNexacroFiles(rngMultipartFile));
    	} catch (BusinessException e) {
    		result.setError(e);
    	} catch (Exception e) {
    		result.setErrorCode("E0001");
    	}
        return result;
    }
    
    @PostMapping(value = "/downloadnexacrofile")
    public RngFileResult downloadNexacroFile(FileVo fileVo) {
    	log.debug("parameter = {}", fileVo);
    	try {
    		validateCommonFileInfo(fileVo);
    		FileVo fileInfo = fileService.downloadNexacroFiles(fileVo);
    		return new RngFileResult(fileInfo.getFilePath(), fileInfo.getSavedFileName(),
    				fileInfo.getOriginalFileName(), MediaType.APPLICATION_OCTET_STREAM_VALUE);
    	} catch (BusinessException e) {
    		log.error("error = {}", e);
    		throw e;
    	} catch (Exception e) {
    		log.error("error = {}", e);
    		throw e;
    	}
    }
    
    @PostMapping(value = "/deletenexacrofile")
    public RngResult deletenexacrofile(@ParamDataSet(name = "dsDeleteFile") List<FileVo> fileVoList) {
    	log.debug("parameter = {}", fileVoList);
    	RngResult result = new RngResult();
    	try {
    		fileVoList.forEach(this::validateCommonFileInfo);
    		fileService.deleteNexacroFiles(fileVoList);
    	} catch (Exception e) {
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
    private void validateCommonFileInfo(FileVo fileVo) {
		if (!StringUtils.hasText(fileVo.getDocumentNo()) ||
				!StringUtils.hasText(fileVo.getFileNo())) {
			throw new BusinessException("required", "파일 정보가 정확하지 않습니다.");
		}
	}
    
}
