package com.lotterental.rng.core.data.redis.vo;

import lombok.Data;

@Data
public class SortedSetVo {

    @Data
    public static class  SetVal {
        Double score = 0D;
        String value = "";
    }

}
