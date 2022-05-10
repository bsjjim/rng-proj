package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.demo.example.vo.FileVo;

@Mapper
public interface FileMapper {
	
	List<FileVo> selectFileInfoList(String documentNo);
	
	FileVo selectFileInfo(FileVo fileVo);
	
	String selectDocumentNo();
	
	int insertDocumentInfo(FileVo fileVo);
	
    int insertFileInfo(FileVo fileVo);
    
    int updateDocumentInfo(FileVo fileVo);
    
    int deleteDocumentInfo(FileVo fileVo);

    int deleteFileInfo(FileVo fileVo);
    
}
