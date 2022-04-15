(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("MC고객등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(724,346);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"계약상태\" type=\"STRING\" size=\"256\"/><Column id=\"계약번호\" type=\"STRING\" size=\"256\"/><Column id=\"예약일\" type=\"STRING\" size=\"256\"/><Column id=\"고객번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"예약모델명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"계약상태\">취소</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김유리</Col><Col id=\"예약모델명\">LOTZE (L) 2.0</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"계약상태\">반납</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">홍길동</Col><Col id=\"예약모델명\">K5 (L) 2.0 렌터카 DELUXE</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">임동주</Col><Col id=\"예약모델명\">STAREX (D) 2.6 12인승</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김지유</Col><Col id=\"예약모델명\">NEW SM5 (L) 2.0</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"계약상태\">보증대차</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">아무개</Col><Col id=\"예약모델명\">YF SONATA (L) 2.0 렌터카 DELUXE</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"계약상태\">취소</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김순이</Col><Col id=\"예약모델명\">PRIDE (G) 1.4 5DOOR 디럭스</Col></Row><Row><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김유리</Col><Col id=\"예약모델명\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"No\">7</Col><Col id=\"계약상태\">반납</Col><Col id=\"계약번호\">2122002203</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">홍길동</Col><Col id=\"예약모델명\">K5 (L) 2.0 렌터카 DELUXE</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"계약상태\">일반</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">임동주</Col><Col id=\"예약모델명\">SPORTAGE R (D) 2.0 2WD PRESTIGE</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"계약상태\">반납</Col><Col id=\"계약번호\">2122002203</Col><Col id=\"예약일\">2021-12-01</Col><Col id=\"고객번호\">113383560</Col><Col id=\"고객명\">김순</Col><Col id=\"예약모델명\">LOTZE (L) 2.0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSel","572","298","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","640","298","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00",null,"20","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","590","283","80","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","20","684","263",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","1","360","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("MC고객등록");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","31","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("방송일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","31",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","335","31","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("방송회차");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","64","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("홈쇼핑채널");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","64",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","335","64","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("방송사고객번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","97","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("주문번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","97",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","335","97","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","469","102","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_cssclass("input_req");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","30",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","0","20","100","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","130","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("전화번호1");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","130",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","335","130","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("전화번호2");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","163","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("지역명");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","129","163",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","335","163","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("MC유효기간");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","196","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","196",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","229","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("고객요청사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00","129","229",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","36","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","469","36","210","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","134","69","135","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("input_req");
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","469","69","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("#########");
            obj.set_maskchar(" ");
            obj.set_value("123456789");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","134","102","197","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("##############-#####");
            obj.set_maskchar(" ");
            obj.set_value("123456789123456789123");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","134","135","104","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","469","135","104","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","134","168","135","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("input_req");
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","469","168","210","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","201","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","186","201","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","213","201","242","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","457","201","222","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","134","234","545","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",724,346,this,function(p){});
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
            this.btnSel.addEventHandler("onclick",this.btnSel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Div00.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("SD14010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
