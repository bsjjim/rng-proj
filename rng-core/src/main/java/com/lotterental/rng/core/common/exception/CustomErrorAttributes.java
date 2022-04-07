package com.lotterental.rng.core.common.exception;

import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.WebRequest;

import java.util.Map;


/**
 * 공통 에러처리 데이터 Custom 형식
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
//@Component
public class CustomErrorAttributes { // extends DefaultErrorAttributes {

//    @Override
//    public Map<String, Object> getErrorAttributes(WebRequest webRequest, ErrorAttributeOptions options) {
//        Map<String, Object> result = super.getErrorAttributes(webRequest, options);
//        result.put("type", "JSON");
//        result.put("path", webRequest.getContextPath());
//        return result;
//    }
}

