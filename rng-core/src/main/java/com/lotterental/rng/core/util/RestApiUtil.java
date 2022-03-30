package com.lotterental.rng.core.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import com.lotterental.rng.core.http.model.RestResultVO;
import com.lotterental.rng.core.http.rest.RestApiCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import java.lang.reflect.Type;
import java.util.Map;

@Slf4j
public class RestApiUtil {

    public static <T> RestResultVO post(String domain, String url, T resVO) {
        return send(domain, url, HttpMethod.POST, MediaType.APPLICATION_JSON, null, resVO);
    }

    public static <T> RestResultVO post(String domain, String url, Object reqVO, T resVO) {
        return send(domain, url, HttpMethod.POST, MediaType.APPLICATION_JSON, reqVO, resVO);
    }


    public static <T> RestResultVO send(String domain, String url, HttpMethod method, MediaType type, Object reqVO, T resVO) {
        RestResultVO result = new RestResultVO();

        try {
            RestTemplate restTemplate = new RestTemplate(getFactory());
            RequestEntity<Map<String, Object>> requestEntity = RequestEntity
                .method(method, domain + url)
                .accept(type)
                .contentType(type)
                .body(createBody(reqVO));

            log.debug("|| >>>>> send url: " + url);
            log.debug("|| >>>>> send requestEntity: " + requestEntity);

            try {
                String resultStr = restTemplate.exchange(requestEntity, String.class).getBody();
                log.debug("|| >>>>> resultStr: " + resultStr);
                T t = convertVO(resultStr, resVO);
                result = createResult(RestApiCode.SUCCESS.code(), RestApiCode.SUCCESS.code(), t);

            } catch (Exception e) {
                log.error("::: 통신 error", e);
                result = createResult(RestApiCode.ERROR_CONNECT.code(), RestApiCode.ERROR_CONNECT.msg());
            }

        } catch (Exception e) {
            log.error("::: body 생성 error", e);
            result = createResult(RestApiCode.ERROR_CREATE_BODY.code(), RestApiCode.ERROR_CREATE_BODY.msg());
        }

        return result;
    }


    /**
     * timeout 셋팅
     * @return
     */
    public static HttpComponentsClientHttpRequestFactory getFactory() {
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
        factory.setConnectTimeout(3*1000);
        factory.setReadTimeout(10*1000);
        return factory;
    }

    /**
     * 연동결과 jsonStr -> 응답 vo type으로 변경
     * @param resultStr
     * @param vo
     * @param <T>
     * @return
     */
//    public static T convertVO (String resultStr, T vo) {
//        Gson gson = new Gson();
//        Type type = vo.getClass();
//        vo = gson.fromJson(resultStr, type);
//        return vo;
//    }
    public static <T> T convertVO (String resultStr, T vo) {
        Gson gson = new Gson();
        return gson.fromJson(resultStr, (Type) vo);
    }


    /**
     * vo to map
     * @param object
     * @return
     */
    private static Map<String, Object> createBody(Object object) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonStr = objectMapper.writeValueAsString(object);
        log.debug(">>>>> send jsonstr: " + jsonStr);
        return objectMapper.readValue(jsonStr, Map.class);
    }

    /**
     * RestResult 생성
     * @param code
     * @param msg
     * @param vo
     * @return
     */
    public static <T> RestResultVO createResult(String code, String msg, T vo) {
        return new RestResultVO()
                .setResultCd(code)
                .setResultMsg(msg)
                .setData(vo);
    }

    public static RestResultVO createResult(String code, String msg) {
        return createResult(code, msg, null);
    }


}
