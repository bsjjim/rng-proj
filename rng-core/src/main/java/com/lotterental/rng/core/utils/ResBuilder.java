package com.lotterental.rng.core.utils;


import com.lotterental.rng.core.base.BaseVo;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


@RequiredArgsConstructor
@Component
public class ResBuilder {

    public <T> NexacroResult success(String name, T t) {
        NexacroResult nexacroResult = new NexacroResult();

        if (t instanceof BaseVo) {
            nexacroResult.addDataSet(name, t);
        } else {
            nexacroResult.addDataSet(name, null);
        }
        return nexacroResult;
    }

}