package com.lotterental.rng.demo.common.validation.impl;

import java.lang.annotation.Annotation;
import java.lang.invoke.MethodHandles;
import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

import org.hibernate.validator.internal.util.logging.Log;
import org.hibernate.validator.internal.util.logging.LoggerFactory;

import com.lotterental.rng.core.common.base.BaseMetaVo;
import com.lotterental.rng.demo.common.validation.annotation.RngMax;
import com.lotterental.rng.demo.common.validation.annotation.RngMin;
import com.lotterental.rng.demo.common.validation.annotation.RngNotBlank;
import com.lotterental.rng.demo.common.validation.annotation.RngNotEmpty;
import com.lotterental.rng.demo.common.validation.annotation.RngNotNull;
import com.lotterental.rng.demo.common.validation.annotation.RngSize;
import com.lotterental.rng.demo.common.validation.constraintvalidator.NumberComparatorHelper;

public final class RngBasicValidator {
	
	private final Map<Class<? extends Annotation>, Map<Class<?>, RngCommonValidator<?>>> annToValidator;
	
	public RngBasicValidator() {
		this.annToValidator = new HashMap<>();
		this.annToValidator.put(RngNotNull.class, getNotNullValidators());
		this.annToValidator.put(RngNotEmpty.class, getNotEmptyValidators());
		this.annToValidator.put(RngNotBlank.class, getNotBlankValidators());
		this.annToValidator.put(RngSize.class, getSizeValidators());
		this.annToValidator.put(RngMin.class, getMinValidators());
		this.annToValidator.put(RngMax.class, getMaxValidators());
	}
	
	private Map<Class<?>, RngCommonValidator<?>> getNotNullValidators() {
		Map<Class<?>, RngCommonValidator<?>> notNullValidator = new HashMap<>();
		notNullValidator.put(String.class, new RngNotNullValidator());
		return notNullValidator;
	}
	
	private Map<Class<?>, RngCommonValidator<?>> getNotEmptyValidators() {
		Map<Class<?>, RngCommonValidator<?>> notEmptyValidator = new HashMap<>();
		notEmptyValidator.put(String.class, new RngNotEmptyValidator());
		return notEmptyValidator;
	}
	
	private Map<Class<?>, RngCommonValidator<?>> getNotBlankValidators() {
		Map<Class<?>, RngCommonValidator<?>> notBlankValidator = new HashMap<>();
		notBlankValidator.put(String.class, new RngNotBlankValidator());
		return notBlankValidator;
	}
	
	private Map<Class<?>, RngCommonValidator<?>> getSizeValidators() {
		Map<Class<?>, RngCommonValidator<?>> sizeValidator = new HashMap<>();
		sizeValidator.put(byte.class, new RngSizeValidatorForByte());
		sizeValidator.put(short.class, new RngSizeValidatorForShort());
		sizeValidator.put(int.class, new RngSizeValidatorForInteger());
		sizeValidator.put(long.class, new RngSizeValidatorForLong());
		sizeValidator.put(Byte.class, new RngSizeValidatorForByte());
		sizeValidator.put(Short.class, new RngSizeValidatorForShort());
		sizeValidator.put(Integer.class, new RngSizeValidatorForInteger());
		sizeValidator.put(Long.class, new RngSizeValidatorForLong());
		sizeValidator.put(BigInteger.class, new RngSizeValidatorForBigInteger());
		sizeValidator.put(BigDecimal.class, new RngSizeValidatorForBigDecimal());
		return sizeValidator;
	}
	
	private Map<Class<?>, RngCommonValidator<?>> getMinValidators() {
		Map<Class<?>, RngCommonValidator<?>> minValidator = new HashMap<>();
		minValidator.put(byte.class, new RngMinValidatorForByte());
		minValidator.put(short.class, new RngMinValidatorForShort());
		minValidator.put(int.class, new RngMinValidatorForInteger());
		minValidator.put(long.class, new RngMinValidatorForLong());
		minValidator.put(Byte.class, new RngMinValidatorForByte());
		minValidator.put(Short.class, new RngMinValidatorForShort());
		minValidator.put(Integer.class, new RngMinValidatorForInteger());
		minValidator.put(Long.class, new RngMinValidatorForLong());
		minValidator.put(BigInteger.class, new RngMinValidatorForBigInteger());
		minValidator.put(BigDecimal.class, new RngMinValidatorForBigDecimal());
		return minValidator;
	}
	
