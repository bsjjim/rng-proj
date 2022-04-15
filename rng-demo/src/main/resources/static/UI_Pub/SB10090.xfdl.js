(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_04");
            this.set_titletext("(세금)계산서 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column19\"/><Col id=\"Column20\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"165","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","17","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","428","18","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("계산서유형");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1106","43","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","133","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","428","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","521","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("input_select");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","603","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","630","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_select");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("발행기간");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","537","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","747","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","128","86","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","172","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","199","86","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","902","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("통합청구번호");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","1146","86","111","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("(세금)계산서번호");
            obj.set_cssclass("sta_SA_label_select");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","995","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","1082","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","1261","86","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("input_select");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","902","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","995","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onchanged").set("Common_onchanged");
            var divSearch_form_cmb01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_innerdataset", obj);
            divSearch_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","132","110","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01","428","86","64","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01_00","20","120","97","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("국세청전송여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","388","17","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","428","120","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("작성사원");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","902","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("발행방법");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_01","995","18","70","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onchanged").set("Common_onchanged");
            var divSearch_form_cmb01_01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_01_innerdataset", obj);
            divSearch_form_cmb01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","862","17","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod01","128","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("input_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00_00","521","18","95","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_00_00_innerdataset", obj);
            divSearch_form_cmb01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_00","1146","18","93","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("ETAX승인번호");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02","1261","18","95","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","248","52","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","128","52","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_format("#,###");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","268","52","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_format("#,###");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","20","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_02","1146","52","99","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("세금계산서상태");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_02","1261","52","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onchanged").set("Common_onchanged");
            var divSearch_form_cmb01_02_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_02_innerdataset", obj);
            divSearch_form_cmb01_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_02_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","521","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_cssclass("input_select");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","608","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","635","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_cssclass("input_select");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00_00_00","128","120","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_00_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_00_00_00_innerdataset", obj);
            divSearch_form_cmb01_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_00_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","521","120","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","580","120","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","607","120","143","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","128","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("(세금)계산서내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","167","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"세금계산서상태\"/><Cell col=\"3\" text=\"결재상태\"/><Cell col=\"4\" text=\"계약번호\"/><Cell col=\"5\" text=\"계산서유형\"/><Cell col=\"6\" text=\"발행방법\"/><Cell col=\"7\" text=\"(세금)계산서번호\" cssclass=\"cell_fix\"/><Cell col=\"8\" text=\"(세금)계산서원본\"/><Cell col=\"9\" text=\"발행일자\"/><Cell col=\"10\" text=\"사업자(주민)번호\"/><Cell col=\"11\" text=\"통합청구번호\"/><Cell col=\"12\" text=\"결제고객번호\"/><Cell col=\"13\" text=\"공급받는자거래처\"/><Cell col=\"14\" text=\"전자세금계산서승인번호\"/><Cell col=\"15\" text=\"승인취소\"/><Cell col=\"16\" text=\"합계금액\"/><Cell col=\"17\" text=\"공급가액\"/><Cell col=\"18\" text=\"부가세\"/><Cell col=\"19\" text=\"결제담당자명\"/><Cell col=\"20\" text=\"결제담당자연락처\"/><Cell col=\"21\" text=\"결제담당자이메일\"/><Cell col=\"22\" text=\"청구구분\"/><Cell col=\"23\" text=\"품목\"/><Cell col=\"24\" text=\"대표자명\"/><Cell col=\"25\" text=\"청구주소\"/><Cell col=\"26\" text=\"작성사원\"/><Cell col=\"27\" text=\"작성부서\"/><Cell col=\"28\" text=\"계약지점\"/><Cell col=\"29\" text=\"영수/청구구분\"/><Cell col=\"30\" text=\"종사업장번호\"/><Cell col=\"31\" text=\"종사업장명\"/><Cell col=\"32\" text=\"청구서번호\"/><Cell col=\"33\" text=\"대여료(VAT포함)\"/><Cell col=\"34\" text=\"세무로전송결과\"/><Cell col=\"35\" text=\"국세청전송결과\"/><Cell col=\"36\" text=\"세금계산서발행일시\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\" cssclass=\"cell_fix\"/><Cell col=\"8\" text=\"bind:Column9\"/><Cell col=\"9\" text=\"bind:Column10\"/><Cell col=\"10\" text=\"bind:Column11\"/><Cell col=\"11\" text=\"bind:Column12\"/><Cell col=\"12\" text=\"bind:Column13\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:Column14\"/><Cell col=\"14\" text=\"bind:Column14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"6\" text=\"합계\" textAlign=\"center\" cssclass=\"cell_fix\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\" text=\"0\" displaytype=\"number\"/><Cell col=\"17\" text=\"0\" displaytype=\"number\"/><Cell col=\"18\" text=\"0\" displaytype=\"number\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\" text=\"0\" displaytype=\"number\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","123","0","10","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","122",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","92",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00_00",null,"0","20","50","567",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01",null,"10","50","20","122",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00_00",null,"20","139","24","435",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_text("(세금)계산서취소일자");
            obj.set_cssclass("sta_SA_label_req");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00",null,"20","120","24","314",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","50","24","906",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("적용");
            obj.set_cssclass("btn_Custom");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,"20","96","24","1019",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("14");
            obj.set_text("영수/청구수정");
            obj.set_cssclass("sta_SA_label_req");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("cmb01_00",null,"20","60","24","958",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var divGridWapper_form_cmb01_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_cmb01_00_innerdataset", obj);
            divGridWapper_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00_00_00",null,"0","20","50","886",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"20","66","24","827",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("18");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_SA_label_req");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00",null,"20","240","24","587",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("19");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("cmb01_00_00",null,"20","140","24","172",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var divGridWapper_form_cmb01_00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_cmb01_00_00_innerdataset", obj);
            divGridWapper_form_cmb01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_cmb01_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","20","227","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("21");
            obj.set_text("※ 선납계약은 금액이 상이할 수 있습니다.");
            obj.set_cssclass("sta_txt_desc");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","0","0","50","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","0",null,"50","10",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("변경");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.38%","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSearch.form.Edit00_00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.divSearch.form.Edit00_00_00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.divSearch.form.Static00_00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Edit00_00_02.addEventHandler("onchanged",this.Common_onchanged,this);
            this.divGridWapper.form.Static00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divGridWapper.form.Static00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SB10090.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
