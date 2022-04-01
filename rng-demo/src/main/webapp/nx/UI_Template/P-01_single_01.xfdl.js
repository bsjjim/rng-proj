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
            this.set_titletext("단건(더블)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static26_01_00","0","-188","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("예약모델");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","-188","625","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0","734","63",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","86","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","173","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","734","105","20","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","754","0",null,"799","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div03");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00","129","699",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_00","129","732",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_00_00","129","765",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_02_00_00_01","294","548",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_02_00_01","294","515",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","6","370","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("운행내역");
            obj.set_cssclass("sta_WF_title1");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04","0","36","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","338","0","100","35",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02","0","69","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("시간");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01","129","69","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","102","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("거리");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00","129","102","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00","129","36","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("차고출발");
            obj.set_cssclass("sta_DA_labelTop_req");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_00","278","36","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("차고도착");
            obj.set_cssclass("sta_DA_labelTop_req");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_00_00","427","36","155","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("청구 출발일시");
            obj.set_cssclass("sta_DA_labelTop_req");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_00_00_00","580","36",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_labelTop_req");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","630","29","100","6",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_text("h6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_00","278","69","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00","278","102","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_00_00","427","69","155","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00_00","427","102","155","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_00_00_00","580","69",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00_00_00","580","102",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01","134","74","140","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00","134","107","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00","194","107","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("25");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_00","283","107","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("26");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_00","343","107","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("27");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01_00","283","74","140","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("28");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_01","432","107","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_01","492","107","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("30");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_00_00","585","107","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_00_00","645","107","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("32");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","432","74","144","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("33");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","585","74","144","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("34");
            obj.set_cssclass("input_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","157","370","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("35");
            obj.set_text("운행상세내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_00","0","187","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("36");
            obj.set_text("운행시간");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_01","129","187",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","0","220","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("38");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_01","129","220",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","630","180","100","6",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("40");
            obj.set_text("h6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01_01","134","192","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("41");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02","134","225","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02","194","225","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("43");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02","306","136","100","50",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("44");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_00_00","235","186","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("45");
            obj.set_text("초과시간");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","235","220","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("46");
            obj.set_text("초과거리");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_00","369","225","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_01_01_00","369","192","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("48");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00","429","225","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("49");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","465","220","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("50");
            obj.set_text("거리초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_00_00_00","465","186","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("51");
            obj.set_text("시간초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","599","192","110","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("52");
            obj.set_format("#,###");
            obj.set_value("0");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_02","709","192","20","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("53");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00","599","225","110","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("54");
            obj.set_format("#,###");
            obj.set_value("0");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","709","225","20","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("55");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01","0","253","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("56");
            obj.set_text("기사적용시간");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_01_00","129","253",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01","134","258","60","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("58");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_01","194","258","35","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("59");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00_00","465","253","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("60");
            obj.set_text("초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02_00_00","599","258","110","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("61");
            obj.set_format("#,###");
            obj.set_value("0");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00","709","258","20","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("62");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_01_00","231","258","95","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("63");
            obj.set_text("(운행일수 표시)");
            obj.set_cssclass("sta_txt_desc");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00_00","429","228","7","35",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("64");
            obj.set_text("7");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01_00","0","286","130","79",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("65");
            obj.set_text("운행내역");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_01_00_00","129","286",null,"79","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","134","291",null,"69","5",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("67");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","386","370","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("68");
            obj.set_text("추가비용");
            obj.set_cssclass("sta_WF_title1");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_01","306","365","100","50",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("69");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_01","0","416","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("70");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01","0","449","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("71");
            obj.set_text("통행료");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02","129","449","166","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01","0","482","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("73");
            obj.set_text("거리");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_02","129","482","166","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_01","129","416","166","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("75");
            obj.set_text("고객청구");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_00_01","294","416","156","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("76");
            obj.set_text("기사지급");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_00_00_01","449","416","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("77");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_04_00_00_00_00_00","578","416",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_00_01","294","449","156","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00_01","294","482","156","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_00_00_00_00","578","449",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_00_00_00_00","578","482",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_00","449","449","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("83");
            obj.set_text("유류비");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_00","449","482","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("84");
            obj.set_text("유류량");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01","0","515","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("85");
            obj.set_text("숙박비");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_02_00","129","515","166","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_01_00_02_00_00","129","548","166","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00","0","548","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("88");
            obj.set_text("식대");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00_00","0","581","129","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("89");
            obj.set_text("청구비용");
            obj.set_cssclass("sta_DA_data");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00","134","520","131","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("90");
            obj.set_format("#,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_00","134","553","131","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("91");
            obj.set_format("#,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_00_00","134","454","131","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("92");
            obj.set_format("#,###");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_00_00_00","299","454","121","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("93");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_01","299","487","121","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("94");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_01","299","520","121","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("95");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_00_01","299","553","121","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("96");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00_00_00","129","581",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("97");
            obj.set_text("");
            obj.set_cssclass("sta_DA_data");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_00_02","134","586","131","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("98");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_00","265","586","25","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("99");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00_01","281","581","20","35",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("100");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","301","586","150","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("101");
            obj.set_text("부가세별도");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_00_00_00_00_00","583","454","121","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("102");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01","420","487","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("103");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_01_01","134","487","131","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("104");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00","265","487","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("105");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_01_00","583","487","121","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("106");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_01","704","487","25","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("107");
            obj.set_text("ℓ");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","636","370","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("108");
            obj.set_text("결재구분");
            obj.set_cssclass("sta_WF_title1");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_01_00","306","615","100","50",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("109");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01","0","666","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("110");
            obj.set_text("결제구분");
            obj.set_cssclass("sta_DA_label_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00","129","666",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("111");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02","0","699","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("112");
            obj.set_text("결제 특이사항");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_01","0","732","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("113");
            obj.set_text("통합청구");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00_01","0","765","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("114");
            obj.set_text("결제담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01_00","380","666","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("115");
            obj.set_text("결제고객");
            obj.set_cssclass("sta_DA_label_req");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_01_00","380","732","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("116");
            obj.set_text("통합청구요청자");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo01","134","671","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("117");
            obj.set_cssclass("input_req");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","515","671","95","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("118");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","612","671","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("119");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","639","671","89","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("120");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","134","704","594","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("121");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_00","135","737","88","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("122");
            obj.set_text("통합청구");
            obj.set_cssclass("btn_Comp_popup");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","243","737","15","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("123");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","266","737","110","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("124");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","515","737","213","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("125");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","134","771","243","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("126");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00_00","265","454","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("127");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00_00_00","265","520","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("128");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00_00_00_00","265","553","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("129");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00_00_01","420","454","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("130");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00_00_00_01","420","520","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("131");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_00_00_00_00_00","420","553","30","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("132");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_01_00","704","454","27","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("133");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00_01_00","223","729","20","35",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("134");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","186",null,"2","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","415",null,"2","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","665",null,"2","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","0","25","100","10",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("139");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_02","0","176","100","10",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("140");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_02_00","0","405","100","10",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("141");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_02_01","0","655","100","10",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("142");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00_00_00","223","259","10","35",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("143");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("sta00","620","41","80","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("144");
            obj.set_text("청구 도착일시");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("sta00_00","632","421","80","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("145");
            obj.set_text("기사지급");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div00","0","63","734","717",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","21","370","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기본계약정보 ");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","376","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("대여지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","84","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","376","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("대여기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("배차시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","117","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","376","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("배차장소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","183","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("기사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","183","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","56","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_value("정상");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","134","89","238","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_value("강남영업소");
            obj.set_readonly("true");
            obj.set_text("강남영업소");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01","134","122","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_format("##:##");
            obj.set_value("1200");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","510","122","218","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_value("영업점");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00","510","89","217","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_format("####-##-## ~ ####-##-##");
            obj.set_value("2021102120211212");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00_00","510","56","217","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_format("#########");
            obj.set_value("123456789");
            obj.set_enable("true");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_01","0","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("예약모델");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","150","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","155","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","196","155","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","388","155","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","388","188","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01","196","188","190","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","134","188","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","238","345","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("운행계약정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03","0","268","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","268","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02","376","268","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01","0","301","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("운행구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02","129","301","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","376","301","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("지역");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","334","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("운행장소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01","129","334","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","376","334","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01","0","367","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("기본요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00","0","400","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("대여료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_00","0","433","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("시간초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_00","0","466","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("거리초과요금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","367","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00","376","367","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("호텔수수료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00","129","400","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_00","376","400","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("호텔할인율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_00","129","433","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00","376","433","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("기준시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_00_00","129","466","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00","376","466","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("기준거리");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","273","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","135","306","144","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","281","306","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("고객별 약정");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","135","339","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","135","372","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","255","372","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","135","405","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","255","405","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","135","438","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","255","438","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("원/시간");
            obj.set_cssclass("sta_WF_unit");
            obj.set_padding("0px 0px 0px 6px");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","135","471","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","255","471","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("원/1Km");
            obj.set_cssclass("sta_WF_unit");
            obj.set_padding("0px 0px 0px 6px");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","510","273","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_value("010-1234-1234");
            obj.set_enable("false");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","510","306","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_text("지역 ↔ 인천공항");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","510","339","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","510","372","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_format("#,###.##");
            obj.set_value("30");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","570","372","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","510","405","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_format("#,###.##");
            obj.set_value("15");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","570","405","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00","510","438","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","570","438","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00","613","438","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00","673","438","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00","598","435","15","75",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_01","510","471","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","570","471","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00","613","471","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","673","471","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","365","217","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","521","345","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_text("예약정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","551","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_text("예약자명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","551","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","376","551","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","584","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("82");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","584","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","617","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("84");
            obj.set_text("탑승자명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","617","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","376","617","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("86");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","650","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("87");
            obj.set_text("운행일정");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","683","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("88");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","650","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","129","683","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","134","556","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("91");
            obj.set_readonly("true");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","510","556","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("92");
            obj.set_value("02-0000-0000");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("02-0000-0000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01_00","134","655","595","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01_00_00","134","688","595","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_01_00_01","134","589","595","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_00","510","622","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("96");
            obj.set_value("02-0000-0000");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("02-0000-0000");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","134","622","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("97");
            obj.set_readonly("true");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_01","360","500","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("98");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","267",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","550",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","0","40","100","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("102");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","2","257","100","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("103");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","0","540","100","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("104");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div03:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","65",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","-3",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"10","88","28","133",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00","78","7","10","51",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","280","218","421","56",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("<fc v=\"red\">(ReadOnly 출력 테이블 영역)</fc>\r\n출력전용영역에 Disable과 Readonly 혼용금지");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","313","559","421","56",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<fc v=\"red\">(입력 테이블 영역)</fc>\r\n입력테이블 영역에서 입력 불가 항목은 Disable 처리");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","490","281","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("하프 너비 w754");
            obj.set_cssclass("sta_Guide_info");
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
        this.registerScript("P-01_single_01.xfdl", function() {

        this.Div00_Combo00_00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("P-01_single_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
