package com.lotterental.rng.demo.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.base.BusinessData;
import com.lotterental.rng.demo.example.mapper.NexacroDataMapper;
import com.lotterental.rng.demo.example.service.NexacroDataService;

@Service
public class NexacroDataServiceImpl implements NexacroDataService {
	
    @Autowired
    private NexacroDataMapper nexacroMapper;
    
    @Override
    public BusinessData selectNexacroData(BusinessData nexacroData) {
    	return nexacroMapper.selectNexacroData(nexacroData);
    }

    @Override
    public List<BusinessData> selectNexacroDataList(BusinessData nexacroData) {
    	BusinessData rule = nexacroMapper.selectBusinessRule(nexacroData);
    	if (rule == null) {
    		throw new BusinessException("error", "업무 규칙");
    	}
    	return nexacroMapper.selectNexacroDataList(nexacroData);
    }
    
    @Override
	public int saveNexacroData(BusinessData nexacroData) {
    	return process(nexacroData);
	}
    
    @Override
    public int saveNexacroDataList(List<BusinessData> nexacroDataList) {
    	int cnt = 0;
    	for (BusinessData nexacroData : nexacroDataList) {
    		cnt += process(nexacroData);
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroDataListByStream(List<BusinessData> nexacroDataList) {
    	return nexacroDataList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(BusinessData nexacroData) {
    	return (nexacroData.isInsertedRow()) ? nexacroMapper.insertNexacroData(nexacroData) : 
				(nexacroData.isUpdatedRow()) ? nexacroMapper.updateNexacroData(nexacroData) : 
				(nexacroData.isDeletedRow()) ? nexacroMapper.deleteNexacroData(nexacroData) : 0;
    }
    
}
