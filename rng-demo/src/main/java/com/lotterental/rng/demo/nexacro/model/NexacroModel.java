package com.lotterental.rng.demo.nexacro.model;


import com.lotterental.rng.common.base.BaseModel;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;

import lombok.Data;

@Data
public class NexacroModel implements BaseModel {

    private int id;
    private String name;
    private String description;
    private String useYn;
    private String regUser;

    public NexacroVo build(BaseModel baseModel) {
        NexacroModel nexacroModel = (NexacroModel)baseModel;
        return NexacroVo.builder()
                .id(nexacroModel.getId())
                .name(nexacroModel.getName())
                .description(nexacroModel.getDescription())
                .useYn(nexacroModel.getUseYn())
                .regUser(nexacroModel.getRegUser())
                .build();
    }

    public NexacroVo build() {
        return NexacroVo.builder()
                .id(id)
                .name(name)
                .description(description)
                .useYn(useYn)
                .regUser(regUser)
                .build();
    }

}
