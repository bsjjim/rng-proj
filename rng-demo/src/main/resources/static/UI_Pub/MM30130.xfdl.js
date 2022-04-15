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
            this.set_titletext("L/G상세등록");
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

            obj = new Div("div00","0","0","734",null,null,"48",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
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

            obj = new Static("Static26_02_00","0","102","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("L/G번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","102",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","168","0","46","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","24","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","533","29","100","6",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","102","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("L/C번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","36","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00",null,"5","115","24","271",null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"5","85","24","184",null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"5","50","24","132",null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("전표");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"5","74","24","390",null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"5","74","24","54",null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("전표취소");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","135","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","135",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","135","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","168","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("이자율");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","168",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","201","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("개설금액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","201",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","366","201","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_03","0","234","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("L/G수수료");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_02","129","234",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_02","366","234","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("G/L계정");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_01","0","267","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","129","267",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00","0","300","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","300",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","333","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("지급처");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","333",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00","0","366","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("지급계좌");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","129","366",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00","0","399","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_text("비고(전표)");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","129","399",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","41","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","221","41","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","248","41","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","134","74","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","500","41","229","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","500","74","229","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","134","107","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","500","107","229","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","140","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","500","140","229","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","134","173","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_format("#,##9.##");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","194","173","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","214","173","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_format("#,##9.##");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","274","173","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","293","173","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_format("#,##9.##");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","353","173","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01","134","206","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01_00","221","206","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","500","206","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","239","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_format("#,##9");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","239","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","500","239","229","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_innerdataset", obj);
            div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","272","226","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_00_innerdataset", obj);
            div00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_02","134","305","595","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","134","338","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","178","338","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","205","338","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("66");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","134","371","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_format("##############");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","256","371","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("68");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","283","371","250","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("69");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_02","535","371","194","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("70");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_02_00","134","404","595","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("71");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"5","50","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("72");
            obj.set_text("조회");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","194","163","20","15",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("73");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","div00:0","734","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
        this.registerScript("MM30130.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
        };
        this.loadIncludeScript("MM30130.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
