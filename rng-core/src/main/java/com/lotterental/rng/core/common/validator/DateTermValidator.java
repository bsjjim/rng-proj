package com.lotterental.rng.core.common.validator;

import com.lotterental.rng.core.common.validator.annotation.ValidDateTerm;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class DateTermValidator implements ConstraintValidator<ValidDateTerm, Object> {
	private String sdd;
	private String edd;
	private int term;
	
	@Override
	public void initialize(ValidDateTerm constraintAnnotation) {
		this.sdd = constraintAnnotation.sdd();
		this.edd = constraintAnnotation.edd();
		this.term = constraintAnnotation.term();
				
	}
	
	@Override
	public boolean isValid(final Object o, ConstraintValidatorContext context) {
		try {
			
			BeanInfo beanInfo = Introspector.getBeanInfo(o.getClass());
			List<PropertyDescriptor> pdStream = Arrays.stream(beanInfo.getPropertyDescriptors()).collect(Collectors.toList()); 
			
			PropertyDescriptor sddPd = pdStream.stream()
					.filter(pd-> pd.getName().equals(sdd))
					.findFirst()
					.get();
			PropertyDescriptor eddPd = pdStream.stream()
					.filter(pd-> pd.getName().equals(edd))
					.findFirst()
					.get();
			
			TermValidator tv = getTermValidator(sddPd);
			return tv.valid(sddPd.getReadMethod().invoke(o), eddPd.getReadMethod().invoke(o));
		} catch(Exception e) {
			return false;
		}
	}
	
	/**
	 * 기간 유효성 체크 Validator 객체 리턴 
	 * 
	 * @param PropertyDescriptor
	 * @return TermValidator
	 */
	TermValidator<?> getTermValidator(PropertyDescriptor pd) {
		if (pd.getPropertyType().isAssignableFrom(LocalDate.class)) {
			return new LocalDateTermValidator();
		} 
			
		return new LocalDateTimeTermValidator();
	}
	
	
	abstract class TermValidator<T> {
		abstract boolean valid(T t1, T t2);
	}
	
	/**
	 * LocalDate 기간검색 유효성 체크 객체
	 * @projectName : 
	 * @className  : DateTermValidator.java
	 * @version 1.0
	 * @see
	 */
	class LocalDateTermValidator extends TermValidator<LocalDate> {
		boolean valid(LocalDate sdd, LocalDate edd) {
			if(sdd.isAfter(edd)) return false;
			if(sdd.plusDays(term).isBefore(edd)) return false;
			return true;
		}
	}
	
	/**
	 * LocalDateTime 기간검색 유효성 체크 객체 
	 * @projectName : 
	 * @className  : DateTermValidator.java
	 * @version 1.0
	 * @see
	 */
	class LocalDateTimeTermValidator extends TermValidator<LocalDateTime> {
		boolean valid(LocalDateTime sdd, LocalDateTime edd) {
			if(sdd.isAfter(edd)) return false;
			if(sdd.plusDays(term).isBefore(edd)) return false;
			return true;
		}
	}
}
