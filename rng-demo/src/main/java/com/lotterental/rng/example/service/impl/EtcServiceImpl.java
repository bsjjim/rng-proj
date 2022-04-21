package com.lotterental.rng.example.service.impl;


import com.lotterental.rng.example.model.CopyModel;
import com.lotterental.rng.example.vo.CopyVo;
import com.lotterental.rng.utils.ResBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.lotterental.rng.example.service.EtcService;

import javax.servlet.http.HttpServletRequest;

@Service
public class EtcServiceImpl implements EtcService {

    @Autowired
    ResBuilder resBuilder;
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

    public CopyVo masking(HttpServletRequest HttpServletRequest) {

        CopyModel copyModel = new CopyModel();

        copyModel.setLogicalFileName("LogicalFileName");
        copyModel.setOriginalFileName("OriginalFileName");
        copyModel.setFilePath("FilePath");
        copyModel.setFileUri("FileUri");

        CopyVo copyVo = new CopyVo();
        copyModel.copy(copyModel, copyVo);

        resBuilder.maskingInfo(HttpServletRequest, copyVo);

        return copyVo;
    }
}