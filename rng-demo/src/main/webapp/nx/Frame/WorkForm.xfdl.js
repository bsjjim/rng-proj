(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            this.set_scrollbartype("auto auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1568,817);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divCommHeader","40","0",null,"50","40",null,"1488",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Frame::WorkFormCommHeader.xfdl");
            obj.set_formscrolltype("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","40","50",null,null,"0","10","1528",null,"752",null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divCommFooter","0",null,null,"49","0","-75","1568",null,"49",null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_url("Frame::WorkFormCommFooter.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1568,817,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Frame::WorkFormCommHeader.xfdl");
            this._addPreloadList("fdl","Frame::WorkFormCommFooter.xfdl");
        };
        
        // User Script
        this.registerScript("WorkForm.xfdl", function() {
        /********************************************************************
        *  업무영역 공통 화면
        *  @FileName 	: WorkForm.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/14
        *  @Desction    : 업무영역 공통 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/14     	        양경호                 최초 생성
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
        	var sMenuNo = this.gfnGetArgument("menuNo");
        	var sMenuNm = this.gfnGetArgument("menuNm");
        	var sPageUrl = this.gfnGetArgument("pageUrl");
        	var sMenuId = this.gfnGetArgument("menuId");
        	this.divWork.set_url(sPageUrl);

        	if(!this.gfnIsNull(sMenuNo)) sMenuNm = sMenuNm+" ["+sMenuNo+"]";

        	this.fnSetNavi(sMenuId);

        	this.divCommHeader.form.staTitle.set_text(sMenuNm);
        	this.divCommHeader.form.resetScroll();


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
        //화면 헤더 네비게이션 영역 추가 설정
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

        this.fnModifyYn = function()
        {
        	 var bModify = false;

        	try{ bModify = this.divWork.form.fnClose();} catch(e) {};

        	return bModify;
        }

        this.fnClose = function(bCheck)
        {

        	var sWinId = this.gfnGetArgument("winId");

        	bCheck = (this.gfnIsNull(bCheck)) ? false : bCheck;

        	if(bCheck == true)
        	{
        		this.oApp.avMdiFrame.form.fnDelTab(sWinId);
        		return;
        	}

        	if(this.fnModifyYn() == false)
        	{
        		this.oApp.avMdiFrame.form.fnDelTab(sWinId);
        	}
        	else
        	{
        		this.gfnConfirm("confirm.before.movepage","",
        			function(sId,sVal)
        			{
        			    if(sVal == true)
        				{
        					this.fnClose(true);
        				}
        			}
        		);
        	}


        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.Form_Work_onactivate = function(obj,e)
        {
        	trace("== Form_Work_onactivate ==");
        	var sWinId = this.gfnGetArgument("winId");

        	this.oApp.avMdiFrame.form.fnActiveFrame(sWinId);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
        };
        this.loadIncludeScript("WorkForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
