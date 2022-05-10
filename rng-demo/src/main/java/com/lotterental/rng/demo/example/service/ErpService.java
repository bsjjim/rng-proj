package com.lotterental.rng.demo.example.service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.sap.conn.jco.*;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

public interface ErpService {
    String zcmWebProList(String rfcName) throws BusinessException;
    String rfcSystemInfo(String rfcName) throws BusinessException;
    String stfcConnection(String rfcName) throws BusinessException;
}
