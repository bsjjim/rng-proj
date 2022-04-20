package com.lotterental.rng.core.utils;

import com.lotterental.rng.core.common.exception.ValidationException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.CollectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Objects;
import java.util.function.Predicate;

/**
 * 필드 유효성 Check Util
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public class ValidUtil {

    public static <T> void isEmpty(T t, List<String> validFieldNames) throws ValidationException {
        if(Objects.isNull(t) || CollectionUtils.isEmpty(validFieldNames)) {
            throw new ValidationException("validation 항목이 없습니다.");
        }

        for(String fieldName : validFieldNames) {
            Field field = null;
            try {
                field = t.getClass().getDeclaredField(fieldName);
            } catch (NoSuchFieldException e) {
                log.debug("not found Field");
            } finally {
                Class superClass = t.getClass().getSuperclass();
                if(!Objects.isNull(superClass)) {
                    try {
                        field = superClass.getDeclaredField(fieldName);
                    } catch (NoSuchFieldException e) {
                        log.debug("not found Field");
                    }
                }
            }

            if(Objects.isNull(field)) {
                throw new ValidationException("필드 정보가 없습니다.", new String[]{fieldName});
            }

            field.setAccessible(true);

            Object value = null;
            try {
                value = field.get(t);
            } catch (IllegalAccessException e) {
                log.debug("get value exception");
            }

            if(Objects.isNull(value)) {
                throw new ValidationException("필수 정보가 없습니다.", new String[]{fieldName});
            }

            if(value instanceof String) {
                if(StringUtils.isEmpty(String.valueOf(value))) {
                    throw new ValidationException("필수 정보가 없습니다.", new String[]{fieldName});
                }
            }
        }
    }

    public static <T> void isEmpty(List<T> ts, List<String> validFieldNames) throws ValidationException {
        if(CollectionUtils.isEmpty(ts)) {
            throw new ValidationException("validation 항목이 없습니다.");
        }

        for(T t : ts) {
            isEmpty(t, validFieldNames);
        }
    }

    public static <T> boolean anyMatch(List<T> ts, Predicate<T> predicate) {
        return ts.stream().anyMatch(predicate);
    }
}
