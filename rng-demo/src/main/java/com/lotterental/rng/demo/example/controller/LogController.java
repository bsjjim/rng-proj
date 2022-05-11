package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.LogService;
import com.sap.conn.jco.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@Slf4j
@RestController
@RequestMapping("/log")
public class LogController {

    @Autowired
    LogService logService;

    @GetMapping("/sapconnect")
    public String sapConnectWebList(HttpSession httpSession, String rfcName) {

        String httpSessionId = logService.sapConnectWebList(httpSession, rfcName);

        return httpSessionId;
    }
}
