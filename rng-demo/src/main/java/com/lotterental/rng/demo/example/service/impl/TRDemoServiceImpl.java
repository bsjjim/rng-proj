package com.lotterental.rng.demo.example.service.impl;

import com.lotterental.rng.demo.example.mapper.TRDemoMapper;
import com.lotterental.rng.demo.example.model.TRDemoModel;
import com.lotterental.rng.demo.example.service.TRDemoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class TRDemoServiceImpl  implements TRDemoService {

    @Autowired
    private TRDemoMapper trDemoMapper;

    @Autowired
    private TRDemoChildServiceImpl trDemoChildService;

    /**
     * 트랜잭션은 service 안에서만 작업하는걸 원칙으로 한다.
     * service에서 공통으로 트랜잭션이 수행된다.
     * Transaction Propagation.REQUIRED 예제
     * 문제가 생기면 연결되어있는 모든 트랜잭션은 롤백
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void insertRequired() {
        TRDemoModel trDemoModel = new TRDemoModel();
        trDemoModel.setName("required");
        trDemoMapper.insertRequired(trDemoModel);
        trDemoModel.setName("requiredChildren");
        trDemoChildService.insertRequiredChildren(trDemoModel);
        trDemoModel.setName("required2");
        trDemoMapper.insertRequired(trDemoModel);
//        throw new RuntimeException("부모가 문제");
    }

    /**
     * Transaction Propagation.REQUIRES_NEW 예제
     * 각각 문제가 생긴 부분만 롤백된다.
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void insertRequiresNew() {
        TRDemoModel trDemoModel = new TRDemoModel();
        trDemoModel.setName("requiresNew");
        trDemoMapper.insertRequired(trDemoModel);
        trDemoModel.setName("requiresNewChildren");
        trDemoChildService.insertRequiresNewChildren(trDemoModel);
        trDemoModel.setName("requiresNew2");
        trDemoMapper.insertRequired(trDemoModel);
//        throw new RuntimeException("부모가 문제");
    }

    /**
     * Transaction Propagation.NESTED 예제
     * 자식이 문제일 경우 부모는 커밋
     * 부모가 문제일 경우 모두 롤백
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void insertNested() {
        TRDemoModel trDemoModel = new TRDemoModel();
        trDemoModel.setName("nested");
        trDemoMapper.insertRequired(trDemoModel);
        trDemoModel.setName("nestedChildren");
        trDemoChildService.insertNestedChildren(trDemoModel);
        trDemoModel.setName("nested2");
        trDemoMapper.insertRequired(trDemoModel);
//        throw new RuntimeException("부모가 문제");
    }

    /**
     * Transaction Propagation.MANDATORY 예제
     * 시작된 트랜잭션이 없을 경우 예외를 발생시킨다
     * 독립적으로 트랜잭션을 진행하면 안 되는 경우에 사용한다.
     */
    @Override
    public void insertMandatory() {
        TRDemoModel trDemoModel = new TRDemoModel();
        trDemoModel.setName("mandatory");
        trDemoMapper.insertRequired(trDemoModel);
        trDemoModel.setName("mandatoryChildren");
        trDemoChildService.insertMandatoryChildren(trDemoModel);
        trDemoModel.setName("mandatory2");
        trDemoMapper.insertRequired(trDemoModel);
//        throw new RuntimeException("부모가 문제");
    }

    /**
     * Transaction Propagation.SUPPORT 예제
     * 부모 트랜잭션을 이어간다
     * 없을 경우 non-transactional로 실행한다.
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void insertSupport() {
        TRDemoModel trDemoModel = new TRDemoModel();
        trDemoModel.setName("support");
        trDemoMapper.insertRequired(trDemoModel);
        trDemoModel.setName("supportChildren");
        trDemoChildService.insertSupportChildren(trDemoModel);
        trDemoModel.setName("support2");
        trDemoMapper.insertRequired(trDemoModel);
//        throw new RuntimeException("부모가 문제");
    }

    /**
     * Transaction Propagation.NOT_SUPPORT 예제
     * 무조건 non-transactional로 실행한다.
     * 부모 트랜잭션이 있다면 중지시킨다.
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void insertNotSupport() {
        TRDemoModel trDemoModel = new TRDemoModel();
        trDemoModel.setName("notSupport");
        trDemoMapper.insertRequired(trDemoModel);
        trDemoModel.setName("notSupportChildren");
        trDemoChildService.insertNotSupportChildren(trDemoModel);
        trDemoModel.setName("notSupport2");
        trDemoMapper.insertRequired(trDemoModel);
        throw new RuntimeException("부모가 문제");
    }
}
