package com.lotterental.rng.demo.nexacro.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.component.BasicGridBizComponent;
import com.lotterental.rng.common.exception.BizException;
import com.lotterental.rng.demo.nexacro.mapper.NexacroMapper;
import com.lotterental.rng.demo.nexacro.mapper.NexacroMapper2;
import com.lotterental.rng.demo.nexacro.service.NexacroService;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NexacroServiceImpl implements NexacroService {
	
    @Autowired
    private NexacroMapper nexacroMapper;
    
    @Autowired
    private NexacroMapper2 nexacroMapper2;

    @Override
    public List<NexacroVo> selectSampleList(NexacroVo sampleVo) {
    	log.info("parameter = {}", sampleVo);
    	if (!StringUtils.hasText(sampleVo.getSampleId())) {
    		throw new BizException("required", "샘플ID");	// 샘플ID는 필수값 입니다.
    	}
    	return nexacroMapper.selectSampleList(sampleVo);
    }
    
    @Override
    public int saveSampleList(List<NexacroVo> sampleVoList) {
    	int cnt = 0;
    	for (NexacroVo sampleVo : sampleVoList) {
    		if (sampleVo.isInsertedRow()) {
    			cnt += nexacroMapper.insertSample(sampleVo);
    		} else if (sampleVo.isUpdatedRow()) {
    			cnt += nexacroMapper.updateSample(sampleVo);
    		} else if (sampleVo.isDeletedRow()) {
    			cnt += nexacroMapper.deleteSample(sampleVo);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveSampleList2(List<NexacroVo> sampleVoList) {
    	return sampleVoList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(NexacroVo sampleVo) {
    	if (sampleVo.isInsertedRow()) {
			return nexacroMapper.insertSample(sampleVo);
		} else if (sampleVo.isUpdatedRow()) {
			return nexacroMapper.updateSample(sampleVo);
		} else if (sampleVo.isDeletedRow()) {
			return nexacroMapper.deleteSample(sampleVo);
		}
		return 0;
    }
    
    @Override
    public int saveSampleList3(List<NexacroVo> sampleVoList) {
    	return BasicGridBizComponent.newInstance(sampleVoList, nexacroMapper2).process();
    }
    
}
