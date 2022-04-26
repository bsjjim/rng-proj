package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.demo.example.service.TRDemoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/trdemo")
public class TRDemoController {

    @Autowired
    private TRDemoService trDemoService;

    @GetMapping("/insertrequired")
    public void insertRequired () {
        trDemoService.insertRequired();
    }

    @GetMapping("/insertrequiresnew")
    public void insertRequiresNew () {
        trDemoService.insertRequiresNew();
    }

    @GetMapping("/insertnested")
    public void insertNested() {
        trDemoService.insertNested();
    }

    @GetMapping("/insertmandatory")
    public void insertMandatory() {
        trDemoService.insertMandatory();
    }

    @GetMapping("/insertsupport")
    public  void insertSupport() {
        trDemoService.insertSupport();
    }

    @GetMapping("/insertnotsupport")
    public  void insertNotSupport() {
        trDemoService.insertNotSupport();
    }
}
