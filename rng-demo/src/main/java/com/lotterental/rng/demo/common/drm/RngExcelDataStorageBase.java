package com.lotterental.rng.demo.common.drm;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletResponse;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xeni.extend.XeniExcelDataStorageBase;

public class RngExcelDataStorageBase implements XeniExcelDataStorageBase {
	
	@Override
	public InputStream loadTargetStream(String filepath) throws Exception {
	    return new FileInputStream(new File(filepath));
	}

	@Override
	public String saveImportStream(VariableList variableList, InputStream in, String filePath) throws Exception {
		DrmExcelFile drmExcelFile = new DrmExcelFile(in, filePath);
		drmExcelFile.makeTempFileDirectory();
		drmExcelFile.writeTempFile();
		return drmExcelFile.mapDrmReleasedFilePath();
	}
	
	@Override
	public int saveExportStream(VariableList var1, DataSet var2, ByteArrayOutputStream var3, String var4, String var5,
			HttpServletResponse var6) throws Exception {
		return 0;
	}

	@Override
	public DataSet saveExportStream(VariableList var1, DataSet var2, ByteArrayOutputStream var3, String var4,
			String var5) throws Exception {
		return null;
	}
	
	static class DrmExcelFile {
		private static final String FILE_PREFIX = "__temp_";
		
		private static final int BUFFER_SIZE = 1024;
		
		private final InputStream in;
		
		private final String filePath;
		
		private final String srcFile;
		
		public DrmExcelFile(InputStream in, String filePath) {
			this.in = in;
			this.filePath = filePath;
			this.srcFile = mapTempFilePath();
		}
		
		private String mapTempFilePath() {
			int nIdx = filePath.lastIndexOf("/");
			return filePath.substring(0, nIdx) + FILE_PREFIX + filePath.substring(nIdx + 1);
		}
		
		public void makeTempFileDirectory() {
			File file = new File(srcFile);
			if (!file.exists()) {
			    file.mkdirs();
			}
		}
		
		public void writeTempFile() throws Exception {
			OutputStream out = new FileOutputStream(srcFile);
			int length = 0;
			byte[] buf = new byte[BUFFER_SIZE];
			writeFile(out, length, buf);
			releaseResources(out);
		}
		
		private void writeFile(OutputStream out, int length, byte[] buf) throws IOException {
			while ((length = in.read(buf)) > 0) {
			    out.write(buf, 0, length);
			}
			out.flush();
		}
		
		private void releaseResources(OutputStream out) throws IOException {			
			out.close();
			in.close();
		}
		
		public String mapDrmReleasedFilePath() {
			int idx = srcFile.indexOf("//") + 1;
//			System.out.println(idx + ":::" + srcFile.substring(idx)); 
			return srcFile.substring(idx);
		}
	}

}
