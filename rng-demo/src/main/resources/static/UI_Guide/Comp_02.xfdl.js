(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Button");
            this.set_titletext("폼요소 - Edit, MaskEdit, TextArea, Spin, Combo, Listbox, Radio, Checkbox, Calendar ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static27_03_00_01_00_00_00","129","1074",null,"432","40",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00","0","5","325","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Edit, MaskEdit, TextArea, Spin, Combo");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","35","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Edit");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","35",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","798","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","232","53","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("Lotte Rental");
            obj.set_text("Lotte Rental");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","163","53","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","402","53","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","473","53","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("Lotte Rental");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","643","53","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","712","53","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("Lotte Rental");
            obj.set_readonly("true");
            obj.set_text("Lotte Rental");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","1205","53","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("input_select");
            obj.set_value("Lotte Rental");
            obj.set_text("Lotte Rental");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","960","53","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("Lotte Rental");
            obj.set_cssclass("input_req");
            obj.set_text("Lotte Rental");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","890","53","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","97","130","232",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","97",null,"93","40",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","163","114","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","402","114","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","643","114","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","890","114","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","232","114","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_format("#,###");
            obj.set_value("1230000000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","1205","114","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_format("#,###");
            obj.set_value("1230000000");
            obj.set_cssclass("input_select");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","474","114","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_format("#,###");
            obj.set_value("1230000000");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","712","114","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format("#,###");
            obj.set_value("1230000000");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00","960","114","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_format("#,###");
            obj.set_value("1230000000");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","961","137","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Mask = #,###");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","189",null,"140","40",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","165","203","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("※ type = \"string\"");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","232","243","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00","382","243","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_value("1234561234567");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","285","203","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("textAlign = \"left\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00_00","382","277","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_value("1234561234567");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","187","148","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("비율");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03","232","148","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_format("#,###.##");
            obj.set_value("20.96");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","384","148","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Mask = #,###.##");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00_00_00","673","243","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_format("A######");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_value("A123456");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","512","243","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Mask = ######-#######");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00","512","277","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Mask = ###-##-#####");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00_00","802","243","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Mask = A######");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_01","942","203","176","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("※ type = \"string\" Mask 문자");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","944","235","275","75",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("@ : 모든 Ascii 문자(한글등 다국언어 불가) \r\n# : 모든 10진수 숫자(0-9) \r\n* : 모든 알파벳 문자(a-zA-Z) \r\n9 : 모든 알파벳, 숫자(a-zA-Z0-9) \r\n");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1185","235","275","75",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("A : 대문자 알파벳(A-Z) \r\na : 소문자 알파벳(a-z) \r\nZ : 대문자 알파벳, 숫자(A-Z0-9) \r\nz : 소문자 알파벳, 숫자(a-z0-9)");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","328","130","136",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","328",null,"136","40",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","163","348","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","402","348","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","638","348","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","232","351","130","88",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_value("줄바꿈이\n필요할땐\nCtrl + Enter");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","474","351","140","89",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_value("롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","712","351","140","89",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_value("롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈 롯데렌탈");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","169","240","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("입력되지 않았을 때");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","960","351","140","88",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_value("줄바꿈이\n필요할땐\nCtrl + Enter");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01","890","351","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","463","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Spin");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","129","463",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","163","481","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03","402","481","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_03","638","481","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03","1141","483","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","232","483","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_min("2000");
            obj.set_max("2022");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00","474","483","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_min("2000");
            obj.set_max("2022");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00_00","712","483","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_min("2000");
            obj.set_max("2022");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_01","1205","483","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("input_select");
            obj.set_min("2000");
            obj.set_max("2022");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00","1141","114","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00_00","310","5","402","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("63");
            obj.set_text("※ 필수입력 클래스 : input_req / 선택필수 클래스: input_select");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00","1139","53","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00","0","663","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Radio, Checkbox, Calendar");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","693","130","163",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Radio");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","693",null,"163","40",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","723","643","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","232","746","335","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">선택2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">선택3</Col><Col id=\"datacolumn\">선택3</Col></Row><Row><Col id=\"codecolumn\">일이삼사오</Col><Col id=\"datacolumn\">일이삼사오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_02","152","709","678","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("70");
            obj.set_text("※ initvalueid = \"iv_Radio\" 로 기본값 셋팅 필수(Radio 아이템간 간격 자동조정 및 horizontal 모드로 작동됨) ");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","232","776","335","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">선택2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">선택3</Col><Col id=\"datacolumn\">선택3</Col></Row><Row><Col id=\"codecolumn\">일이삼사오</Col><Col id=\"datacolumn\">일이삼사오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_innerdataset);
            obj.set_text("선택1");
            obj.set_value("선택1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","1098","744","205","47",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_01_innerdataset = new nexacro.NormalDataset("Radio00_01_innerdataset", obj);
            Radio00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">선택2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">선택3</Col><Col id=\"datacolumn\">선택3</Col></Row><Row><Col id=\"codecolumn\">일이삼사오</Col><Col id=\"datacolumn\">일이삼사오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_01_innerdataset);
            obj.set_text("선택1");
            obj.set_value("선택1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","164","743","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01","163","776","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00","962","743","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("여러줄로 사용할 경우");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","1189","762","105","11",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","1271","761","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("10");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","1261","762","3","10",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_border("0px none, 1px dotted rgba(177,192,203,1), 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","1073","762","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","855","130","128",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","855",null,"128","40",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","232","872","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("선택1");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00","163","905","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01","164","872","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","232","905","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("선택2");
            obj.set_cssclass("input_req");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","302","905","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("선택2");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","302","872","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("선택1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","372","905","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("선택2");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","372","872","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("선택1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01_00","281","757","20","35",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_01","1083","895","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("선택3");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_01","1083","872","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("선택1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_00","1153","895","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("선택4");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00_00","1153","872","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("선택1");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00","1136","917","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("20");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00","1133","880","20","53",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00","957","873","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("컴포넌트 간 간격");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39_00","1174","891","105","11",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static41_00","1256","890","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("10");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","982","130","524",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00_00","129","982",null,"258","40",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00","147","1309","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("조회기간(일)");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00_00","147","1265","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("조회기간(월)");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","159","1047","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("년월일");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_04","442","1047","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04","682","1047","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00","1181","1047","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","272","1047","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","514","1047","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_enable("false");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00_00","1245","1047","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("input_select");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00","482","1269","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("w 170");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","159","1013","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("년월");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_04_00","442","1013","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_00","682","1013","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("readonly ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_00","1181","1013","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","752","1013","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text(" 없음(MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_01","696","1309","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00_00_00","696","1265","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_00_00","1113","1260","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("readonly ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","1196","1260","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text(" 없음(Edit 또는 MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_00_00_00","1113","1306","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("readonly ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","752","1047","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text(" 없음(MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","525","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("Combo");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","129","525",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01","163","544","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03_00","402","543","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_03_00","638","543","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_02","1141","544","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","232","544","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">첫번째 옵션입니다.</Col><Col id=\"datacolumn\">첫번째 옵션입니다.</Col></Row><Row><Col id=\"codecolumn\">두번째 옵션입니다.</Col><Col id=\"datacolumn\">두번째 옵션입니다.</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","474","544","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_innerdataset", obj);
            Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">첫번째 옵션입니다.</Col><Col id=\"datacolumn\">첫번째 옵션입니다.</Col></Row><Row><Col id=\"codecolumn\">두번째 옵션입니다.</Col><Col id=\"datacolumn\">두번째 옵션입니다.</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","712","544","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_readonly("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_00_00_innerdataset = new nexacro.NormalDataset("Combo00_00_00_innerdataset", obj);
            Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">첫번째 옵션입니다.</Col><Col id=\"datacolumn\">첫번째 옵션입니다.</Col></Row><Row><Col id=\"codecolumn\">두번째 옵션입니다.</Col><Col id=\"datacolumn\">두번째 옵션입니다.</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01",null,"-62","40",null,"0","57",null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_01_00","1141","351","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01_00","1205","351","140","88",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_value("줄바꿈이\n필요할땐\nCtrl + Enter");
            obj.set_cssclass("input_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_03","890","483","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_02_00","890","544","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_01_00","960","483","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("input_req");
            obj.set_min("2000");
            obj.set_max("2022");
            obj.set_value("2021");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_01","163","811","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","232","811","335","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("140");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_select");
            var Radio00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_innerdataset", obj);
            Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">선택2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">선택3</Col><Col id=\"datacolumn\">선택3</Col></Row><Row><Col id=\"codecolumn\">일이삼사오</Col><Col id=\"datacolumn\">일이삼사오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_00_00_innerdataset);
            obj.set_text("선택1");
            obj.set_value("선택1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00","163","940","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","232","940","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("선택2");
            obj.set_cssclass("input_select");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_02","302","940","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("선택2");
            obj.set_cssclass("input_select");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00_01","372","940","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("선택2");
            obj.set_cssclass("input_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_01","930","1047","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_00_00","930","1013","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00_00_00","1000","1047","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("input_req");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","300","-5","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01_00_00_00_01","226","663","434","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("149");
            obj.set_text("※ 필수입력 클래스 : input_req / 선택필수 클래스: input_select");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","216","655","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_03","147","1448","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("조회기간(시간포함)");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_03_00","696","1448","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_00_00","615","1453","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("w310");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02","569","746","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_02","641","746","335","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("155");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var Radio00_02_innerdataset = new nexacro.NormalDataset("Radio00_02_innerdataset", obj);
            Radio00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택1</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">선택2</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">선택3</Col><Col id=\"datacolumn\">선택3</Col></Row><Row><Col id=\"codecolumn\">일이삼사오</Col><Col id=\"datacolumn\">일이삼사오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_02_innerdataset);
            obj.set_text("선택1");
            obj.set_value("선택1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02_00","569","776","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","640","776","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text(" 없음(Static 또는 Edit의 readonly 상태 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02_00_00","565","900","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_02_01","565","870","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","640","900","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text(" 없음(Static 또는 Edit의 readonly 상태 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_02","645","870","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("선택1");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_02","715","870","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("선택1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00_01","785","870","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("선택1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","960","544","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Combo00_01_innerdataset = new nexacro.NormalDataset("Combo00_01_innerdataset", obj);
            Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">첫번째 옵션입니다.</Col><Col id=\"datacolumn\">첫번째 옵션입니다.</Col></Row><Row><Col id=\"codecolumn\">두번째 옵션입니다.</Col><Col id=\"datacolumn\">두번째 옵션입니다.</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","1205","544","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_select");
            var Combo00_01_00_innerdataset = new nexacro.NormalDataset("Combo00_01_00_innerdataset", obj);
            Combo00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">첫번째 옵션입니다.</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">두번째 옵션입니다.</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","159","1087","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("년월일(요일포함)");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_04_01","442","1087","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_01","682","1087","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_02","1181","1087","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01","272","1087","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","514","1087","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_enable("false");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00_00_01","1245","1087","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_cssclass("input_select");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","752","1087","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text(" 없음(MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_01_00","930","1087","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00_00_00_00","1000","1087","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_cssclass("input_req");
            obj.set_value("20220110");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_01","1375","1090","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("w120");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_01_00","1375","1051","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("w105");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_01_00_00","1375","1018","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("w100");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","159","1127","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("년월일시");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_04_01_00","442","1128","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_01_00","682","1129","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00","752","1129","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text(" 없음(MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_01_00_00","930","1129","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00_00_00_02_00","1181","1129","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_01_01","1405","1133","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("w155");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_00_01","522","1312","40","15",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("w210");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_03_01","147","1402","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("조회기간(요일포함)");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_03_00_00","696","1401","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_00_00_00","547","1406","50","15",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("w240");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","1196","1307","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text(" 없음(Edit 또는 MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_00","147","1353","168","24",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("조회기간(일) - 확장(분기)");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00_00_01_00","519","1357","45","15",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("w210");
            obj.set_cssclass("sta_txt_desc");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_01_00_00_00_01_00","696","1353","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_00_00_00_00","1113","1350","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("readonly ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","1196","1351","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text(" 없음(Edit 또는 MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_00_00_00_00_00","1113","1395","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("readonly ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","1196","1396","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text(" 없음(Edit 또는 MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_04_00_00_00_00_00_00","1113","1448","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_text("readonly ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","1196","1449","205","24",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_text(" 없음(Edit 또는 MaskEdit 사용)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","272","1013","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            this.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00_00","514","1013","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","272","1129","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_value("2022-12-12 (12:00:00)");
            this.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_00","514","1129","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00_01","1000","1013","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00_02","1245","1013","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_cssclass("input_select");
            this.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01","1000","1129","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_cssclass("input_req");
            this.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01_00","1245","1129","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_cssclass("input_select");
            this.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","307","1309","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            this.addChild(obj.name, obj);

            obj = new CalPeriodMonth("CalPeriodMonth00","307","1264","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            this.addChild(obj.name, obj);

            obj = new CalPeriodQuater("CalPeriodQuater00","307","1353","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            this.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","307","1401","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            this.addChild(obj.name, obj);

            obj = new CalPeriodTime("CalPeriodTime00","307","1449","310","24",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            this.addChild(obj.name, obj);

            obj = new CalPeriodTime("CalPeriodTime00_00","766","1449","310","24",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00_00","766","1401","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CalPeriodQuater("CalPeriodQuater00_00","766","1353","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","766","1309","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CalPeriodMonth("CalPeriodMonth00_00","766","1264","170","24",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","587","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","129","587",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00","163","606","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("enabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_03_00_00","402","605","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("disabled");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_03_00_00","638","605","75","24",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("readonly");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_02_01","1141","606","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_text("선택필수");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_02_00_00","890","606","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("필수입력 ");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","232","606","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("전체");
            var MultiCombo00_innerdataset = new nexacro.NormalDataset("MultiCombo00_innerdataset", obj);
            MultiCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00","474","606","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("전체");
            obj.set_enable("false");
            var MultiCombo00_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_00_innerdataset", obj);
            MultiCombo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_01","712","606","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("전체");
            obj.set_readonly("false");
            var MultiCombo00_01_innerdataset = new nexacro.NormalDataset("MultiCombo00_01_innerdataset", obj);
            MultiCombo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_02","961","606","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("전체");
            obj.set_cssclass("input_req");
            var MultiCombo00_02_innerdataset = new nexacro.NormalDataset("MultiCombo00_02_innerdataset", obj);
            MultiCombo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_02_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_02_00","1205","606","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("전체");
            obj.set_cssclass("input_select");
            var MultiCombo00_02_00_innerdataset = new nexacro.NormalDataset("MultiCombo00_02_00_innerdataset", obj);
            MultiCombo00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택1</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">선택2</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">선택3</Col></Row></Rows>");
            obj.set_innerdataset(MultiCombo00_02_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Combo("cmb01_01","484","1172","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_text("30일");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_01","272","1172","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","159","1172","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("년월일기간 + 콤보");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00","484","1196","55","13",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static41_01","504","1202","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_text("55");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
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
        this.registerScript("Comp_02.xfdl", function() {

        this.Button_onload = function(obj,e)
        {
        	// this.Div01.form.setRequired(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Button_onload,this);
        };
        this.loadIncludeScript("Comp_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
