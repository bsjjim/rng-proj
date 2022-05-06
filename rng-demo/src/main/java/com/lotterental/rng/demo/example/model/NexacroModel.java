package com.lotterental.rng.demo.example.model;

import com.lotterental.rng.core.common.base.BaseModel;
import com.lotterental.rng.demo.example.vo.NexacroVo;

import lombok.Builder;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
public class NexacroModel implements BaseModel {
	private String sysCd;
	private String modId;
	private String modNm;
	private String modTy;
	private String modGcd;
	private String claNm;
	private String des2;
	private String inqYn;
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
        		.des2(nexacroModel.getDes2())
        		.inqYn(nexacroModel.getInqYn())
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
        		.des2(des2)
        		.inqYn(inqYn)
        		.message(message)
                .build();
    }

}
