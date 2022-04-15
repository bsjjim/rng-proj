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
            this.set_titletext("테이블 - 데이터 입력 표준");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01","0","0","734","798",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_03_00_00_01","149","696",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","0","134","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_text("년/월/일/요일");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01","149","134",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03","149","35",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","101","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("년/월/일");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","149","101",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","35","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("년도");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","239","40","43","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_value("2023");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","154","40","65","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","266","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("기간(년/월/일)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","149","266",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","154","106","105","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","233","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("기간(년/월)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","149","233",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","68","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("년/월");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","149","68",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","80","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("날짜");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","52","6","485","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("14");
            obj.set_text("※ 자릿수가 정해져 있는 컴포넌트는 컴포넌트 너비를 준수하여 화면에 그림.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","34",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","219","40","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("/");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","154","139","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_value("20221001");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","401","135","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("개인/법인정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00","0","465","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","154","470","110","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00","149","465",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","154","470","95","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_value("1231212345");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01","0","498","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00","149","498",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00","0","531","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00","149","531",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","154","503","112","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_maskchar(" ");
            obj.set_value("1234561234567");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00_00","154","536","112","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_maskchar(" ");
            obj.set_value("1234561234567");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00","0","564","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("전화번호/팩스번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00","149","564",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00","0","432","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_01","149","432",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","154","437","80","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_value("123406789");
            obj.set_text("123406789");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","236","437","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_Comp_src");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","263","437","115","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00_00","0","762","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_00","149","762",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","154","767","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_value("12345");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","206","767","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_Comp_src");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","233","767","242","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","477","767","252","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("P12345");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","431",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","703","381","25","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","200","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_text("기간(년도)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","149","200",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","154","205","65","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","219","205","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","239","205","65","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","167","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_text("년/월/일/요일/시간");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","149","167",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","314","106","233","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_text("dateformat = yyyy-MM-dd ");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00","315","139","117","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_text("Calendar 기본값");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","-417","172","165","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("55");
            obj.set_text("※ 자릿수 확인필요");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","327","205","43","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("56");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","389","205","43","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("57");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","369","205","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","306","205","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("59");
            obj.set_text("/");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_01","0","299","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("60");
            obj.set_text("기간(년/월/일/요일)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_01","149","299",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00_01","0","597","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("62");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_03","149","597",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","134","391","578","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("64");
            obj.set_text("※입력양식의 Label 명을 준수한다. 예)휴대전화번호 O, 휴대전화 X, \r\n    입력포맷 중 데이터 및 마스킹처리는 입력 예시로 개발표준을 따른다.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00_01_00","0","630","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("65");
            obj.set_text("면허번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_03_00","149","630",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00_01_00_00","0","663","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("67");
            obj.set_text("여권번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_03_00_00","149","663",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00_01_00_00_00","0","729","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("69");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_03_00_00_00","149","729",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_DA_data");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00","258","635","95","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("71");
            obj.set_format("##-##{####}-{#}#");
            obj.set_value("1212345612");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00","154","635","110","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("72");
            obj.set_format("##-######-##");
            obj.set_value("1212345612");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_00","154","668","82","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("73");
            obj.set_format("A########");
            obj.set_value("M12345678");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_01_00_00_01_00_00_01","0","696","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("74");
            obj.set_text("계좌번호/계좌코드");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","154","701","150","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("76");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02","329","40","49","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("77");
            obj.set_text("65/43");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_00","254","74","49","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("78");
            obj.set_text("90");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_00_00","265","106","49","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("79");
            obj.set_text("105");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_00_00_00","280","139","49","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("80");
            obj.set_text("120");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_00_00_00_00","320","172","49","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("81");
            obj.set_text("155");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01","468","205","99","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("82");
            obj.set_text("65/43(간격20)");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00","342","240","99","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("83");
            obj.set_text("170");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00","373","270","99","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("84");
            obj.set_text("210");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01","406","437","162","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("85");
            obj.set_text("80/115(입력필드만 표기)");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00","269","469","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("86");
            obj.set_text("95");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00","281","502","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("87");
            obj.set_text("112");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00","281","536","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("88");
            obj.set_text("112");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00","269","570","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("89");
            obj.set_text("104");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00","269","600","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("90");
            obj.set_text("104");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00_00","386","635","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("91");
            obj.set_text("95");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00_00_00","254","668","46","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("92");
            obj.set_text("82");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","332","150","49",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("93");
            obj.set_text("기간\r\n(년/월/일/요일/시간)");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_01_01","154","337","361","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("94");
            obj.set_text("컴포넌트 확인 필요");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_00","149","332",null,"49","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00","404","303","99","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("96");
            obj.set_text("240");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00","474","345","99","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("97");
            obj.set_text("310");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00_00_00_00","272","700","26","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("98");
            obj.set_text("150");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","439","568","84","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("99");
            obj.set_text("필요 시");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","485","569","55","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("100");
            obj.set_text("010");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","542","569","42","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("101");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00","586","569","42","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("102");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00","439","601","84","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("103");
            obj.set_text("필요 시");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","485","602","55","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("104");
            obj.set_text("010");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_01","542","602","42","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("105");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00_00","586","602","42","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("106");
            obj.set_value("2021");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_01","654","571","56","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("107");
            obj.set_text("50/56/56");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_01_00","654","604","56","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("108");
            obj.set_text("50/56/56");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","154","734","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("109");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01","274","734","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("110");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","299","734","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("111");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","421","734","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("112");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00_00_00_00_00","547","734","86","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("113");
            obj.set_text("120/120/120");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","329","701","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("114");
            obj.set_format("##############");
            obj.set_value("79005691157411");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","451","701","24","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("115");
            obj.set_cssclass("btn_Comp_src");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","478","701","250","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("116");
            obj.set_value("농협은행 79005691157411 가상계좌");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00_00_00_00_01","673","681","61","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("117");
            obj.set_text("120/250");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00","154","602","104","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("118");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","154","569","104","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("119");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_01_00_00_00_00_00_00_00_01","126","768","26","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("120");
            obj.set_text("50");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00","282","39","20","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("121");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","154","73","90","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("122");
            this.Div01.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","154","172","155","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("123");
            this.Div01.addChild(obj.name, obj);

            obj = new CalPeriodMonth("CalPeriodMonth00","154","238","170","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("124");
            this.Div01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","154","271","210","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("125");
            this.Div01.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","154","304","240","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("126");
            this.Div01.addChild(obj.name, obj);

            obj = new CalPeriodTime("CalPeriodTime00","154","344","310","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("127");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","451","172","167","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("128");
            obj.set_readonly("true");
            obj.set_format("9999-99-99 (99:99:99)");
            obj.set_value("2022-12-12 (22:22:22)");
            obj.set_type("string");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00_00","390","171","67","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("129");
            obj.set_text("readonly");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00_00_00","623","173","97","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("130");
            obj.set_text("시간에 괄호표시");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","528","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","754","0",null,"744","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_01_00","129","102",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00","149","380",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","149","220",null,"62","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","220","150","62",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","154","225","76","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_value("123허1234");
            obj.set_text("123허1234");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","232","225","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","149","281",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","281","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("사원번호, 기사코드");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","213","286","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","154","286","57","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","240","286","115","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","347","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","149","347",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","154","352","85","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("12");
            obj.set_value("2021012012");
            obj.set_text("2021012012");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00","241","352","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00","149","314",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","198","319","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","154","319","42","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("16");
            obj.set_value("3666");
            obj.set_text("3666");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","0","314","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("17");
            obj.set_text("지점코드");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","225","319","155","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("18");
            obj.set_value("서울중앙MOT 강북 Part");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00","0","380","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("19");
            obj.set_text("VOC번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","154","385","100","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("20");
            obj.set_value("201601011234");
            obj.set_text("201601011234");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_01","256","385","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","300","225","85","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("23");
            obj.set_text("10허4048");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","387","225","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button01","415","225","75","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("25");
            obj.set_text("다중선택");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00","0","413","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("26");
            obj.set_text("설비번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00","149","413",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01","154","418","72","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("22");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            obj.set_value("12345678");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","190","171","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("28");
            obj.set_text("코드/명");
            obj.set_cssclass("sta_WF_title1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","154","253","76","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("29");
            obj.set_value("123허1234");
            obj.set_text("123허1234");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","232","253","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","259","253","180","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("31");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","219",null,"2","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_01","129","69",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_02","129","36",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","5","135","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("36");
            obj.set_text("금액, 비율, 수치");
            obj.set_cssclass("sta_WF_title1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","528","0","100","35",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("37");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01_00","0","102","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("38");
            obj.set_text("통화");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01","0","69","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("39");
            obj.set_text("비율");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","36","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("40");
            obj.set_text("금액");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","41","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("41");
            obj.set_format("#,##9");
            obj.set_value("150000");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","134","74","60","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("42");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","194","74","20","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("43");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","41","20","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","299","41","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("45");
            obj.set_format("#,##9");
            obj.set_value("123123123123");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","419","41","20","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("46");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_01_00_00","129","135",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01_00_00","0","135","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("48");
            obj.set_text("거리");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","194","140","45","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("49");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","134","140","60","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("50");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","134","107","65","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_00_form_Combo00_01_innerdataset = new nexacro.NormalDataset("Div01_00_form_Combo00_01_innerdataset", obj);
            Div01_00_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">KRW</Col></Row><Row><Col id=\"datacolumn\">USD</Col></Row><Row><Col id=\"datacolumn\">JPY</Col></Row></Rows>");
            obj.set_innerdataset(Div01_00_form_Combo00_01_innerdataset);
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","234","107","135","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_00_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("Div01_00_form_Combo00_00_01_innerdataset", obj);
            Div01_00_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">KRW - 대한민국</Col></Row><Row><Col id=\"datacolumn\">USD - 미국</Col></Row><Row><Col id=\"datacolumn\">JPY - 일본</Col></Row></Rows>");
            obj.set_innerdataset(Div01_00_form_Combo00_00_01_innerdataset);
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","387","107","345","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("53");
            obj.set_text("※ 통화코드와 국가명 병기 시 가장 긴 텍스트에 콤보 너비 맞춤");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","400","125","195","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("54");
            obj.set_text("선택했을 때 국가명이 잘리면 안됨.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","35",null,"2","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00","207","106","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("56");
            obj.set_text("65");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00","458","252","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("57");
            obj.set_text("76/180");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00","370","286","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("58");
            obj.set_text("57/115");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00","416","353","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("59");
            obj.set_text("85/115");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00_00","250","418","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("60");
            obj.set_text("72");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_01","453","41","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("61");
            obj.set_text("120");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_01_00","240","74","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("62");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_01_00_00","231","140","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("63");
            obj.set_text("60");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","497","41","152","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("64");
            obj.set_text("※ 금액은 최대 100억기준");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00","407","74","317","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("65");
            obj.set_text("※ 비율은 소수점 자리가 있을 경우 소수점 2자리까지 표시");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00","0","446","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("66");
            obj.set_text("부서");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00","149","446",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","191","451","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("68");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","218","451","155","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("69");
            obj.set_value("전략기획팀");
            obj.set_text("전략기획팀");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","154","451","35","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("70");
            obj.set_value("A06");
            obj.set_text("A06");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00_00","0","512","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("71");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00","149","512",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","242","517","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("73");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","269","517","155","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("74");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","154","517","86","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("75");
            obj.set_value("0123456789");
            obj.set_text("0123456789");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00_00_00","0","545","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("76");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00","149","545",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01_00_00","468","550","142","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("78");
            obj.set_text("※ 자릿수 확인필요");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00","154","550","80","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("79");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00_00_00","448","517","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("80");
            obj.set_text("86/155");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","268","352","115","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("81");
            obj.set_text("홍길순");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_02","388","453","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("82");
            obj.set_text("35/155");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00_01","294","384","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("83");
            obj.set_text("100");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_02_00","397","319","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("84");
            obj.set_text("42/155");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00_00_00_00","0","578","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("85");
            obj.set_text("프로모션코드");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00","154","583","80","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("86");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_00","149","578",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","154","583","86","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("88");
            obj.set_value("21YHOTY");
            obj.set_text("21YHOTY");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","241","583","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("89");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","268","583","155","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("90");
            obj.set_text("홍길순");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01_00_00_00","493","584","212","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("91");
            obj.set_text("※ 임시너비(6~7글자의 한글숫자 혼용)");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00_00_00_00","430","584","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("92");
            obj.set_text("86/155");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00_01","0","479","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("93");
            obj.set_text("SP번호");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_01","149","479",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","236","484","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("95");
            obj.set_cssclass("btn_Comp_src");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","263","484","115","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("96");
            obj.set_value("서진아이앤디(주)");
            obj.set_text("서진아이앤디(주)");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","154","484","80","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("97");
            obj.set_value("123456789");
            obj.set_text("123456789");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_02_01","388","486","49","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("98");
            obj.set_text("80/115");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01_00_00_01","436","286","142","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("99");
            obj.set_text("(5~6자리)");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01_00_00_01_00","458","320","62","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("100");
            obj.set_text("(3~6자리)");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00_00_00_00_00","0","611","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("101");
            obj.set_text("부품코드");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00","154","616","80","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("102");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_00_00","149","611",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("103");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","154","616","57","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("104");
            obj.set_value("401001");
            obj.set_text("401001");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","213","616","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("105");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","240","616","155","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("106");
            obj.set_value("가솔린오일 GS KIXX G1 5W-30 (4L*4EA)");
            obj.set_text("가솔린오일 GS KIXX G1 5W-30 (4L*4EA)");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00_00_00_00_00","428","617","74","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("107");
            obj.set_text("57/155 이상");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00_00_00_00_00_00","0","644","150","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("108");
            obj.set_text("모델코드(차량)");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_00","154","649","80","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("109");
            obj.set_text("P12345");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_00_00_00","149","644",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("110");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","154","649","50","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("111");
            obj.set_value("CL010");
            obj.set_text("CL010");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","206","649","24","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("112");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","233","649","155","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("113");
            obj.set_value("크라이슬러 크로스파이어");
            obj.set_text("크라이슬러 크로스파이어");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_02_01_00_00_00_00_00_00_00_00_00_00_00","428","650","74","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("114");
            obj.set_text("57/155 이상");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
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

        };
        this.loadIncludeScript("LayOut_02_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
