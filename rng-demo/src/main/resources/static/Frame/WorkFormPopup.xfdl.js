(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkFormPopup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1568,812);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divCommHeader","40","0",null,"60","40",null,"1488",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Frame::WorkFormCommHeader.xfdl");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","40","60",null,null,"0","0","1528",null,"752",null,this);
            obj.set_taborder("1");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1568,812,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::WorkFormCommHeader.xfdl");
        };
        
        // User Script
        this.registerScript("WorkFormPopup.xfdl", function() {
        /********************************************************************
        *  업무영역 공통팝업 화면
        *  @FileName 	: WorkFormPopup.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/27
        *  @Desction    : 업무영역 공통팝업 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/27     	        양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
        	var sMenuId = this.gfnGetArgument("pvMenuId");
        	var sMenuNo = this.gfnGetArgument("pvMenuNo");
        	var sMenuNm = this.gfnGetArgument("pvMenuNo");
        	var sPageUrl = this.gfnGetArgument("pvPageUrl");

        	this.divWork.set_url(sPageUrl);

        	if(!this.gfnIsNull(sMenuNo)) sMenuNm = sMenuNm+" ["+sMenuNo+"]";

        	this.fnSetNavi(sMenuId);

        	this.divCommHeader.form.staTitle.set_text(sMenuNm);
        	this.divCommHeader.form.btnExtPop.set_visible(false);
        	this.divCommHeader.form.staNavi.set_right(70);

        	this.divCommHeader.form.resetScroll();
        	var oForm = this.getOwnerFrame().opener.getOwnerFrame().form;
        	var oWorkForm = oForm.divWork.form;
        	var oDs;

        	//Dataset에 assign할때 데이터셋 오브젝트 역순으로 assign적용
        	for(var i=oWorkForm.objects.length-1; i>-1; i--)
        	{
        		if(this.gfnTypeOf(oWorkForm.objects[i]) == "Dataset")
        		{
        			oDs = oWorkForm.objects[i];
        		    oTgDs = this.divWork.form.objects[oDs.name];

        			oTgDs.set_enableevent(false);
        		    oTgDs.assign(oDs);
        			oTgDs.set_enableevent(true);
        		}
        	}

        	oForm.fnClose();
        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /*
         *화면 헤더 네비게이션 영역 추가 설정
         */
        this.fnSetNavi = function(sMenuId)
        {
           var gdsMenu = this.oApp.gdsMenu;

           var sUpMenuId = gdsMenu.lookup(this.jvMenuId,sMenuId,"UPR_ID"); //상위 메뉴 가져오기

           var sNavePath = "";

           while(!this.gfnIsNull(sUpMenuId)) //상위메뉴가 없으면 While문 종료
           {
               var sMenuNm = gdsMenu.lookup(this.jvMenuId,sUpMenuId,this.jvMenuNm);
        	   sUpMenuId = gdsMenu.lookup(this.jvMenuId,sUpMenuId,"UPR_ID");
        	   sNavePath = (this.gfnIsNull(sNavePath)) ? sMenuNm : sMenuNm +" > " +sNavePath;
           }

           this.divCommHeader.form.staNavi.set_text(sNavePath);
        }

        /*
         *화면 닫기
         */
        this.fnClose = function()
        {
        	this.close();
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.Form_Work_onactivate = function(obj,e)
        {


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
        };
        this.loadIncludeScript("WorkFormPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
