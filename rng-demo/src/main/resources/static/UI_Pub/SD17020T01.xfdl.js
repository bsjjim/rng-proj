(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD17020T1");
            this.set_titletext("청구신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,675);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","10",null,"63","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","399","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","439","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("청구상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","738","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","645","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("보험관리번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","605","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","77","0","10","45",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","495","14","10","35",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","728","14","10","35",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","87","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","189","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","505","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0",null,null,"0","350",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("청구내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds00");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"업무구분\" cssclass=\"cell_req\"/><Cell col=\"4\" text=\"전송회사구분코드\" cssclass=\"cell_req\"/><Cell col=\"5\" text=\"임시보험청구의뢰번호\"/><Cell col=\"6\" text=\"보험청구의뢰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","155","0","60","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","827","3","15","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","372",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","660",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","292",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1153","44","100","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1034","38","100","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","76","24","212",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","76","24","132",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","675",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","602",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","554",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"21","74","24","54",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("청구신청");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","98","24","452",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_01",null,"21","50","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","Div00:0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_02","129","16",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","528","0","100","15",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","16","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("청구합계");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","21","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_format("#,##9");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","21","20","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","15",null,"2","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div01_00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"업무구분\" cssclass=\"cell_req\"/><Cell col=\"4\" text=\"전송회사구분코드\" cssclass=\"cell_req\"/><Cell col=\"5\" text=\"임시보험청구의뢰번호\"/><Cell col=\"6\" text=\"보험청구의뢰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","155",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","179",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","160",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01","1327","14","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("청구상세");
            obj.set_cssclass("sta_WF_title3");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","155","0","60","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,675,this,function(p){});
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
        this.loadIncludeScript("SD17020T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
