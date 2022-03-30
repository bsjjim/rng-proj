package com.lotterental.rng.core.http.model;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * Rest Response Value Object
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 03. 07.
 */

@Data
@Accessors(chain = true)
public class RestResultVO<T> {
    private String resultCd;
    private String resultMsg;
    private T data;
}
