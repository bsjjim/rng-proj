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
            this.set_titletext("계약승계(일반)");
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

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","92","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("실행계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","199","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","320","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_value("20221001");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","734","105","20","180",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","754","DivSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div03");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00","129","84",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_00","129","117",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_00_00","129","150",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","21","370","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("실행계약승계처리");
            obj.set_cssclass("sta_WF_title2");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_01_00","306","0","100","50",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01","0","51","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00","129","51",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02","0","84","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("결제고객");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_01","0","117","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("수납방법");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00_01","0","150","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("청구지주소");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01_00","361","51","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("사용담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","50",null,"2","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_02_01","0","40","100","10",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01_00_00","361","84","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("결제담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00_01_00","0","183","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("결제방법");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_00_00_00","129","183",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_01_00_01_00_00","0","216","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_text("승계수수료 고객");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_00_00_00_00","129","216",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02_00","0","248","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_text("승계수수료");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_01","129","248",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02_00_00","0","281","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_text("에어전트(딜러)");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_01_00","129","281",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01_00_00_00_00","361","281","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_text("에이저트(딜러) 수수료");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02_00_00_00","0","314","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_text("보증증권발행여부");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_01_00_00","129","314",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_01_02_01_01_00_00_00_00_01","361","314","150","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("25");
            obj.set_text("대표자신용등급");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02_00_00_00_00","0","347","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("26");
            obj.set_text("보증증권금액");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_01_00_00_00","129","347",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_01_02_00_00_00_00_00","0","380","130","34",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("28");
            obj.set_text("출금동의 문서번호");
            obj.set_cssclass("sta_DA_label");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static27_00_01_02_00_00_01_00_00_00_00","129","380",null,"34","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","80","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("30");
            obj.set_text("123406789");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","216","56","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","243","56","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("32");
            obj.set_text("김나나");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","515","56","57","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("33");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","574","56","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","601","56","128","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("35");
            obj.set_text("홍길순");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","134","89","80","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("36");
            obj.set_text("123406789");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","216","89","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","243","89","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("38");
            obj.set_text("김나나");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","515","89","57","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("39");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","574","89","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","601","89","128","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("41");
            obj.set_text("홍길순");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","122","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("42");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","316","122","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("43");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","498","122","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("44");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","155","50","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("45");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_value("12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","186","155","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","213","155","242","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","457","155","272","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("48");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","134","188","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("49");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","318","188","120","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("50");
            obj.set_format("##############");
            obj.set_value("79005691157411");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","440","188","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("51");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","134","221","80","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("52");
            obj.set_text("123406789");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00_00","216","221","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","243","221","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("54");
            obj.set_text("김나나");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00","134","253","120","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("55");
            obj.set_format("#,##9");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00","254","253","55","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("56");
            obj.set_text("+ ( VAT");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00_00","322","253","120","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("57");
            obj.set_format("#,##9");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00_00","442","253","55","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("58");
            obj.set_text(")");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","134","286","57","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("59");
            obj.set_text("P12345");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01_00","193","286","24","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("60");
            obj.set_cssclass("btn_Comp_src");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","220","286","115","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("61");
            obj.set_text("홍길순");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","515","286","120","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("62");
            obj.set_format("#,##9");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","635","286","20","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("63");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00_00_00","134","352","120","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("64");
            obj.set_format("#,##9");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00_00_00","254","352","20","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("65");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cmb00_02","134","319","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("66");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("cmb00_03","515","319","180","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("67");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","134","385","145","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("68");
            obj.set_text("10허4048");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01","281","385","75","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("69");
            obj.set_text("문서등록");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01_00","359","385","75","24",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("70");
            obj.set_text("파일확인");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0","734",null,null,"48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","21","370","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("실행계약기본정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품");
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

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계약형태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("고객");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","84","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","366","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("사용담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("결제고객");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","117","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","366","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("결제담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","183","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("청구지주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","183","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_01","0","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("수납방법");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","150","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","0","40","100","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00","0","216","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("실행일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_01","129","216","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_00","0","249","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("원금연체");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_01_00","129","249","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_00_00","0","282","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("부가세연체");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_01_00_00","129","282","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_00_00_00","0","315","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("선수금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_01_00_00_00","129","315","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00","366","216","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("미회수금원금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00_00","366","249","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("이자연체");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00_00_00","366","282","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("보증금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","56","227","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","500","56","229","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","89","80","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("123406789");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","216","89","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("김나나");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","500","89","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","559","89","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","134","122","80","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("123406789");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","216","122","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("김나나");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","500","122","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","559","122","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","155","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","316","155","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","498","155","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","188","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","186","188","242","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","430","188","299","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","134","221","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_value("20221001");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","500","221","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","620","221","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","620","254","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","500","254","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","500","287","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","620","287","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00","500","320","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00","620","320","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_00_00_00_00_00","366","315","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("선납금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00","134","254","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00","254","254","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00_00","134","287","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00_00","254","287","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00_00_00","134","320","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00_00_00","254","320","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
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

            obj = new Button("Button00_00_00",null,"10","64","28","-3",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00","103","7","10","51",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","224","1","30","60",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","254","18","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("승계일자");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00","311","3","10","51",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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
        this.registerScript("SD12910.xfdl", function() {

        this.Div00_Combo00_00_onitemchanged = function(obj,e)
        {

        };

        this.Div03_Static02_00_00_02_00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div03.form.Static02_00_00_02_00_00_00_00.addEventHandler("onclick",this.Div03_Static02_00_00_02_00_00_00_00_onclick,this);
            this.Div03.form.Static02_00_00_02_00_00_00_00_00.addEventHandler("onclick",this.Div03_Static02_00_00_02_00_00_00_00_onclick,this);
            this.Div00.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
        };
        this.loadIncludeScript("SD12910.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
