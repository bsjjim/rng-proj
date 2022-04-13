package com.lotterental.rng.utils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.lotterental.rng.core.utils.MessageUtils;

public enum ErrorCodeUtil {
    ERR_CD1("에러코드1", Arrays.asList("ERR_100", "ERR_101", "ERR_102")),
    ERR_CD2("에러코드2", Arrays.asList("ERR_200", "ERR_201", "ERR_202")),
    EMPTY("없음", Collections.EMPTY_LIST);

    private String errDetail;
    private List<String> errorList;

    ErrorCodeUtil(String errDetail, List<String> errorList){
        this.errDetail = errDetail;
        this.errorList = errorList;
    }

    public static ErrorCodeUtil findByErrorCode(String code){
        return Arrays.stream(ErrorCodeUtil.values())
                .filter(errorCodeUtil -> errorCodeUtil.hasErrorApiCode(code))
                .findAny()
                .orElse(EMPTY);
    }

    public boolean hasErrorApiCode(String code){
        return errorList.stream().anyMatch(scraping -> scraping.equals(code));
    }

    public String getErrDetail() {
        return errDetail;
    }

    @Override
    public String toString() {
        return String.format("%s", super.toString());
    }

    public static String getErrDetail(String errCode) {
        return ErrorCodeUtil.findByErrorCode(errCode).getErrDetail();
    }
    
    public static String getErrorMsg(String errorCode) {
    	return MessageUtils.getMessage(errorCode);
    }
    
    public static String getErrorMsg(String errorCode, Object[] args) {
    	return MessageUtils.getMessage(errorCode, args);
    }
}
