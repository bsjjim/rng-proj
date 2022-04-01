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
            this.set_titletext("단말기A/S");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("A/S 요청기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","361","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("A/S 접수기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","321","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","701","18","84","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("단말기 S/N");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","661","0","40","85",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("개통기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","101","4","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","361","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1011","-2","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","1051","18","74","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("단말 CTN");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","1123","18","128","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","1253","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","111","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00_00","451","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","701","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","783","52","76","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_value("123허1234");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","861","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","888","52","123","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","783","18","201","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","986","18","25","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","451","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_value("2021012012");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","538","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00_01","111","52","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0",null,null,"794","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","215","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("A/S 목록");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\" \"/><Cell col=\"3\" text=\" \"/><Cell col=\"4\" text=\" \"/><Cell col=\"5\" text=\" \"/><Cell col=\"6\" text=\" \"/><Cell col=\"7\" text=\" \"/><Cell col=\"8\" text=\" \"/><Cell col=\"9\" text=\" \"/><Cell col=\"10\" text=\" \"/><Cell col=\"11\" text=\" \"/><Cell col=\"12\" text=\" \"/><Cell col=\"13\" text=\" \"/><Cell col=\"14\" text=\" \"/><Cell col=\"15\" text=\" \"/><Cell col=\"16\" text=\" \"/><Cell col=\"17\" text=\" \"/><Cell col=\"18\" text=\" \"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","240",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","160",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","80",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","368",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","320",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div00_00","Div00:20","DivSearch:0",null,"440","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("단말 S/N");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("A/S 요청일자");
            obj.set_cssclass("sta_DA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("A/S 요청사유");
            obj.set_cssclass("sta_DA_label_req");
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
            obj.set_text("A/S요청");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","62","24","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("A/S 요청자");
            obj.set_cssclass("sta_DA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","89","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","122","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","500","56","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","500","89","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","134","56","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","235",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","202","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_text("담당자");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","202",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","235","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_text("A/S 방식");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","268","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_text("현재단말 S/N");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","268",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","149","151","42","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","171","145","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_text("A/S등록");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","190","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"171","50","24","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("28");
            obj.set_text("등록");
            obj.set_cssclass("btn_Block");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","629","195","100","6",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("29");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","268","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("30");
            obj.set_text("교체단말 S/N");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","235","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("31");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","366","202","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("32");
            obj.set_text("A/S 접수일자");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","201",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_03","134","240","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","134","273","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","500","207","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","500","240","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("37");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","134","207","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01_00","500","273","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("39");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","301","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("40");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","301",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","134","306","128","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            obj.set_text("123456789");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","334","130","102",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("43");
            obj.set_text("A/S 결과");
            obj.set_cssclass("sta_DA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","334",null,"102","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_DA_data");
            this.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","370",null,"61","5",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("45");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"343","50","24","175",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("46");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"343","181","24","4",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("47");
            obj.set_text("Byte(3500Byte까지 입력가능)");
            obj.set_cssclass("sta_WF_gridCount");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_01_00","325","335","30","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("48");
            obj.set_text("35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_01","548","360","60","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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

            obj = new Div("div00_00_00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
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

            obj = new Button("Button00_00_00_00",null,"10","64","28","68",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
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

        };
        this.loadIncludeScript("PM50030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
