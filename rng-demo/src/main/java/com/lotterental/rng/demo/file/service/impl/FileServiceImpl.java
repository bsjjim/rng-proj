package com.lotterental.rng.demo.file.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.demo.file.model.FileModel;
import com.lotterental.rng.demo.file.service.FileService;
import com.lotterental.rng.demo.file.vo.FileVo;

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
	
	public FileVo uploadFile(MultipartFile file) throws FileNotFoundException, IOException {
		writeFile(file);
        // TODO: 파일 문서번호 및 첨부파일 번호 채번
        // TODO: 데이터베이스에 파일 정보 저장
		FileModel fileModel = new FileModel();
		fileModel.setOriginalFileName(file.getOriginalFilename());
		fileModel.setLogicalFfileName(getLogicalFileName(file.getOriginalFilename()));

//		return fileModel != null ? fileModel.build() : null;
//		return fileModel.
		return null;
	}
	
	public List<FileVo> uploadFileList(List<MultipartFile> fileList) throws FileNotFoundException, IOException {
        for (MultipartFile file : fileList) {
        	writeFile(file);
        }
        // TODO: 파일 문서번호 및 첨부파일 번호 채번
        // TODO: 데이터베이스에 파일 정보 저장
        
        return null;
	}
	
	private void getFileSeq() {
		
	}
	
	private String getLogicalFileName(String fileName) {
		// TODO: logical 파일명 생성 및 리턴
		return "";
	}
	
	private void writeFile(MultipartFile file) throws FileNotFoundException, IOException {
		try (FileOutputStream writer = new FileOutputStream(fileRoot + "/" + file.getOriginalFilename())) {
			writer.write(file.getBytes());
		}
	}
	
}
