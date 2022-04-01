(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Header");
            this.set_titletext("header");
            this.set_cssclass("frm_header");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1858,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"SYS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"MENUID\" type=\"STRING\" size=\"20\"/><Column id=\"MENUNO\" type=\"STRING\" size=\"4\"/><Column id=\"MENUNM\" type=\"STRING\" size=\"75\"/><Column id=\"UPR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"UPR_NM\" type=\"STRING\" size=\"75\"/><Column id=\"MENUTY\" type=\"STRING\" size=\"9\"/><Column id=\"MENUDC\" type=\"STRING\" size=\"9\"/><Column id=\"MENULV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ALL_PH\" type=\"STRING\" size=\"255\"/><Column id=\"USETIP\" type=\"STRING\" size=\"100\"/><Column id=\"M_DES\" type=\"STRING\" size=\"255\"/><Column id=\"LUPORD\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"FIX_YN\" type=\"STRING\" size=\"1\"/><Column id=\"LOG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CLA_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ERNAM\" type=\"STRING\" size=\"12\"/><Column id=\"ERDAT\" type=\"DATE\" size=\"8\"/><Column id=\"AENAM\" type=\"STRING\" size=\"12\"/><Column id=\"AEDAT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","12","10","127","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","154","17","236","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_TF_search");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","397","17","29","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_src");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","207","24","123",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("홍길동(디지털혁신TF 영업 Part)");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_TF_user");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"18","18","24","Static02:15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_TF_alarm");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"16","73","30","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Static01:-6","20","30","14",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("99+");
            obj.set_cssclass("btn_TF_alarm");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv00","154","17","290","210",null,null,null,null,null,null,this);
            obj.set_text("pdv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","0","0","236","27",null,null,null,null,null,null,this.pdv00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_TF_search");
            this.pdv00.addChild(obj.name, obj);

            obj = new Button("btnSearch","243","0","29","26",null,null,null,null,null,null,this.pdv00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_src");
            this.pdv00.addChild(obj.name, obj);

            obj = new Grid("grd00","0","44","260","151",null,null,null,null,null,null,this.pdv00.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.pdv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1858,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Top.xfdl", function() {
        /********************************************************************
        *  프레임 Top영역
        *  @FileName 	: Top.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/02/04
        *  @Desction    : 프레임 Top영역
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/02/04     	        양경호                 최초 생성
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

        this.btnSearch_onclick = function(obj,e)
        {
            var sVal = this.edtSearch.value;
        	if(this.gfnIsNull(sVal)) return;

        	var sMenuId = "";
        	var sMenuNo = "";
        	var sMenuNm = "";

        	if(!this.gfnIsNum(sVal))
        	{
        		var strVal = sVal.substr(0, 2);
        		var strVal2 = sVal.substr(2, 1);

        		if((strVal == "CM" || strVal == "CO" || strVal == "CS" || strVal == "FI" || strVal == "HR" || strVal == "LE" || strVal == "MC" || strVal == "MM"
        					|| strVal == "PM" || strVal == "SB" || strVal == "SD" || strVal == "SF" || strVal == "TR") && this.gfnIsNum(strVal2))
        		{
        			sMenuId = sVal;
        			this.oApp.gdsMenu.filter("(MENUID.toString().indexOf('"+sVal+"') > -1) && CLA_NM != null");
        		}
        		else
        		{
        			sMenuNm = sVal;
        			this.oApp.gdsMenu.filter("(MENUNM.toString().indexOf('"+sVal+"') > -1) && CLA_NM != null");
        		}
        	}
        	else
        	{
        	    if(sVal.length < 4)
        		{
        			this.gfnAlert("찾기는 4자리 이상을 입력해야 합니다.");
        			return;
        		}

        		sMenuNo = sVal;
        		this.oApp.gdsMenu.filter("(MENUNO.toString().indexOf('"+sVal+"') > -1) && CLA_NM != null");
        	}


        	this.dsMenu.copyData(this.oApp.gdsMenu,true);

        	this.oApp.gdsMenu.filter("");

        	if(this.dsMenu.rowcount < 1) return;

        	if(this.dsMenu.rowcount == 1)
        	{
        	    this.gfnCall(this.dsMenu.getColumn(0,this.jvMenuId));
        	}
        	else
        	{
        		var sTitle = "메뉴찾기";
        		var oArg = {pvDsMenu:this.dsMenu,pvMenuNm:sMenuNm,pvMenuId:sMenuId,pvMenuNo:sMenuNo};
        		var oOption = {title:sTitle};

        		this.gfnOpenPopup("MenuSearchPop","Comm::MenuSearchPop.xfdl",oArg,oOption);
        	}
        };

        this.edtSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btnSearch.click();
        	}
        };

        this.edtSearch_onsetfocus = function(obj,e)
        {
        	this.pdv00.trackPopupByComponent(obj,0,0);

        };

        this.pdv00_oncloseup = function(obj,e)
        {
            trace("AAAAA");
        	this.btnSearch.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtSearch.addEventHandler("onkeyup",this.edtSearch_onkeyup,this);
            this.edtSearch.addEventHandler("onsetfocus",this.edtSearch_onsetfocus,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.pdv00.addEventHandler("oncloseup",this.pdv00_oncloseup,this);
            this.pdv00.form.edtSearch.addEventHandler("onkeyup",this.edtSearch_onkeyup,this);
            this.pdv00.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
