package com.lotterental.rng.demo.example.service;

import javax.servlet.http.HttpSession;

public interface LogService {
    String sapConnectWebList(HttpSession httpSession, String rfcName);
}
