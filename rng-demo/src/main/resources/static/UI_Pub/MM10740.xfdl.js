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
            this.set_titletext("용품비 확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","23","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","368","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","408","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","700","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","740","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("용품구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","808","18","130","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">블랙박스보조용품</Col><Col id=\"datacolumn\">블랙박스보조용품</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("블랙박스보조용품");
            obj.set_value("블랙박스보조용품");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","158","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","978","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","86","18","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_innerdataset", obj);
            div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전기일</Col><Col id=\"datacolumn\">전기일</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_innerdataset);
            obj.set_text("차량등록일자");
            obj.set_value("차량등록일자");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","1044","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">발주번호</Col><Col id=\"datacolumn\">발주번호</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("발주번호");
            obj.set_value("발주번호");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","476","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","558","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","585","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("input_req");
            obj.set_text("서진아이앤디(주)");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","938","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","1126","18","140","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("Lotte Rental");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","750","63","360","151",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("전표입력정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("세금계산서 잔액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("헤더 텍스트");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","89","140","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("Lotte Rental");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","122","140","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button01","276","122","50","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("전표");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","56","20","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","56","120","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Tab("tab00","0","235",null,null,"40","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("발주/출고 금액 차이 내역");
            obj.set_url("MM::MM10740T01.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("발주/출고 내역");
            obj.set_url("MM::MM10740T01.xfdl");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div00_00","375","63","355","151",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("세금계산서 정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","160","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("공급가");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("부가세");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","56","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","89","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_req");
            obj.set_text("Lotte Rental");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","122","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_req");
            obj.set_text("Lotte Rental");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","281","89","70","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("세금계산");
            obj.set_value("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","56","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","254","89","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","254","122","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","1130","63",null,"151","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("발주금액정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("총 출고금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("총 입고금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("차액");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","122","120","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("Lotte Rental");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","89","120","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("Lotte Rental");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","56","120","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","56","20","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","254","89","20","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","254","122","20","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_01","0","63","355","151",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("세금계산서 내역");
            obj.set_cssclass("sta_WF_title1");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","160","0","100","50",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","140","34",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("송장일자(증빙일)");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","139","51",null,"34","0",null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","140","34",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("4");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","139","84",null,"34","0",null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","140","34",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("전자세금계산서 번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","139","117",null,"34","0",null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","144","56","105","24",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","144","89","105","24",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","144","122","100","24",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("11");
            obj.set_text("201601011234");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_01","246","122","24","24",null,null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","74","24","0",null,null,null,null,null,this.Div00_00_01.form);
            obj.set_taborder("13");
            obj.set_text("정산확정");
            obj.set_cssclass("btn_Block");
            this.Div00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","524","214","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h50");
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
            this._addPreloadList("fdl","MM::MM10740T01.xfdl");
        };
        
        // User Script
        this.registerScript("MM10740.xfdl", function() {

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
            this.div00.form.cmb00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.div00.form.cmb00_00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
        };
        this.loadIncludeScript("MM10740.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
