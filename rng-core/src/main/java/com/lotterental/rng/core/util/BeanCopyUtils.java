package com.lotterental.rng.core.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.Objects;

/**
 * Bean Copy Utils
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public class BeanCopyUtils {
    /**
     *
     * @param target
     * @param source
     * @param <T>
     * @param <T2>
     * @return
     */
    public static <T> T copy(Object source, Class<T> clazz) {
        if(Objects.isNull(source)) {
            return null;
        }

        Constructor<T> constructor = null;
        T t = null;

        try {
            constructor = clazz.getConstructor();
        } catch (NoSuchMethodException e) {
            log.error("Bean Copy NoSuchMethodException", e);
        }

        if(Objects.nonNull(constructor)) {
            try {
                t = constructor.newInstance();
            } catch (InstantiationException e) {
                log.error("Bean Copy InstantiationException", e);
            } catch (IllegalAccessException e) {
                log.error("Bean Copy IllegalAccessException", e);
            } catch (InvocationTargetException e) {
                log.error("Bean Copy InvocationTargetException", e);
            }
        }

        if(Objects.nonNull(t)) {
            BeanUtils.copyProperties(source, t);
        }

        return t;
    }
}
