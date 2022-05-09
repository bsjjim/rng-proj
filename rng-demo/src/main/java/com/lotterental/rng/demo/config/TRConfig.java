package com.lotterental.rng.demo.config;


import java.util.Collections;
import java.util.List;

import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.interceptor.MatchAlwaysTransactionAttributeSource;
import org.springframework.transaction.interceptor.RollbackRuleAttribute;
import org.springframework.transaction.interceptor.RuleBasedTransactionAttribute;
import org.springframework.transaction.interceptor.TransactionInterceptor;

@Configuration
public class TRConfig {

    @Autowired
    private PlatformTransactionManager transactionManager;
    
    private String EXPRESSION = "execution(* com.lotterental..service.impl.*Impl.*(..))";
//    private String EXPRESSION = "execution(* com.lotterental..service.impl.TRDemoServiceImpl.*(..)) " +
//        "|| execution(* com.lotterental..service.impl.TRDemoNotServiceImpl.*(..))"; // 트랜잭션 개별관리하기위한 예제 '||'(or)나 '&&'(and), '!'(not) 을 사용하여 관리

    @Bean
    public TransactionInterceptor transactionAdvice() {
        List<RollbackRuleAttribute> rollbackRules = Collections.singletonList(new RollbackRuleAttribute(Exception.class));
        RuleBasedTransactionAttribute transactionAttribute = new RuleBasedTransactionAttribute();
        transactionAttribute.setRollbackRules(rollbackRules);
        transactionAttribute.setName("*");
        transactionAttribute.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
        MatchAlwaysTransactionAttributeSource attributeSource = new MatchAlwaysTransactionAttributeSource();
        attributeSource.setTransactionAttribute(transactionAttribute);

        TransactionInterceptor transactionInterceptor = new TransactionInterceptor();
        transactionInterceptor.setTransactionManager(transactionManager);
        transactionInterceptor.setTransactionAttributeSource(attributeSource);
        return transactionInterceptor;
    }

    @Bean
    public Advisor transactionAdvisor() {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression(EXPRESSION);
        return new DefaultPointcutAdvisor(pointcut, transactionAdvice());
    }
    
}
