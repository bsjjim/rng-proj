package com.lotterental.rng.demo.controller;

import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_MSG;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.lotterental.rng.common.file.RngMultipartFile;
import com.lotterental.rng.demo.service.FileService;
import com.lotterental.rng.utils.ErrorCodeUtil;
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

//    @ApiOperation(value = "Download Test", notes = "다운로드 테스트입니다")
//    @ApiResponses({
//            @ApiResponse(code = 200, message = "ok"),
//            @ApiResponse(code = 404, message = "page not found!")
//    })
    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(
            HttpServletRequest httpServletRequest,
            @PathVariable String fileName)
    {
//        Resource resource = fileDemoService.downloadFile(fileName, httpServletRequest);
//        String contentType = null;
//        if(resource.exists()) {
//            try {
//                contentType = httpServletRequest.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
//            } catch (IOException ex) {
//                log.info("Could not determine file type.");
//            }
//
//            // Fallback to the default content type if type could not be determined
//            if(contentType == null) {
//                contentType = "application/octet-stream";
//            }
//
//        } else {
//            log.error("파일을 찾을 수 없습니다.");
//        }
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(contentType))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
//                .body(resource);
    	return null;
    }
}
