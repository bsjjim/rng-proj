package com.lotterental.rng.demo.example.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class EhCacheKeyVo {
    private String cacheName;
    private List<String> keyList;
}