	private Map<Class<?>, RngCommonValidator<?>> getMaxValidators() {
		Map<Class<?>, RngCommonValidator<?>> maxValidator = new HashMap<>();
		maxValidator.put(byte.class, new RngMaxValidatorForByte());
		maxValidator.put(short.class, new RngMaxValidatorForShort());
		maxValidator.put(int.class, new RngMaxValidatorForInteger());
		maxValidator.put(long.class, new RngMaxValidatorForLong());
		maxValidator.put(Byte.class, new RngMaxValidatorForByte());
		maxValidator.put(Short.class, new RngMaxValidatorForShort());
		maxValidator.put(Integer.class, new RngMaxValidatorForInteger());
		maxValidator.put(Long.class, new RngMaxValidatorForLong());
		maxValidator.put(BigInteger.class, new RngMaxValidatorForBigInteger());
		maxValidator.put(BigDecimal.class, new RngMaxValidatorForBigDecimal());
		return maxValidator;
	}
	
	@SuppressWarnings("rawtypes")
	public void validate(Class<? extends Annotation> validationType, Field field, BaseMetaVo vo) throws IllegalAccessException {
		RngCommonValidator validator = (RngCommonValidator) annToValidator.get(validationType).get(field.getType());
		if (validator == null) {
			return;
		}
		validateField(validator, validationType, field, vo);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private void validateField(RngCommonValidator validator, Class<? extends Annotation> validationType, Field field, BaseMetaVo vo) throws IllegalAccessException {
		boolean result = false;
		if (validationType == RngSize.class || validationType == RngMin.class || validationType == RngMax.class) {
			result = validator.isValid(getFieldValue(vo, field), field.getAnnotation(validationType));
		} else {
			result = validator.isValid(getFieldValue(vo, field));
		}
		if (!result) {
			throw new IllegalStateException();
		}
	}
	
	private Object getFieldValue(BaseMetaVo vo, Field field) throws IllegalAccessException {
		try {
			if (field.canAccess(vo)) {
				return field.get(vo);
			}
			field.setAccessible(true);
			return field.get(vo);
		} catch (IllegalArgumentException | IllegalAccessException e) {
			throw e;
		} finally {
			field.setAccessible(false);
		}
	}
	
	private interface RngCommonValidator<T> {
		default boolean isValid(T value) {
			return false;
		}
		
		default boolean isValid(T value, Annotation parameters) {
			return false;
		}
	}
	
	private final class RngNotNullValidator implements RngCommonValidator<Object> {
		@Override
		public boolean isValid(Object object) {
			return object != null;
		}
	}
	
	private final class RngNotEmptyValidator implements RngCommonValidator<String> {
		@Override
		public boolean isValid(String str) {
			return (str == null) ? false : str.toString().length() > 0;
		}
	}
	
	private final class RngNotBlankValidator implements RngCommonValidator<String> {
		@Override
		public boolean isValid(String str) {
			return (str == null) ? false : str.toString().trim().length() > 0;
		}
	}
	
	private abstract class AbstractSizeValidator<T extends Number> implements RngCommonValidator<T> {
		private final Log LOG = LoggerFactory.make(MethodHandles.lookup());	
		
		@Override
		public boolean isValid(T number, Annotation parameters) {
			RngSize ann = (RngSize) parameters;
			int min = ann.min();
			int max = ann.max();
			validateParameters(min, max);
			return (number == null) ? false : isBetweenMinAndMax(number, min, max);
		}
		
		private void validateParameters(int min, int max) {
			if ( min < 0 ) {
				throw LOG.getMinCannotBeNegativeException();
			}
			if ( max < 0 ) {
				throw LOG.getMaxCannotBeNegativeException();
			}
			if ( max < min ) {
				throw LOG.getLengthCannotBeNegativeException();
			}
		}
				
		private boolean isBetweenMinAndMax(T number, int min, int max) {
			return compareMin(number, min) >= 0 && compareMax(number, max) <= 0;
		}
		
		protected abstract int compareMin(T number, int min);
		
		protected abstract int compareMax(T number, int max);
	}
	
	private abstract class AbstractSizeValidatorForPrimitive<T extends Number> extends AbstractSizeValidator<T> {
		@Override
		protected int compareMin(T number, int min) {
			return NumberComparatorHelper.compare(number.longValue(), min);
		}

		@Override
		protected int compareMax(T number, int max) {
			return NumberComparatorHelper.compare(number.longValue(), max);
		}
	}
	
	public abstract class AbstractSizeValidatorForBigNumber<T extends Number> extends AbstractSizeValidator<T> {
		@Override
		protected int compareMin(T number, int min) {
			if (number instanceof BigDecimal) {
				return NumberComparatorHelper.compare((BigDecimal) number, min);
			}
			return NumberComparatorHelper.compare((BigInteger) number, min);
		}

		@Override
		protected int compareMax(T number, int max) {
			if (number instanceof BigDecimal) {
				return NumberComparatorHelper.compare((BigDecimal) number, max);
			}
			return NumberComparatorHelper.compare((BigInteger) number, max);
		}
	}
	
	public final class RngSizeValidatorForByte extends AbstractSizeValidatorForPrimitive<Byte> {}	
	public final class RngSizeValidatorForShort extends AbstractSizeValidatorForPrimitive<Short> {}	
	public final class RngSizeValidatorForInteger extends AbstractSizeValidatorForPrimitive<Integer> {}
	public final class RngSizeValidatorForLong extends AbstractSizeValidatorForPrimitive<Long> {}
	public final class RngSizeValidatorForBigInteger extends AbstractSizeValidatorForBigNumber<BigInteger> {}
	public final class RngSizeValidatorForBigDecimal extends AbstractSizeValidatorForBigNumber<BigDecimal> {}
	
	
	private abstract class AbstractMinMaxValidator<T> implements RngCommonValidator<T> {
		public boolean isValid(T value, Annotation anns) {
			return (value == null) ? false :
				(anns instanceof RngMax) ? compare(value, ((RngMax) anns).value()) <= 0 :
				compare(value, ((RngMin) anns).value()) >= 0;
		}
		
		protected abstract int compare(T number, long value);
	}
	
	private abstract class AbstractValidatorForPrimitive<T extends Number> extends AbstractMinMaxValidator<T> {
		@Override
		protected int compare(T number, long value) {
			return NumberComparatorHelper.compare(number.longValue(), value);
		}
	}
	
	private abstract class AbstractValidatorForBigNumber<T extends Number> extends AbstractMinMaxValidator<T> {
		@Override
		protected int compare(T number, long value) {
			if (number instanceof BigDecimal) {
				return NumberComparatorHelper.compare((BigDecimal) number, value);
			}
			return NumberComparatorHelper.compare((BigInteger) number, value);
		}
	}
	
	public final class RngMaxValidatorForByte extends AbstractValidatorForPrimitive<Byte> {}
	public final class RngMaxValidatorForShort extends AbstractValidatorForPrimitive<Short> {}
	public final class RngMaxValidatorForInteger extends AbstractValidatorForPrimitive<Integer> {}
	public final class RngMaxValidatorForLong extends AbstractValidatorForPrimitive<Long> {}
	public final class RngMaxValidatorForBigInteger extends AbstractValidatorForBigNumber<BigInteger> {}
	public final class RngMaxValidatorForBigDecimal extends AbstractValidatorForBigNumber<BigDecimal> {}
	public final class RngMinValidatorForByte extends AbstractValidatorForPrimitive<Byte> {}
	public final class RngMinValidatorForShort extends AbstractValidatorForPrimitive<Short> {}
	public final class RngMinValidatorForInteger extends AbstractValidatorForPrimitive<Integer> {}
	public final class RngMinValidatorForLong extends AbstractValidatorForPrimitive<Long> {}
	public final class RngMinValidatorForBigInteger extends AbstractValidatorForBigNumber<BigInteger> {}
	public final class RngMinValidatorForBigDecimal extends AbstractValidatorForBigNumber<BigDecimal> {}
	
}
