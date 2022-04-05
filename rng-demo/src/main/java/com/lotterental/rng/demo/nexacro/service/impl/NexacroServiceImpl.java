package com.lotterental.rng.demo.nexacro.service.impl;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.lotterental.rng.demo.nexacro.mapper.Nexacro2Mapper;
import com.lotterental.rng.demo.nexacro.model.NexacroModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetRowTypeAccessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.component.BasicGridBizComponent;
import com.lotterental.rng.common.exception.BizException;
import com.lotterental.rng.demo.nexacro.mapper.Nexacro1Mapper;
import com.lotterental.rng.demo.nexacro.service.NexacroService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NexacroServiceImpl implements NexacroService {
	
    @Autowired
    private Nexacro1Mapper nexacro1Mapper;
    
    @Autowired
    private Nexacro2Mapper nexacro2Mapper;

	@Override
	public List<Map<String, Object>> selectNexacroList(Map<String, Object> selectMap) throws Exception {
		return nexacro2Mapper.selectNexacroList2(selectMap);
	}

    @Override
    public List<NexacroVo> selectNexacroList(NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
//    	if (!StringUtils.hasText(nexacroVo.getId())) {
//    		throw new BizException("required", "샘플ID");	// 샘플ID는 필수값 입니다.
//    	}

		List<NexacroModel> nexacroModelList = nexacro1Mapper.selectNexacroList(nexacroVo);

		List<NexacroVo> nexacroVoList = nexacroModelList.stream()
				.map(d -> d.build())
				.collect(Collectors.toList());

    	return nexacroVoList;
    }
    
    @Override
    public int saveNexacroList1(List<NexacroVo> nexacroVoList) {
    	int cnt = 0;
    	for (NexacroVo sampleVo : nexacroVoList) {
    		if (sampleVo.isInsertedRow()) {
    			cnt += nexacro1Mapper.insertNexacro(sampleVo);
    		} else if (sampleVo.isUpdatedRow()) {
    			cnt += nexacro1Mapper.updateNexacro(sampleVo);
    		} else if (sampleVo.isDeletedRow()) {
    			cnt += nexacro1Mapper.deleteNexacro(sampleVo);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroList2(List<NexacroVo> nexacroVoList) {
    	return nexacroVoList.stream()
    			.mapToInt(this::process)
    			.sum();
    }

    @Override
    public int saveNexacroList3(List<NexacroVo> nexacroVoList) {
    	return BasicGridBizComponent.newInstance(nexacroVoList, nexacro2Mapper).process();
    }

	private int process(NexacroVo sampleVo) {
		if (sampleVo.isInsertedRow()) {
			return nexacro1Mapper.insertNexacro(sampleVo);
		} else if (sampleVo.isUpdatedRow()) {
			return nexacro1Mapper.updateNexacro(sampleVo);
		} else if (sampleVo.isDeletedRow()) {
			return nexacro1Mapper.deleteNexacro(sampleVo);
		}
		return 0;
	}


	@Override
	public void updateNexacroList(List<Map<String,Object>> mapList) throws Exception {
		int size = mapList.size();

		for (int i=0; i<size; i++) {
			Map<String,Object> sample = mapList.get(i);
			int dataRowType = Integer.parseInt(String.valueOf(sample.get(DataSetRowTypeAccessor.NAME)));
			if (dataRowType == DataSet.ROW_TYPE_INSERTED){
				String id = null;

				//채번할 게시물 ID번호 조회
//				int idNum = nexacro1Mapper.selectId();
//				sample.replace("ID", idNum);
				//게시물 신규추가
//				nexacro1Mapper.insertSampleList(sample);
				//다음 채번시 사용될 ID번호 UPDATE
//				sample.replace("ID", idNum + 1);
//				nexacro1Mapper.updateId(sample);
			}
			else if (dataRowType == DataSet.ROW_TYPE_UPDATED) {
//				nexacro1Mapper.updateSampleList(sample);
			}
			else if (dataRowType == DataSet.ROW_TYPE_DELETED) {
//				nexacro1Mapper.deleteSampleList(sample);
			}
		}
	}


}
