package com.lotterental.rng.core.common.validator;

import com.lotterental.rng.core.exception.ValidationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

/**
 * Validation processor
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class ValidationProcessor {
    private final Validator validator;

    public <T> void validate(T t) {
        this.validate(t, null);
    }
    public <T> void validate(T t, Class clazz) {
        Set<ConstraintViolation<T>> validations = null;
        if(Objects.nonNull(clazz)) {
            validations = validator.validate(t, clazz);
        } else {
            validations = validator.validate(t);
        }

        if(Objects.nonNull(validations) && !validations.isEmpty()) {
            List<String> fields = new ArrayList<>();
            for(ConstraintViolation<T> validation : validations) {
                log.debug("", validation);
                fields.add(validation.getPropertyPath().toString());
            }
            throw new ValidationException("Validation Exception", fields.toArray(new String[] {}));
        }
    }
}
