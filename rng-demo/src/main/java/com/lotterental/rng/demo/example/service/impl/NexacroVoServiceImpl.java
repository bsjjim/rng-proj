package com.lotterental.rng.demo.example.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.common.component.BasicGridBizComponent;
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
    public List<NexacroVo> selectNexacroVoList(NexacroVo nexacroVo) {
    	NexacroModel model = nexacroVoMapper.selectBusinessRule(nexacroVo);
    	if (model == null) {
    		throw new BusinessException("error", "업무 규칙");
    	}
		return nexacroVoMapper.selectNexacroVoList(nexacroVo).stream()
				.map(d -> d.build())
				.collect(Collectors.toList());
    }
    
    @Override
    public int saveNexacroVo(NexacroVo nexacroVo) {
    	if (nexacroVo.isInsertedRow()) {
			return nexacroVoMapper.insertNexacroVo(nexacroVo);
		} else if (nexacroVo.isUpdatedRow()) {
			return nexacroVoMapper.updateNexacroVo(nexacroVo);
		} else if (nexacroVo.isDeletedRow()) {
			return nexacroVoMapper.deleteNexacroVo(nexacroVo);
		}
    	return 0;
    }
    
    @Override
    public int saveNexacroVoList(List<NexacroVo> nexacroVoList) {
    	int cnt = 0;
    	for (NexacroVo nexacroVo : nexacroVoList) {
    		if (nexacroVo.isInsertedRow()) {
    			cnt += nexacroVoMapper.insertNexacroVo(nexacroVo);
    		} else if (nexacroVo.isUpdatedRow()) {
    			cnt += nexacroVoMapper.updateNexacroVo(nexacroVo);
    		} else if (nexacroVo.isDeletedRow()) {
    			cnt += nexacroVoMapper.deleteNexacroVo(nexacroVo);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroVoList2(List<NexacroVo> nexacroVoList) {
    	return nexacroVoList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(NexacroVo nexacroVo) {
		if (nexacroVo.isInsertedRow()) {
			return nexacroVoMapper.insertNexacroVo(nexacroVo);
		} else if (nexacroVo.isUpdatedRow()) {
			return nexacroVoMapper.updateNexacroVo(nexacroVo);
		} else if (nexacroVo.isDeletedRow()) {
			return nexacroVoMapper.deleteNexacroVo(nexacroVo);
		}
		return 0;
	}

    @Override
    public int saveNexacroVoList3(List<NexacroVo> nexacroVoList) {
    	return BasicGridBizComponent.newInstance(nexacroVoList, nexacroComponentMapper).process();
    }

}