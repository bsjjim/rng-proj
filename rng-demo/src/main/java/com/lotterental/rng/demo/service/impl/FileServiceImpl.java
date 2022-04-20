package com.lotterental.rng.demo.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.service.FileService;
import com.lotterental.rng.demo.vo.FileVo;
import com.lotterental.rng.utils.FileUtil;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {
	
	@Value("${rng.nexacro.file.system.resource}")
	private String fileRoot;
	
	@Override
	public FileVo uploadNexacroFiles(List<MultipartFile> fileList) throws FileNotFoundException, IOException {
		validateFileRoot();
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
	
	private void validateFileRoot() {
		if (!FileUtil.isRootPathExists()) {
			throw new BusinessException("파일 디렉토리 미존재");
		}
	}
	
	private void writeFile(MultipartFile file) throws FileNotFoundException, IOException {
		try (FileOutputStream fos = new FileOutputStream(fileRoot + "/" + file.getOriginalFilename())) {
			fos.write(file.getBytes());
		}
	}
	
	@Override
	public NexacroFileResult downloadNexacroFiles(String filePath, String fileSeq) {
		validateFileRoot();
		// TODO: DB조회
		log.debug("download file = {}", fileRoot + "test3.txt");
        return new NexacroFileResult(new File(fileRoot + "test3.txt"));
	}
	
}
