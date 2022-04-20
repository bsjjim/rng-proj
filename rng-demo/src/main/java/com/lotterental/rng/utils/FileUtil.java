package com.lotterental.rng.utils;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileUtil {
	
	private static String fileRoot;
	
	@SuppressWarnings("static-access")
	@Autowired
	public void setFileRoot(@Value("${rng.nexacro.file.system.resource}") String fileRoot) {
		this.fileRoot = fileRoot;
	}
	
	public static boolean isRootPathExists() {
		File rootDir = new File(fileRoot);
		return (!rootDir.exists() && !rootDir.mkdirs()) ? false : true;
	}
	
}
