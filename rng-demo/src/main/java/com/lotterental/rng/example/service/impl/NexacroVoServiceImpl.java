package com.lotterental.rng.example.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.component.BasicGridBizComponent;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.example.mapper.NexacroComponentMapper;
import com.lotterental.rng.example.mapper.NexacroVoMapper;
import com.lotterental.rng.example.model.NexacroModel;
import com.lotterental.rng.example.service.NexacroVoService;
import com.lotterental.rng.example.vo.NexacroVo;

@Service
public class NexacroVoServiceImpl implements NexacroVoService {
	
    @Autowired
    private NexacroVoMapper nexacroVoMapper;
    
    @Autowired
    private NexacroComponentMapper nexacroComponentMapper;

    @Override
	public NexacroVo selectNexacroVo(NexacroVo nexacroVo) throws Exception {
    	NexacroModel model = nexacroVoMapper.selectNexacroVo(nexacroVo);
    	return model != null ? model.build() : null;
	}
    
    @Override
    public List<NexacroVo> selectNexacroVoList(NexacroVo nexacroVo) throws Exception {
    	if (!StringUtils.hasText(nexacroVo.getModId())) {
    		throw new BusinessException("required", "모듈ID");	// 모듈ID는 필수값 입니다.
    	} else if (!StringUtils.hasText(nexacroVo.getModNm())) {
    		throw new BusinessException("required", "모듈명");	// 모듈명은 필수값 입니다.
    	}
		return nexacroVoMapper.selectNexacroVoList(nexacroVo).stream()
				.map(d -> d.build())
				.collect(Collectors.toList());
    }
    
    @Override
    public int saveNexacroVo(NexacroVo nexacroVo) throws Exception {
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
    public int saveNexacroVoList(List<NexacroVo> nexacroVoList) throws Exception {
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
    public int saveNexacroVoList2(List<NexacroVo> nexacroVoList) throws Exception {
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
    public int saveNexacroVoList3(List<NexacroVo> nexacroVoList) throws Exception {
    	return BasicGridBizComponent.newInstance(nexacroVoList, nexacroComponentMapper).process();
    }

}