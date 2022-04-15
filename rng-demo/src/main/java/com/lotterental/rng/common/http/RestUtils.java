package com.lotterental.rng.common.http;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Array;
import java.net.URI;
import java.net.URLEncoder;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.common.base.Charsets;

@Component
public final class RestUtils {

	private static RestTemplate restTemplate;
		
	@SuppressWarnings("static-access")
	public RestUtils(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	public static String getObjectByGetApi(String url, Map<String, String> param) {
		return getObjectByGetApi(url, param, String.class).get(0);
	}
	
	public static <T> List<T> getObjectByGetApi(String url, Map<String, String> param, Class<T> type) {
		Objects.requireNonNull(url);
		Objects.requireNonNull(param);
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
		addQueryParam(builder, param);
		return Arrays.asList(sendApi(builder, type));
	}
	
	@SuppressWarnings("unchecked")
	private static <T> T[] sendApi(UriComponentsBuilder builder, Class<T> type) {
		return (T[]) restTemplate.getForObject(getUri(builder), translateClassToClassArray(type));
	}
	
	private static URI getUri(UriComponentsBuilder builder) {
		return builder.build().toUri();
	}
	
	private static <T> Class<? extends Object> translateClassToClassArray(Class<T> type) {
		return Array.newInstance(type, 0).getClass();
	}
	
	public static <T> ResponseEntity<T> getEntityByGetApi(String url, Map<String, String> param, Class<T> type) {
		Objects.requireNonNull(url);
		Objects.requireNonNull(param);
		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
		addQueryParam(builder, param);
		return restTemplate.getForEntity(builder.build().toUri(), type);
	}
	
	private static void addQueryParam(UriComponentsBuilder builder, Map<String, String> param) {
		param.forEach((key, value) -> {
			try {
				builder.queryParam(key, URLEncoder.encode(value, Charsets.UTF_8.name()));
			} catch (UnsupportedEncodingException e) {
				throw new IllegalArgumentException(e);
			}
		});
	}
	
//	public static <B, T> List<T> getObjectByPostApi(String url, B httpBody, Class<T>[] type) {
//		Objects.requireNonNull(url);
//		Objects.requireNonNull(httpBody);
//		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(url);
//		HttpHeaders httpHeader = new HttpHeaders(); 
//		httpHeader.setContentType(new MediaType("application","json", Charsets.UTF_8));
//		httpHeader.setAccept(Arrays.asList(new MediaType[] {MediaType.APPLICATION_JSON}));
//	}
	
}
