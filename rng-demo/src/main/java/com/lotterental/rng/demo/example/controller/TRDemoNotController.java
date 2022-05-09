package com.lotterental.rng.demo.example.controller;

import com.lotterental.rng.demo.example.service.TRDemoNotService;
import com.lotterental.rng.demo.example.service.TRDemoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/trdemo/not")
public class TRDemoNotController {

    @Autowired
    private TRDemoNotService trDemoNotService;

    @GetMapping("/insertrequired")
    public void insertRequired () {
        trDemoNotService.insertRequired();
    }

    @GetMapping("/insertrequiresnew")
    public void insertRequiresNew () {
        trDemoNotService.insertRequiresNew();
    }

    @GetMapping("/insertnested")
    public void insertNested() {
        trDemoNotService.insertNested();
    }

    @GetMapping("/insertmandatory")
    public void insertMandatory() {
        trDemoNotService.insertMandatory();
    }

    @GetMapping("/insertsupport")
    public  void insertSupport() {
        trDemoNotService.insertSupport();
    }

    @GetMapping("/insertnotsupport")
    public  void insertNotSupport() {
        trDemoNotService.insertNotSupport();
    }

    @GetMapping("/selecttrlist")
    public void selectTRList() {
        trDemoNotService.selectTRList();
    }
}
