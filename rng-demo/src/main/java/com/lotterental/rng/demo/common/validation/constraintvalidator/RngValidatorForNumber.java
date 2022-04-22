package com.lotterental.rng.demo.common.validation.constraintvalidator;

import java.math.BigDecimal;
import java.math.BigInteger;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.hibernate.validator.internal.constraintvalidators.bv.number.InfinityNumberComparatorHelper;

import com.lotterental.rng.demo.common.validation.annotation.RngMax;
import com.lotterental.rng.demo.common.validation.annotation.RngMin;

public class RngValidatorForNumber {
	
	public static class MaxValidatorForByte extends AbstractMaxValidator<Byte> {
		@Override
		protected int compare(Byte number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static class MaxValidatorForShort extends AbstractMaxValidator<Short> {
		@Override
		protected int compare(Short number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static class MaxValidatorForInteger extends AbstractMaxValidator<Integer> {
		@Override
		protected int compare(Integer number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static class MaxValidatorForLong extends AbstractMaxValidator<Long> {
		@Override
		protected int compare(Long number) {
			return NumberComparatorHelper.compare(number.longValue(), maxValue);
		}
	}
	
	public static class MaxValidatorForFloat extends AbstractMaxValidator<Float> {
		@Override
		protected int compare(Float number) {
			return NumberComparatorHelper.compare(number, maxValue, InfinityNumberComparatorHelper.GREATER_THAN);
		}
	}
	
	public static class MaxValidatorForDouble extends AbstractMaxValidator<Double> {
		@Override
		protected int compare(Double number) {
			return NumberComparatorHelper.compare(number, maxValue, InfinityNumberComparatorHelper.GREATER_THAN);
		}
	}
	
	public static class MaxValidatorForBigInteger extends AbstractMaxValidator<BigInteger> {
		@Override
		protected int compare(BigInteger number) {
			return NumberComparatorHelper.compare(number, maxValue);
		}
	}
	
	public static class MaxValidatorForBigDecimal extends AbstractMaxValidator<BigDecimal> {
		@Override
		protected int compare(BigDecimal number) {
			return NumberComparatorHelper.compare(number, maxValue);
		}
	}
	
	public static class MinValidatorForByte extends AbstractMinValidator<Byte> {
		@Override
		protected int compare(Byte number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static class MinValidatorForShort extends AbstractMinValidator<Short> {
		@Override
		protected int compare(Short number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static class MinValidatorForInteger extends AbstractMinValidator<Integer> {
		@Override
		protected int compare(Integer number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static class MinValidatorForLong extends AbstractMinValidator<Long> {
		@Override
		protected int compare(Long number) {
			return NumberComparatorHelper.compare(number.longValue(), minValue);
		}
	}
	
	public static class MinValidatorForFloat extends AbstractMinValidator<Float> {
		@Override
		protected int compare(Float number) {
			return NumberComparatorHelper.compare(number, minValue, InfinityNumberComparatorHelper.LESS_THAN);
		}
	}
	
	public static class MinValidatorForDouble extends AbstractMinValidator<Double> {
		@Override
		protected int compare(Double number) {
			return NumberComparatorHelper.compare(number, minValue, InfinityNumberComparatorHelper.LESS_THAN);
		}
	}
	
	public static class MinValidatorForBigInteger extends AbstractMinValidator<BigInteger> {
		@Override
		protected int compare(BigInteger number) {
			return NumberComparatorHelper.compare(number, minValue);
		}
	}
	
	public static class MinValidatorForBigDecimal extends AbstractMinValidator<BigDecimal> {
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
			return (value == null) ? true : compare(value) <= 0;
		}

		protected abstract int compare(T number);
	}
	
	private static abstract class AbstractMinValidator<T> implements ConstraintValidator<RngMin, T> {
		protected long minValue;

		@Override
		public void initialize(RngMin maxValue) {
			this.minValue = maxValue.value();
		}

		@Override
		public boolean isValid(T value, ConstraintValidatorContext constraintValidatorContext) {
			return (value == null) ? true : compare(value) >= 0;
		}

		protected abstract int compare(T number);
	}

}
