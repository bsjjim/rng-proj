package com.lotterental.rng.demo.vo;


import com.lotterental.rng.core.base.BaseVo;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class CopyVo implements BaseVo {
    private String originalFileName;
    private String logicalFileName;
    private String filePath;
    private String fileUri;

}
