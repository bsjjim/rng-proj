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
            this.set_titletext("단말기조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("단말기상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","354","18","83","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("단말기 TYPE");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","314","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","694","18","84","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("단말기 S/N");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","654","0","40","110",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("단말기 CTN");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","94","4","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","354","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("장착기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","694","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("개통기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1004","-2","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","1044","18","74","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("단말 IMEI");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","1044","52","74","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","1123","18","128","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","1253","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","86","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","104","86","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","104","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("A/S교체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","104","52","94","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","200","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00_00","444","52","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","694","86","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","444","86","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_value("123406789");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","526","86","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","553","86","101","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","354","86","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","776","86","76","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_value("123허1234");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","854","86","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","881","86","123","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","443","18","86","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","776","18","201","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","979","18","25","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","1123","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_value("2021012012");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","1210","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","1044","86","74","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","1123","86","111","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00_00_00","776","52","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0","48.04%",null,null,"397",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","215","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("단말기 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"생산일자\"/><Cell col=\"3\" text=\"입고일자\"/><Cell col=\"4\" text=\"물류장소\"/><Cell col=\"5\" text=\"단말 TYPE\"/><Cell col=\"6\" text=\"단말 S/N\"/><Cell col=\"7\" text=\"단말 IMEI\"/><Cell col=\"8\" text=\"단말 CTN\"/><Cell col=\"9\" text=\"단말 Ver\"/><Cell col=\"10\" text=\"약정기간\"/><Cell col=\"11\" text=\"개통일자\"/><Cell col=\"12\" text=\"계약종료일자\"/><Cell col=\"13\" text=\"잔여약정기간\"/><Cell col=\"14\" text=\"단말기상태\"/><Cell col=\"15\" text=\"장착여부\"/><Cell col=\"16\" text=\"장착/등록지\"/><Cell col=\"17\" text=\"장착일시\"/><Cell col=\"18\" text=\"장착자명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div00_00","Div00:20","DivSearch:0",null,"217","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","149","0","42","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","145","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("계약관리");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("장기계약관리");
            obj.set_cssclass("btn_Block");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","117","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","150",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","150","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_text("장착등록지");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","183","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("위치정보수집");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","183",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","150","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","89","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","122","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","500","56","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","500","89","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","134","188","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_text("cmb00");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","134","56","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01","500","122","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","134","155","63","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","199","155","163","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","500","155","210","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","734","147","20","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","Div00:-10","DivSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,"48.04%","349",null,"48",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","108","24","210",null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("단말기 A/S조회");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("단말기 TYPE");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("단말 IMEI");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("단말 Ver");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","149","0","42","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","145","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("단말기 등록/관리");
            obj.set_cssclass("sta_WF_title2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("탈거등록");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","117","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("생산일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("단말 CTN");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("단말 S/N");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","56","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("cmb00");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","86","24","447",null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("단말기리셋");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","121","24","322",null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("위치정보수집 Y/N");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00",null,"20","14","50","429",null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00_00",null,"20","14","50","304",null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","50","24","156",null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("수정");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_02",null,"20","74","24","78",null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("계약해지");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","150",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","150","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","183","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("단말기상태");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","183",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","183","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("개통종료일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","150","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("물류장소");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","216",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","216","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_text("약정기간");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","249","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_text("잔여약정기간");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","249",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","366","249","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_text("A/S여부");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","366","216","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("개통일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","282",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00_00","0","282","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("장착일시");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","315","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_text("커넥트핀정보");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","315",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","366","282","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_text("게이트웨이유무");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","89","128","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","122","128","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00","134","155","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","500","122","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","500","56","128","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","500","89","128","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","500","155","128","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00","500","188","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("cal00_00_00_00","500","221","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","500","254","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_text("cmb00");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","500","287","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_text("cmb00");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","134","188","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_text("cmb00");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","134","221","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","194","221","30","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","194","254","30","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","134","254","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            this.div00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","134","287","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","134","320","128","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","div00:20","div00_00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","215","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("단말기 이력");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"변경구분\"/><Cell col=\"2\" text=\"변경항목\"/><Cell col=\"3\" text=\"변경일자\"/><Cell col=\"4\" text=\"변경 전 내용\"/><Cell col=\"5\" text=\"변경 후 내용\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정부서\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div00_00_00","0","div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","88","28","0",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("정책관리");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","112","28","92",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("단말해지관리");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00_00.addChild(obj.name, obj);
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
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("PM50010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
