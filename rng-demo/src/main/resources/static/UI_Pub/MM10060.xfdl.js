(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_05");
            this.set_titletext("단기차 구매요청 변경의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","312","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","352","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"2","10","60","1400",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01",null,"0","10","60","1067",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","717","0","40","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","757","18","96","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("구매요청기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","840","0","10","45",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1060","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1100","18","96","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00",null,"0","10","60","293",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","130","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","157","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","419","18","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","491","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","535","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","562","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","850","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","1193","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","1280","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"40","454",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("구매요청 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구매요청번호\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"차종\"/><Cell col=\"4\" text=\"요청번호\"/><Cell col=\"5\" text=\"요청일자\"/><Cell col=\"6\" text=\"요청자\"/><Cell col=\"7\" text=\"등록지\"/><Cell col=\"8\" text=\"경유지\"/><Cell col=\"9\" text=\"외장색상\"/><Cell col=\"10\" text=\"내장색상\"/><Cell col=\"11\" text=\"옵션\"/><Cell col=\"12\" text=\"용품\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01_00",null,null,"459","203","521","251",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","130","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("변경 전 차량옵션");
            obj.set_cssclass("sta_WF_title3");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"옵션명\"/><Cell col=\"2\" text=\"단가\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00",null,null,"461","203","40","251",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","130","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("변경 후 차량옵션");
            obj.set_cssclass("sta_WF_title3");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"옵션명\"/><Cell col=\"3\" text=\"단가\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","78",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("옵션추가");
            obj.set_cssclass("btn_Block");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","0",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("옵션삭제");
            obj.set_cssclass("btn_Block");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_01",null,"Div01_00:0","460","203","520",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","130","24",null,null,null,null,null,null,this.Div01_00_01.form);
            obj.set_taborder("0");
            obj.set_text("변경 전 차량용품");
            obj.set_cssclass("sta_WF_title3");
            this.Div01_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01_00_01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"옵션명\"/><Cell col=\"2\" text=\"단가\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.Div01_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00_01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_01.addChild(obj.name, obj);

            obj = new Div("Div01_00_00_00",null,"Div01_00_00:0","460","203","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","130","24",null,null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("변경 후 차량용품");
            obj.set_cssclass("sta_WF_title3");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"옵션명\"/><Cell col=\"3\" text=\"단가\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","78",null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("용품추가");
            obj.set_cssclass("btn_Block");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","0",null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("용품삭제");
            obj.set_cssclass("btn_Block");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0",null,null,"189","1000","48",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","16","130",null,null,"0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","16",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","15",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","15",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","21",null,null,"10","4",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00","0",null,null,"217","1000","237",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","17","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("변경내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","0","51","136","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01","135","51","197","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("변경전");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00","331","51",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("변경후");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","0","84","40","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","135","84","198","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","331","84",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","39","84","97","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_label");
            obj.set_text("등록지");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_02","0","117","40","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","135","117","198","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","331","117",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00","39","117","97","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_label");
            obj.set_text("경유지");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_03","0","150","40","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_02","135","150","198","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_01","331","150",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_01","39","150","97","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_label");
            obj.set_text("외장색상");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_03_00","0","183","40","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_02_00","135","183","198","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_01_00","331","183",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_01_00","39","183","97","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_label");
            obj.set_text("내장색상");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","13","89","15","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","13","122","15","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00_00","13","155","15","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00_00_00","13","188","15","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","140","89","187","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","140","122","187","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","140","155","187","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00","140","188","187","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01","336","89","62","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00","400","89",null,"24","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_01","336","122","62","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_00","400","122",null,"24","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","336","155","187","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","336","188","187","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            this.Div00.addChild(obj.name, obj);
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
        this.registerScript("MM10060.xfdl", function() {

        this.Div01_Static02_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00_00.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("MM10060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
