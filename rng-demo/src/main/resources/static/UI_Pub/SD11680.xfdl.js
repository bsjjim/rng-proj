(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_06");
            this.set_titletext("NICE신용정보조회(요약)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">KRW</Col></Row><Row><Col id=\"Column0\">USD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","321","18","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("Safe-key");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","393","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","480","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","507","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","622","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","662","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","730","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("전문구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","281","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","86","18","195","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_value("채무불이행, 신용개설, 신용조회");
            obj.set_text("채무불이행, 신용개설, 신용조회");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0","48.04%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","149",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","365","149","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("신용등급");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","50","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("거래전문번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","50",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","365","50","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","83","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("전문응답");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","83",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","365","83","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("결과");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","116","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("평점결과");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","116",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","149","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("신용평점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_02","0","182","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("채무불이행건수");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_02","129","182",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01","365","182","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("신용개설건수");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01_00","0","215","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("신용조회건수");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01_00","129","215",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","365","215","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("총정보건수");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","163","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01",null,"158","8","82","368",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01","134","55","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","134","121","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01","134","154","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","134","88","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","708","220","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","342","220","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","708","187","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","342","187","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","134","187","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_format("#,##9");
            obj.set_value("0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","134","220","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_format("#,##9");
            obj.set_value("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01_00",null,"179","8","82","1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00","500","220","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_format("#,##9");
            obj.set_value("0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","500","187","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_format("#,##9");
            obj.set_value("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01_00","500","154","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","500","88","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01_00","500","55","212","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01_01",null,"158","3","82","385",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","274","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("채무불이행");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","299",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("41");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","359","249","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_01",null,"10","131","28","83",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("SafeKey 조회");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1274","1","19","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("19");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02",null,"10","79","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("인증");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1068","-245","20","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div00:20","63",null,"249","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("신용개설정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","Div00:20","Div01_00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("신용조회정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);
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
        this.registerScript("SD11680.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD11680.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
