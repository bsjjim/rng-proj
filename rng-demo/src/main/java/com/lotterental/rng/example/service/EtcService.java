package com.lotterental.rng.example.service;

import com.lotterental.rng.example.vo.CopyVo;

import javax.servlet.http.HttpServletRequest;

public interface EtcService {
    CopyVo objectCopy();
    CopyVo masking(HttpServletRequest HttpServletRequest);
}