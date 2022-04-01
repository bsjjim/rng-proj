(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,528);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"SYS_CD\" type=\"STRING\" size=\"20\"/><Column id=\"MENUID\" type=\"STRING\" size=\"20\"/><Column id=\"MENUNO\" type=\"STRING\" size=\"4\"/><Column id=\"MENUNM\" type=\"STRING\" size=\"75\"/><Column id=\"UPR_ID\" type=\"STRING\" size=\"20\"/><Column id=\"UPR_NM\" type=\"STRING\" size=\"75\"/><Column id=\"MENUTY\" type=\"STRING\" size=\"9\"/><Column id=\"MENUDC\" type=\"STRING\" size=\"9\"/><Column id=\"MENULV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"20\"/><Column id=\"ALL_PH\" type=\"STRING\" size=\"255\"/><Column id=\"USETIP\" type=\"STRING\" size=\"100\"/><Column id=\"M_DES\" type=\"STRING\" size=\"255\"/><Column id=\"LUPORD\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"FIX_YN\" type=\"STRING\" size=\"1\"/><Column id=\"LOG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CLA_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ERNAM\" type=\"STRING\" size=\"12\"/><Column id=\"ERDAT\" type=\"DATE\" size=\"8\"/><Column id=\"AENAM\" type=\"STRING\" size=\"12\"/><Column id=\"AEDAT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDefault","20","83","860","382",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","836","20","15","24",null,null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("0");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divDefault.addChild(obj.name, obj);

            obj = new Static("staCnt","765","20","70","24",null,null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("1");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divDefault.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"8","5","47","70",null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("2");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divDefault.addChild(obj.name, obj);

            obj = new Static("Static00","1","21","120","24",null,null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("3");
            obj.set_text("메뉴검색목록");
            obj.set_cssclass("sta_WF_title1");
            this.divDefault.addChild(obj.name, obj);

            obj = new Grid("grdList","0","50",null,null,"0","0",null,null,null,null,this.divDefault.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("4");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"119\"/><Column size=\"133\"/><Column size=\"339\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"화면번호\"/><Cell col=\"3\" text=\"메뉴명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:MENUID\"/><Cell col=\"2\" text=\"bind:MENUNO\"/><Cell col=\"3\" text=\"bind:MENUNM\"/></Band></Format></Formats>");
            this.divDefault.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","95","50",null,null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divDefault.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-4","15","60","46",null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divDefault.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","17","40","80","11",null,null,null,null,null,null,this.divDefault.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divDefault.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20","860","63",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA2");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"30","30","20","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","260","71","80","13",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","186","-1","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","21","68","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("화면번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","226","21","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","418","21","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNo","86","21","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuId","474","21","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10허4048");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","280","21","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","380","-1","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSel","746","480","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","814","480","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","764","465","80","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,528,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MenuSearchPop.xfdl", function() {
        /********************************************************************
        *  메뉴검색 팝업
        *  @FileName 	: MenuSearchPop.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/02/04
        *  @Desction    : 메뉴검색 팝업
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
            //공통 Onload함수
            this.gfnFormOnLoad(obj);

        	this.fnInit();
        }

        this.fnInit = function()
        {
            this.divSearch.form.edtMenuNo.set_value(this.gfnGetArgument("pvMenuNo"));
        	this.divSearch.form.edtMenuId.set_value(this.gfnGetArgument("pvMenuId"));
        	this.divSearch.form.edtMenuNm.set_value(this.gfnGetArgument("pvMenuNm"));

            this.dsMenu.copyData(this.gfnGetArgument("pvDsMenu"));

        	this.divDefault.form.staCnt.set_text(this.dsMenu.rowcount);
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

        this.divDefault_grdList_oncelldblclick = function(obj,e)
        {
            var sMenuId = this.dsMenu.getColumn(e.row,this.jvMenuId);

        	this.gfnCall(sMenuId);
        	this.close();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnSel_onclick = function(obj,e)
        {
            var sMenuId = this.dsMenu.getColumn(this.dsMenu.rowposition,this.jvMenuId);

        	this.gfnCall(sMenuId);
        	this.close();
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	var sMenuId = this.divSearch.form.edtMenuId.value;
        	var sMenuNo = this.divSearch.form.edtMenuNo.value;
        	var sMenuNm = this.divSearch.form.edtMenuNm.value;
        	var sFilterStr = "";


        	if(this.gfnIsNull(sMenuId) && this.gfnIsNull(sMenuNo) && this.gfnIsNull(sMenuNm)) return;

        	if(!this.gfnIsNull(sMenuId)) sFilterStr += "(MENUID.toString().indexOf('"+sMenuId+"') > -1) && ";
        	if(!this.gfnIsNull(sMenuNo)) sFilterStr += "(MENUNO.toString().indexOf('"+sMenuNo+"') > -1) && ";
        	if(!this.gfnIsNull(sMenuNm)) sFilterStr += "(MENUNM.toString().indexOf('"+sMenuNm+"') > -1) && ";

        	sFilterStr += "CLA_NM != null";

        	this.oApp.gdsMenu.filter(sFilterStr);

        	this.dsMenu.copyData(this.oApp.gdsMenu,true);

        	this.oApp.gdsMenu.filter("");

        	this.divDefault.form.staCnt.set_text(this.dsMenu.rowcount);
        };

        this.Edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        	   this.divSearch.form.btnSearch.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.divDefault.form.grdList.addEventHandler("oncelldblclick",this.divDefault_grdList_oncelldblclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtMenuNo.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.edtMenuId.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.edtMenuNm.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("MenuSearchPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
