package com.lotterental.rng.demo.nexacro.controller;

import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_CODE;
import static com.lotterental.rng.common.cnst.ErrorColumn.ERROR_MSG;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lotterental.rng.core.common.exception.BusinessException;
import com.lotterental.rng.demo.nexacro.service.NexacroMapService;
import com.lotterental.rng.utils.ErrorCodeUtil;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class NexacroMapController {

	@Autowired
    private MessageSource messageSource;
	
    @Autowired
    private NexacroMapService nexacroService;

    @PostMapping("/selectnexacromap")
    public NexacroResult selectNexacroMap(@ParamDataSet(name = "dsImp") Map<String, Object> nexacroMap) throws Exception {
    	log.debug("parameter = {}", nexacroMap);
    	NexacroResult result = new NexacroResult();
    	try {
    		Map<String, Object> resultMap = nexacroService.selectNexacroMap(nexacroMap);
    		result.addDataSet("dsRes", resultMap);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/selectnexacromaplist")
    public NexacroResult selectNexacroMapList(@ParamDataSet(name = "dsImp") Map<String, Object> nexacroMap) throws Exception {
    	log.debug("parameter = {}", nexacroMap);
    	NexacroResult result = new NexacroResult();
    	try {
	        List<Map<String, Object>> resultMapList = nexacroService.selectNexacroMapList(nexacroMap);        
	        result.addDataSet("dsList", resultMapList);
    	} catch (BusinessException e) {
	    		// 에러시 처리 할 업무로직 존재시 처리
	    		result.addVariable(ERROR_CODE.getColumn(), e.getMessageId());
	    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg(e.getMessageId()));
//	    		result.addVariable(ErrorInfo.getMsg(), ErrorCodeUtil.getErrorMsg(e.getMessageId(), e.getMessageArgs()));
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
        return result;
    }
    
    @PostMapping("/savenexacromap")
    public NexacroResult saveNexacroMap(@ParamDataSet(name = "dsSave") Map<String, Object> nexacroMap) throws Exception {
    	log.debug("parameter = {}", nexacroMap);
    	NexacroResult result = new NexacroResult();
    	try {
    		nexacroService.saveNexacroMap(nexacroMap);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
    }
    
    @PostMapping("/savenexacromaplist")
    public NexacroResult saveNexacroMapList(@ParamDataSet(name = "dsList") List<Map<String, Object>> nexacroMapList) throws Exception {
    	log.debug("parameter = {}", nexacroMapList);
    	NexacroResult result = new NexacroResult();
    	try {
    		nexacroService.saveNexacroMapList(nexacroMapList);
    	} catch (Exception e) {
    		// 에러시 처리 할 업무로직 존재시 처리
    		result.addVariable(ERROR_CODE.getColumn(), "E0001");
    		result.addVariable(ERROR_MSG.getColumn(), ErrorCodeUtil.getErrorMsg("E0001"));
    	}
    	return result;
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
    
//  @RequestMapping(value = "/updateSampleList.do")
//  public NexacroResult updateSampleList(
//          @ParamDataSet(name = "input1") List<Map<String,Object>> updateSampleList,
//          Locale locale
//  ) throws Exception {
//      try {
//          nexacroService.updateSampleList(updateSampleList);
//      } catch ( Exception e ) {
//          String msg = "";
//          String exceptionName = "";
//          String causeMsg = "";
//          if( e instanceof NexacroException) {  // id 값에 null 셋팅 후 강제발생
//              //ServiceImpl 에서 NexacroException 인자값 메시지
//              String sMsg = ((NexacroException) e).getMessage();
//              if(sMsg.equals("id")) {
//                  //{0}는 필수입니다_TEST.
//                  msg = messageSource.getMessage("nx.valid.required", new String[] { sMsg }, locale);
//                  ((NexacroException) e).setErrorCode(-1000);  //화면에서 받을 에러코드
//                  ((NexacroException) e).setErrorMsg(msg);  //화면에서 받을 에러메시지
//                  throw e;
//              }
//          } else {  // 이외의 Exception 발생
//              exceptionName = e.getCause().getClass().getName();
//              causeMsg = e.getCause().getLocalizedMessage();
//              //저장중 에러가 발생했습니다.
//              throw new NexacroException("[" + exceptionName + "]"  + causeMsg, e, -1, "nx.error.save");
//          }
//      }
//
//      NexacroResult result = new NexacroResult();
//      return result;
//  }
    
}