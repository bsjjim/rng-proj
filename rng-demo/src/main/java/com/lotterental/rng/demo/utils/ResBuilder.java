package com.lotterental.rng.demo.utils;


import com.lotterental.rng.core.common.mask.MaskCryptProcess;
import com.lotterental.rng.core.common.base.BaseVo;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;


@RequiredArgsConstructor
@Component
public class ResBuilder {

    public <T> NexacroResult success(String name, T t) {
        NexacroResult nexacroResult = new NexacroResult();

        if (t instanceof BaseVo) {
            nexacroResult.addDataSet(name, t);
        } else {
            nexacroResult.addDataSet(name, null);
        }
        return nexacroResult;
    }

    /**
     * 마스킹 처리
     * @param request, t
     * @return
     */
    public <T> T  maskingInfo(HttpServletRequest request , T t) {
        return MaskCryptProcess.maskingInfo(t, isMaskingOrNot(request));
    }

    /**
     * 마스킹 대상 여부 판단
     * @param request
     * @return
     */
    public boolean isMaskingOrNot(HttpServletRequest request) {
        boolean isMaskingOrNot = true;

        try {
//            UserSessionVO usv = bobcoUtil.getUserSessionVO(request);
//            String loginId = ObjectUtils.isEmpty(usv) || StringUtils.isEmpty(usv.getLoginUserId())
//                    ? "admin" : usv.getLoginUserId();
//            String sysCcd = ObjectUtils.isEmpty(usv) || StringUtils.isEmpty(usv.getSysCcd())
//                    ? LOGIN_SYS_GBN_BO : usv.getSysCcd();
//
//            switch (sysCcd) {
//                case LOGIN_SYS_GBN_CP:
//                    isMaskingOrNot = false;
//                    break;
//                case LOGIN_SYS_GBN_FO:
//                    isMaskingOrNot = true;
//                    break;
//                default:
//                    isMaskingOrNot = bobco01108Service.isMaskingOrNot(request , loginId);
//                    break;
//            }
        } catch (Exception e) {/*ignore*/}

        return isMaskingOrNot;
    }

}