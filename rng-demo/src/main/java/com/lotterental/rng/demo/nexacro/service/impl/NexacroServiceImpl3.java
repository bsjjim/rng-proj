package com.lotterental.rng.demo.nexacro.service.impl;

import java.util.List;

import com.lotterental.rng.core.common.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.base.BizDataMap;
import com.lotterental.rng.demo.nexacro.mapper.Nexacro1Mapper;
import com.lotterental.rng.demo.nexacro.service.NexacroService3;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NexacroServiceImpl3 implements NexacroService3 {
	
    @Autowired
    private Nexacro1Mapper nexacroMapper;
    
    @Override
    public BizDataMap selectNexacro(BizDataMap nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	return nexacroMapper.selectNexacro(nexacroMap);
    }

    @Override
    public List<BizDataMap> selectNexacroList(BizDataMap nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	if (!StringUtils.hasText(nexacroMap.getString("name"))) {
    		throw new BusinessException("required", "샘플ID");	// 샘플ID는 필수값 입니다.
    	}
    	return nexacroMapper.selectNexacroList3(nexacroMap);
    }
    
    @Override
	public int saveNexacro(BizDataMap nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
		if (nexacroMap.isInsertedRow()) {
			return nexacroMapper.insertNexacro(nexacroMap);
		} else if (nexacroMap.isUpdatedRow()) {
			return nexacroMapper.updateNexacro(nexacroMap);
		} else if (nexacroMap.isDeletedRow()) {
			return nexacroMapper.deleteNexacro(nexacroMap);
		}
		return 0;
	}
    
    @Override
    public int saveNexacroList(List<BizDataMap> nexacroMapList) {
    	log.info("parameter = {}", nexacroMapList);
    	int cnt = 0;
    	for (BizDataMap nexacroMap : nexacroMapList) {
    		if (nexacroMap.isInsertedRow()) {
    			cnt += nexacroMapper.insertNexacro(nexacroMap);
    		} else if (nexacroMap.isUpdatedRow()) {
    			cnt += nexacroMapper.updateNexacro(nexacroMap);
    		} else if (nexacroMap.isDeletedRow()) {
    			cnt += nexacroMapper.deleteNexacro(nexacroMap);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroList2(List<BizDataMap> nexacroMapList) {
    	log.info("parameter = {}", nexacroMapList);
    	return nexacroMapList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(BizDataMap nexacroMap) {
    	if (nexacroMap.isInsertedRow()) {
			return nexacroMapper.insertNexacro(nexacroMap);
    	} else if (nexacroMap.isUpdatedRow()) {
			return nexacroMapper.updateNexacro(nexacroMap);
    	} else if (nexacroMap.isDeletedRow()) {
			return nexacroMapper.deleteNexacro(nexacroMap);
		}
		return 0;
    }
    
}
