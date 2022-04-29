package com.lotterental.rng.demo.example.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.base.BusinessData;
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
		if (nexacroData.isInsertedRow()) {
			return nexacroMapper.insertNexacroData(nexacroData);
		} else if (nexacroData.isUpdatedRow()) {
			return nexacroMapper.updateNexacroData(nexacroData);
		} else if (nexacroData.isDeletedRow()) {
			return nexacroMapper.deleteNexacroData(nexacroData);
		}
		return 0;
	}
    
    @Override
    public int saveNexacroDataList(List<BusinessData> nexacroDataList) {
    	int cnt = 0;
    	for (BusinessData nexacroData : nexacroDataList) {
    		if (nexacroData.isInsertedRow()) {
    			cnt += nexacroMapper.insertNexacroData(nexacroData);
    		} else if (nexacroData.isUpdatedRow()) {
    			cnt += nexacroMapper.updateNexacroData(nexacroData);
    		} else if (nexacroData.isDeletedRow()) {
    			cnt += nexacroMapper.deleteNexacroData(nexacroData);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroDataList2(List<BusinessData> nexacroDataList) {
    	return nexacroDataList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(BusinessData nexacroData) {
    	if (nexacroData.isInsertedRow()) {
			return nexacroMapper.insertNexacroData(nexacroData);
    	} else if (nexacroData.isUpdatedRow()) {
			return nexacroMapper.updateNexacroData(nexacroData);
    	} else if (nexacroData.isDeletedRow()) {
			return nexacroMapper.deleteNexacroData(nexacroData);
		}
		return 0;
    }
    
}
