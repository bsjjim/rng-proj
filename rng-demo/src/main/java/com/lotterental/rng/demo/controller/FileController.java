package com.lotterental.rng.demo.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class FileController {
	
	private final String fileRoot;
	
	public FileController(@Value("${rng.nexacro.file.system.resource}") String fileRoot) throws IOException {
		this.fileRoot = fileRoot;
		File rootDir = new File(fileRoot);
		if (!rootDir.exists() && !rootDir.mkdirs()) {
        	throw new IOException();
        }
	}

    @PostMapping(value = "/upload", headers = ("content-type=multipart/*"), consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public NexacroResult uploadFile(@RequestParam MultipartFile file) throws IOException {
    	log.debug("parameter = {}", file);
        FileOutputStream writer = new FileOutputStream(fileRoot + "/" + file.getOriginalFilename());
        writer.write(file.getBytes());
        writer.close();
        
        // TODO: 파일 문서번호 및 첨부파일 번호 채번
        // TODO: 데이터베이스에 파일 정보 저장
        // TODO: 넥사크로 플랫폼에 전달
        NexacroResult result = new NexacroResult();
        result.addVariable("key", "12345");
        return result;
    }
    
    @PostMapping(value = "/multipleupload", headers = ("content-type=multipart/*"), consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public NexacroResult uploadMultipleFile(@RequestParam List<MultipartFile> fileList) throws IOException {
    	log.debug("parameter = {}", fileList);
    	
    	// TODO: 파일 문서번호 및 첨부파일 번호 채번
        // TODO: 데이터베이스에 파일 정보 저장
        // TODO: 넥사크로 플랫폼에 전달
        
        for (MultipartFile multipartFile : fileList) {
            FileOutputStream writer = new FileOutputStream(fileRoot + "/" + multipartFile.getOriginalFilename());
            writer.write(multipartFile.getBytes());
            writer.close();
            
//            FileModel fileModel = new FileModel();
//            fileModel.setFileName(multipartFile.getOriginalFilename());
//            fileModel.setFilePath(filePath + "/" + multipartFile.getOriginalFilename());
//            fileModel.setFileUri("/" + resourceMainPath + "/" + multipartFile.getOriginalFilename());
//            fileModelList.add(fileModel);
        }
        
        NexacroResult result = new NexacroResult();
        result.addVariable("dsFile", "12345");
        return result;
//        if (fileList == null) {
//            ResBody resBody = ResponseUtils.resReturn(HttpStatus.BAD_REQUEST, "", Constants.TYPE.STRING, "files null", httpServletRequest.getRequestURI());
//            return new ResponseEntity<>(resBody, HttpStatus.OK);
//        }
//        if (fileList.size() == 0) {
//            ResBody resBody = ResponseUtils.resReturn(HttpStatus.BAD_REQUEST, "", Constants.TYPE.STRING, "no files!", httpServletRequest.getRequestURI());
//            return new ResponseEntity<>(resBody, HttpStatus.OK);
//        }
//        String resStr = fileDemoService.uploadFile(fileList, httpServletRequest);

//        ResBody resBody = ResponseUtils.resReturn(HttpStatus.OK, "", Constants.TYPE.STRING, resStr, httpServletRequest.getRequestURI());
//        return new ResponseEntity<>(resBody, HttpStatus.OK);
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
