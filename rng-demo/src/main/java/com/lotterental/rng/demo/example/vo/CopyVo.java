package com.lotterental.rng.demo.example.vo;


import com.lotterental.rng.core.common.annotation.MaskCryptAno;
import com.lotterental.rng.core.common.base.BaseVo;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class CopyVo implements BaseVo {

    @MaskCryptAno
    private String originalFileName;
    private String logicalFileName;
    private String filePath;
    private String fileUri;

}
