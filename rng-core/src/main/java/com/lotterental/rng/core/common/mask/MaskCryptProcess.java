package com.lotterental.rng.core.common.mask;

import com.lotterental.rng.core.common.annotation.MaskCryptAno;
import com.lotterental.rng.core.common.cnst.Constants;
import com.lotterental.rng.core.common.mask.enums.MaskType;
import com.lotterental.rng.core.utils.MaskingUtil;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.function.BiFunction;

public class MaskCryptProcess {
	static class ProtectField {
		private Field field;
		private MaskCryptAno maskCryptAno;
		static ProtectField create(Field field, MaskCryptAno maskCryptAno) {
			ProtectField protectField = new ProtectField();
			protectField.field = field;
			protectField.maskCryptAno = maskCryptAno;
			return protectField;
		}
	}
	
	private static ConcurrentMap<Class<?>, ProtectField[]> protectMap = new ConcurrentHashMap<>();
		
	public static <T> T maskingInfo(T target, boolean isMaskingOrNot) {
		if(!isMaskingOrNot || !isEmptyOrOk(target)) {
			return target;
		}

		doProcess(target, (targetValue, maskCryptAno) -> {
			return typeMasking(targetValue, maskCryptAno.type());
		});
		
    	return target;
	}
	
	public static <T> T encDecInfo(T target, String encDecType) {
		if(!isNumbericCheck(target)) {				
			return target;
		}		

		doProcess(target, (targetValue, maskCryptAno) -> {
			if(maskCryptAno.encDecrypt()) {
				return "".equals(encDecType) ? getEncCrypt(targetValue) : getDecCrypt(targetValue);
			}
			
			return targetValue;
		});
		
    	return target;
	}

	public static boolean isEmptyOrOk(Object target) {
		if(ObjectUtils.isEmpty(target) || Constants.VAL.OK.equals(target)) {
			return false;
		}
		
		return true;
	}
	
	public static boolean isNumbericCheck(Object target) {
		if(!isEmptyOrOk(target)) {
			return false;
		}
		
		String[] checkTArr = {"java.lang.Integer", "java.lang.Long", "java.math.BigDecimal"};
		List<String> checkTList = new ArrayList<>(Arrays.asList(checkTArr));
		boolean isSuccess = true;
		
		if(target instanceof List) {
			List<?> targetList = (List<?>) target;
			
			for(Object checkTargetObj : targetList) {
				if(ObjectUtils.isNotEmpty(checkTargetObj) && checkTList.contains(checkTargetObj.getClass().getName())) {
					isSuccess = false;
					break;
				}
			}
		} else if(target instanceof Map) {
			Map<?, ?> targetMap = (Map<?, ?>) target;
			
			for(Object checkTargetObj : targetMap.values()) {
				if(ObjectUtils.isNotEmpty(checkTargetObj) && checkTList.contains(checkTargetObj.getClass().getName())) {
					isSuccess = false;
					break;
				}
			}
		} else {			
			String checkTargetObjName = target.getClass().getName(); 
			
			if(checkTList.contains(checkTargetObjName)) {
				isSuccess = false;
			}						
		}
		
		return isSuccess;
	}	
	
	private static void doProcess(Object target, BiFunction<String, MaskCryptAno, String> function) {
		if(ObjectUtils.isEmpty(target) || target.getClass().isEnum()) {	
			return;
		}
		
		if (target instanceof Collection) {
			((Collection<?>) target).forEach(targetItem -> {
				doProcess(targetItem, function);
			});
			return;
		} else if (target instanceof Map) {
			((Map<?, ?>)target).values().forEach(targetItem -> {
				doProcess(targetItem, function);
			});
			return;
		}
		
		Class<?> targetClass = target.getClass();
		
		if(targetClass.isArray()) {
			int arraySize = Array.getLength(target);
			for(int i = 0; i < arraySize; i++) {
				doProcess(Array.get(target, i), function);
			}
			return;
		}
		
		ProtectField[] protectFieldList = resolveFields(target.getClass());
		
		if(ArrayUtils.isEmpty(protectFieldList)) {
			return;
		}
		
		for(ProtectField protectField : protectFieldList) {
			Field field = protectField.field;
			MaskCryptAno maskCryptAno = protectField.maskCryptAno;
			
			if(maskCryptAno == null) {
				doProcess(ReflectionUtils.getField(field, target), function);
			} else {
				String targetValue = (String)ReflectionUtils.getField(field, target);
				if(StringUtils.isEmpty(targetValue)) {
					continue;
				}
				String resultValue = function.apply(targetValue, maskCryptAno);
				ReflectionUtils.setField(field, target, resultValue);
			}
		}
	}

	private static ProtectField[] resolveFields(Class<?> clazz) {
		if(protectMap.containsKey(clazz)) {
			return protectMap.get(clazz);
		}
		
		List<ProtectField> protectFieldList = new ArrayList<>();
		
		ReflectionUtils.doWithFields(clazz, field -> {
			MaskCryptAno maskCryptAno = field.getAnnotation(MaskCryptAno.class);
    		
			if(maskCryptAno != null) {
                field.setAccessible(true);
                protectFieldList.add(ProtectField.create(field, maskCryptAno));               
    		} else if(!Modifier.isStatic(field.getModifiers())
    				&& !field.getType().isEnum()
    					&& (Collection.class.isAssignableFrom(field.getType())
    							|| field.getType().isArray()
    								|| field.getType().getName().startsWith("com.lotterental"))) {
    			
    			field.setAccessible(true);
    			protectFieldList.add(ProtectField.create(field, null));
    		}
    	});
		
		protectMap.put(clazz, protectFieldList.isEmpty() ? new ProtectField[0] : protectFieldList.toArray(new ProtectField[protectFieldList.size()]));
		return protectMap.get(clazz);
	}
	
	private static String getEncCrypt(String targetValue) {
		return "";
	}
	private static String getDecCrypt(String targetValue) {
		return "";
	}

	private static String typeMasking(String src , MaskType maskType) {
		switch (maskType) {
		case ALL:
			src = MaskingUtil.masking(src, 0, src.length());
			break;
		case RR_NUMBER:
			src = MaskingUtil.masking(src, 8, 6);
			break;
		case PASSPORT:
			src = MaskingUtil.masking(src, 1, 4);
			break;
		case DRIVER:
			src = MaskingUtil.masking(src,'*','-', 10, 5);
			break;
		case CARD_NUMBER:
			src = MaskingUtil.masking(src,'*','-', 7, 7);
			break;
		case ACCOUNT_NUMBER:
			src = MaskingUtil.masking(src,'*','-', 6, 6);
			break;
		case NAME:
			src = MaskingUtil.masking(src, 1, 1);
			break;
		case CUST_ID:
			src = MaskingUtil.masking(src, 2, 4);
			break;
		case EMAIL:
			src = MaskingUtil.masking(src, 2, 4);
			break;
		case ADDRESS:
			src = setMaskAddress(src);
			break;
		case PHONE_NUMBER:
			src = MaskingUtil.masking(src, MaskingUtil.LAST_4_CHAR_PATTERN);
			break;
		case VALIDITY:
			src = MaskingUtil.masking(src,'*','-', 0, src.length());
			break;
		default:
			break;
		};
		
		return src;
	}
	
	private static String setMaskAddress(String src) {
        String word = " ";
        List<Integer> indexList = new ArrayList<>();
        int index = 0;
        index = src.indexOf(word);
        
        while(index != -1) {
            indexList.add(index);
            index = src.indexOf(word, index+word.length());
        }
        
        return MaskingUtil.masking(src,indexList.get(indexList.size()-2));
    }
}
