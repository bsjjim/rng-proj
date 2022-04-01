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
                this._setFormPosition(900,551);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"계약상태\" type=\"STRING\" size=\"256\"/><Column id=\"계약번호\" type=\"STRING\" size=\"256\"/><Column id=\"예약일\" type=\"STRING\" size=\"256\"/><Column id=\"고객번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"예약모델명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"계약상태\">취소</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김유리</Col><Col id=\"예약모델명\">LOTZE (L) 2.0</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"계약상태\">반납</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">홍길동</Col><Col id=\"예약모델명\">K5 (L) 2.0 렌터카 DELUXE</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">임동주</Col><Col id=\"예약모델명\">STAREX (D) 2.6 12인승</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김지유</Col><Col id=\"예약모델명\">NEW SM5 (L) 2.0</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"계약상태\">보증대차</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">아무개</Col><Col id=\"예약모델명\">YF SONATA (L) 2.0 렌터카 DELUXE</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"계약상태\">취소</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김순이</Col><Col id=\"예약모델명\">PRIDE (G) 1.4 5DOOR 디럭스</Col></Row><Row><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김유리</Col><Col id=\"예약모델명\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"No\">7</Col><Col id=\"계약상태\">반납</Col><Col id=\"계약번호\">2122002203</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">홍길동</Col><Col id=\"예약모델명\">K5 (L) 2.0 렌터카 DELUXE</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">임동주</Col><Col id=\"예약모델명\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"계약상태\">반납</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김순</Col><Col id=\"예약모델명\">LOTZE (L) 2.0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"계약상태\" type=\"STRING\" size=\"256\"/><Column id=\"계약번호\" type=\"STRING\" size=\"256\"/><Column id=\"예약일\" type=\"STRING\" size=\"256\"/><Column id=\"고객번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"예약모델명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","106","860","382",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","788","20","15","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","717","20","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("30");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"8","5","47","68",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","1","21","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("예약목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grdList","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("4");
            obj.set_binddataset("dsGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"계약상태\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"예약일\"/><Cell col=\"4\" text=\"고객번호\"/><Cell col=\"5\" text=\"고객명\"/><Cell col=\"6\" text=\"예약모델명\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:No\"/><Cell col=\"1\" text=\"bind:계약상태\"/><Cell col=\"2\" text=\"bind:계약번호\"/><Cell col=\"3\" text=\"bind:예약일\"/><Cell col=\"4\" text=\"bind:고객번호\"/><Cell col=\"5\" text=\"bind:고객명\"/><Cell col=\"6\" text=\"bind:예약모델명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","95","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-4","15","60","44",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00","816","20","44","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","17","40","80","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20","860","86",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","68","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","226","13","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"30","30","20","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","260","71","80","13",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","398","-6","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","-6","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","186","-1","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","47","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("운전자명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","157","37","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","226","47","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","292","13","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            obj.set_text("10허4048");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","374","13","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","438","13","73","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("고객명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","438","47","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","504","13","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10허4048");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName2","86","47","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","86","13","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","292","47","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd ");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","504","47","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10허4048");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_03","225","0","80","13",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSel","746","503","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","814","503","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00",null,"20","20",null,"0","20",null,null,null,null,this);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,551,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SamplePopupTarget.xfdl", function() {
        /********************************************************************
        *  팝업 샘플 화면
        *  @FileName 	: SamplePopupTarget.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/20
        *  @Desction    : 팝업 샘플 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/20     	        양경호                 최초 생성
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

        	var sName = this.gfnGetArgument("pvName");
        	var sName2 = this.gfnGetArgument("pvName2");

            this.divSearch.form.edtName.set_value(sName);
        	this.divSearch.form.edtName2.set_value(sName2);
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
        this.fnClose = function()
        {
            this.dsGridCopy.clearData();
        	this.dsGridCopy.addRow();
        	this.dsGridCopy.copyRow(0,this.dsGrid,this.dsGrid.rowposition);

        	var sName = this.dsGrid.getColumn(this.dsGrid.rowposition,5);
        	var sRowData = this.dsGridCopy.saveXML();

        	rtnVal = JSON.stringify({name:sName, rowData:sRowData});

        	this.gfnClosePopup(rtnVal);
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnSel_onclick = function(obj,e)
        {
        	this.fnClose();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.gfnSetStatusMsg("조회 중입니다..");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("SamplePopupTarget.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
