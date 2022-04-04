package com.lotterental.rng.temp.demo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.temp.cmmn.component.BasicGridBizComponent;
import com.lotterental.rng.temp.cmmn.exception.RentalException;
import com.lotterental.rng.temp.demo.mapper.SampleMapper;
import com.lotterental.rng.temp.demo.mapper.SampleMapper2;
import com.lotterental.rng.temp.demo.service.SampleService;
import com.lotterental.rng.temp.demo.vo.SampleVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class SampleServiceImpl implements SampleService {
	
    @Autowired
    private SampleMapper sampleMapper;
    
    @Autowired
    private SampleMapper2 sampleMapper2;

    @Override
    public List<SampleVo> selectSampleList(SampleVo sampleVo) {
    	log.info("parameter = {}", sampleVo);
    	if (!StringUtils.hasText(sampleVo.getSampleId())) {
    		RentalException.occurException("required", "샘플ID");	// 샘플ID는 필수값 입니다.
    	}
    	return sampleMapper.selectSampleList(sampleVo);
    }
    
    @Override
    public int saveSampleList(List<SampleVo> sampleVoList) {
    	int cnt = 0;
    	for (SampleVo sampleVo : sampleVoList) {
    		if (sampleVo.isInsertedRow()) {
    			cnt += sampleMapper.insertSample(sampleVo);
    		} else if (sampleVo.isUpdatedRow()) {
    			cnt += sampleMapper.updateSample(sampleVo);
    		} else if (sampleVo.isDeletedRow()) {
    			cnt += sampleMapper.deleteSample(sampleVo);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveSampleList2(List<SampleVo> sampleVoList) {
    	return sampleVoList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(SampleVo sampleVo) {
    	if (sampleVo.isInsertedRow()) {
			return sampleMapper.insertSample(sampleVo);
		} else if (sampleVo.isUpdatedRow()) {
			return sampleMapper.updateSample(sampleVo);
		} else if (sampleVo.isDeletedRow()) {
			return sampleMapper.deleteSample(sampleVo);
		}
		return 0;
    }
    
    @Override
    public int saveSampleList3(List<SampleVo> sampleVoList) {
    	return BasicGridBizComponent.newInstance(sampleVoList, sampleMapper2).process();
    }
    
}
