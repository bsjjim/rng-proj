package com.lotterental.rng.demo.example.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.cnst.DataRowStatus;
import com.lotterental.rng.demo.example.mapper.NexacroMapMapper;
import com.lotterental.rng.demo.example.service.NexacroMapService;

@Service
public class NexacroMapServiceImpl implements NexacroMapService {
	
    @Autowired
    private NexacroMapMapper nexacroMapper;

    @Override
	public Map<String,Object> selectNexacroMap(Map<String, Object> nexacroMap) {
    	return nexacroMapper.selectNexacroMap(nexacroMap);
	}
    
    @Override
    public List<Map<String,Object>> selectNexacroMapList(Map<String, Object> nexacroMap) {
    	Map<String, Object> rule = nexacroMapper.selectBusinessRule(nexacroMap);
    	if (rule == null) {
    		throw new BusinessException("error", "업무 규칙");
    	}
    	return nexacroMapper.selectNexacroMapList(nexacroMap);
    }
    
    @Override
    public int saveNexacroMap(Map<String, Object> nexacroMap) {
    	return process(nexacroMap);
    }
    
    @Override
    public int saveNexacroMapList(List<Map<String, Object>> nexacroMapList) {
    	int cnt = 0;
    	for (Map<String, Object> nexacroMap : nexacroMapList) {
    		cnt += process(nexacroMap);
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroMapListByStream(List<Map<String, Object>> nexacroMapList) {
    	return nexacroMapList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(Map<String, Object> nexacroMap) {
    	return (DataRowStatus.isInsertedRow(nexacroMap)) ? nexacroMapper.insertNexacroMap(nexacroMap) : 
    			(DataRowStatus.isUpdatedRow(nexacroMap)) ? nexacroMapper.updateNexacroMap(nexacroMap) : 
    			(DataRowStatus.isDeletedRow(nexacroMap)) ? nexacroMapper.deleteNexacroMap(nexacroMap) : 0;
    }
    
}
