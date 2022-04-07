package com.lotterental.rng.demo.nexacro.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.lotterental.rng.core.common.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.component.BasicGridBizComponent;
import com.lotterental.rng.demo.nexacro.mapper.Nexacro1Mapper;
import com.lotterental.rng.demo.nexacro.mapper.Nexacro2Mapper;
import com.lotterental.rng.demo.nexacro.service.NexacroService;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NexacroServiceImpl implements NexacroService {
	
    @Autowired
    private Nexacro1Mapper nexacro1Mapper;
    
    @Autowired
    private Nexacro2Mapper nexacro2Mapper;

    @Override
	public NexacroVo selectNexacro(NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
    	if (!StringUtils.hasText(nexacroVo.getName())) {
    		throw new BusinessException("required", "이름");	// 이름은 필수값 입니다.
    	}
		return nexacro1Mapper.selectNexacro(nexacroVo).build();
	}
    
    @Override
    public List<NexacroVo> selectNexacroList(NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
    	if (!StringUtils.hasText(nexacroVo.getName())) {
    		throw new BusinessException("required", "이름");	// 이름은 필수값 입니다.
    	}
		return nexacro1Mapper.selectNexacroList(nexacroVo).stream()
				.map(d -> d.build())
				.collect(Collectors.toList());
    }
    
    @Override
    public int saveNexacro(NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
    	if (nexacroVo.isInsertedRow()) {
			return nexacro1Mapper.insertNexacro(nexacroVo);
		} else if (nexacroVo.isUpdatedRow()) {
			return nexacro1Mapper.updateNexacro(nexacroVo);
		} else if (nexacroVo.isDeletedRow()) {
			return nexacro1Mapper.deleteNexacro(nexacroVo);
		}
    	return 0;
    }
    
    @Override
    public int saveNexacroList(List<NexacroVo> nexacroVoList) {
    	log.info("parameter = {}", nexacroVoList);
    	int cnt = 0;
    	for (NexacroVo nexacroVo : nexacroVoList) {
    		if (nexacroVo.isInsertedRow()) {
    			cnt += nexacro1Mapper.insertNexacro(nexacroVo);
    		} else if (nexacroVo.isUpdatedRow()) {
    			cnt += nexacro1Mapper.updateNexacro(nexacroVo);
    		} else if (nexacroVo.isDeletedRow()) {
    			cnt += nexacro1Mapper.deleteNexacro(nexacroVo);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroList2(List<NexacroVo> nexacroVoList) {
    	log.info("parameter = {}", nexacroVoList);
    	return nexacroVoList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(NexacroVo nexacroVo) {
		if (nexacroVo.isInsertedRow()) {
			return nexacro1Mapper.insertNexacro(nexacroVo);
		} else if (nexacroVo.isUpdatedRow()) {
			return nexacro1Mapper.updateNexacro(nexacroVo);
		} else if (nexacroVo.isDeletedRow()) {
			return nexacro1Mapper.deleteNexacro(nexacroVo);
		}
		return 0;
	}

    @Override
    public int saveNexacroList3(List<NexacroVo> nexacroVoList) {
    	log.info("parameter = {}", nexacroVoList);
    	return BasicGridBizComponent.newInstance(nexacroVoList, nexacro2Mapper).process();
    }	

}
