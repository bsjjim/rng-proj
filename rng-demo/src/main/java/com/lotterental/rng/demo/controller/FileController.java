package com.lotterental.rng.demo.controller;

import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_MSG;

import java.io.IOException;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.common.file.RngMultipartFile;
import com.lotterental.rng.demo.service.FileService;
import com.lotterental.rng.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class FileController {
	
	private static final String FILE_DATASET = "fileInfo";
	
	@Autowired
	private FileService fileService;
	
    @PostMapping(value = "/uploadNexacroFile", headers = ("content-type=multipart/*"), consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public NexacroResult uploadNexacroFile(RngMultipartFile rngMultipartFile) throws IOException, ServletException {
    	log.debug("parameter = {}", rngMultipartFile);
    	NexacroResult result = new NexacroResult();
    	try {
    		result.addDataSet(FILE_DATASET, fileService.uploadNexacroFiles(rngMultipartFile.getFileList()));
    	} catch (Exception e) {
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping(value = "/downloadNexacroFile") //, headers = ("content-type=multipart/*"), consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public NexacroFileResult downloadNexacroFile(String filePath, String fileSeq) {
    	log.debug("filePath = {}, fileSeq = {}", filePath, fileSeq);
    	NexacroFileResult result = fileService.downloadNexacroFiles(filePath, fileSeq);
    	return result;
    }
    
}
