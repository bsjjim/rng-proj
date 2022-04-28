package com.lotterental.rng.demo.example.mapper;

import com.lotterental.rng.demo.example.model.TRDemoModel;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TRDemoMapper {
    void insertRequired(TRDemoModel trDemoModel);

    List<TRDemoModel> selectTRList();
}
