package com.lotterental.rng.core.base;


import com.lotterental.rng.core.utils.MaskingUtils;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BaseModel {
    public AuditInfo auditInfo;
    public boolean mask;
    public String loginId;

    public BaseModel() {
        this.mask = false;
    }

    /**
     * 전체 데이터 마스킹
     * ex) ************
     * @param src 마스킹 문자열
     * @return String
     */
    public String setMaskAll(String src){
        if(mask){
            return MaskingUtils.masking(src, 0, src.length());
        }
        return src;
    }

    /**
     * 주민번호 및 외국인 등록번호 : 마지막 8~13자리
     * ex) 000000-1******
     * @param src 마스킹 문자열
     * @return String
     */
    public String setMaskRrno(String src){
        if(mask){
            return MaskingUtils.masking(src, 8, 6);
        }
        return src;
    }

    /**
     * 여권번호 : 2~5자리
     * ex) M****5678
     * @param src
     * @return String
     */
    public String setMaskPassport(String src){
        if(mask){
            return MaskingUtils.masking(src, 1, 4);
        }
        return src;
    }

    /**
     * 운전면허번호 : 뒤4자리 
     * ex)11-12-3456**-**, 서울 12-1741**-**
     * @param src
     * @return
     */
    public String setMaskDriver(String src){
        if(mask){
            return MaskingUtils.masking(src,'*','-', 10, 5);
        }
        return src;
    }

    /**
     * 카드번호 : 7~12자리
     * ex) 1234-56**-****-3456  1234-56****-**456(AMEX)
     * @param src
     * @return
     */
    public String setMaskCardNo(String src){
        if(mask){
            return MaskingUtils.masking(src,'*','-', 7, 7);
        }
        return src;
    }

    /**
     * 계좌번호 : 6~10자리
     * ex)123-45*-****12
     * @param src
     * @return
     */
    public String setMaskAccountNo(String src){
        if(mask){
            return MaskingUtils.masking(src,'*','-', 6, 6);
        }
        return src;
    }

    /**
     * 성명 : 2자리
     * ex) 홍*동 / 선*용녀
     * @param src
     * @return
     */
    public String setMaskName(String src){
        if(mask){
            return MaskingUtils.masking(src, 1, 1);
        }
        return src;
    }

    /**
     * 고객ID : 3~6자리
     * ex) Ab****34
     * @param src
     * @return
     */
    public String setMaskCustId(String src){
        if(mask){
            return MaskingUtils.masking(src, 2, 4);
        }
        return src;
    }

    /**
     * 이메일주소 : 3~6자리
     * ex)sh****@lotterental.com Ab****inhan.com
     * @param src
     * @return
     */
    public String setMaskEmail(String src){
        if(mask){
            return MaskingUtils.masking(src, 2, 4);
        }
        return src;
    }

    /**
     * 일반주소 : 주소 -2
     * ex)서울시 중구 충무로 1가 ******
     * @param src
     * @return
     */
    public String setMaskAddress(String src){
        String word = " ";
        List<Integer> indexList = new ArrayList<Integer>();
        int index = 0;
        if(mask){
            index = src.indexOf(word);
            while(index != -1){
                indexList.add(index);
                index = src.indexOf(word, index+word.length());
            }
            return MaskingUtils.masking(src,indexList.get(indexList.size()-2));
        }
        return src;
    }

    /**
     * 전화번호/휴대전화번호 : 마지막4자리
     * ex)02-6950-**** / 010-4567-****
     * @param src
     * @return
     */
    public String setMaskPhoneNo(String src){
        if(mask){
            return  MaskingUtils.masking(src, MaskingUtils.LAST_4_CHAR_PATTERN);
        }
        return src;
    }

    /**
     * 유효기간 : 전체
     * ex)****-**
     * @param src
     * @return
     */
    public String setMaskValidity(String src){
        if(mask){
            return MaskingUtils.masking(src,'*','-', 0, src.length());
        }
        return src;
    }
}
