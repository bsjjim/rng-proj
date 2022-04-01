(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO00050T01");
            this.set_titletext("프로젝트예산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" rowspan=\"2\" text=\"연도\"/><Cell col=\"3\" rowspan=\"2\" text=\"예산유형\"/><Cell col=\"4\" rowspan=\"2\" text=\"부서코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"부서명\"/><Cell col=\"6\" rowspan=\"2\" text=\"요청일자\"/><Cell col=\"7\" rowspan=\"2\" text=\"요청자\"/><Cell col=\"8\" rowspan=\"2\" text=\"변경구분\"/><Cell col=\"9\" rowspan=\"2\" text=\"요청금액\"/><Cell col=\"10\" rowspan=\"2\" text=\"신청구분\"/><Cell col=\"11\" rowspan=\"2\" text=\"승인여부\"/><Cell col=\"12\" rowspan=\"2\" text=\"승인금액\"/><Cell col=\"13\" rowspan=\"2\" text=\"승인일자\"/><Cell col=\"14\" colspan=\"7\" text=\"From\"/><Cell col=\"21\" colspan=\"7\" text=\"To\"/><Cell col=\"28\" rowspan=\"2\" text=\"처리결과\"/><Cell col=\"29\" rowspan=\"2\" text=\"처리내역\"/><Cell row=\"1\" col=\"14\" text=\"프로젝트오더코드\"/><Cell row=\"1\" col=\"15\" text=\"프로젝트오더명\"/><Cell row=\"1\" col=\"16\" text=\"예산월\"/><Cell row=\"1\" col=\"17\" text=\"계정코드\"/><Cell row=\"1\" col=\"18\" text=\"계정명\"/><Cell row=\"1\" col=\"19\" text=\"통제기간\"/><Cell row=\"1\" col=\"20\" text=\"가용예산액\"/><Cell row=\"1\" col=\"21\" text=\"프로젝트오더코드\"/><Cell row=\"1\" col=\"22\" text=\"프로젝트오더명\"/><Cell row=\"1\" col=\"23\" text=\"예산월\"/><Cell row=\"1\" col=\"24\" text=\"계정코드\"/><Cell row=\"1\" col=\"25\" text=\"계정명\"/><Cell row=\"1\" col=\"26\" text=\"가용예산액\"/><Cell row=\"1\" col=\"27\" text=\"적요\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column4\"/><Cell col=\"7\" text=\"bind:Column5\"/><Cell col=\"8\" text=\"bind:Column6\"/><Cell col=\"9\" text=\"bind:Column7\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\" text=\"bind:Column10\"/><Cell col=\"13\" text=\"bind:Column11\"/><Cell col=\"14\" text=\"bind:Column12\"/><Cell col=\"15\" text=\"bind:Column13\"/><Cell col=\"16\" text=\"bind:Column14\"/><Cell col=\"17\" text=\"bind:Column15\"/><Cell col=\"18\" text=\"bind:Column16\"/><Cell col=\"19\" text=\"bind:Column17\"/><Cell col=\"20\" text=\"bind:Column18\"/><Cell col=\"21\" text=\"bind:Column19\"/><Cell col=\"22\" text=\"bind:Column20\"/><Cell col=\"23\" text=\"bind:Column21\"/><Cell col=\"24\" text=\"bind:Column22\"/><Cell col=\"25\" text=\"bind:Column23\"/><Cell col=\"26\" text=\"bind:Column24\"/><Cell col=\"27\" text=\"bind:Column25\"/><Cell col=\"28\" text=\"bind:Column26\"/><Cell col=\"29\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","768",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","753",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","733","20","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","696",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","648",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","568",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","488",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","408",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","328",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","102","24","222",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("그룹웨어 결재");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","110","24","108",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("결재불요건신청");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("반려");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_01",null,"20","50","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("승인");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CO00050T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
