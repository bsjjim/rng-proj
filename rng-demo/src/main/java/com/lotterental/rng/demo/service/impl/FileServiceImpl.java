package com.lotterental.rng.demo.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.demo.service.FileService;
import com.lotterental.rng.demo.vo.FileVo;

@Service
public class FileServiceImpl implements FileService {
	
	private final String fileRoot;

	public FileServiceImpl(@Value("${rng.nexacro.file.system.resource}") String fileRoot) throws IOException {
		this.fileRoot = fileRoot;
		File rootDir = new File(fileRoot);
		if (!rootDir.exists() && !rootDir.mkdirs()) {
        	throw new IOException();
        }
	}
	
	@Override
	public FileVo uploadNexacroFiles(List<MultipartFile> fileList) throws FileNotFoundException, IOException {
        for (MultipartFile file : fileList) {
        	writeFile(file);
        	// TODO: 파일 문서번호 및 첨부파일 번호 채번
        	// TODO: 데이터베이스에 파일 정보 저장
        }
        String fileKey = "file12345";
        FileVo fileVo = new FileVo();
        fileVo.setFileKey(fileKey);
        return fileVo;
	}
	
//	private void getFileSeq() {
//		
//	}
//	
//	private String getLogicalFileName(String fileName) {
//		// TODO: logical 파일명 생성 및 리턴
//		return "";
//	}
	
	private void writeFile(MultipartFile file) throws FileNotFoundException, IOException {
		try (FileOutputStream writer = new FileOutputStream(fileRoot + "/" + file.getOriginalFilename())) {
			writer.write(file.getBytes());
		}
	}
	
}
