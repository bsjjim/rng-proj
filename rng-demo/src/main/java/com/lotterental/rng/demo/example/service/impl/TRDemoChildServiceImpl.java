package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.demo.example.mapper.TRDemoMapper;
import com.lotterental.rng.demo.example.model.TRDemoModel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

@Slf4j
@Service
public class TRDemoChildServiceImpl {

    @Autowired
    private TRDemoMapper trDemoMapper;

    @Transactional(propagation = Propagation.REQUIRED)
    public void insertRequiredChildren(TRDemoModel trDemoModel) {
        try {
            trDemoMapper.insertRequired(trDemoModel);
            throw new RuntimeException("자식이 문제");
        } catch (Exception e) {
            log.info("insertRequiredException ========== ", e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void insertRequiresNewChildren(TRDemoModel trDemoModel) {
        try {
            trDemoMapper.insertRequired(trDemoModel);
            throw new RuntimeException("자식이 문제");
        } catch (Exception e) {
            log.info("insertRequiresNewException ========== ", e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
    }

    @Transactional(propagation = Propagation.NESTED)
    public void insertNestedChildren(TRDemoModel trDemoModel) {
        try {
            trDemoMapper.insertRequired(trDemoModel);
            throw new RuntimeException("자식이 문제");
        } catch (Exception e) {
            log.info("insertNestedException ========== ", e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
    }

    @Transactional(propagation = Propagation.MANDATORY)
    public void insertMandatoryChildren(TRDemoModel trDemoModel) {
        try {
            trDemoMapper.insertRequired(trDemoModel);
//            throw new RuntimeException("자식이 문제");
        } catch (Exception e) {
            log.info("insertMandatoryChildrenException ========== ", e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void insertSupportChildren(TRDemoModel trDemoModel) {
        try {
            trDemoMapper.insertRequired(trDemoModel);
            throw new RuntimeException("자식이 문제");
        } catch (Exception e) {
            log.info("insertSupportChildrenException ========== ", e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
    }

    @Transactional(propagation = Propagation.NOT_SUPPORTED)
    public void insertNotSupportChildren(TRDemoModel trDemoModel) {
        try {
            trDemoMapper.insertRequired(trDemoModel);
            throw new RuntimeException("자식이 문제");
        } catch (Exception e) {
            log.info("insertNotSupportChildrenException ========== ", e);
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        }
    }
}
