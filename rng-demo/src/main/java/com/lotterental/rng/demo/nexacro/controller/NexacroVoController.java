package com.lotterental.rng.demo.nexacro.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lotterental.rng.demo.nexacro.service.NexacroVoService;
import com.lotterental.rng.demo.nexacro.vo.NexacroVo;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroVoController {

    @Autowired
    private MessageSource messageSource;

    @Autowired
    private NexacroVoService nexacroService;

    @PostMapping("/selectnexacrovo")
    public NexacroResult selectNexacroVo(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
        NexacroVo resultVo = nexacroService.selectNexacroVo(nexacroVo);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsRes", resultVo);
        return result;
    }
    
    @PostMapping("/selectnexacrovolist")
    public NexacroResult selectNexacroVoList(@ParamDataSet(name = "dsImp") NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
        List<NexacroVo> resultVoList = nexacroService.selectNexacroVoList(nexacroVo);
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", resultVoList);
        return result;
    }
    
    @PostMapping("/savenexacrovo")
    public NexacroResult saveNexacroVo(@ParamDataSet(name = "dsSave") NexacroVo nexacroVo) {
    	log.info("parameter = {}", nexacroVo);
    	nexacroService.saveNexacroVo(nexacroVo);
        return new NexacroResult();
    }
    
    @PostMapping("/savenexacrovolist")
    public NexacroResult saveNexacroVoList(@ParamDataSet(name = "dsList") List<NexacroVo> nexacroVoList) {
    	log.info("parameter = {}", nexacroVoList);
    	nexacroService.saveNexacroVoList(nexacroVoList);
        return new NexacroResult();
    }

    @RequestMapping(value = "/echo")
    public NexacroResult echo(
            @ParamDataSet(name = "dsInput", required = false) Map<String, Object> selectNexacroMap
    ) throws Exception {
        log.debug(selectNexacroMap.toString());
        NexacroResult result = new NexacroResult();
        result.addDataSet("dsList", null);
        return result;
    }

//    @RequestMapping(value = "/updateSampleList.do")
//    public NexacroResult updateSampleList(
//            @ParamDataSet(name = "input1") List<Map<String,Object>> updateSampleList,
//            Locale locale
//    ) throws Exception {
//        try {
//            nexacroService.updateSampleList(updateSampleList);
//        } catch ( Exception e ) {
//            String msg = "";
//            String exceptionName = "";
//            String causeMsg = "";
//            if( e instanceof NexacroException) {  // id 값에 null 셋팅 후 강제발생
//                //ServiceImpl 에서 NexacroException 인자값 메시지
//                String sMsg = ((NexacroException) e).getMessage();
//                if(sMsg.equals("id")) {
//                    //{0}는 필수입니다_TEST.
//                    msg = messageSource.getMessage("nx.valid.required", new String[] { sMsg }, locale);
//                    ((NexacroException) e).setErrorCode(-1000);  //화면에서 받을 에러코드
//                    ((NexacroException) e).setErrorMsg(msg);  //화면에서 받을 에러메시지
//                    throw e;
//                }
//            } else {  // 이외의 Exception 발생
//                exceptionName = e.getCause().getClass().getName();
//                causeMsg = e.getCause().getLocalizedMessage();
//                //저장중 에러가 발생했습니다.
//                throw new NexacroException("[" + exceptionName + "]"  + causeMsg, e, -1, "nx.error.save");
//            }
//        }
//
//        NexacroResult result = new NexacroResult();
//        return result;
//    }
}