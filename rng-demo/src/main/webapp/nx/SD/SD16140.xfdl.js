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
            this.set_titletext("통합 자산관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","199",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1429","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","60",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1414","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1379","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","75",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"199","40",null,null,null,null,null,this);
            obj.set_taborder("");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("관리지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","379","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("고객번호");
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

            obj = new Static("Static01_01","735","18","69","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1056","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("만료기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","379","52","83","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("관리담당자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","735","52","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("결제담당자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1056","52","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("입고기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","379","86","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("조회번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","735","86","44","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("품명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","471","86","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1056","86","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("처분기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","120","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("모델명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","379","120","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("제조번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","735","120","69","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("자산상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","1056","120","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("지연일수");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00","815","120","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","339","5","40","95",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","695","5","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","1016","8","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","154","95","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("취득가액포함");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","379","154","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("처분자산제외");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","103","18","10","166",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","113","18","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","157","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","184","18","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","113","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","172","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","199","52","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","113","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("2021012012");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","200","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","227","86","112","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","113","120","226","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","113","154","35","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","461","16","10","166",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","471","154","35","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01","471","120","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01_00","593","86","102","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","471","50","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","530","50","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","557","50","138","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","471","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("123406789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","553","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","580","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","805","17","10","136",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","815","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01","874","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","901","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","815","18","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            obj.set_text("2021012012");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","902","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00_00","815","86","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1113","8","10","146",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","1123","18","240","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("56");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00_00","1123","52","240","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("57");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00_00_00","1123","86","240","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("58");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","1123","120","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("59");
            obj.set_format("#,##9.##");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","1183","120","55","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("60");
            obj.set_text("일 이상");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","1297","120","55","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("61");
            obj.set_text("일 미만");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00","1237","120","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("62");
            obj.set_format("#,##9.##");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.38%","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);
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
        this.registerScript("SD16140.xfdl", function() {

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
        };
        this.loadIncludeScript("SD16140.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
