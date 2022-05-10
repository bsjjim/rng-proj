package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.EtcService;
import com.lotterental.rng.demo.example.vo.CopyVo;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.sap.conn.jco.*;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String sapConnectWebList(HttpSession httpSession, String rfcName) {

        log.debug("sapConnectWebList rfcName : [{}]", rfcName);

        String destinationID = jCoDestination.getDestinationID();

        // 필수 로그만 적용한다. 
        log.info("jCoDestination ID : [{}]", destinationID);

        try {

            jCoDestination.getRepository().clear();
            // 개발시 디버그용으로 사용
            log.debug("Repository clear");

//            String rfcName = "ZCM_WEB_PRO_LIST";
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
            } else if (jCoFunction == null){
                log.error("JCoFunction Null err : [{}]", rfcName);
                throw new BusinessException("jCoFunction is null");
            } else {
                log.error("JCoFunction Null err : [{}]", rfcName);
            }
        } catch (BusinessException e) {
            log.error("JCoFunction BusinessException : [{}]", e.toString());
        } catch (Exception e) {
            log.error("JCoFunction Exception : [{}]", e.toString());
        } finally {
            // 연결이 제대로 되어 있는 필수 로그
            log.info("세션 : [{}]", httpSession.getId());
        }
        return httpSession.getId();
    }

    @GetMapping("/sapsysteminfo")
    public void sapSystemInfo(HttpSession httpSession) {

        try
        {
            jCoDestination.getRepository().clear();
            JCoRepository jCoRepository = jCoDestination.getRepository();
            JCoFunction jCoFunction = jCoRepository.getFunction("RFC_SYSTEM_INFO");

            if (jCoFunction==null)
                throw new RuntimeException("RFC_SYSTEM_INFO not found in SAP.");

            jCoFunction.execute(jCoDestination);

            JCoStructure exportStructure = jCoFunction.getExportParameterList().getStructure("RFCSI_EXPORT");
            log.debug("System info for " + jCoDestination.getAttributes().getSystemID()+":\n");

            for (int i=0; i<exportStructure.getMetaData().getFieldCount(); i++)
                log.debug(exportStructure.getMetaData().getName(i)+":\t"+exportStructure.getString(i));

        } catch (AbapException e) {
            log.error(e.toString());
        } catch (JCoException e) {
            log.error(e.toString());
        }
    }

    @GetMapping("/sapcallinfo")
    public void sapCallInfo(HttpSession httpSession) {
        try
        {
            jCoDestination.getRepository().clear();
            JCoRepository jCoRepository = jCoDestination.getRepository();
            JCoFunction jCoFunction = jCoRepository.getFunction("STFC_CONNECTION");

            if (jCoFunction==null)
                throw new RuntimeException("STFC_CONNECTION not found in SAP.");

            jCoFunction.getImportParameterList().setValue("REQUTEXT", "Hello SAP");
            jCoFunction.execute(jCoDestination);
            log.debug("STFC_CONNECTION finished:");
            log.debug(" Echo: " + jCoFunction.getExportParameterList().getString("ECHOTEXT"));
            log.debug(" Response: " + jCoFunction.getExportParameterList().getString("RESPTEXT"));

        } catch (AbapException e) {
            log.error(e.toString());
        } catch (JCoException e) {
            log.error(e.toString());
        }
    }
}
