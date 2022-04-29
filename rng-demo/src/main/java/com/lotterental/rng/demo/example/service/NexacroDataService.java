package com.lotterental.rng.demo.example.service;

import java.util.List;

import com.lotterental.rng.demo.common.base.BusinessData;

public interface NexacroDataService {
	
//	단건 조회
    BusinessData selectNexacroData(BusinessData nexacroData);
	
	//다건조회
    List<BusinessData> selectNexacroDataList(BusinessData nexacroData);
    
    //데이터 추가/수정/삭제
    int saveNexacroData(BusinessData nexacroData);
    
    int saveNexacroDataList(List<BusinessData> nexacroDataList);
    
    int saveNexacroDataList2(List<BusinessData> nexacroDataList);
    
}