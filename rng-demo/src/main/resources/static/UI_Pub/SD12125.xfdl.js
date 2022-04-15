(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp01");
            this.set_titletext("중고차 월간단기(정비/사고) 견적");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"233","794",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("견적일자");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","348","18","73","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label_req");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","308","0","40","162",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("견적지점");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","202","0","84","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","165",null,"84","18",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","172","178","84","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("견적번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","120","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00_00","137","144","84","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","348","86","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("고객");
            obj.set_cssclass("sta_SA_label_req");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","348","52","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("포괄계약코드");
            obj.set_cssclass("sta_SA_label");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","348","120","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","112","154","106","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">직접영업</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","154","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("영업채널코드");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","348","154","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("채널상세유형");
            obj.set_cssclass("sta_SA_label");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","20","188","93","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","112","18","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","112","52","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","156","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","183","52","125","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("input_req");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","112","86","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","194","86","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","112","120","106","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","112","188","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","156","188","152","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_form_cmb00_00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">월간단기 정비대차</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","441","18","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","500","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","527","18","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","441","52","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","523","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","550","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_00","589","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_form_cmb00_00_00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">영업매니저</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","441","86","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("input_req");
            obj.set_text("1234067890");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","528","86","56","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("input_req");
            obj.set_text("김나나");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","586","86","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("input_req");
            obj.set_text("김나나");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","440","120","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","522","120","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00_01","441","154","140","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_00_01_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_00_01_innerdataset", obj);
            div00_form_cmb00_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">직접영업</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">SP 직영알선</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","div00:0",null,null,"794","288",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","18","120","30",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("차량정보");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"보유지점\"/><Cell col=\"3\" text=\"차량순번\"/><Cell col=\"4\" text=\"차량번호\"/><Cell col=\"5\" text=\"차종\"/><Cell col=\"6\" text=\"사용일자\"/><Cell col=\"7\" text=\"월대여료(VAT포함)\"/><Cell col=\"8\" text=\"예약상태\"/><Cell col=\"9\" text=\"보증금\"/><Cell col=\"10\" text=\"선수금\"/><Cell col=\"11\" text=\"계약기간\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","162",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("예약현황");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","108",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","50","24","54",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("예약");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_02",null,"20","50","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","div00:-52.72%","233","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","734","634","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","5","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("보험정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("보험연령");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","36","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","352","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("대물조건");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("자손조건");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00","129","69","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","102","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("운전자범위");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","102","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","352","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("무보험차상해");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","134","41","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_req");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">만21세</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00_00","2","24","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","178",null,"107","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","8",null,"24","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("표준: 계약자 본인 및 배우자, 계약자와 배우자의 직계 가족 및 형제자매(개인사업자의 경우 계약자 사업장의 임직원 포함)");
            obj.set_cssclass("sta_txt_descDot");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","61","26","100","10",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00","61","48","100","10",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","30",null,"24","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("계약자 및 계약자가 지정한 자: 운전자범위 <표준> 대상 외 제3자 지정 시");
            obj.set_cssclass("sta_txt_descDot");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","18","51",null,"24","0",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("임직원 운전자 한정 운전: 법인의 임직원 및 법인의 업무를 위하여 대여차량을 운행하는 자로서 법인과 계약관계에 있는 ");
            obj.set_cssclass("sta_txt_descDot");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","27","72",null,"24","36",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("업체에 소속된 자");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00","61","69","100","10",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","64","90","100","15",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","135","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("법률특약여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","135","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00","352","135","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("특별요율코드");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00","486","41","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2천만원</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_01","134","74","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_01_innerdataset", obj);
            Div00_form_Combo00_00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">자손1천5백만원</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00_00","486","74","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미가입</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_01_00","134","107","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_01_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_01_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">표준</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_01_00_00","134","140","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_01_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_01_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미가입</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_01_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_01_00_00_00","486","140","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_01_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_01_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_01_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">해당없음</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_01_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","0","305","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","360","285","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","0","336","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00_00","119","336","615","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00","227","336","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00","0","369","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("대여 KM");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00","119","369","615","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01","0","402","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("반납 KM");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_01","119","402","615","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","227","369","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("대여 OIL");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","0","335",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00_00_00","2","324","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00","227","402","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("반납 OIL");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00_00_00","351","374","111","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미가입</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_01_00_00_00_00","351","407","111","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_00_01_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_00_01_00_00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_00_01_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_00_01_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00_00","467","369","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("대여 유류량");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00_00","467","402","120","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("반납 유류량");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","124","341","99","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","351","341","111","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_text("123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","124","374","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_format("#,###.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","184","374","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00","124","407","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_format("#,###.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","184","407","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_01","591","374","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_format("#,###.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01","651","374","25","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("ℓ");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01_00","651","407","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("ℓ");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_01_00","591","407","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_format("#,###.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","678","374","51","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("저장");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","0","455","295","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("비고/특약사항(견적서 출력시 인쇄됩니다)");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","360","435","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_02","0","487","120","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("비고사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_02","119","487","615","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","485",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00_01","2","474","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01_00","0","560","120","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01_00","119","560","615","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","124","492",null,"64","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","124","565",null,"64","5",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_03","103","18","10","195",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_03_00","432","12","10","195",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","divGridWapper:0",null,"366","794",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("정비내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("정비접수번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","352","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("장기계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("일차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","352","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("MOT수행자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","352","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("원차종");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","95","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_req");
            obj.set_text("1234067890");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","231","56","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","202","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("배차구분");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","360","182","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","233","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("운송방법");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","233",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","352","233","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("인수자명");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","266","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","266",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","299","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","299",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","134","238","90","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("input_req");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_00_innerdataset", obj);
            Div00_00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">탁송업체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Autocare</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">내부직원</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","232",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","486","238","132","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00","2","221","100","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("고객부담금");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","129","150",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","352","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","89","80","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_text("123456789");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","486","89","180","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","486","122","180","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","134","122","76","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_text("123허1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","134","155","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_format("#,###");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","254","155","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","486","155","242","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","332","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_text("기타요청사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","129","332",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","234","238","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_text("고객주소화동일");
            obj.set_value("true");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","134","271","104","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01","352","266","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_text("이동요청번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00","441","276","14","14",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_tooltiptext("이동요청번호");
            obj.set_cssclass("sta_WF_help");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","486","271","104","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("43");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","304","50","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("44");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","186","304","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("45");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01","213","304","242","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_01","457","304","272","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00","134","337",null,"24","5",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("49");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","486","56","240","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("50");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div00_00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","264",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("계약생성");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","100","28","92",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("게약서 출력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","-53","38",null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"10","64","28","196",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("츨력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02",null,"10","88","28","356",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","88","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("견적저장");
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
        this.registerScript("SD12125.xfdl", function() {

        this.temp01_onload = function(obj,e)
        {
        	this.gfnDivSearchExpand(this.btnSearchExpand,this.divSearch);
        };



        this.Button01_onclick = function(obj,e)
        {

        };

        this.btnSearchExpand_onclick = function(obj,e)
        {
            this.gfnDivSearchExpand(obj,this.divSearch);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SD12125.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
