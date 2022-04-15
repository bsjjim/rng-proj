(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WorkFormComm");
            this.set_titletext("업무영역헤더");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","0","10","260","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("심사등록(개별) [4120]");
            obj.set_cssclass("sta_WF_pageTitle");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnExtPop",null,null,"24","24","56","13",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_padding("0px");
            obj.set_cssclass("btn_TF_collapse");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,null,"24","24","28","13",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_help");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"24","24","0","13",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_close");
            this.addChild(obj.name, obj);

            obj = new Static("staNavi",null,"20","658","30","100",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_TF_breadcrumb");
            this.addChild(obj.name, obj);

            obj = new Button("btnFav","staTitle:10","16","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_fav");
            this.addChild(obj.name, obj);

            obj = new Button("btnReload","btnFav:6",null,"28","28",null,"6",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_TF_reset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("WorkFormCommHeader.xfdl", function() {
        /********************************************************************
        *  업무영역 화면 헤더
        *  @FileName 	: WorkFormCommHeader.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/18
        *  @Desction    : 업무영역 화면 헤더
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/18     	        양경호                 최초 생성
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

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/


        this.btnFav_onclick = function(obj,e)
        {

        };

        this.btnReload_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.divWork.reload();
        };

        this.btnHelp_onclick = function(obj,e)
        {

        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnClose();
        };

        this.btnExtPop_onclick = function(obj,e)
        {
        	var sTitle = this.gfnGetArgument("menuNm");

        	var oArg = {
        	    pvMenuNo:this.gfnGetArgument("menuNo"),
        		pvMenuNm:this.gfnGetArgument("menuNm"),
        		pvMenuId:this.gfnGetArgument("menuId"),
        	    pvPageUrl:this.gfnGetArgument("pageUrl")
        		};

        	var oOption = {title:sTitle,popuptype:"modeless",width:1570,height:815};	//top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"

        	this.gfnOpenPopup(this.gfnGetArgument("menuId"),"Frame::WorkFormPopup.xfdl",oArg,oOption);

        	//this.getOwnerFrame().form.fnClose();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.btnExtPop.addEventHandler("onclick",this.btnExtPop_onclick,this);
            this.btnHelp.addEventHandler("onclick",this.btnHelp_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnFav.addEventHandler("onclick",this.btnFav_onclick,this);
            this.btnReload.addEventHandler("onclick",this.btnReload_onclick,this);
        };
        this.loadIncludeScript("WorkFormCommHeader.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
