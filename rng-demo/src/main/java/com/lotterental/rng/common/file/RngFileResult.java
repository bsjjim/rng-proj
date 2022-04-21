package com.lotterental.rng.common.file;

import java.io.File;

import org.springframework.http.MediaType;

import com.lotterental.rng.example.vo.FileVo;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;

public class RngFileResult extends NexacroFileResult {
	
	public RngFileResult(FileVo fileInfo) {
		super(new File(fileInfo.getFilePath() + fileInfo.getSavedFileName()));
		configFileResult(fileInfo);
	}
	
	private void configFileResult(FileVo fileInfo) {
		super.setOriginalName(fileInfo.getOriginalFileName());
		super.setContentType(MediaType.APPLICATION_OCTET_STREAM_VALUE);
	}
	
}
