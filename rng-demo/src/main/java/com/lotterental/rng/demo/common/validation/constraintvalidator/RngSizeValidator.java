package com.lotterental.rng.demo.common.validation.constraintvalidator;

import java.lang.invoke.MethodHandles;
import java.math.BigDecimal;
import java.math.BigInteger;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.hibernate.validator.internal.util.logging.Log;
import org.hibernate.validator.internal.util.logging.LoggerFactory;

import com.lotterental.rng.demo.common.validation.annotation.RngSize;

public final class RngSizeValidator {
	
	public static final class RngSizeValidatorForString extends AbstractSizeValidator<String> {		
		@Override
		public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
			return (str == null) ? false : str.length() >= min && str.length() <= max;
		}
	}
		
	public static final class RngSizeValidatorForByte extends AbstractSizeValidatorForPrimitive<Byte> {}	
	public static final class RngSizeValidatorForShort extends AbstractSizeValidatorForPrimitive<Short> {}	
	public static final class RngSizeValidatorForInteger extends AbstractSizeValidatorForPrimitive<Integer> {}
	public static final class RngSizeValidatorForLong extends AbstractSizeValidatorForPrimitive<Long> {}
	public static final class RngSizeValidatorForBigInteger extends AbstractSizeValidatorForBigNumber<BigInteger> {}
	public static final class RngSizeValidatorForBigDecimal extends AbstractSizeValidatorForBigNumber<BigDecimal> {}
	
	private static abstract class AbstractSizeValidator<T> implements ConstraintValidator<RngSize, T> {
		private static final Log LOG = LoggerFactory.make(MethodHandles.lookup());		
		protected int min;
		protected int max;

		@Override
		public void initialize(RngSize parameters) {
			min = parameters.min();
			max = parameters.max();
			validateParameters();
		}
		
		@Override
		public abstract boolean isValid(T str, ConstraintValidatorContext constraintValidatorContext);
		
		private void validateParameters() {
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
	}
	
	private static abstract class AbstractSizeValidatorForNumber<T extends Number> extends AbstractSizeValidator<T> {		
		@Override
		public boolean isValid(T number, ConstraintValidatorContext constraintValidatorContext) {
			return (number == null) ? false : isBetweenMinAndMax(number);
		}
		
		private boolean isBetweenMinAndMax(T number) {
			return compareMin(number) >= 0 && compareMax(number) <= 0;
		}
		
		protected abstract int compareMin(T number);
		
		protected abstract int compareMax(T number);
	}
	
	private static abstract class AbstractSizeValidatorForPrimitive<T extends Number> extends AbstractSizeValidatorForNumber<T> {
		@Override
		protected int compareMin(T number) {
			return NumberComparatorHelper.compare(number.longValue(), min);
		}

		@Override
		protected int compareMax(T number) {
			return NumberComparatorHelper.compare(number.longValue(), max);
		}
	}
	
	public static abstract class AbstractSizeValidatorForBigNumber<T extends Number> extends AbstractSizeValidatorForNumber<T> {
		@Override
		protected int compareMin(T number) {
			if (number instanceof BigDecimal) {
				return NumberComparatorHelper.compare((BigDecimal) number, min);
			}
			return NumberComparatorHelper.compare((BigInteger) number, min);
		}

		@Override
		protected int compareMax(T number) {
			if (number instanceof BigDecimal) {
				return NumberComparatorHelper.compare((BigDecimal) number, max);
			}
			return NumberComparatorHelper.compare((BigInteger) number, max);
		}
	}
	
}
