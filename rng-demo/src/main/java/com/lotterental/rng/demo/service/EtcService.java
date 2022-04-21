package com.lotterental.rng.demo.service;

import com.lotterental.rng.demo.vo.CopyVo;

import javax.servlet.http.HttpServletRequest;

public interface EtcService {
    CopyVo objectCopy();
    CopyVo masking(HttpServletRequest HttpServletRequest);
}