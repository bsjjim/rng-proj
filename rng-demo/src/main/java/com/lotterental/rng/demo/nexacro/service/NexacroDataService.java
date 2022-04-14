package com.lotterental.rng.demo.nexacro.service;

import java.util.List;

import com.lotterental.rng.common.base.BusinessData;

public interface NexacroDataService {
	
	//단건 조회
	BusinessData selectNexacroData(BusinessData nexacroData) throws Exception;
	
	//다건조회
    List<BusinessData> selectNexacroDataList(BusinessData nexacroData) throws Exception;
    
    //데이터 추가/수정/삭제
    int saveNexacroData(BusinessData nexacroData) throws Exception;
    
    int saveNexacroDataList(List<BusinessData> nexacroDataList) throws Exception;
    
    int saveNexacroDataList2(List<BusinessData> nexacroDataList) throws Exception;
    
}