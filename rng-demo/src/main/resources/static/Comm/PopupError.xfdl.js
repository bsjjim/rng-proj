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
                this._setFormPosition(370,207);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Error");
            obj.set_cssclass("sta_POP_title");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"1","50","28","1",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_close");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imvIcon","161","50","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/img_error.png\')");
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

            obj = new Static("staMsg","10","106","350","39",null,null,"350",null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_fittocontents("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","108","132","159","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","390","0","370","204",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_POP_bg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","390","0","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Error");
            obj.set_cssclass("sta_POP_title");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","709","1","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_POP_close");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imv00_00","551","50","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_image("url(\'theme://images/img_error.png\')");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","460","30","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","460","98","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","400","106","350","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("OOO 화면을 불러오는 동안 오류가 발생했습니다.");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","498","132","159","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","410","156","330","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div00");
            obj.set_cssclass("div_group");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","87",null,"76","28",null,"0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("btn00_00","167",null,"76","28",null,"0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("더보기");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            obj.set_icon("url(\'theme://images/btn_msg_up.png\')");
            obj.set_textAlign("left");
            obj.set_iconPosition("right");
            obj.set_textPadding("0px 5px 0px 0px");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","97","236","159","20",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","0",null,"330","236",null,"49",null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_value("에러입니다.");
            obj.set_background("#F9FAFB");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01_00_00","497","184","159","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDetail","20","staMsg:11",null,"233","20",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_background("#F9FAFB");
            obj.set_border("1px solid #d3d3d3");
            obj.set_padding("5px 5px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","97",null,"76","28",null,"19",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("확인");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore","btnOk:4",null,"76","28",null,"19",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("더보기");
            obj.set_cssclass("btn_Block");
            obj.set_borderRadius("2px");
            obj.set_icon("url(\'theme://images/btn_msg_down.png\')");
            obj.set_textAlign("left");
            obj.set_iconPosition("right");
            obj.set_textPadding("0px 5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01_00","108","441","159","19",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("red");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_padding("10px");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_01","106","389","159","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
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
            obj = new Layout("default","",370,207,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PopupError.xfdl", function() {
        /********************************************************************
        *  Alert메시지용 팝업
        *  @FileName 	: PopupError.xfdl
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

        this.fvCurHeight;
        this.fvMoreHeight = 253;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
        	this.gfnFormOnLoad(obj);

        	var sMsg = this.gfnGetArgument("pvMsg");
        	var sAddMsg = this.gfnGetArgument("pvAddMsg");
        	this.staMsg.set_text(sMsg);

        	this.txtDetail.set_visible(false);

        	this.resetScroll();

        	this.fvCurHeight = obj.getOwnerFrame().height;

        	var nBtnWidth = 156;
        	if(this.gfnIsNull(sAddMsg))
        	{
        		this.txtDetail.set_value("");
        		this.btnMore.set_visible(false);
        		nBtnWidth = 76;

        		var nBtnLeft = (obj.getOwnerFrame().width / 2) - Math.round(nBtnWidth / 2);

         		this.btnOk.set_left(nBtnLeft);
        	}
        	else
        	{
        		this.txtDetail.set_value(sAddMsg);
        	}

        	if(this.staMsg._width > 350)
        	{
        	    obj.getOwnerFrame().set_width(this.staMsg._width+20);

        		var curX = this.oApp.mainframe.left;
        		var nLeft   =  curX + (this.oApp.mainframe.width / 2) - Math.round(obj.getOwnerFrame().width / 2);
        		obj.getOwnerFrame().set_left(nLeft);

         		var nIconLeft = (obj.getOwnerFrame().width / 2)  - Math.round(48 / 2);
         		this.imvIcon.set_left(nIconLeft);

        		var nBtnLeft = (obj.getOwnerFrame().width / 2) - Math.round(nBtnWidth / 2);

         		this.btnOk.set_left(nBtnLeft);
        	}

        	if(this.staMsg._height > 40)
        	{
        	    obj.getOwnerFrame().set_height(this.staMsg._height+165);

        		var curY = this.oApp.mainframe.top;
        	    var nTop = curY + (this.oApp.mainframe.height / 2) - Math.round(obj.getOwnerFrame().height / 2);
        		obj.getOwnerFrame().set_top(nTop);

        		this.fvCurHeight = obj.getOwnerFrame().height;
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

        this.btnMore_onclick = function(obj,e)
        {
        	if(obj.icon == "url('theme://images/btn_msg_down.png')")
        	{
        		obj.set_icon("url('theme://images/btn_msg_up.png')");
        		this.txtDetail.set_visible(true);
        		this.getOwnerFrame().set_height(this.fvCurHeight+this.fvMoreHeight);
        	}
        	else
        	{
        		obj.set_icon("url('theme://images/btn_msg_down.png')");
        		this.txtDetail.set_visible(false);
        		this.getOwnerFrame().set_height(this.staMsg._height+165);
        		this.getOwnerFrame().set_height(this.fvCurHeight);
        	}

        	var curY = this.oApp.mainframe.top;
        	var nTop = curY + (this.oApp.mainframe.height / 2) - Math.round(this.getOwnerFrame().height / 2);
        	this.getOwnerFrame().set_top(nTop);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_01.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00_01.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.div00_00.form.btn00_00.addEventHandler("onclick",this.div00_btn00_00_onclick,this);
            this.div00_00.form.Static01_00_00_00_00_01.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00_01_00_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnMore.addEventHandler("onclick",this.btnMore_onclick,this);
            this.Static01_00_00_00_00_01_00.addEventHandler("onclick",this.Static01_00_00_onclick,this);
            this.Static01_00_00_00_00_00_01.addEventHandler("onclick",this.Static01_00_00_onclick,this);
        };
        this.loadIncludeScript("PopupError.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
