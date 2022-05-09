package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.EtcService;
import com.lotterental.rng.demo.example.vo.CopyVo;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.springframework.beans.factory.annotation.Autowired;
import com.sap.conn.jco.JCoDestination;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@RestController

public class EtcController {

    @Autowired
    JCoDestination jCoDestination;
    @Autowired
    private EtcService etcService;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/objcopy")
    public String ObjCopy() {

        NexacroResult result = new NexacroResult();
        try {
            CopyVo copyVo = etcService.objectCopy();
        } catch (BusinessException e) {

        } catch (Exception e) {

        }

        return "result";
    }

    @GetMapping("/session")
    public String masking(HttpSession httpSession) {
        log.debug("세션 : [{}]", httpSession.getId());
        return httpSession.getId();
    }

    @GetMapping("/sapconnect")
    public String sapConnect(HttpSession httpSession) {
        log.debug("세션 : [{}]", httpSession.getId());

        String id = jCoDestination.getDestinationID();
        try {
            jCoDestination.getRepository().clear();
            String rfcName = "ZCM_WEB_PRO_LIST";
            JCoRepository jCoRepository = jCoDestination.getRepository();
            JCoFunction jCoFunction = jCoRepository.getFunction(rfcName);

            if (jCoFunction != null) {
                jCoFunction.getImportParameterList().setValue("I_SYS_CD",  "IN3000");
                jCoFunction.execute(jCoDestination);
                log.debug("Data : [{}], [{}], [{}], [{}]",
                        jCoFunction.getExportParameterList().getString("ARBGB"),
                        jCoFunction.getExportParameterList().getString("MSGNR"),
                        jCoFunction.getExportParameterList().getString("MTYPE"),
                        jCoFunction.getExportParameterList().getString("MESSAGE")
                );
            } else {
                log.error("JCoFunction Null err : [{}]", rfcName);
            }
        } catch (Exception e) {
            log.error("JCoFunction err : [{}]", e.toString());
        }
        return httpSession.getId();
    }

}
