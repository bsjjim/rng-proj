package com.lotterental.rng.demo.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.lotterental.rng.common.cnst.DataRowStatus;
import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.mapper.NexacroMapMapper;
import com.lotterental.rng.demo.service.NexacroMapService;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetRowTypeAccessor;

@Service
public class NexacroMapServiceImpl implements NexacroMapService {
	
    @Autowired
    private NexacroMapMapper nexacroMapper;

    @Override
	public Map<String,Object> selectNexacroMap(Map<String, Object> nexacroMap) throws Exception {
    	return nexacroMapper.selectNexacroMap(nexacroMap);
	}
    
    @Override
    public List<Map<String,Object>> selectNexacroMapList(Map<String, Object> nexacroMap) throws Exception {
    	if (!StringUtils.hasText((String) nexacroMap.get("modId"))) {
    		throw new BusinessException("required", "모듈ID");	// 모듈ID는 필수값 입니다.
    	} else if (!StringUtils.hasText((String) nexacroMap.get("modNm"))) {
    		throw new BusinessException("required", "모듈명");	// 모듈명은 필수값 입니다.
    	}
    	return nexacroMapper.selectNexacroMapList(nexacroMap);
    }
    
    @Override
    public int saveNexacroMap(Map<String, Object> nexacroMap) throws Exception {
    	if (DataRowStatus.isInsertedRow(nexacroMap)) {
			return nexacroMapper.insertNexacroMap(nexacroMap);
		} else if (DataRowStatus.isUpdatedRow(nexacroMap)) {
			return nexacroMapper.updateNexacroMap(nexacroMap);
		} else if (DataRowStatus.isDeletedRow(nexacroMap)) {
			return nexacroMapper.deleteNexacroMap(nexacroMap);
		}
    	return 0;
    }
    
    @Override
    public int saveNexacroMapList(List<Map<String, Object>> nexacroMapList) throws Exception {
    	int cnt = 0;
    	for (Map<String, Object> nexacroMap : nexacroMapList) {
    		if (DataRowStatus.isInsertedRow(nexacroMap)) {
    			cnt += nexacroMapper.insertNexacroMap(nexacroMap);
    		} else if (DataRowStatus.isUpdatedRow(nexacroMap)) {
    			cnt += nexacroMapper.updateNexacroMap(nexacroMap);
    		} else if (DataRowStatus.isDeletedRow(nexacroMap)) {
    			cnt += nexacroMapper.deleteNexacroMap(nexacroMap);
    		}
    	}
    	return cnt;
    }

    @Override
    public int saveNexacroMapList2(List<Map<String, Object>> nexacroMapList) throws Exception {
    	return nexacroMapList.stream()
    			.mapToInt(this::process)
    			.sum();
    }
    
    private int process(Map<String, Object> nexacroMap) {
    	if (DataRowStatus.isInsertedRow(nexacroMap)) {
			return nexacroMapper.insertNexacroMap(nexacroMap);
		} else if (DataRowStatus.isUpdatedRow(nexacroMap)) {
			return nexacroMapper.updateNexacroMap(nexacroMap);
		} else if (DataRowStatus.isDeletedRow(nexacroMap)) {
			return nexacroMapper.deleteNexacroMap(nexacroMap);
		}
		return 0;
    }
    
    @Override
	public void updateNexacroList(List<Map<String, Object>> mapList) throws Exception {
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
