package com.lotterental.rng.demo.example.service.impl;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.lotterental.rng.demo.example.service.AopService;

@Service
public class AopServiceImpl implements AopService {
	
    @Override
	public void doAopSample(Map<String, Object> map) throws InterruptedException {
    	Thread.sleep(1000);
	}
    
}
