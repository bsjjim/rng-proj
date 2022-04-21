package com.lotterental.rng.demo.example.service;

import com.lotterental.rng.demo.example.vo.CopyVo;

import javax.servlet.http.HttpServletRequest;

public interface EtcService {
    CopyVo objectCopy();
    CopyVo masking(HttpServletRequest HttpServletRequest);
}