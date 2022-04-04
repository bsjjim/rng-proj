package com.lotterental.rng.core.http.model;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

/**
 * Rest Reponse Body
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 03. 07.
 */

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
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String nowDate = "";
        try {
            nowDate = dateFormat.format(now);
        } catch (DateTimeParseException e) {
            log.error(e.toString());
        }
        return new ResBody(nowDate, status, error, type, message, path);
    }

    public NexacroResult getNexacroResult(NexacroResult nexacroResult) {
        Date now = new Date(System.currentTimeMillis());
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String nowDate = "";
        try {
            nowDate = dateFormat.format(now);
            nexacroResult.addDataSet("date", nowDate);
        } catch (DateTimeParseException e) {
            log.error(e.toString());
        }
        return nexacroResult;
    }

    public NexacroResult getNexacroResult(HttpServletRequest httpServletRequest, NexacroResult nexacroResult) {
        Date now = new Date(System.currentTimeMillis());
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            nexacroResult.addDataSet("date", dateFormat.format(now));
            nexacroResult.addDataSet("uri", httpServletRequest.getRequestURI());
        } catch (DateTimeParseException e) {
            log.error(e.toString());
        }
        return nexacroResult;
    }

//  "timestamp": "2021-07-26T04:58:44.054+00:00",
//  "status": 403,
//  "error": "Forbidden",
//  "type" : "json",
//  "message": "Access Denied",
//  "path": "/example/json1"
}

