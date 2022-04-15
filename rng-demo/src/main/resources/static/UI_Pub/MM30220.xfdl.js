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
            this.set_titletext("선급전표등록");
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

            obj = new Div("Div00","0","0",null,null,"40","304",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","3","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("전표 상세정보");
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
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","36",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","537","36","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("부점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"5","50","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","69","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","69",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01","537","69","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("이자율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","102","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","102",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00","537","102","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","0","135","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00","129","135",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00","537","135","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("가지급금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","0","168","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("처리일자(전기일자)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00","129","168",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00","537","168","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("금액(원화)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","0","201","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("지급내역");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00","129","201",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00","537","201","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("공급가");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00","0","234","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("정산대상건");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00_00","129","234",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00_00","537","234","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("차이금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00_00","0","267","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("정산내역");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00_00_00","129","267",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00_00_00","537","267","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("정산금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00_00_00","0","300","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("B/L순번");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00_00_00_00","129","300",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00_00_00_00","537","300","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("세금계산서번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00_00_00_00","0","333","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("지급처");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00_00_00_00_00","129","333",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00_00_00_00_00","537","333","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("G/L 계정");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00_00_00_00_00","0","366","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("지급계좌번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00_00_00_00_00_00","129","366",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00_00_00_00_00_00","537","366","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("지급조건");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00_00_00_00_00_00","0","399","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("비고");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00_00_00_00_00_00_00_00_00","129","399",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01_00_00_00_00_00_00_00_00_00_00","537","399","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","1024","69","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("계약이행보증금");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","1024","102","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("계약이행보증금반제");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01","1024","135","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("수입수수료반제");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01_00","1024","168","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("부가세포함");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01_00_00","1024","366","140","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","74","229","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_enable("false");
            obj.set_text("2021012012");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","135","140","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","135","173","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","404","398","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("Lotte Rental");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","681","338","220","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_00_00_innerdataset", obj);
            Div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">211010010(외상매입금-영업)</Col><Col id=\"datacolumn\">211010010(외상매입금-영업)</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_00_00_innerdataset);
            obj.set_text("211010010(외상매입금-영업)");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","681","371","220","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_00_00_00_innerdataset", obj);
            Div00_form_cmb00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">16-31일 마감분 익월 23일 지급</Col><Col id=\"datacolumn\">16-31일 마감분 익월 23일 지급</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_00_00_00_innerdataset);
            obj.set_text("211010010(외상매입금-영업)");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00","1168","371","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","681","404","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","823","404","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00","965","404","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("전표");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00_00_00_01","275","300","80","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("저장순서");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","134","338","80","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","216","338","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","243","338","289","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("input_req");
            obj.set_enable("false");
            obj.set_text("서진아이앤디(주)");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","134","371","42","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("input_req");
            obj.set_enable("false");
            obj.set_text("3666");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","178","371","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","205","371","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_cssclass("input_req");
            obj.set_enable("false");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","362","371","170","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_cssclass("input_req");
            obj.set_enable("false");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","134","41","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("2021012012");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","221","41","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","248","41","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","135","107","228","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","135","206","228","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_00_innerdataset", obj);
            Div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가지급금(물건대금)_정산</Col><Col id=\"datacolumn\">가지급금(물건대금)_정산</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_00_innerdataset);
            obj.set_text("가지급금(물건대금)_정산");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","134","239","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_enable("false");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","222","239","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","135","272","227","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00","134","305","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00_00","222","305","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00","359","305","174","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","681","41","220","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00_00_01","681","74","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_text("0123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","761","74","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_format("#,##9.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","741","74","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","821","74","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","841","74","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_format("#,##9.##");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","901","74","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","1168","74","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1288","74","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("82");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","681","140","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("83");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","801","140","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("84");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","681","173","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("85");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","837","206","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("86");
            obj.set_text("VAT");
            obj.set_cssclass("sta_WF_singleLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01","681","206","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("87");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01","801","239","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("88");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_02","681","239","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("89");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_02_00","681","272","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("90");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00","877","206","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("91");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","997","206","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("92");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01_00","681","107","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("93");
            obj.set_enable("false");
            obj.set_text("서진아이앤디(주)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00_00","798","107","74","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("94");
            obj.set_text("선급전표");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","1168","107","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("95");
            obj.set_enable("false");
            obj.set_text("No");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb01_00","1168","140","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("96");
            obj.set_enable("false");
            obj.set_text("No");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb01_00_00","1168","173","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("97");
            obj.set_text("Yes");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","681","305","95","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("98");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","778","305","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("99");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"5","44","24","54",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01_00","801","206","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("101");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_01_00_00","801","272","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("102");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","817","202","20","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("103");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","867","202","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("104");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","817","268","20","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("105");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_01","837","272","35","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("106");
            obj.set_text("VAT");
            obj.set_cssclass("sta_WF_singleLabel");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","867","268","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("107");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00_00","877","272","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("108");
            obj.set_format("#,##9");
            obj.set_enable("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00_00","997","272","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("109");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0",null,null,"48","40","0",null,null,null,null,this);
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
            obj.set_text("등록");
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
        this.registerScript("MM30220.xfdl", function() {

        this.div00_cmb00_00_onitemchanged = function(obj,e)
        {

        };

        this.Div01_Button00_00_01_00_01_00_onclick = function(obj,e)
        {

        };

        this.tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.cmb00_00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.Div00.form.cmb00_00_00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.Div00.form.cmb00_00_00_00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.Div00.form.Button00_00_01_00_01_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
            this.Div00.form.Button00_00_01_00_01_00_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
        };
        this.loadIncludeScript("MM30220.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
