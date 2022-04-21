package com.lotterental.rng.demo.example.service.impl;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.file.RngFileResult;
import com.lotterental.rng.demo.example.mapper.FileMapper;
import com.lotterental.rng.demo.example.service.FileService;
import com.lotterental.rng.demo.example.vo.FileVo;
import com.lotterental.rng.demo.utils.FileUtil;

@Service
public class FileServiceImpl implements FileService {
	
	@Value("${rng.nexacro.file.system.resource}")
	private String fileRoot;
	
	@Autowired
	private FileMapper fileMapper;
	
	@Override
	public List<FileVo> selectNexacroFiles(String documentNo) throws BusinessException {
		if (!StringUtils.hasText(documentNo)) {
    		throw new BusinessException("required", "문서번호");	// 문서번호는 필수값 입니다.
    	}
		return fileMapper.selectFileInfoList(documentNo).stream()
				.map(d -> d.build())
				.collect(Collectors.toList());
	}
	
	@Override
	public FileVo uploadNexacroFiles(List<MultipartFile> fileList) throws FileNotFoundException, IOException {
		validateFileRoot();
    	writeFile(fileList);
    	return new FileVo(saveFileInfo(fileList));
	}
	
	private void validateFileRoot() {
		if (!FileUtil.isRootPathExists()) {
			throw new BusinessException("파일 디렉토리 미존재");
		}
	}
	
	private void writeFile(List<MultipartFile> fileList) throws FileNotFoundException, IOException {
		for (MultipartFile file : fileList) {
			try (FileOutputStream fos = new FileOutputStream(fileRoot + file.getOriginalFilename() + "_save")) {
				fos.write(file.getBytes());
			}
		}
	}
	
	private String saveFileInfo(List<MultipartFile> fileList) {
		String documentNo = fileMapper.selectDocumentNo();
		for (MultipartFile file : fileList) {
			fileMapper.insertFileInfo(makeFileInfoToInsert(file, documentNo));
		}
		return documentNo;
	}
	
	private FileVo makeFileInfoToInsert(MultipartFile file, String documentNo) {
		FileVo fileVo = new FileVo();
		fileVo.setDocumentNo(documentNo);
		fileVo.setOriginalFileName(file.getOriginalFilename());
		fileVo.setSavedFileName(file.getOriginalFilename() + "_save");
		fileVo.setFileSize(file.getSize());
		fileVo.setFilePath(fileRoot);
		fileVo.setFileContentsTypeName(getFileExtension(file));
		fileVo.setDeleteYn("N");
		return fileVo;
	}
	
	private String getFileExtension(MultipartFile file) {
		int index = file.getOriginalFilename().lastIndexOf(".") + 1;
		return file.getOriginalFilename().substring(index);
	}
	
	@Override
	public RngFileResult downloadNexacroFiles(FileVo fileVo) {
		validateFileRoot();
		validateCommonFileInfo(fileVo);
		return new RngFileResult(fileMapper.selectFileInfo(fileVo));
	}
	
	@Override
	public void deleteNexacroFiles(FileVo fileVo) {
		validateFileRoot();
		validateCommonFileInfo(fileVo);
		fileMapper.deleteFileInfo(fileVo);
	}
	
	private void validateCommonFileInfo(FileVo fileVo) {
		if (!StringUtils.hasText(fileVo.getDocumentNo()) ||
				!StringUtils.hasText(fileVo.getFileNo())) {
			throw new BusinessException("required", "파일 정보가 정확하지 않습니다.");
		}
	}
	
}
