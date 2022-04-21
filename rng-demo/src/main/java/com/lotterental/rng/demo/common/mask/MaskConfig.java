package com.lotterental.rng.demo.common.mask;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class MaskConfig {

//    @Around(value = "@annotation(com.lotterental.rng.be.config.annotation.mask.annotation.MaskBuilder) && @ annotation(maskBuilder)")
//    public Object maskAnnotation(final ProceedingJoinPoint proceedingJoinPoint, final MaskBuilder maskBuilder) throws Throwable {
//    @Pointcut("execution(* build(..)) && @annotation(com.lotterental.rng.be.config.annotation.mask.annotation.MaskClass)")
//    @Around(value = "execution(* com.lotterental.rng.*.*(..)) && @annotation(com.lotterental.rng.be.config.annotation.mask.annotation.MaskClass)")
//    @Around(value = "execution(* *..build(Boolean,..))")
//    @Pointcut(value = "execution(public * build(..))")
//    private void maskBuild() {}
//    @Pointcut(value = "within(com.lotterental.rng.be..*)")
//    private void maskNapBe() {}

//    @Around("execution(* build(..)) && @annotation(com.lotterental.rng.be.config.annotation.mask.annotation.MaskBuilder)")
//    public Object maskAnnotation(final ProceedingJoinPoint joinPoint) throws Throwable {
//        log.debug("========================================>>>>>>>>>>> Start maskAnnotation");
//        Object obj = joinPoint.proceed();
//        if (obj instanceof BaseModel) {
//            try {
//                Class<? extends Object> clazz = obj.getClass();
//                for (Field field : clazz.getDeclaredFields()) {
//                    if (field.getAnnotation(MaskField.class) != null) {
//                        field.setAccessible(true);
//                        Object value = field.get(obj);
//                        if (value == null) {
//                            log.debug("");
//                        } else {
//                            log.debug(value.toString());
//                            if(!value.equals("")) {
//                                String valueStr = value.toString();
//                                field.set(obj, MaskingUtil.masking(valueStr, 0, valueStr.length()));
//                            }
//                        }
//                    }
//                }
//                log.debug(obj.toString());
//            } catch (Exception ex) {
//                log.error(ex.toString());
//            }
//        } else {
//            return obj;
//        }
//        log.debug("========================================>>>>>>>>>>> End maskAnnotation");
//        return obj;
//    }
}
