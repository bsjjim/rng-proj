package com.lotterental.rng.demo.example.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
    	return nexacroVoMapper.selectNexacroVoByVo(nexacroVo);
	}
    
    @Override
	public NexacroVo selectNexacroVoByVo2ModelAndVo(NexacroVo nexacroVo) {
    	NexacroModel nexacroModel = nexacroVo.toModel().setDes2("input data change");
    	return nexacroVoMapper.selectNexacroVoByModel(nexacroModel);
	}
    
    @Override
	public NexacroVo selectNexacroVoByVoAndModel2Vo(NexacroVo nexacroVo) {
    	NexacroModel nexacroModel = nexacroVoMapper.selectNexacroModelByVo(nexacroVo);
    	return (nexacroModel != null) ? nexacroModel.setDes2("output data change").build() : null;
	}
    
    @Override
	public NexacroVo selectNexacroVoByVo2ModelAndModel2Vo(NexacroVo nexacroVo) {
    	NexacroModel inputModel = nexacroVo.toModel().setDes2("input data change");
    	return Optional.ofNullable(nexacroVoMapper.selectNexacroModelByModel(inputModel))
    			.map(model -> model.setDes2("output data change").build())
    			.orElse(null);
	}
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVoAndVo(NexacroVo nexacroVo) throws BusinessException {
    	NexacroVo rule = nexacroVoMapper.selectBusinessRule(nexacroVo);
    	if (rule == null) {
    		throw new BusinessException("error", "업무 규칙");
    	}
    	
    	// 입력 데이터에 변경 필요성이 존재하지 않으므로 바로 조회한다.
    	// 조회 결과에 대한 변경 필요성이 존재하지 않으므로 Vo 타입을 반환한다.
		List<NexacroVo> resultList = nexacroVoMapper.selectNexacroVoListByVo(nexacroVo);
		
		// 반환
		return resultList;
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVo2ModelAndVo(NexacroVo nexacroVo) {
    	// 입력 데이터에 변경 필요성이 존재하므로 Vo를 Model로 변경한다.
    	NexacroModel nexacroModel = nexacroVo.toModel();
    	
    	// 변환된 Model 객체에서 변경 작업을 수행한다.
    	nexacroModel
			.setSysCd("IN3000")
			.setModId("SD")
			.setModNm("통합 AGENT");
    	
    	// 변경된 Model 객체를 통해 조회한다.
    	// 조회 결과에 대한 변경 필요성이 존재하지 않으므로 Vo 타입을 반환한다.
		List<NexacroVo> resultList = nexacroVoMapper.selectNexacroVoListByModel(nexacroModel);
		
		// 반환
		return resultList;
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVoAndModel2Vo(NexacroVo nexacroVo) {
    	// 입력 데이터에 변경 필요성이 존재하지 않으므로 바로 조회한다.
    	// 조회 결과에 대한 변경 필요성이 존재하므로 Vo가 아닌 Model 타입을 반환한다.
    	List<NexacroModel> resultList = nexacroVoMapper.selectNexacroModelListByVo(nexacroVo);
    	
    	// 반환된 Model 객체에서 원하는 값을 변경한다.
    	Stream<NexacroModel> modelStream = resultList.stream()
	    		.map(model -> {
	    			model.setModNm("[Model 변경]" + model.getModNm());
	    			model.setMessage("changed by model");
	    			model.setInqYn("Y");
	    			model.setDes2("descripted by model");
	    			return model;
	    		});
    	
    	// 변경을 마친 Model 객체를 Vo 객체로 변환한다.
	    List<NexacroVo> voList = modelStream
	    							.map(NexacroModel::build)
	    							.collect(Collectors.toList());
	    
	    // 반환
	    return voList;
    }
    
    @Override
    public List<NexacroVo> selectNexacroVoListByVo2ModelAndModel2Vo(NexacroVo nexacroVo) {
    	// 입력 데이터에 변경 필요성이 존재하므로 Vo를 Model로 변경한다.
    	NexacroModel nexacroModel = nexacroVo.toModel();
    	
    	// 변환된 Model 객체에서 변경 작업을 수행한다.
    	nexacroModel
	    	.setSysCd("IN3000")
			.setModId("SD")
			.setModNm("통합 AGENT")
			.setModTy("xfdl");
    	
    	// 변경된 Model 객체를 통해 조회한다.
    	// 조회 결과에 대한 변경 필요성이 존재하지 않으므로 Vo 타입을 반환한다.
		List<NexacroModel> resultList = nexacroVoMapper.selectNexacroModelListByModel(nexacroModel);
    	
    	// 반환된 Model 객체에서 원하는 값을 변경한다.
    	Stream<NexacroModel> modelStream = resultList.stream()
	    		.map(model -> {
	    			model.setModNm("[Model 변경]" + model.getModNm());
	    			model.setMessage("changed by model");
	    			model.setInqYn("Y");
	    			model.setDes2("descripted by model");
	    			return model;
	    		});
    	
    	// 변경을 마친 Model 객체를 Vo 객체로 변환한다.
	    List<NexacroVo> voList = modelStream
	    							.map(NexacroModel::build)
	    							.collect(Collectors.toList());
	    
	    // 반환
	    return voList;
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
