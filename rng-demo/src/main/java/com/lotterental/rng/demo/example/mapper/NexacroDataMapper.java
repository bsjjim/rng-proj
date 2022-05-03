package com.lotterental.rng.demo.example.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.lotterental.rng.core.common.base.BusinessData;

@Mapper
public interface NexacroDataMapper {
	
	BusinessData selectNexacroData(BusinessData nexacroData);
	    
    List<BusinessData> selectNexacroDataList(BusinessData nexacroData);
    
    BusinessData selectBusinessRule(BusinessData nexacroData);
    
    int insertNexacroData(BusinessData nexacroData);
    
    int updateNexacroData(BusinessData nexacroData);
    
    int deleteNexacroData(BusinessData nexacroData);

}
