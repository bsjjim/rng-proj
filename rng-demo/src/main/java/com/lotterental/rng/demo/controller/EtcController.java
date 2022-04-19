package com.lotterental.rng.demo.controller;

import com.lotterental.rng.common.base.BusinessData;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.service.NexacroDataService;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Slf4j
@Controller
public class EtcController {
    @Autowired
    private NexacroDataService nexacroService;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/exceptionhandler")
    public NexacroResult exceptionHandler(@ParamDataSet(name = "dsImp") BusinessData nexacroData) {

        NexacroResult result = new NexacroResult();
        try {
            log.debug("parameter = {}", nexacroData);
            List<BusinessData> resultDataList = nexacroService.selectNexacroDataList(nexacroData);
            result.addDataSet("dsList", resultDataList);
        } catch (BusinessException e) {

        } catch (Exception e) {

        }

        return result;
    }
}
