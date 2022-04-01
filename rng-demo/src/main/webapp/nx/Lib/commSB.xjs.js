//XJS=commSB.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************
        *  업무공통 스크립트 파일
        * 업무공통 스크립트는 반드시 화면에 include를 적용하여 사용
        * EX) include "Lib::commSB.xjs";
        *  @FileName 	: commSB.xjs
        */


        /**
        * 녹취 리스트 조회(예시)
        * @param {string} sName - 이름
        * @param {string} sKunnr - sKunnr
        * @param {string} sCtrNo - sCtrNo
        * @param {string} sExten - sExten
        * @return N/A
        * @example
        * this.lfn_comonIpnoLis(this);
        */
        this.lfn_comonIpnoLis = function(sName,sKunnr,sCtrNo,sExten)
        {

        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
