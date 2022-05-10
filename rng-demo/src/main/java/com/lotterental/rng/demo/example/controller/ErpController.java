package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.ErpService;
import com.sap.conn.jco.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@Slf4j
@RestController
public class ErpController {

    @Autowired
    ErpService erpService;

    @GetMapping("/zcmwebprolist")
    public String zcmWebProList(HttpSession httpSession) {

        String responseStr = "";
        try {
            responseStr = erpService.zcmWebProList("ZCM_WEB_PRO_LIST");
        } catch (BusinessException e) {
            log.error("BusinessException : [{}]", e.toString());
        } catch (Exception e) {
            log.error("Exception : [{}]", e.toString());
        }
        return responseStr;
    }

    @GetMapping("/rfcsysteminfo")
    public String rfcSystemInfo(HttpSession httpSession) {

        String responseStr = "";
        try {
            responseStr = erpService.rfcSystemInfo("RFC_SYSTEM_INFO");
        } catch (BusinessException e) {
            log.error("BusinessException : [{}]", e.toString());
        } catch (Exception e) {
            log.error("Exception : [{}]", e.toString());
        }
        return responseStr;
    }

    @GetMapping("/stfcconnection")
    public String stfcConnection(HttpSession httpSession) {
        String responseStr = "";
        try {
            responseStr = erpService.stfcConnection("STFC_CONNECTION");
        } catch (BusinessException e) {
            log.error("BusinessException : [{}]", e.toString());
        } catch (Exception e) {
            log.error("Exception : [{}]", e.toString());
        }
        return responseStr;
    }
}
