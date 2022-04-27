package com.lotterental.rng.demo.example.controller;

import java.io.IOException;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.component.result.RngResult;
import com.lotterental.rng.demo.common.file.RngFileResult;
import com.lotterental.rng.demo.common.file.RngMultipartFile;
import com.lotterental.rng.demo.example.service.FileService;
import com.lotterental.rng.demo.example.vo.FileVo;
import com.lotterental.rng.demo.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class FileController {
	
	private static final String FILE_DATASET = "fileInfo";
	
	@Autowired
	private FileService fileService;
	
	@PostMapping(value = "/selectnexacrofiles")
	public RngResult selectNexacroFiles(@ParamVariable(name = "documentNo") String documentNo) throws BusinessException {
		log.debug("parameter = {}", documentNo);
		RngResult result = new RngResult();
		try {
			result.addDataSet("dsUpload", fileService.selectNexacroFiles(documentNo));
		} catch (BusinessException e) {
			result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
    	} catch (Exception e) {
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
	}
	
    @PostMapping(value = "/uploadnexacrofiles", headers = ("content-type=multipart/*"), consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public RngResult uploadNexacroFile(RngMultipartFile rngMultipartFile) throws IOException, ServletException {
    	log.debug("parameter = {}", rngMultipartFile);
    	RngResult result = new RngResult();
    	try {
    		result.addDataSet(FILE_DATASET, fileService.uploadNexacroFiles(rngMultipartFile.getFileList()));
    	} catch (BusinessException e) {
    		result.setErrorCode(e.getMessageId());
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
    	} catch (Exception e) {
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping(value = "/downloadnexacrofile")
    public RngFileResult downloadNexacroFile(FileVo fileVo) {
    	log.debug("parameter = {}", fileVo);
    	return fileService.downloadNexacroFiles(fileVo);	
    }
    
    @PostMapping(value = "/deletenexacrofile")
    public RngResult deletenexacrofile(FileVo fileVo) {
    	log.debug("parameter = {}", fileVo);
    	RngResult result = new RngResult();
    	try {
    		fileService.downloadNexacroFiles(fileVo);
    	} catch (Exception e) {
    		result.setErrorCode("E0001");
    		result.setErrorMsg(ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
}
