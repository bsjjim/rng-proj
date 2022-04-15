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
            this.set_titletext("단건(하프)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0","734","63",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("접수번호");
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

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","237","18","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","305","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_innerdataset", obj);
            DivSearch_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","197","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","-188","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("예약모델");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","-188","625","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","63","734",null,null,"48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("접수정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","50","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label_req");
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

            obj = new Static("Static26_01","0","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("VOC유형");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","84","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("책임본부");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01","129","117","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","356","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("책임부서");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00","0","183","130","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00","129","183","605","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_01","0","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("접수자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_00_00_00","129","150","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","301","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("조치정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03","0","332","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("완료자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","332","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01","0","365","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("완료일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02","129","365","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","356","365","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("소요시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","398","130","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("책임부서의견");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01","129","398","605","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01","0","495","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("반영여부");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00","0","528","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("관련문서");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","495","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_00","356","495","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("담당자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00","129","528","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","337","218","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","365","281","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","331",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","134","56","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_01_innerdataset", obj);
            Div00_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","286","56","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_01_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_01_00_innerdataset", obj);
            Div00_form_Combo00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00","438","56","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_01_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_01_00_00_innerdataset", obj);
            Div00_form_Combo00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_01_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01","134","90","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_01_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_01_01_innerdataset", obj);
            Div00_form_Combo00_00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_01_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_01","286","90","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_01_00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_01_00_01_innerdataset", obj);
            Div00_form_Combo00_00_01_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_01_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_00","438","90","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            var Div00_form_Combo00_00_01_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_01_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_01_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_01_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_01_00","356","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","123","218","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","134","156","218","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","490","123","70","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("부서코드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","562","123","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","188","595","88",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00","490","370","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","550","370","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","533","595","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","134","403","595","88",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00","490","500","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","587","500","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","614","500","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("영업점");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","134","500","170","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_00_innerdataset", obj);
            Div00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_00_innerdataset);
            obj.set_text("여");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","320","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01_00","490","155","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            this.Div00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01_00_00","134","370","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","589","186","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("영업점");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0","734","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","9","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","9","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","775","271","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("하프 너비 w754");
            obj.set_cssclass("sta_Guide_info");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","774","417","421","56",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<fc v=\"red\">(입력 테이블 영역)</fc>\r\n입력테이블 영역에서 입력 불가 항목은 Disable 처리");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
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
        this.registerScript("P-01_single_02.xfdl", function() {

        this.Static27_onclick = function(obj,e)
        {

        };

        this.DivSearch_Edit00_onchanged = function(obj,e)
        {

        };

        this.DivSearch_Combo00_00_01_onitemchanged = function(obj,e)
        {

        };

        this.Static01_00_00_01_01_onclick = function(obj,e)
        {

        };

        this.Div00_Radio00_00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DivSearch.form.Edit00.addEventHandler("onchanged",this.DivSearch_Edit00_onchanged,this);
            this.DivSearch.form.Combo00_00_01.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
            this.Div00.form.Combo00_00_01.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Combo00_00_01_00.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Combo00_00_01_00_00.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Combo00_00_01_01.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Combo00_00_01_00_01.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Combo00_00_01_00_00_00.addEventHandler("onitemchanged",this.DivSearch_Combo00_00_01_onitemchanged,this);
            this.Div00.form.Radio00_00.addEventHandler("onitemchanged",this.Div00_Radio00_00_onitemchanged,this);
        };
        this.loadIncludeScript("P-01_single_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
