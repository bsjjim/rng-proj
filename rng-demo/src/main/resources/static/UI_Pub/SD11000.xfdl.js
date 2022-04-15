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
            this.set_titletext("차량변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"164","794",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("요청지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","336","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("요청자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("요청기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","336","52","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","336","86","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("고객명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","120","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","336","120","88","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("배서진행상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","296","5","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","418","8","10","145",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","130","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","157","18","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","52","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","86","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","168","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","86","120","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10허4048");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","173","120","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","428","18","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","487","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","514","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","428","52","135","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","428","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","515","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","542","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","428","120","135","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"794","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"요청번호\"/><Cell col=\"2\" text=\"요청일자\"/><Cell col=\"3\" text=\"요청자\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"배서진행상태\"/><Cell col=\"6\" text=\"계약번호\"/><Cell col=\"7\" text=\"상품군\"/><Cell col=\"8\" text=\"고객명\"/><Cell col=\"9\" text=\"차량번호\"/><Cell col=\"10\" text=\"차종\"/><Cell col=\"11\" text=\"계약지점\"/><Cell col=\"12\" text=\"변경기준월\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","331",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","543","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","627","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","105",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","615","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","119",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","divGridWapper:-52.72%","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","124","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("변경신청서출력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","849",null,"100","48",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("h48");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","divGridWapper:20","0","734","660",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00_00","531","450","203","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("83");
            obj.set_text("증감");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01_00","531","483","203","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01_00","531","516","203","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","370","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","35","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","35",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","376","35","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","68","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("장기구분");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","68",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","376","68","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("상품군");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","101","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","101",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","376","101","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("차종");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","134","73","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","510","106","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","435","0","60","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","34",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01","694","363","35","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("7px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","134","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","129","134",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","376","134","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","167","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("계약월수");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00","129","167",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00","376","167","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","200","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("월대여료(vat포함)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00_00","129","200",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00","376","200","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","255","340","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("변경내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","285","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","129","285","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("변경 전");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","431","285","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_text("변경 후");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","129","318","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","431","318","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","318","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","129","351","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","431","351","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","351","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("차종");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00","129","384","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","431","384","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","0","384","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("유종");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","284",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","219","234","50","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00","129","417","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","431","417","303","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00","0","417","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("차량등록일");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_01","0","450","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00","129","450","202","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_text("변경전");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00","330","450","202","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_text("변경후");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01","129","483","202","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01","330","483","202","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01","0","483","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_text("월대여료(vat포함)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01","129","516","202","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01","330","516","202","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01","0","516","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_text("회수율");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_01","129","549",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_01","0","549","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_text("변경신청서여부");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00",null,"4","50","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_text("상신");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00",null,"4","86","24","108",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_text("시뮬레이션");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_01",null,"4","50","24","198",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("55");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_01_00",null,"4","50","24","252",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("56");
            obj.set_text("조회");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_01_00_00",null,"4","74","24","306",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("57");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_02",null,"4","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00",null,"28","100","6","34",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("59");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","216","40","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("60");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","40","80","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_text("123456789");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","510","40","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("62");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","510","73","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("63");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","134","106","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("64");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","134","139","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("65");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","510","139","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("66");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","134","172","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("67");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01","595","172","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("68");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","510","172","85","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("69");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","612","172","85","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("70");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","510","205","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("71");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","134","205","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("72");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","254","205","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("73");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","436","422","85","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("74");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_02","134","422","85","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("75");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","389","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("76");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","436","389","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("77");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","134","356","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("78");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","436","356","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("79");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_01","134","323","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("80");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","436","323","210","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("81");
            obj.set_text("123456789");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00","648","323","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("82");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","134","488","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("86");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","254","488","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("87");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","455","488","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("88");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","335","488","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("89");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00","536","488","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("90");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00","656","488","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("91");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_01","254","521","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("92");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_01","134","521","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("93");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_01","335","521","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("94");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_01","455","521","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("95");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00","536","521","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("96");
            obj.set_format("#,###");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00","656","521","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("97");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_03","0","598","130","62",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("98");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_02","129","598",null,"62","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","381","583","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("100");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","604","596","51",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("101");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","0","598",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("102");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00","134","554","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("103");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01",null,"254","118","24","186",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("104");
            obj.set_text("대여료변경기준 월");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb01_00",null,"254","70","24","113",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("105");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00",null,"254","63","24","37",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("106");
            obj.set_text("청구회차");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","621","234","20","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("107");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt01","699","254","35","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("108");
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
        this.registerScript("SD11000.xfdl", function() {

        this.temp01_onload = function(obj,e)
        {
        	this.gfnDivSearchExpand(this.btnSearchExpand,this.divSearch);
        };



        this.Button01_onclick = function(obj,e)
        {

        };

        this.btnSearchExpand_onclick = function(obj,e)
        {
            this.gfnDivSearchExpand(obj,this.divSearch);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
            this.Div01.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
            this.Div01.form.Static27_02.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("SD11000.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
