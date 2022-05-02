package com.lotterental.rng.demo.example.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
public class CachingDemoVo implements Serializable {
    private String ComCd;
    private String ComName;
}
