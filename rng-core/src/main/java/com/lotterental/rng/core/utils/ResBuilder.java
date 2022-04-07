package com.lotterental.rng.core.utils;

import com.lotterental.rng.core.cnst.Constants;
import com.lotterental.rng.core.common.maskcrypt.MaskCryptProcess;
import com.lotterental.rng.core.http.model.ResBody;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;

/**
 * Bean Copy Utils
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@RequiredArgsConstructor
@Component
public class ResBuilder {

    /**
     * ResponseEntity 생성 유틸
     * @param error
     * @param contentType
     * @param t
     * @param <T>
     * @return
     */
    public <T> ResponseEntity<ResBody> success(HttpServletRequest request, String error, String contentType, T t) {
        return new ResponseEntity<>(ResponseUtils.resReturn(HttpStatus.OK, error, contentType, maskingInfo(request, t), request.getRequestURI()), HttpStatus.OK);
    }

    /**
     * ResponseEntity 생성 유틸
     * @param contentType 상수 클래스 Constant.Type에 정의된 값이어야 한다.
     * @param t
     * @param <T>
     * @return
     */
    public <T> ResponseEntity<ResBody> success(HttpServletRequest request, String contentType, T t) {
        return success(request, "", contentType, t);
    }

    /**
     * ResponseEntity 생성 유틸
     * @param t
     * @param <T>
     * @return 
     */
    public <T> ResponseEntity<ResBody> success(HttpServletRequest request, T t) {
        return success(request,"", Constants.TYPE.OBJECT, t);
    }

    /**
     * ResponseEntity 생성 유틸
     * contentType이 Constants.TYPE.STRING이다.
     * @return 문자열 "OK"를 body로 갖는 response 
     */
    public ResponseEntity<ResBody> success(HttpServletRequest request) {
        return success(request, Constants.TYPE.STRING, Constants.VAL.OK);
    }

    /**
     * ResponseEntity 생성 유틸
     * @param inputStream
     * @return ResponseEntity<byte[]>
     * @throws IOException
     */
    //
    public ResponseEntity<byte[]> success(InputStream inputStream) throws IOException {
        return ResponseUtils.download("", inputStream);
    }
    
    /**
     * 마스킹 처리
     * @param request, t
     * @return
     */
    public <T> T maskingInfo(HttpServletRequest request ,T t) {
    	return MaskCryptProcess.maskingInfo(t, isMaskingOrNot(request));
    }
    
    /**
     * 마스킹 대상 여부 판단
     * @param hsr
     * @return
     */
    public boolean isMaskingOrNot(HttpServletRequest request) {
    	boolean isMaskingOrNot = true;
    	
		try {
//			UserSessionVO usv = bobcoUtil.getUserSessionVO(request);
//    		String loginId = ObjectUtils.isEmpty(usv) || StringUtils.isEmpty(usv.getLoginUserId())
//    							? "admin" : usv.getLoginUserId();
//    		String sysCcd = ObjectUtils.isEmpty(usv) || StringUtils.isEmpty(usv.getSysCcd())
//    							? LOGIN_SYS_GBN_BO : usv.getSysCcd();
//
//    		switch (sysCcd) {
//	    		case LOGIN_SYS_GBN_CP:
//	    			isMaskingOrNot = false;
//	    			break;
//	    		case LOGIN_SYS_GBN_FO:
//	    			isMaskingOrNot = true;
//	    			break;
//	    		default:
//	    			isMaskingOrNot = bobco01108Service.isMaskingOrNot(request , loginId);
//	    			break;
//    		}
		} catch (Exception e) {/*ignore*/}
		
		return isMaskingOrNot;
	}
}