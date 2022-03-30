package com.lotterental.rng.common.base;

import lombok.Data;

@Data
public class BaseVO {
    public AuditInfo auditInfo;
    public boolean mask;
    public String loginId;

    public BaseVO(){
        this.mask = false;
    }

}
