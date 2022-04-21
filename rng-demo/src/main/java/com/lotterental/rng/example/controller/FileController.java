package com.lotterental.rng.example.controller;

import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_MSG;

import java.io.IOException;

import javax.servlet.ServletException;

import com.lotterental.rng.example.service.FileService;
import com.lotterental.rng.example.vo.FileVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.common.file.RngFileResult;
import com.lotterental.rng.common.file.RngMultipartFile;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class FileController {
	
	private static final String FILE_DATASET = "fileInfo";
	
	@Autowired
	private FileService fileService;
	
	@PostMapping(value = "/selectnexacrofiles")
	public NexacroResult selectNexacroFiles(@ParamVariable(name = "documentNo") String documentNo) throws BusinessException {
		log.debug("parameter = {}", documentNo);
		NexacroResult result = new NexacroResult();
		try {
			result.addDataSet("dsUpload", fileService.selectNexacroFiles(documentNo));
		} catch (BusinessException e) {
    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId()));
    	} catch (Exception e) {
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
	}
	
    @PostMapping(value = "/uploadnexacrofiles", headers = ("content-type=multipart/*"), consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public NexacroResult uploadNexacroFile(RngMultipartFile rngMultipartFile) throws IOException, ServletException {
    	log.debug("parameter = {}", rngMultipartFile);
    	NexacroResult result = new NexacroResult();
    	try {
    		result.addDataSet(FILE_DATASET, fileService.uploadNexacroFiles(rngMultipartFile.getFileList()));
    	} catch (BusinessException e) {
    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId()));
    	} catch (Exception e) {
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping(value = "/downloadnexacrofile")
    public RngFileResult downloadNexacroFile(FileVo fileVo) {
    	log.debug("parameter = {}", fileVo);
    	return fileService.downloadNexacroFiles(fileVo);	
    }
    
}
