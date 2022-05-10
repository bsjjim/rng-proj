package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.ErpService;
import com.sap.conn.jco.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ErpServiceImpl implements ErpService {

    @Autowired
    JCoDestination jCoDestination;

    public String zcmWebProList(String rfcName) throws BusinessException {

        StringBuffer strbuff = new StringBuffer();
        try {
            jCoDestination.getRepository().clear();
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
                strbuff.append(jCoFunction.getExportParameterList().getString("ARBGB"));
                strbuff.append("/");
                strbuff.append(jCoFunction.getExportParameterList().getString("MSGNR"));
                strbuff.append("/");
                strbuff.append(jCoFunction.getExportParameterList().getString("MTYPE"));
                strbuff.append("/");
                strbuff.append(jCoFunction.getExportParameterList().getString("MESSAGE"));
            } else {
                log.error("JCoFunction Null err : [{}]", rfcName);
            }
        } catch (Exception e) {
            log.error("JCoFunction err : [{}]", e.toString());
            throw new BusinessException("SAP-ERR");
        }
        return strbuff.toString();
    }

    public String rfcSystemInfo(String rfcName) throws BusinessException {

        StringBuffer strbuff = new StringBuffer();
        try {
            jCoDestination.getRepository().clear();
            JCoRepository jCoRepository = jCoDestination.getRepository();
            JCoFunction jCoFunction = jCoRepository.getFunction(rfcName);

            if (jCoFunction == null) throw new RuntimeException("RFC_SYSTEM_INFO not found in SAP.");

            jCoFunction.execute(jCoDestination);
            JCoStructure exportStructure = jCoFunction.getExportParameterList().getStructure("RFCSI_EXPORT");
            log.debug("System info for " + jCoDestination.getAttributes().getSystemID()+":\n");

            for (int i=0; i<exportStructure.getMetaData().getFieldCount(); i++) {
                String tempStr = exportStructure.getMetaData().getName(i)+":\t"+exportStructure.getString(i);
                strbuff.append(tempStr);
                log.debug(tempStr);
            }
        } catch (AbapException e) {
            log.error(e.toString());
            throw new BusinessException("SAP-ERR-ABAPEXCEPTION");
        } catch (JCoException e) {
            log.error(e.toString());
            throw new BusinessException("SAP-ERR-JCOEXCEPTION");
        } catch (Exception e) {
            log.error(e.toString());
            throw new BusinessException("SAP-ERR");
        }
        return strbuff.toString();
    }

    public String stfcConnection(String rfcName) throws BusinessException {

        StringBuffer strbuff = new StringBuffer();
        try
        {
            jCoDestination.getRepository().clear();
            JCoRepository jCoRepository = jCoDestination.getRepository();
            JCoFunction jCoFunction = jCoRepository.getFunction("STFC_CONNECTION");

            if (jCoFunction == null)
                throw new RuntimeException("STFC_CONNECTION not found in SAP.");

            jCoFunction.getImportParameterList().setValue("REQUTEXT", "Hello SAP");
            jCoFunction.execute(jCoDestination);
            log.debug("STFC_CONNECTION finished:");
            log.debug(" Echo : [{}]", jCoFunction.getExportParameterList().getString("ECHOTEXT"));
            log.debug(" Response: [{}]", jCoFunction.getExportParameterList().getString("RESPTEXT"));

            strbuff.append(jCoFunction.getExportParameterList().getString("ECHOTEXT"));
            strbuff.append("/");
            strbuff.append(jCoFunction.getExportParameterList().getString("RESPTEXT"));

        }  catch (AbapException e) {
            log.error(e.toString());
            throw new BusinessException("SAP-ERR-ABAPEXCEPTION");
        } catch (JCoException e) {
            log.error(e.toString());
            throw new BusinessException("SAP-ERR-JCOEXCEPTION");
        } catch (Exception e) {
            log.error(e.toString());
            throw new BusinessException("SAP-ERR");
        }

        return strbuff.toString();
    }
}