package com.lotterental.rng.demo.service.impl;


import com.lotterental.rng.demo.model.CopyModel;
import com.lotterental.rng.demo.vo.CopyVo;
import org.springframework.stereotype.Service;
import com.lotterental.rng.demo.service.EtcService;

@Service
public class EtcServiceImpl implements EtcService {
    public CopyVo objectCopy() {

        CopyModel copyModel = new CopyModel();

        copyModel.setLogicalFileName("LogicalFileName");
        copyModel.setOriginalFileName("OriginalFileName");
        copyModel.setFilePath("FilePath");
        copyModel.setFileUri("FileUri");

        CopyVo copyVo = new CopyVo();
        copyModel.copy(copyModel, copyVo);

        return copyVo;
    }
}