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
            this.set_titletext("SMS 개인양식");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","53","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("송신자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","342","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("송신번호");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","302","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","65","4","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","410","18","142","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","74","18","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_value("P12345");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","133","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","160","18","142","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_value("홍길순");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","63",null,null,"794","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","215","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"351\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","80",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00.addChild(obj.name, obj);

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

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","29","0",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01",null,"63","734",null,"40","48",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("발송 정보");
            obj.set_cssclass("sta_WF_title1");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","367","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","367","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","367","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","150",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","183","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","183",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","367","183","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","367","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","216",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","216","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","249","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","249",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","367","249","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","367","216","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","282",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","282","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","315","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","315",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","367","315","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","367","282","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","348",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00_00","0","348","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","381","130",null,null,"0",null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_text("메시지");
            obj.set_cssclass("sta_DA_label_req");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","381",null,null,"0","0",null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","367","348","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","86","24","54",null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_text("고객초기화");
            obj.set_cssclass("btn_Block");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","221","56","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","248","56","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","501","56","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","134","89","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","221","89","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","248","89","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","501","89","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("44");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","134","155","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("45");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00","221","155","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","248","155","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("47");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","501","155","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("48");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","134","122","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("49");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01","221","122","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","248","122","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("51");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01","501","122","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("52");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","134","221","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("53");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00_00","221","221","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("54");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","248","221","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("55");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","501","221","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("56");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","134","188","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("57");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01_00","221","188","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("58");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01_00","248","188","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("59");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","501","188","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("60");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00_00","134","353","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("61");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00_00_00","221","353","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("62");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00","248","353","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("63");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","501","353","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("64");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00","134","320","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("65");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01_00_00","221","320","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("66");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01_00_00","248","320","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("67");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","501","320","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("68");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_01","501","287","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("69");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","501","254","229","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("70");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01_01","248","254","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("71");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","134","254","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("72");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01_01","221","254","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("73");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00_01","221","287","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("74");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_01","134","287","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("75");
            obj.set_text("1234067890");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01","248","287","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("76");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_01_00","133","382","30","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("77");
            obj.set_text("35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"389","50","24","143",null,null,null,null,null,this.div01.form);
            obj.set_taborder("78");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"389","141","24","4",null,null,null,null,null,this.div01.form);
            obj.set_taborder("79");
            obj.set_text("자(1200자까지 입력가능)");
            obj.set_cssclass("sta_WF_gridCount");
            this.div01.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","417","596",null,null,"5",null,null,null,null,this.div01.form);
            obj.set_taborder("80");
            obj.set_cssclass("input_req");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","50","24","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("81");
            obj.set_text("전송");
            obj.set_cssclass("btn_Block");
            this.div01.addChild(obj.name, obj);
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
        this.loadIncludeScript("SD90771.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
