package com.lotterental.rng.http.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.Date;

@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResBody {
    String timestamp;
    int status;
    String error;
    String type;
    Object message;
    String path;

    public ResBody getResponseBody(int status, String error, String type, Object message, String path) {
        Date now = new Date(System.currentTimeMillis());
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // 입력포멧
        String nowDate = "";
        try {
            nowDate = dateFormat.format(now);
        } catch (DateTimeParseException e) {
            log.error(e.toString());
        }
        return new ResBody(nowDate, status, error, type, message, path);
    }

//  "timestamp": "2021-07-26T04:58:44.054+00:00",
//  "status": 403,
//  "error": "Forbidden",
//  "type" : "json",
//  "message": "Access Denied",
//  "path": "/example/json1"
}
