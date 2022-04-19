(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayOut_02_01");
            this.set_titletext("테이블 - 입력형/출력형");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00_00","0","470","734","170",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","3","345","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("테이블 Compact 유형");
            obj.set_cssclass("sta_WF_title1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03","0","36","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","36",null,"30","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02","376","36","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","39","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01","510","39","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","170","6","560","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("6");
            obj.set_text("※컨텐츠가 많은 주요 화면에서 스크롤 없이 데이터를 보고자 할 경우 사용 가능(협의후 예외적 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","65","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","65",null,"30","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00","376","65","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","68","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","510","68","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","94","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","94",null,"30","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00","376","94","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","134","97","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","510","97","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","123","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","123",null,"30","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00_00_00","376","123","130","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("Label");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","134","126","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00_00","510","126","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01","117","150","35","19",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_01","129","114","6","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01_00","298","54","20","19",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_text("2px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_01_00","264","62","31","3",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_border("1px dotted red, 0px none");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_01_00_00","124","66","31","3",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_border("1px dotted red, 0px none");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01_00_00","102","58","20","19",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("2px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div01","754","0","734","495",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","3","370","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("출력테이블 영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","35","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","35",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","376","35","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","68","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("대여지점");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","68",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","376","68","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("대여기간");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","101","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("배차시간");
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
            obj.set_text("배차장소");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","167","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("기사");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","167",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","40","140","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_value("정상");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","134","73","238","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_value("강남영업소");
            obj.set_readonly("true");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01","134","106","60","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_format("##:##");
            obj.set_value("1200");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00","510","73","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_format("####-##-## ~ ####-##-##");
            obj.set_value("2021102120211212");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00_00","510","40","219","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_format("#########");
            obj.set_value("123456789");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_01","0","134","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("예약모델");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","134",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","139","60","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","196","139","190","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","388","139","190","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","388","172","190","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01","196","172","190","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","134","172","60","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","435","0","60","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","125","6","285","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("26");
            obj.set_text("※ 출력전용영역에 Disable과 Readonly 혼용금지");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","34",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01","117","209","35","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","129","172","6","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00","180","209","35","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("2px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","193","173","3","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","0","285","242","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("대여지점");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01","241","285","242","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("배차시간");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00","482","285","252","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_text("기본요금");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","0","318",null,"34","492",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","241","318",null,"34","251",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","482","318",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","284",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","4","323","233","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_value("강남영업소");
            obj.set_readonly("true");
            obj.set_text("강남영업소");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01","246","323","232","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_format("##:##");
            obj.set_value("1200");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","487","323","221","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","708","323","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","190","256","295","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("43");
            obj.set_text("※ 좌측정렬 표준. 금액과 비율, 거리만 우측정렬");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","253","195","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_text("상단헤더형의 텍스트 정렬");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01","694","365","35","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_text("8px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_01_00","724","274","10","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01_00","697","255","35","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_text("8px");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_Guide_txt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","60","45","10","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","70","45","14","14",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_tooltiptext("도움말 툴팁입니다.");
            obj.set_cssclass("sta_WF_help");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","651","105","60","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_format("#,###.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01","707","105","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_00","623","142","100","19",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_text("readonly일때 3px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_00","711","117","3","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_border("0px none, 1px dotted red");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00","729","33","4","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00","725","103","8","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("55");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","734","451",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","267","130","173",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("메시지");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","267",null,"173","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","303","596","132",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"275","181","24","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("Byte(3500Byte까지 입력가능)");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","3","345","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("입력 테이블 영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03","0","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","36",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02","376","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01","0","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("운행구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02","129","69",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","376","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("지역");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","102","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("운행장소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01","129","102",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","376","102","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01","0","135","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("기본요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00","0","168","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("대여료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_00","0","201","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("시간초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_00","0","234","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("거리초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","135",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00","376","135","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("호텔수수료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00","129","168",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","376","168","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("호텔할인율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_00","129","201",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00","376","201","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("기준시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_00_00","129","234",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00","376","234","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("기준거리");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","41","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","74","141","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","279","74","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("고객별 약정");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","107","238","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","135","140","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","255","140","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","135","173","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","255","173","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","135","206","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","255","206","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("원/시간");
            obj.set_cssclass("sta_WF_unit");
            obj.set_padding("0px 0px 0px 6px");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","135","239","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","255","239","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("원/1Km");
            obj.set_cssclass("sta_WF_unit");
            obj.set_padding("0px 0px 0px 6px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","510","41","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_value("010-1234-1234");
            obj.set_enable("false");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","510","74","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","510","107","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","510","140","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_format("#,###.##");
            obj.set_value("30");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","570","140","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","510","173","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_format("#,###.##");
            obj.set_value("15");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","570","173","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00","510","206","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_value("16");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","570","206","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00","608","206","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_value("16");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","668","206","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","598","203","10","75",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_01","510","239","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_value("16");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","570","239","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00","608","239","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_value("16");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","668","239","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01","117","280","35","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","129","243","6","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00","570","208","7","75",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","254","245","7","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00","241","281","35","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("7px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_00","275","79","4","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_00","259","111","35","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("4px");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_Guide_txt");
            obj.set_background("#ffffff");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","130","6","499","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("57");
            obj.set_text("※입력 테이블 영역에 입력불가 항목은 Disable 처리한다. Disable과 Readonly 혼용금지");
            obj.set_cssclass("sta_txt_desc");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_01","565","0","60","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"275","50","24","175",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_01","613","293","60","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_01_00","325","268","30","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_text("35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","620","41","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_text("(디스크립션)");
            obj.set_cssclass("sta_txt_desc");
            obj.set_padding("0px 0px 0px 6px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00","620","48","7","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","608","140","55","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_text("소타이틀");
            obj.set_cssclass("sta_WF_singleLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","662","136","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00","672","140","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","588","138","20","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","774","553","421","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<fc v=\"red\">(입력 테이블 영역)</fc>\r\n입력테이블 영역에서 입력 불가 항목은 Disable 처리");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-27","40",null,"0","27",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","754","504","615","374",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","99",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","70",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","41","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","41",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","70","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","99","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("투입일시");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","170","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("높이가 좁은 화면 유형");
            obj.set_cssclass("sta_WF_title2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","29","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","306","99","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("투입시 최초Km");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","306","70","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","306","41","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","128",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","128","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("반납일시");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","157","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("요청채널구분");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","157",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","306","157","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("제휴채널");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","306","128","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("반납시 최종Km");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_02","129","257",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","228","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","228",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_03","0","257","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("위약금구분");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","286","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("월대여료*");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","286",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","435","187","100","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","197","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("상세계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","-4","216","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","508","215","100","12",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","306","286","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("월대여료(공급가)");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","306","257","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("위약금률");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","306","228","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_text("인수가*");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","315",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","315","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_text("실납월대여료");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","344","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("잔가유형");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","344",null,"30","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","306","344","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("잔가조정확인");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","306","315","130","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_text("선수금");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","227",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"197","70","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_text("[*VAT포함]");
            obj.set_cssclass("sta_WF_gridUnit");
            obj.set_textAlign("right");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","44","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_value("정상");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","134","73","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_value("2021017017");
            obj.set_readonly("true");
            obj.set_text("2021017017");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00","134","131","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_value("2021-02-02 (10:00:00)");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 (10:00:00)");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01","134","160","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","441","44","166","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","441","73","166","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_value("신규계약");
            obj.set_readonly("true");
            obj.set_text("신규계약");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00","441","160","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_01","134","347","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.set_value("표준잔가");
            obj.set_text("표준잔가");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_02","134","260","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_value("고정");
            obj.set_readonly("true");
            obj.set_text("고정");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03","134","231","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_value("월간단기 개인(112)");
            obj.set_readonly("true");
            obj.set_text("월간단기 개인(112)");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_01_00_00","441","347","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_value("없음");
            obj.set_text("없음");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","441","231","166","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("50");
            obj.set_value("만기반납");
            obj.set_readonly("true");
            obj.set_text("만기반납");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","441","131","143","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_value("7");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","580","131","35","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("52");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01","604","100","8","70",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00","584","105","3","45",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00","134","289","66","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("55");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00","196","289","25","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("56");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00","221","289","53","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("57");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00","270","289","30","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("58");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_01","134","318","152","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_00","282","318","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01","298","279","8","70",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00","286","309","3","45",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","441","260","149","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_format("#,###");
            obj.set_value("25");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01","587","260","25","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_02","604","258","8","70",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_02","441","289","65","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("66");
            obj.set_format("#,###");
            obj.set_value("690000");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_01","501","289","35","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00","526","289","54","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("68");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01","576","289","30","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("69");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00_00_00","441","318","139","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("70");
            obj.set_format("#,###.##");
            obj.set_value("730.57");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00_00_01_00","576","318","30","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("71");
            obj.set_text("달러");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01_00",null,"191","8","125","1",null,null,null,null,null,this.div00.form);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00","200","294","3","45",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("73");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00_00","211","289","10","20",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("74");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00_00_00","134","102","167","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("75");
            obj.set_value("2021-02-02 (10:00:00)");
            obj.set_readonly("true");
            obj.set_text("2021-02-02 (10:00:00)");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","360","0","100","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("76");
            obj.set_text("예외 h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
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
            this.Div01.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("LayOut_02_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
