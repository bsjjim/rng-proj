package com.lotterental.rng.demo.model;


import com.lotterental.rng.core.base.BaseModel;
import com.lotterental.rng.demo.vo.NexacroVo;

import lombok.Data;

@Data
public class NexacroModel {

	private String sysCd;
	private String modId;
	private String modNm;
	private String modTy;
	private String modGcd;
	private String claNm;
	private String useYn;
	private String des2;
	private String dutL;
	private String dutM;
	private String dutS;
	private String inqYn;
	private String rgYn;
	private String delYn;
	private String prtYn;
	private String exlYn;
	private String conYn;
	private String ernam;
	private String ernamt;
	private String erdat;
	private String aenam;
	private String aenamt;
	private String aedat;
	private String message;

    public NexacroVo build(BaseModel baseModel) {
        NexacroModel nexacroModel = (NexacroModel)baseModel;
        return NexacroVo.builder()
        		.sysCd(nexacroModel.getSysCd())
        		.modId(nexacroModel.getModId())
        		.modNm(nexacroModel.getModNm())
        		.modTy(nexacroModel.getModTy())
        		.modGcd(nexacroModel.getModGcd())
        		.claNm(nexacroModel.getClaNm())
        		.useYn(nexacroModel.getUseYn())
        		.des2(nexacroModel.getDes2())
        		.dutL(nexacroModel.getDutL())
        		.dutM(nexacroModel.getDutM())
        		.dutS(nexacroModel.getDutS())
        		.inqYn(nexacroModel.getInqYn())
        		.rgYn(nexacroModel.getRgYn())
        		.delYn(nexacroModel.getDelYn())
        		.prtYn(nexacroModel.getPrtYn())
        		.exlYn(nexacroModel.getExlYn())
        		.conYn(nexacroModel.getConYn())
        		.ernam(nexacroModel.getErnam())
        		.ernamt(nexacroModel.getErnamt())
        		.erdat(nexacroModel.getErdat())
        		.aenam(nexacroModel.getAenam())
        		.aenamt(nexacroModel.getAenamt())
        		.aedat(nexacroModel.getAedat())
        		.message(nexacroModel.getMessage())
                .build();
    }

    public NexacroVo build() {
        return NexacroVo.builder()
        		.sysCd(sysCd)
        		.modId(modId)
        		.modNm(modNm)
        		.modTy(modTy)
        		.modGcd(modGcd)
        		.claNm(claNm)
        		.useYn(useYn)
        		.des2(des2)
        		.dutL(dutL)
        		.dutM(dutM)
        		.dutS(dutS)
        		.inqYn(inqYn)
        		.rgYn(rgYn)
        		.delYn(delYn)
        		.prtYn(prtYn)
        		.exlYn(exlYn)
        		.conYn(conYn)
        		.ernam(ernam)
        		.ernamt(ernamt)
        		.erdat(erdat)
        		.aenam(aenam)
        		.aenamt(aenamt)
        		.aedat(aedat)
        		.message(message)
                .build();
    }

}
