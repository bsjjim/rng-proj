package com.lotterental.rng.core.http.rest;

public enum RestApiCode {
    SUCCESS("SUCC", "SUCC"),
    FAIL("FAIL", "FAIL"),
    ERROR_CONNECT("FAIL", "통신에러"),
    ERROR_CREATE_BODY("FAIL", "BODY 생성에러"),
    ;

    RestApiCode(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    private String code;
    private String msg;

    public String code() {
        return this.code;
    }
    public String msg() {
        return this.msg;
    }
}
