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
            this.set_titletext("적하보험 상세등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0","734","169",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","69",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","36","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","36",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","24","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","349","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("개설금액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","41","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","221","41","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","248","41","97","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"5","50","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","349","36","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("L/C번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","102","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("개설일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","102",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01","349","102","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("이자율");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","135","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("개설통화");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","135",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","483","41","246","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","74","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","483","74","246","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_format("#,##9");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","107","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","483","107","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_format("#,##9.##");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","543","107","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","563","107","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_format("#,##9.##");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","623","107","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","642","107","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_format("#,##9.##");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","702","107","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","134","140","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","0","div00:0","734",null,null,"48",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("결재내용");
            obj.set_cssclass("sta_WF_title1");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","349","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("부보회사");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","56","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"20","85","24","130",null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("2021012012");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00",null,"20","115","24","217",null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("홍길순");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","336",null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","78",null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("전표");
            obj.set_cssclass("btn_Block");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","74","24","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_text("전표취소");
            obj.set_cssclass("btn_Block");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","134","89","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_text("시작구간");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","117",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","349","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("도착구간");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_text("증권번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","150",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","349","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("가입일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","183",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","129","216",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","0","183","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_text("가입금");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","216","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_text("G/L계정");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","349","183","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_text("보험료");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","349","216","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","249","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_text("비고");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","249",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","483","56","42","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_text("3666");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","527","56","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","554","56","175","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","122","211","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_text("홍길순");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","483","122","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_text("홍길순");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","134","155","211","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_text("홍길순");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","483","155","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","188","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_format("#,##9");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","188","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","483","188","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_format("#,##9");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","603","188","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","221","211","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_form_Combo00_innerdataset = new nexacro.NormalDataset("div01_form_Combo00_innerdataset", obj);
            div01_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","483","221","246","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_form_Combo00_00_innerdataset = new nexacro.NormalDataset("div01_form_Combo00_00_innerdataset", obj);
            div01_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","134","254",null,"24","5",null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_text("홍길순");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div00_00","0","div01:0","734","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);
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
        this.registerScript("MM30110.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
        };
        this.loadIncludeScript("MM30110.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
