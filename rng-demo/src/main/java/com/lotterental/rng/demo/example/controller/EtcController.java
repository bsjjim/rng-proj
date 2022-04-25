package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.example.service.EtcService;
import com.lotterental.rng.demo.example.vo.CopyVo;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
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

}
