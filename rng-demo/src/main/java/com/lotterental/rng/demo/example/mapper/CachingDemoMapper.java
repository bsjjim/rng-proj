package com.lotterental.rng.demo.example.mapper;

import com.lotterental.rng.demo.example.vo.CachingDemoVo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CachingDemoMapper {
    List<CachingDemoVo> selectComCdList();

    CachingDemoVo getComCd(String id);
}
