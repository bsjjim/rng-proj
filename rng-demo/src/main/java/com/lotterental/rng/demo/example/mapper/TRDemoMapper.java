package com.lotterental.rng.demo.example.mapper;

import com.lotterental.rng.demo.example.model.TRDemoModel;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TRDemoMapper {
    void insertRequired(TRDemoModel trDemoModel);
}
