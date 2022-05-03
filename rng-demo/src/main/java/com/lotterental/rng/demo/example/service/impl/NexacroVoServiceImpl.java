package com.lotterental.rng.demo.example.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.core.common.component.BasicGridBizComponent;
import com.lotterental.rng.demo.example.mapper.NexacroComponentMapper;
import com.lotterental.rng.demo.example.mapper.NexacroVoMapper;
import com.lotterental.rng.demo.example.model.NexacroModel;
import com.lotterental.rng.demo.example.service.NexacroVoService;
import com.lotterental.rng.demo.example.vo.NexacroVo;

@Service
public class NexacroVoServiceImpl implements NexacroVoService {
	
    @Autowired
    private NexacroVoMapper nexacroVoMapper;
    
    @Autowired
    private NexacroComponentMapper nexacroComponentMapper;

    @Override
	public NexacroVo selectNexacroVo(NexacroVo nexacroVo) {
    	NexacroModel model = nexacroVoMapper.selectNexacroVo(nexacroVo);
    	return model != null ? model.build() : null;
	}
    
    @Override
    public List<NexacroVo> selectNexacroVoList(NexacroVo nexacroVo) throws BusinessException {
    	NexacroModel rule = nexacroVoMapper.selectBusinessRule(nexacroVo);
    	if (rule == null) {
    		throw new BusinessException("error", "업무 규칙");
    	}
		return nexacroVoMapper.selectNexacroVoList(nexacroVo).stream()
				.map(NexacroModel::build)
				.collect(Collectors.toList());
    }
    
    @Override
    public int saveNexacroVo(NexacroVo nexacroVo) {
    	return process(nexacroVo);
    }
    
    @Override
    public int saveNexacroVoList(List<NexacroVo> nexacroVoList) {
    	int cnt = 0;
    	for (NexacroVo nexacroVo : nexacroVoList) {
    		cnt += process(nexacroVo);
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroVoListByStream(List<NexacroVo> nexacroVoList) {
    	return nexacroVoList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(NexacroVo nexacroVo) {
    	return (nexacroVo.isInsertedRow()) ? nexacroVoMapper.insertNexacroVo(nexacroVo) : 
    			(nexacroVo.isUpdatedRow()) ? nexacroVoMapper.updateNexacroVo(nexacroVo) : 
    			(nexacroVo.isDeletedRow()) ? nexacroVoMapper.deleteNexacroVo(nexacroVo) : 0;
    }
    
    @Override
    public int saveNexacroVoListByComponent(List<NexacroVo> nexacroVoList) {
    	return BasicGridBizComponent.newInstance(nexacroVoList, nexacroComponentMapper).process();
    }

}
