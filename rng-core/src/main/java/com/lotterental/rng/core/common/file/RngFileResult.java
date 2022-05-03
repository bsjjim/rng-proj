package com.lotterental.rng.core.common.file;

import java.io.File;
import com.nexacro.uiadapter.spring.core.data.NexacroFileResult;

public class RngFileResult extends NexacroFileResult {
	
	public RngFileResult(String filePath, String fileName, String originalFileName, String mediaType) {
		super(new File(filePath + fileName));
		configFileResult(originalFileName, mediaType);
	}
	
	private void configFileResult(String originalFileName, String mediaType) {
		super.setOriginalName(originalFileName);
		super.setContentType(mediaType);
	}
	
}
