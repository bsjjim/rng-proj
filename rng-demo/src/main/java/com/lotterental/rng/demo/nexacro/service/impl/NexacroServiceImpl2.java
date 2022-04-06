package com.lotterental.rng.demo.nexacro.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.cnst.DataRowStatus;
import com.lotterental.rng.common.exception.BizException;
import com.lotterental.rng.demo.nexacro.mapper.Nexacro1Mapper;
import com.lotterental.rng.demo.nexacro.service.NexacroService2;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetRowTypeAccessor;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NexacroServiceImpl2 implements NexacroService2 {
	
    @Autowired
    private Nexacro1Mapper nexacroMapper;

    @Override
	public Map<String,Object> selectNexacro(Map<String, Object> nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	if (!StringUtils.hasText((String) nexacroMap.get("name"))) {
    		throw new BizException("required", "이름");	// 이름은 필수값 입니다.
    	}
    	return nexacroMapper.selectNexacro(nexacroMap);
	}
    
    @Override
    public List<Map<String,Object>> selectNexacroList(Map<String,Object> nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	if (!StringUtils.hasText((String) nexacroMap.get("name"))) {
    		throw new BizException("required", "이름");	// 이름은 필수값 입니다.
    	}
    	return nexacroMapper.selectNexacroList2(nexacroMap);
    }
    
    @Override
    public int saveNexacro(Map<String, Object> nexacroMap) {
    	log.info("parameter = {}", nexacroMap);
    	String rowStatusColumn = DataRowStatus.getRowStatusColumn();
    	if (DataRowStatus.isInsertedRow((String) nexacroMap.get(rowStatusColumn))) {
			return nexacroMapper.insertNexacro(nexacroMap);
		} else if (DataRowStatus.isUpdatedRow((String) nexacroMap.get(rowStatusColumn))) {
			return nexacroMapper.updateNexacro(nexacroMap);
		} else if (DataRowStatus.isUpdatedRow((String) nexacroMap.get(rowStatusColumn))) {
			return nexacroMapper.deleteNexacro(nexacroMap);
		}
    	return 0;
    }
    
    @Override
    public int saveNexacroList(List<Map<String,Object>> nexacroMapList) {
    	log.info("parameter = {}", nexacroMapList);
    	int cnt = 0;
    	String rowStatusColumn = DataRowStatus.getRowStatusColumn();
    	for (Map<String,Object> NexacroMap : nexacroMapList) {
    		if (DataRowStatus.isInsertedRow((String) NexacroMap.get(rowStatusColumn))) {
    			cnt += nexacroMapper.insertNexacro(NexacroMap);
    		} else if (DataRowStatus.isUpdatedRow((String) NexacroMap.get(rowStatusColumn))) {
    			cnt += nexacroMapper.updateNexacro(NexacroMap);
    		} else if (DataRowStatus.isUpdatedRow((String) NexacroMap.get(rowStatusColumn))) {
    			cnt += nexacroMapper.deleteNexacro(NexacroMap);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroList2(List<Map<String,Object>> nexacroMapList) {
    	log.info("parameter = {}", nexacroMapList);
    	return nexacroMapList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(Map<String,Object> NexacroMap) {
    	String rowStatusColumn = DataRowStatus.getRowStatusColumn();
    	if (DataRowStatus.isInsertedRow((String) NexacroMap.get(rowStatusColumn))) {
			return nexacroMapper.insertNexacro(NexacroMap);
    	} else if (DataRowStatus.isUpdatedRow((String) NexacroMap.get(rowStatusColumn))) {
			return nexacroMapper.updateNexacro(NexacroMap);
    	} else if (DataRowStatus.isUpdatedRow((String) NexacroMap.get(rowStatusColumn))) {
			return nexacroMapper.deleteNexacro(NexacroMap);
		}
		return 0;
    }
    
    @Override
	public void updateNexacroList(List<Map<String,Object>> mapList) {
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
