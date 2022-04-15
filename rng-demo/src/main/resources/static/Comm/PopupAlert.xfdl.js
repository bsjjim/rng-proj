(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,205);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Notice");
            obj.set_cssclass("sta_POP_title");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"1","50","28","1",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_close");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imvIcon","160","50","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/img_alert.png\')");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","70","30","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","70","98","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("staMsg","10","106","350","40",null,null,"350",null,"40",null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_fittocontents("both");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","147",null,"76","28",null,"21",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","110","184","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,205,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PopupAlert.xfdl", function() {
        /********************************************************************
        *  Alert메시지용 팝업
        *  @FileName 	: PopupAlert.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/21
        *  @Desction    : Alert메시지용 팝업
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/21     	        양경호                 최초 생성
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
        	this.gfnFormOnLoad(obj);

        	var sMsg = this.gfnGetArgument("pvMsg");

        	this.staMsg.set_text(sMsg);

        	this.resetScroll();

        	if(this.staMsg._width > 350)
        	{
        	    obj.getOwnerFrame().set_width(this.staMsg._width+20);

        		var curX = this.oApp.mainframe.left;
        		var nLeft   =  curX + (this.oApp.mainframe.width / 2) - Math.round(obj.getOwnerFrame().width / 2);
        		obj.getOwnerFrame().set_left(nLeft);

         		var nIconLeft = (obj.getOwnerFrame().width / 2)  - Math.round(48 / 2);
         		this.imvIcon.set_left(nIconLeft);

        		var nBtnLeft = (obj.getOwnerFrame().width / 2) - Math.round(76 / 2);

         		this.btnOk.set_left(nBtnLeft);
        	}

        	if(this.staMsg._height > 40)
        	{
        	    obj.getOwnerFrame().set_height(this.staMsg._height+165);

        		var curY = this.oApp.mainframe.top;
        	    var nTop = curY + (this.oApp.mainframe.height / 2) - Math.round(obj.getOwnerFrame().height / 2);
        		obj.getOwnerFrame().set_top(nTop);
        	}
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

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnOk_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
        };
        this.loadIncludeScript("PopupAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
