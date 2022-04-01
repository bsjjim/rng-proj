package com.lotterental.rng.demo.service.impl;


import com.lotterental.rng.demo.mapper.SampleMapper;
import com.lotterental.rng.demo.model.SampleModel;
import com.lotterental.rng.demo.service.SampleService;
import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;
import com.nexacro17.xapi.data.DataSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("SampleService")
public class SampleServiceImpl implements SampleService {
    @Autowired
    private SampleMapper sampleMapper;

    @Override
    public List<SampleModel> selectSampleList(Map<String, String> ds_search) throws Exception {
        return sampleMapper.selectSampleList(ds_search);
    }

    @Override
    public void updateSampleList(List<Map<String,Object>> sampleList) throws Exception {
        int size = sampleList.size();

        for (int i=0; i<size; i++) {
            Map<String,Object> sample = sampleList.get(i);
            int dataRowType = Integer.parseInt(String.valueOf(sample.get(DataSetRowTypeAccessor.NAME)));
            if (dataRowType == DataSet.ROW_TYPE_INSERTED){
                String id = null;
/*
              //강제 Exception 처리를 위한
              if(id == null) {
                throw new NexacroException("id");
              }
*/
                //채번할 게시물 ID번호 조회
                int idNum = sampleMapper.selectId();
                sample.replace("ID", idNum);
                //게시물 신규추가
                sampleMapper.insertSampleList(sample);
                //다음 채번시 사용될 ID번호 UPDATE
                sample.replace("ID", idNum + 1);
                sampleMapper.updateId(sample);
            }
            else if (dataRowType == DataSet.ROW_TYPE_UPDATED) {
                sampleMapper.updateSampleList(sample);
            }
            else if (dataRowType == DataSet.ROW_TYPE_DELETED) {
                sampleMapper.deleteSampleList(sample);
            }
        }
    }
}