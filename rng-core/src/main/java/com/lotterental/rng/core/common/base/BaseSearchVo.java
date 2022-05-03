package com.lotterental.rng.core.common.base;

import com.lotterental.rng.core.common.base.BaseVo;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BaseSearchVo implements BaseVo {
    protected int pageIdx;
    protected int rowCount;
    protected int rowOffset;

    public void setPaging(int pageIdx, int rowCount){
        this.pageIdx = pageIdx;
        this.rowCount = rowCount;
        this.rowOffset = rowCount * (pageIdx -1);
    }

    public void setPaging(){
        this.rowOffset = this.rowCount * (this.pageIdx -1);
    }
}
