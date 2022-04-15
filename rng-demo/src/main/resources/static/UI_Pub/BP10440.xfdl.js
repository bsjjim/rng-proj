(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp01");
            this.set_titletext("매출 및 직접비 산출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","63",null,null,"40","208",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("매출 및 직접비");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"계획계정코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"계획계정명\"/><Cell col=\"3\" rowspan=\"2\" text=\"조직코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"조직LV1\"/><Cell col=\"5\" rowspan=\"2\" text=\"조직LV2\"/><Cell col=\"6\" text=\"년\"/><Cell col=\"7\" text=\"년\" cssclass=\"cell_fix\"/><Cell col=\"8\" colspan=\"12\" text=\"년\"/><Cell col=\"20\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"6\" text=\"합계\"/><Cell row=\"1\" col=\"7\" text=\"합계\" cssclass=\"cell_fix\"/><Cell row=\"1\" col=\"8\" text=\"1월\"/><Cell row=\"1\" col=\"9\" text=\"2월\"/><Cell row=\"1\" col=\"10\" text=\"3월\"/><Cell row=\"1\" col=\"11\" text=\"4월\"/><Cell row=\"1\" col=\"12\" text=\"5월\"/><Cell row=\"1\" col=\"13\" text=\"6월\"/><Cell row=\"1\" col=\"14\" text=\"7월\"/><Cell row=\"1\" col=\"15\" text=\"8월\"/><Cell row=\"1\" col=\"16\" text=\"9월\"/><Cell row=\"1\" col=\"17\" text=\"10월\"/><Cell row=\"1\" col=\"18\" text=\"11월\"/><Cell row=\"1\" col=\"19\" text=\"12월\"/><Cell row=\"1\" col=\"20\" text=\"1월\"/><Cell row=\"1\" col=\"21\" text=\"2월\"/><Cell row=\"1\" col=\"22\" text=\"3월\"/><Cell row=\"1\" col=\"23\" text=\"4월\"/><Cell row=\"1\" col=\"24\" text=\"5월\"/><Cell row=\"1\" col=\"25\" text=\"6월\"/><Cell row=\"1\" col=\"26\" text=\"7월\"/><Cell row=\"1\" col=\"27\" text=\"8월\"/><Cell row=\"1\" col=\"28\" text=\"9월\"/><Cell row=\"1\" col=\"29\" text=\"10월\"/><Cell row=\"1\" col=\"30\" text=\"11월\"/><Cell row=\"1\" col=\"31\" text=\"12월\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","1",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"0","10","50","45",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","33","24","142",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("단위");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","80","24","55",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_cmb00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_cmb00_00_innerdataset", obj);
            divGridWapper_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_cmb00_00_innerdataset);
            obj.set_text("투입대수");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","0",null,null,"160","40","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","290","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("롯데렌탈 업무위탁수수료 및 카셰어링 매출");
            obj.set_cssclass("sta_WF_title2");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"년\"/><Cell col=\"2\" text=\"년\" cssclass=\"cell_fix\"/><Cell col=\"3\" colspan=\"12\" text=\"년\"/><Cell col=\"15\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"1\" text=\"합계\"/><Cell row=\"1\" col=\"2\" text=\"합계\" cssclass=\"cell_fix\"/><Cell row=\"1\" col=\"3\" text=\"1월\"/><Cell row=\"1\" col=\"4\" text=\"2월\"/><Cell row=\"1\" col=\"5\" text=\"3월\"/><Cell row=\"1\" col=\"6\" text=\"4월\"/><Cell row=\"1\" col=\"7\" text=\"5월\"/><Cell row=\"1\" col=\"8\" text=\"6월\"/><Cell row=\"1\" col=\"9\" text=\"7월\"/><Cell row=\"1\" col=\"10\" text=\"8월\"/><Cell row=\"1\" col=\"11\" text=\"9월\"/><Cell row=\"1\" col=\"12\" text=\"10월\"/><Cell row=\"1\" col=\"13\" text=\"11월\"/><Cell row=\"1\" col=\"14\" text=\"12월\"/><Cell row=\"1\" col=\"15\" text=\"1월\"/><Cell row=\"1\" col=\"16\" text=\"2월\"/><Cell row=\"1\" col=\"17\" text=\"3월\"/><Cell row=\"1\" col=\"18\" text=\"4월\"/><Cell row=\"1\" col=\"19\" text=\"5월\"/><Cell row=\"1\" col=\"20\" text=\"6월\"/><Cell row=\"1\" col=\"21\" text=\"7월\"/><Cell row=\"1\" col=\"22\" text=\"8월\"/><Cell row=\"1\" col=\"23\" text=\"9월\"/><Cell row=\"1\" col=\"24\" text=\"10월\"/><Cell row=\"1\" col=\"25\" text=\"11월\"/><Cell row=\"1\" col=\"26\" text=\"12월\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band></Format></Formats>");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","1",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"0","10","50","45",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","80","24","55",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("divGridWapper00_form_cmb00_00_innerdataset", obj);
            divGridWapper00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper00_form_cmb00_00_innerdataset);
            obj.set_text("투입대수");
            obj.set_index("0");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","33","24","142",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("6");
            obj.set_text("단위");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00",null,"0","20","50","168",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00",null,"20","170","24","188",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("8");
            obj.set_text("롯데렌탈 업무위탁수수료");
            obj.set_value("");
            obj.set_index("-1");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00_00",null,"20","33","24","365",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("9");
            obj.set_text("구분");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","divGridWapper00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","1394","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","108","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("산출 및 저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","38","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("계획구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","211","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","125","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var DivSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_innerdataset", obj);
            DivSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","251","18","38","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("버전");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","291","18","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_text("최종");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","76","19","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","870","18","38","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("사업");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","910","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_text("오토렌탈");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","281","45","10","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","401","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("수립년도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","468","18","43","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","361","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","458","4","10","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","567","18","48","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("수립월");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","620","18","28","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","610","4","10","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","704","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","770","18","43","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00","511","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00_00","648","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00_01","813","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","527","4","40","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00","664","4","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00","830","10","40","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);
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
            this.addEventHandler("onload",this.temp01_onload,this);
            this.div00_00.form.Button00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("BP10440.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
