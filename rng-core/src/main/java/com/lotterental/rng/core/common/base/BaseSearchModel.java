package com.lotterental.rng.core.common.base;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BaseSearchModel {
    //조회용 searchModel  테스트버전

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
