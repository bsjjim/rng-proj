package com.lotterental.rng.demo.example.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lotterental.rng.core.common.component.BasicGridBizComponent;
import com.lotterental.rng.core.common.exception.BusinessException;
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
	public NexacroVo selectNexacroVoByVoAndVo(NexacroVo nexacroVo) {
    	// vo => vo
    	return nexacroVoMapper.selectNexacroVoByVo(nexacroVo);
	}
    
    @Override
	public NexacroVo selectNexacroVoByVo2VoAndVo(NexacroVo nexacroVo) {
    	// vo - vo => vo
    	nexacroVo.setDes2("input data change");
    	return nexacroVoMapper.selectNexacroVoByVo(nexacroVo);
	}
    
    @Override
	public NexacroVo selectNexacroVoByVo2ModelAndVo(NexacroVo nexacroVo) {
    	// vo - model => vo
    	NexacroModel nexacroModel = nexacroVo.toModel().setDes2("input data change");
    	return nexacroVoMapper.selectNexacroVoByModel(nexacroModel);
	}
    
    @Override
	public NexacroVo selectNexacroVoByVoAndModel2Vo(NexacroVo nexacroVo) {
    	// vo => model - vo
    	NexacroModel nexacroModel = nexacroVoMapper.selectNexacroModelByVo(nexacroVo);
    	return (nexacroModel != null) ? nexacroModel.setDes2("output data change").build() : null;
	}
    
    @Override
	public NexacroVo selectNexacroVoByVo2ModelAndModel2Vo(NexacroVo nexacroVo) {
    	// vo - model => model - vo
    	NexacroModel inputModel = nexacroVo.toModel().setDes2("input data change");
    	return Optional.ofNullable(nexacroVoMapper.selectNexacroModelByModel(inputModel))
    			.map(model -> model.setDes2("output data change").build())
    			.orElse(null);
	}
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVoAndVo(NexacroVo nexacroVo) throws BusinessException {
    	// vo => vo
    	NexacroVo rule = nexacroVoMapper.selectBusinessRule(nexacroVo);
    	if (rule == null) {
    		throw new BusinessException("error", "업무 규칙");
    	}
		return nexacroVoMapper.selectNexacroVoListByVo(nexacroVo);
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVo2VoAndVo(NexacroVo nexacroVo) {
    	// vo - vo => vo
    	nexacroVo.setDes2("input data change");
		return nexacroVoMapper.selectNexacroVoListByVo(nexacroVo);
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVo2ModelAndVo(NexacroVo nexacroVo) {
    	// vo - model => vo
    	NexacroModel nexacroModel = nexacroVo.toModel().setDes2("input data change");
		return nexacroVoMapper.selectNexacroVoListByModel(nexacroModel);
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVoAndModel2Vo(NexacroVo nexacroVo) {
    	// vo => model - vo
		return nexacroVoMapper.selectNexacroModelListByVo(nexacroVo).stream()
				.map(model -> model.setDes2("output data change"))
				.map(NexacroModel::build)
				.collect(Collectors.toList());
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVo2ModelAndModel2Vo(NexacroVo nexacroVo) {
    	// vo - model => model - vo
    	NexacroModel nexacroModel = nexacroVo.toModel().setDes2("input data change");
		return nexacroVoMapper.selectNexacroModelListByModel(nexacroModel).stream()
				.map(model -> model.setDes2("output data change"))
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
