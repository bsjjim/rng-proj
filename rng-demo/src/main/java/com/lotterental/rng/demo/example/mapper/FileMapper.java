package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.demo.example.model.FileModel;
import com.lotterental.rng.demo.example.vo.FileVo;

@Mapper
public interface FileMapper {
	
	List<FileModel> selectFileInfoList(String documentNo);
	
	FileVo selectFileInfo(FileVo fileVo);
	
	String selectDocumentNo();
	
    int insertFileInfo(FileVo fileVo);

    int deleteFileInfo(FileVo fileVo);
    
}
