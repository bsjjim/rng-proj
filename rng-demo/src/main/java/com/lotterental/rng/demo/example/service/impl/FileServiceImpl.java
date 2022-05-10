package com.lotterental.rng.demo.example.service.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.file.RngMultipartFile;
import com.lotterental.rng.demo.example.mapper.FileMapper;
import com.lotterental.rng.demo.example.model.FileModel;
import com.lotterental.rng.demo.example.service.FileService;
import com.lotterental.rng.demo.example.vo.FileVo;
import com.lotterental.rng.demo.utils.FileUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {
	
	@Value("${rng.nexacro.file.system.resource}")
	private String fileRoot;
	
	@Autowired
	private FileMapper fileMapper;
	
	@Override
	public List<FileVo> selectNexacroFiles(String documentNo) throws BusinessException {
		return fileMapper.selectFileInfoList(documentNo);
	}
	
	@Override
	public FileVo uploadNexacroFiles(RngMultipartFile multipartFile) throws BusinessException {
		validateFileRoot();
    	WriteFiles(multipartFile.getFileList());
    	String documentNo = multipartFile.getDocumentNo();
    	if (!StringUtils.hasText(multipartFile.getDocumentNo())) {
    		return new FileVo(insertNewDocument(multipartFile.getFileList()));
    	}
    	addFilesToDocument(multipartFile.getFileList(), documentNo);
    	return new FileVo(documentNo);
	}
	
	private void validateFileRoot() {
		if (!FileUtil.isRootPathExists()) {
			throw new BusinessException("파일 디렉토리 미존재");
		}
	}
	
	private void WriteFiles(List<MultipartFile> fileList) throws BusinessException {
		fileList.forEach(this::writeFile);
	}
	
	private void writeFile(MultipartFile file) throws BusinessException {
		try (FileOutputStream fos = new FileOutputStream(fileRoot + mapNewFileNameForSave(file))) {
			fos.write(file.getBytes());
		} catch (IOException e) {
			throw new BusinessException("file 접근 오류");
		}
	}
	
	private String insertNewDocument(List<MultipartFile> fileList) {
		String documentNo = fileMapper.selectDocumentNo();
		fileMapper.insertDocumentInfo(mapDocumentInfo(fileList, documentNo));
		addNewFiles(fileList, documentNo);
		return documentNo;
	}
	
	private FileVo mapDocumentInfo(List<MultipartFile> fileList, String documentNo) {
		FileModel fileModel = new FileModel();
		fileModel.setDocumentNo(documentNo);
		fileModel.setFileCount(fileList.size());
		return fileModel.build();
	}
	
	private void addNewFiles(List<MultipartFile> fileList, String documentNo) {
		fileList.forEach(file -> fileMapper.insertFileInfo(mapFileInfo(file, documentNo)));
	}
	
	private FileVo mapFileInfo(MultipartFile file, String documentNo) {
		FileModel fileModel = new FileModel();
		fileModel.setDocumentNo(documentNo);
		fileModel.setOriginalFileName(file.getOriginalFilename());
		fileModel.setSavedFileName(mapNewFileNameForSave(file));
		fileModel.setFileSize(file.getSize());
		fileModel.setFilePath(fileRoot);
		fileModel.setFileContentsTypeName(getFileExtension(file));
		fileModel.setDeleteYn("N");
		return fileModel.build();
	}
	
	private void addFilesToDocument(List<MultipartFile> fileList, String documentNo) {
		addNewFiles(fileList, documentNo);
		fileMapper.updateDocumentInfo(mapDocumentInfo(fileList, documentNo));
	}
	
	private String getFileExtension(MultipartFile file) {
		int index = file.getOriginalFilename().lastIndexOf(".") + 1;
		return file.getOriginalFilename().substring(index);
	}
	
	@Override
	public FileVo downloadNexacroFiles(FileVo fileVo) {
		validateFileRoot();
		return fileMapper.selectFileInfo(fileVo);
	}
	
	@Override
	public void deleteNexacroFiles(List<FileVo> fileVoList) {
		validateFileRoot();
		deleteFiles(fileVoList);
		deleteDocument(fileVoList);
	}
	
	private void deleteFiles(List<FileVo> fileVoList) {
		fileVoList.forEach(fileVo -> {
			FileVo fileInfo = fileMapper.selectFileInfo(fileVo);
			deleteFile(fileInfo);
			fileMapper.deleteFileInfo(fileInfo);
		});
	}
	
	private void deleteFile(FileVo fileInfo) {
		try {
			new File(fileInfo.getFilePath() + fileInfo.getSavedFileName()).delete();
		} catch (Exception e) {
			log.error("error = {}", e);
		}
	}
	
	private void deleteDocument(List<FileVo> fileVoList) {
		FileVo documentInfo = new FileVo();
		documentInfo.setDocumentNo(fileVoList.get(0).getDocumentNo());
		documentInfo.setFileSize(fileVoList.size());
		fileMapper.deleteDocumentInfo(documentInfo);
	}
	
	private String mapNewFileNameForSave(MultipartFile file) {
		return file.getOriginalFilename() + "_save";
	}
	
}
