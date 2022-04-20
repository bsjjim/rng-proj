package com.lotterental.rng.core.utils;

import com.lotterental.rng.core.http.model.ResBody;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.io.InputStream;

/**
 * HTTP 결과 처리 유틸리티 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public class ResponseUtil {

    /**
     * 오브젝트 파일 다운로드
     *
     * @param fileName 파일명칭
     * @param inputStream 개체 input stream
     * @throws IOException 처리
     * @return 헤더 키-값이 포함된 맵
     */
	// 오브젝트 파일 다운로드
	public static ResponseEntity<byte[]> download(String fileName, InputStream inputStream) throws IOException {

		byte[] bytes = IOUtils.toByteArray(inputStream);
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
		httpHeaders.setContentLength(bytes.length);
		httpHeaders.setContentDispositionFormData("attachment", fileName);
		return new ResponseEntity<>(bytes, httpHeaders, HttpStatus.OK);
	}

	public static ResBody resReturn(
			HttpStatus httpStatus,
			String error,
			String constType,
			Object message,
			String path
	) {
		ResBody resBody = new ResBody();
		return resBody.getResponseBody(httpStatus.value(), error, constType, message, path);
	}

}