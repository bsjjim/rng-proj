package com.lotterental.rng.demo.controller;

import com.lotterental.rng.common.base.BusinessData;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.service.EtcService;
import com.lotterental.rng.demo.service.NexacroDataService;
import com.lotterental.rng.demo.vo.CopyVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController

public class EtcController {
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

    @GetMapping("/masking")
    public String masking(HttpServletRequest HttpServletRequest) {

        try {
            CopyVo copyVo = etcService.masking(HttpServletRequest);
        } catch (BusinessException e) {

        } catch (Exception e) {

        }

        return "result";
    }

}
