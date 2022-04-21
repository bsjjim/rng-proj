package com.lotterental.rng.example.vo;


import com.lotterental.rng.common.crypt.annotation.MaskCryptAno;
import com.lotterental.rng.core.base.BaseVo;
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
