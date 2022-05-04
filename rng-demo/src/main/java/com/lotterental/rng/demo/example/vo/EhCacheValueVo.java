package com.lotterental.rng.demo.example.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EhCacheValueVo {
    private String cacheName;
    private String key;
    private String value;
    private long version;
    private long hitCount;
    private String CreationTime;
    private String LastAccessTime;
}
