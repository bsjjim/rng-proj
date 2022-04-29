package com.lotterental.rng.demo.common.validation.constraintvalidator;

import java.math.BigDecimal;
import java.math.BigInteger;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.lotterental.rng.demo.common.validation.annotation.RngMax;
import com.lotterental.rng.demo.common.validation.annotation.RngMin;

public final class RngNumberValidator {
	
	public static final class RngMaxValidatorForByte extends AbstractMaxValidator<Byte> {
		@Override
		protected int compare(Byte number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static final class RngMaxValidatorForShort extends AbstractMaxValidator<Short> {
		@Override
		protected int compare(Short number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static final class RngMaxValidatorForInteger extends AbstractMaxValidator<Integer> {
		@Override
		protected int compare(Integer number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static final class RngMaxValidatorForLong extends AbstractMaxValidator<Long> {
		@Override
		protected int compare(Long number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static final class RngMaxValidatorForBigInteger extends AbstractMaxValidator<BigInteger> {
		@Override
		protected int compare(BigInteger number) {
			return NumberComparatorHelper.compare(number, maxValue);
		}
	}
	
	public static final class RngMaxValidatorForBigDecimal extends AbstractMaxValidator<BigDecimal> {
		@Override
		protected int compare(BigDecimal number) {
			return NumberComparatorHelper.compare(number, maxValue);
		}
	}
	
	public static final class RngMinValidatorForByte extends AbstractMinValidator<Byte> {
		@Override
		protected int compare(Byte number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static final class RngMinValidatorForShort extends AbstractMinValidator<Short> {
		@Override
		protected int compare(Short number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static final class RngMinValidatorForInteger extends AbstractMinValidator<Integer> {
		@Override
		protected int compare(Integer number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static final class RngMinValidatorForLong extends AbstractMinValidator<Long> {
		@Override
		protected int compare(Long number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static final class RngMinValidatorForBigInteger extends AbstractMinValidator<BigInteger> {
		@Override
		protected int compare(BigInteger number) {
			return NumberComparatorHelper.compare(number, minValue);
		}
	}
	
	public static final class RngMinValidatorForBigDecimal extends AbstractMinValidator<BigDecimal> {
		@Override
		protected int compare(BigDecimal number) {
			return NumberComparatorHelper.compare(number, minValue);
		}
	}
	
	private static abstract class AbstractMaxValidator<T> implements ConstraintValidator<RngMax, T> {
		protected long maxValue;

		@Override
		public void initialize(RngMax maxValue) {
			this.maxValue = maxValue.value();
		}

		@Override
		public boolean isValid(T value, ConstraintValidatorContext constraintValidatorContext) {
			return (value == null) ? false : compare(value) <= 0;
		}

		protected abstract int compare(T number);
	}
	
	private static abstract class AbstractMinValidator<T> implements ConstraintValidator<RngMin, T> {
		protected long minValue;

		@Override
		public void initialize(RngMin minValue) {
			this.minValue = minValue.value();
		}

		@Override
		public boolean isValid(T value, ConstraintValidatorContext constraintValidatorContext) {
			return (value == null) ? false : compare(value) >= 0;
		}

		protected abstract int compare(T number);
	}

}
