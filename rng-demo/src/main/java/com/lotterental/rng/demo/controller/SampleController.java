package com.lotterental.rng.demo.controller;

import com.lotterental.rng.demo.service.SampleService;
import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Locale;
import java.util.Map;

@Slf4j
@Controller
public class SampleController {

    @Autowired
    private MessageSource messageSource;

    @Autowired
    private SampleService sampleService;

    @RequestMapping(value = "/echo")
    public NexacroResult echo(
            @ParamDataSet(name = "dsInput", required = false) Map<String,Object> sampleList
    ) throws Exception {
        log.debug(sampleList.toString());
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", null);
        return result;
    }

    @RequestMapping(value = "/selectSampleList.do")
    public NexacroResult selectSampleList(
            @ParamDataSet(name = "input1") Map<String,String> ds_search
    ) throws Exception {
    	// git commi test
        List<Map<String, Object>> sampleList = null;
        sampleList = sampleService.selectSampleList(ds_search);
        NexacroResult result = new NexacroResult();
        result.addDataSet("output1", sampleList);
        return result;
    }

    @RequestMapping(value = "/updateSampleList.do")
    public NexacroResult updateSampleList(
            @ParamDataSet(name = "input1") List<Map<String,Object>> updateSampleList,
            Locale locale
    ) throws Exception {
        try {
            sampleService.updateSampleList(updateSampleList);
        } catch ( Exception e ) {
            String msg = "";
            String exceptionName = "";
            String causeMsg = "";
            if( e instanceof NexacroException ) {  // id 값에 null 셋팅 후 강제발생
                //ServiceImpl 에서 NexacroException 인자값 메시지
                String sMsg = ((NexacroException) e).getMessage();
                if(sMsg.equals("id")) {
                    //{0}는 필수입니다_TEST.
                    msg = messageSource.getMessage("nx.valid.required", new String[] { sMsg }, locale);
                    ((NexacroException) e).setErrorCode(-1000);  //화면에서 받을 에러코드
                    ((NexacroException) e).setErrorMsg(msg);  //화면에서 받을 에러메시지
                    throw e;
                }
            } else {  // 이외의 Exception 발생
                exceptionName = e.getCause().getClass().getName();
                causeMsg = e.getCause().getLocalizedMessage();
                //저장중 에러가 발생했습니다.
                throw new NexacroException("[" + exceptionName + "]"  + causeMsg, e, -1, "nx.error.save");
            }
        }

        NexacroResult result = new NexacroResult();
        return result;
    }
}
