(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_04");
            this.set_titletext("L/C개설상세등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"202","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","3","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","36","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","36",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","517","36","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","69","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("L/C번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","69",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01","517","69","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","102","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("개설통화");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","102",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00","517","102","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("개설금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","0","135","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("개설일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00","129","135",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00","517","135","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("선적기한");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","0","168","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("운송수단");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00","129","168",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00","517","168","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("선적항");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","1064","69","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","1064","102","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("이자율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01","1064","135","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("L/C기한");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01_00","1064","168","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("도착항");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","74","378","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_cssclass("input_req");
            obj.set_text("2021012012");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","135","140","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","135","107","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01","661","74","399","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","661","107","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00","1064","37","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("구매의뢰유형");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","41","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            obj.set_text("2021012012");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","221","41","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","135","173","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","661","40","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","661","140","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","1208","41","150","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_cssclass("input_req");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","1208","140","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","1268","107","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","1288","107","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_format("#,##9.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","1348","107","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","1368","107","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","1428","107","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00","1208","74","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_01","1208","107","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_format("#,##9.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01_00","661","173","399","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01_00_00","1208","173","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","781","107","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Div00:0",null,"250","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("L/C추가사항");
            obj.set_cssclass("sta_WF_title1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("환적여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","517","51","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("개설은행");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","84","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("분할선적");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","84",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01","517","84","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("지급계좌");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","117","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("적하보험");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","117",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00","517","117","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("결재방법");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","0","150","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("인도조건");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00","129","150",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00","517","150","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("계정구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","0","183","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("원산지");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00","129","183",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00","517","183","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("통지은행");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","0","216","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("비고(전표)");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00","129","216",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00","517","216","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","1064","84","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("은행수수료");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","1064","117","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("전신료");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01","1064","150","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01_00","1064","183","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","1208","89","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1328","89","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00","1064","52","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("개설비용");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01_00_00","1064","216","140","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_01",null,"20","74","24","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("전표취소");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_01_00",null,"20","50","24","78",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_text("전표");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00",null,"20","140","24","130",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00",null,"20","140","24","272",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_01_00_00",null,"20","74","24","416",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","135","56","175","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Radio00_innerdataset", obj);
            Div00_00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Radio00_innerdataset);
            obj.set_text("가능");
            obj.set_value("가능");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","135","89","175","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Radio00_00_innerdataset", obj);
            Div00_00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Radio00_00_innerdataset);
            obj.set_text("가능");
            obj.set_value("가능");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","135","122","175","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Radio00_01_innerdataset = new nexacro.NormalDataset("Div00_00_form_Radio00_01_innerdataset", obj);
            Div00_00_form_Radio00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Radio00_01_innerdataset);
            obj.set_text("가능");
            obj.set_value("가능");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","134","155","236","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_text("DEQ(부두 인도 조건)(관세 지급)");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01_00","134","188","379","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_text("0123456789");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01_00_00","134","221","379","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_text("0123456789");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","661","56","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_format("##############");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","783","56","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","810","56","250","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01_00","661","89","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("43");
            obj.set_format("##############");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01_00","783","89","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","810","89","93","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("45");
            obj.set_enable("false");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","905","89","155","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","661","155","250","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_text("990010300(운용자산매각 임시계정)");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","661","122","80","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_text("At Sight");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","661","188","399","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("49");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01_00_00_00","661","221","399","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_text("0123456789");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","1208","56","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("51");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","1328","56","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("52");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","1208","122","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("53");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","1328","122","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("54");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_02","1208","155","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("55");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","1328","155","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("56");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01","1208","188","165","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("57");
            obj.set_enable("true");
            obj.set_text("권한부서 자금집행");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","1208","221","105","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","0","Div00_00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","81","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("물건정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","370","0","100","50",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"구매의뢰번호\"/><Cell col=\"3\" text=\"의뢰 Item\"/><Cell col=\"4\" text=\"구매의뢰일자\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"대표모델\"/><Cell col=\"8\" text=\"제조회사\"/><Cell col=\"9\" text=\"공급업체\"/><Cell col=\"10\" text=\"공급업체명\"/><Cell col=\"11\" text=\"통화\"/><Cell col=\"12\" text=\"구매의뢰수량\"/><Cell col=\"13\" text=\"구매의뢰단가\"/><Cell col=\"14\" text=\"구매의뢰금액\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\" text=\"bind:Column9\"/><Cell col=\"13\" text=\"bind:Column9\"/><Cell col=\"14\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,"20","32","24","365",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("환율");
            obj.set_cssclass("sta_SA_label");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00",null,"20","140","24","128",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("5");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"5","20","40","390",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00",null,"20","58","24","535",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("7");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","90","24","270",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_value("");
            obj.set_index("-1");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00",null,"20","120","24","410",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("9");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","80",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","0",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01_00_00:0",null,"48","40",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_01_00_00_00_00","1393","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","1393",null,"50","10",null,"0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_01",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
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
        this.registerScript("MM30070.xfdl", function() {

        this.div00_cmb00_00_onitemchanged = function(obj,e)
        {

        };

        this.Div01_Button00_00_01_00_01_00_onclick = function(obj,e)
        {

        };

        this.tab00_onchanged = function(obj,e)
        {

        };

        this.Div00_00_Radio00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00_00.form.Radio00.addEventHandler("onitemchanged",this.Div00_00_Radio00_onitemchanged,this);
            this.Div00_00.form.Radio00_00.addEventHandler("onitemchanged",this.Div00_00_Radio00_onitemchanged,this);
            this.Div00_00.form.Radio00_01.addEventHandler("onitemchanged",this.Div00_00_Radio00_onitemchanged,this);
        };
        this.loadIncludeScript("MM30070.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
