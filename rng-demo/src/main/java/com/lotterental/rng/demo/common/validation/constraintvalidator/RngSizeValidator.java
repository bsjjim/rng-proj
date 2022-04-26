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
	
	public static final class RngSizeValidatorForString implements ConstraintValidator<RngSize, String> {
		private static final Log LOG = LoggerFactory.make(MethodHandles.lookup());		
		private int min;
		private int max;

		@Override
		public void initialize(RngSize parameters) {
			min = parameters.min();
			max = parameters.max();
			validateParameters();
		}
		
		@Override
		public boolean isValid(String str, ConstraintValidatorContext constraintValidatorContext) {
			return (str == null) ? false : str.length() >= min && str.length() <= max;
		}
		
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
		
	public static final class RngSizeValidatorForByte extends AbstractSizeValidator<Byte> {
		@Override
		protected int compareMin(Byte number) {
			return NumberComparatorHelper.compare(number.longValue(), min);
		}

		@Override
		protected int compareMax(Byte number) {
			return NumberComparatorHelper.compare(number.longValue(), max);
		}
	}
	
	public static final class RngSizeValidatorForShort extends AbstractSizeValidator<Short> {
		@Override
		protected int compareMin(Short number) {
			return NumberComparatorHelper.compare(number.longValue(), min);
		}

		@Override
		protected int compareMax(Short number) {
			return NumberComparatorHelper.compare(number.longValue(), max);
		}
	}
	
	public static final class RngSizeValidatorForInteger extends AbstractSizeValidator<Integer> {
		@Override
		protected int compareMin(Integer number) {
			return NumberComparatorHelper.compare(number.longValue(), min);
		}

		@Override
		protected int compareMax(Integer number) {
			return NumberComparatorHelper.compare(number.longValue(), max);
		}
	}
	
	public static final class RngSizeValidatorForLong extends AbstractSizeValidator<Long> {
		@Override
		protected int compareMin(Long number) {
			return NumberComparatorHelper.compare(number.longValue(), min);
		}

		@Override
		protected int compareMax(Long number) {
			return NumberComparatorHelper.compare(number.longValue(), max);
		}
	}
	
	public static final class RngSizeValidatorForBigInteger extends AbstractSizeValidator<BigInteger> {
		@Override
		protected int compareMin(BigInteger number) {
			return NumberComparatorHelper.compare(number, min);
		}

		@Override
		protected int compareMax(BigInteger number) {
			return NumberComparatorHelper.compare(number, max);
		}
	}
	
	public static final class RngSizeValidatorForBigDecimal extends AbstractSizeValidator<BigDecimal> {
		@Override
		protected int compareMin(BigDecimal number) {
			return NumberComparatorHelper.compare(number, min);
		}

		@Override
		protected int compareMax(BigDecimal number) {
			return NumberComparatorHelper.compare(number, max);
		}
	}
	
	private static abstract class AbstractSizeValidator<T extends Number> implements ConstraintValidator<RngSize, T> {
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
		public boolean isValid(T number, ConstraintValidatorContext constraintValidatorContext) {
			return (number == null) ? false : isBetweenMinAndMax(number);
		}
		
		private boolean isBetweenMinAndMax(T number) {
			return compareMin(number) >= 0 && compareMax(number) <= 0;
		}
		
		protected abstract int compareMin(T number);
		
		protected abstract int compareMax(T number);
		
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
	
}
