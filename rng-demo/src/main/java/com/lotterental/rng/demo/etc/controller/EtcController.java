package com.lotterental.rng.demo.etc.controller;

import com.lotterental.rng.common.base.BusinessData;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.springframework.stereotype.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class EtcController {

    @PostMapping("/hello")
    public String sayHello() {
        return "hello";
    }
}
