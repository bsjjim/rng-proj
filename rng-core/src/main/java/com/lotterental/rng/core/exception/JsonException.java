package com.lotterental.rng.core.exception;

/**
 * Json형식 Exception
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
public class JsonException extends RuntimeException {
    private static final long serialVersionUID = 8158934958358565325L;
    public JsonException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
