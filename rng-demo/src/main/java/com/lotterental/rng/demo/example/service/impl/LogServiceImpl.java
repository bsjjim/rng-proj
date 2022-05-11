package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.LogService;
import com.sap.conn.jco.JCoDestination;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

@Slf4j
@Service
public class LogServiceImpl implements LogService {

    @Autowired
    JCoDestination jCoDestination;

    @Override
    public String sapConnectWebList(HttpSession httpSession, String rfcName) {

        // 문제가 될 수 있는 값 디버그
        log.debug("sapConnectWebList rfcName : [{}]", rfcName);

        String destinationID = jCoDestination.getDestinationID();

        // 필수 로그만 적용한다. 정보성 메시지
        log.info("jCoDestination ID : [{}]", destinationID);

        try {
            jCoDestination.getRepository().clear();
            // 개발시 디버그용으로 사용
            log.debug("Repository clear");

            JCoRepository jCoRepository = jCoDestination.getRepository();
            JCoFunction jCoFunction = jCoRepository.getFunction(rfcName);
            if (jCoFunction != null) {
                jCoFunction.getImportParameterList().setValue("I_SYS_CD",  "IN3000");
                jCoFunction.execute(jCoDestination);
                // 문제가 될 수 있는 값들 디버그
                log.debug("Data : [{}], [{}], [{}], [{}]",
                        jCoFunction.getExportParameterList().getString("ARBGB"),
                        jCoFunction.getExportParameterList().getString("MSGNR"),
                        jCoFunction.getExportParameterList().getString("MTYPE"),
                        jCoFunction.getExportParameterList().getString("MESSAGE")
                );
            } else if (jCoFunction == null){
                // 예상 가능한 오류로 인한 데이터 체크
                log.error("JCoFunction Null err : [{}]", rfcName);
                throw new BusinessException("jCoFunction is null");
            } else {
                // 예상하지 못한 오류의 데이터 체크
                log.error("JCoFunction err : [{}]", rfcName);
            }
        } catch (BusinessException e) {
            // 비즈니스 로직에서 발생한 에러 코드
            log.error("JCoFunction BusinessException : [{}]", e.toString());
        } catch (Exception e) {
            // 인지하지 못한 에러를 확인
            log.error("JCoFunction Exception : [{}]", e.toString());
        } finally {
            // 연결이 제대로 되어 있는 필수 로그
            log.info("httpSession ID : [{}]", httpSession.getId());
        }
        return httpSession.getId();
    }
}
