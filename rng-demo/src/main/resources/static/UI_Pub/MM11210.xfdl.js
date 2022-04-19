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
            this.set_titletext("구매진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","508","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("고유번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","227","76","80","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","839","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","799","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1248","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("차종코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1208","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1305","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","468","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","83","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("요청매니저");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","232","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","508","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","839","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1248","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("장단기");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","89","5","10","70",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","99","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("input_req");
            obj.set_text("구매요청일자");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","201","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","413","18","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("input_req");
            obj.set_text("30일");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","565","5","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","99","52","67","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_displaynulltext("(사원번호)");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","168","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","195","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","575","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("구매요청번호");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","677","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","575","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","657","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","684","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","895","6","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","982","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1026","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1053","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb02","905","52","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","985","52","75","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_text("취소현황");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00","1060","57","14","14",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_tooltiptext("도움말 툴팁입니다.");
            obj.set_cssclass("sta_WF_help");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","1050","53","10","15",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","1315","18","86","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("39");
            obj.set_text("21YHOTY");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Radio("rad00","1316","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_rad00_innerdataset = new nexacro.NormalDataset("DivSearch_form_rad00_innerdataset", obj);
            DivSearch_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">단기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">장기</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_rad00_innerdataset);
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","83","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("41");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","99","90","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("42");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","508","86","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("43");
            obj.set_text("카메이커");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","575","86","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("44");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb02_00","905","18","75","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("45");
            obj.set_text("계약지점");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"40","365",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("구매진행목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"진행상태\" cssclass=\"cell_fix\"/><Cell col=\"2\" text=\"계약서류\"/><Cell col=\"3\" text=\"키메이커\"/><Cell col=\"4\" text=\"차종코드\"/><Cell col=\"5\" text=\"차종명\"/><Cell col=\"6\" text=\"장단기\"/><Cell col=\"7\" text=\"구매목적\"/><Cell col=\"8\" text=\"고객명\"/><Cell col=\"9\" text=\"PR요청자\"/><Cell col=\"10\" text=\"본부\"/><Cell col=\"11\" text=\"계약지점\"/><Cell col=\"12\" text=\"견적일자\"/><Cell col=\"13\" text=\"견적번호\"/><Cell col=\"14\" text=\"계약일자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"cell_fix\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","307",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1179","13","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","1167","14","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","250",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","202",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","134","24","64",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("경유지일괄변경 양식");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"20","60","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"20","50","24","355",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0 /");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","321",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div01:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","510","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("tab00","0","20",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.tab00);
            obj.set_text("계약 및 영업정보");
            this.Div00.form.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.Div00.form.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","89","51","701","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","260","51","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","89","84","701","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","89","117","701","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","260","117","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("차량가격");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","150","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("할인율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","183","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("월대여료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","89","150","701","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","89","183","701","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00","0","216","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("계약상품군");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00","89","216","701","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","260","150","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("면세가");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","260","183","90","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("계약월수");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","810","51","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","909","51",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","810","84","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","909","84",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","810","117","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("PR요청자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","909","117",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00","810","150","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("대여구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","909","150",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","810","18","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","790","98","20","80",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("27");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","94","56","160","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("28");
            obj.set_value("(0000000010)  롯데렌탈㈜");
            obj.set_readonly("true");
            obj.set_text("(0000000010)  롯데렌탈㈜");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","500","51","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("업종");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","500","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("예상공헌이익");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","500","150","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("예상공헌이익율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_01","500","183","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("확정공헌이익율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","500","216","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("보조금신청지역");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","790","2",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","500","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("업태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","94","89","395","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("37");
            obj.set_value("(14042)  경기 안영시 동안구 전파로 8층(호계동, 신일비젼타워)");
            obj.set_readonly("true");
            obj.set_text("(14042)  경기 안영시 동안구 전파로 8층(호계동, 신일비젼타워)");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","94","122","85","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("38");
            obj.set_value("2220000069");
            obj.set_readonly("true");
            obj.set_text("2220000069");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","354","122","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("39");
            obj.set_format("#,##9");
            obj.set_value("63076200");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","474","122","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("40");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","354","155","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("41");
            obj.set_format("#,##9");
            obj.set_value("60376200");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","474","155","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("42");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","94","155","60","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("43");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","154","155","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","94","188","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("45");
            obj.set_format("#,##9");
            obj.set_value("1125000");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","214","188","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("46");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","354","188","60","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("47");
            obj.set_format("#,##9.##");
            obj.set_value("38");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","414","188","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("일");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","94","221","395","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("49");
            obj.set_value("신차장기 인수옵션형 표준잔기-법인");
            obj.set_readonly("true");
            obj.set_text("신차장기 인수옵션형 표준잔기-법인");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","354","56","80","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_text("구매요청");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","437","56","51","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("수정");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","614","56","170","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("52");
            obj.set_value("사회, 서비스업");
            obj.set_readonly("true");
            obj.set_text("사회, 서비스업");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","614","89","170","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("53");
            obj.set_value("정보통신기기및장비렌탈,정보");
            obj.set_readonly("true");
            obj.set_text("정보통신기기및장비렌탈,정보");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01","614","122","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("54");
            obj.set_format("#,##9");
            obj.set_value("4798370");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01","734","122","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("55");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_01","614","155","60","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("56");
            obj.set_format("#,##9.##");
            obj.set_value("13.03");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_01","674","155","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("57");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00","614","188","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("58");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01_00","734","188","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("59");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","614","221","170","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("60");
            obj.set_value("서울");
            obj.set_readonly("true");
            obj.set_text("서울");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","1042","84","75","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("61");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","1265","84","75","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("62");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","810","50",null,"2","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01","1042","117","75","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("63");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","1265","117","75","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("64");
            obj.set_text("등록지");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01_00","1042","150","75","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("65");
            obj.set_text("장단기");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","1265","150","75","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("66");
            obj.set_text("서류완료");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_02","914","56",null,"24","90",null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("67");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","914","89","85","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("68");
            obj.set_value("0010690909");
            obj.set_enable("false");
            obj.set_text("0010690909");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","1121","89","42","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("69");
            obj.set_value("534");
            obj.set_enable("false");
            obj.set_text("534");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1165","89","90","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("70");
            obj.set_value("채널영업2지점");
            obj.set_enable("false");
            obj.set_text("채널영업2지점");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","1121","122","42","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("71");
            obj.set_value("534");
            obj.set_enable("false");
            obj.set_text("534");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","1165","122","90","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("72");
            obj.set_value("채널영업2지점");
            obj.set_enable("false");
            obj.set_text("채널영업2지점");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","914","122","57","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("73");
            obj.set_value("R00471");
            obj.set_enable("false");
            obj.set_text("R00471");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","973","122","60","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("74");
            obj.set_value("홍길순");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","914","155","65","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("75");
            obj.set_value("렌트");
            obj.set_enable("false");
            obj.set_text("렌트");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","1121","155","90","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("76");
            obj.set_value("장기");
            obj.set_enable("false");
            obj.set_text("장기");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","1344","89","35","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("77");
            obj.set_value("402");
            obj.set_enable("false");
            obj.set_text("402");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","1381","89","24","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("78");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","1409","89","70","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("79");
            obj.set_value("강남영업소");
            obj.set_enable("false");
            obj.set_text("강남영업소");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","1344","122","35","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("80");
            obj.set_value("402");
            obj.set_enable("false");
            obj.set_text("402");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","1381","122","24","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("81");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","1409","122","70","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("82");
            obj.set_value("강남영업소");
            obj.set_enable("false");
            obj.set_text("강남영업소");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_00","1344","155","70","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("83");
            obj.set_value("서류심사완료");
            obj.set_enable("false");
            obj.set_text("서류심사완료");
            this.Div00.form.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.tab00);
            obj.set_text("차량 및 보험정보");
            this.Div00.form.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"250","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.Div00.form.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("차량정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","109","51","731","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","109","84","731","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","109","117","731","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","280","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("키메이커");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","150","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("CM계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","183","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","109","150","731","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","109","183","731","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","280","150","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("공급상명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","280","183","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("선급금전표");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","860","51","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("보험사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","959","51",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","860","84","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("보험기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","959","84",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","860","117","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("에어백 \r\n/ 보험계약");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","959","117",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00","860","150","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("차량구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","959","150",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","860","18","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("보험정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","840","98","20","80",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","114","56","400","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("25");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","550","51","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","550","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","550","150","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","840","2",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","550","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("출고방식");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","664","122","170","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("32");
            obj.set_value("펄화이트멀티코트");
            obj.set_readonly("true");
            obj.set_text("펄화이트멀티코트");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","664","89","170","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("33");
            obj.set_value("국산차-특판팀");
            obj.set_readonly("true");
            obj.set_text("국산차-특판팀");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","1075","84","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("대인 2");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","1275","84","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("블랙박스 요율");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01","1075","117","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("대물");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","1275","117","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("37");
            obj.set_text("지명보험");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01_00","1075","150","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("자손");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","1275","150","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","114","89","85","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("40");
            obj.set_value("0010690909");
            obj.set_readonly("true");
            obj.set_text("0010690909");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","280","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("임시번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00","394","122","115","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("42");
            obj.set_value("TESLATESLA");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01","664","56","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("43");
            obj.set_format("#,##9");
            obj.set_value("63076200");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01","784","56","20","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","664","155","170","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("45");
            obj.set_value("블랙");
            obj.set_readonly("true");
            obj.set_text("블랙");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","759","188","75","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("46");
            obj.set_text("전표조회");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_02","1075","51","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("대인 1");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_01","1275","51","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("자차");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","860","50",null,"2","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00_00","860","183","100","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("49");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","959","183",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01_00_00","1075","183","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("무보험");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00","1275","183","80","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.tab00);
            obj.set_text("옵션 및 용품정보");
            this.Div00.form.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","624",null,null,"0",null,null,null,null,this.Div00.form.tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.Div00.form.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","624",null,null,"0",null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.Div00.form.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("옵션정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0",null,null,"145","0","0",null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"옵션명\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:대상구분\"/><Cell col=\"1\" text=\"bind:정비\"/><Cell col=\"2\" text=\"bind:외주\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","155","0","60","50",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00","0","51","150","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_01","149","51",null,"34","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","50",null,"2","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","154","56","465","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00","47","85","100","20",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage3.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","Div00:20","0",null,null,"0","0",null,null,null,null,this.Div00.form.tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.Div00.form.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("순회정비계획");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"진행상태\"/><Cell col=\"2\" text=\"구매요청번호\"/><Cell col=\"3\" text=\"발주번호\"/><Cell col=\"4\" text=\"공급업체명\"/><Cell col=\"5\" text=\"순번\"/><Cell col=\"6\" text=\"용품구분\"/><Cell col=\"7\" text=\"용품명\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"용품메모\"/><Cell col=\"10\" text=\"발주일자\"/><Cell col=\"11\" text=\"출고일자\"/><Cell col=\"12\" text=\"입고일자\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:계획일\"/><Cell col=\"2\" text=\"bind:지연일수\"/><Cell col=\"3\" text=\"bind:MOT\"/><Cell col=\"4\" text=\"bind:정비차량번호\"/><Cell col=\"5\" text=\"bind:고객차량번호\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Div00.form.tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","624","130","20","50",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.tab00);
            obj.set_text("등록정보");
            this.Div00.form.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form.tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.Div00.form.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("등록정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","109","51","406","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","109","84","406","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("등록일자(구청)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","109","117","406","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","257","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("등록일자(전산)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","515","96","20","80",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","257","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("투입일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","535","18","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("대외계정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01","535","51","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_01","644","51","386","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01","535","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("차량출고 \r\n희망일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_01","644","84","386","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","535","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("생산예정일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","644","117","386","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","777","117","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("출고일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_01","535","150","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("차량배정일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00","535","183","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("출발일자(탁송)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","644","150","386","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00","644","183","386","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","777","150","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","777","183","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("영상지록장치\r\n번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","649","56","360","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("26");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","535","50","495","2",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","891","188","85","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("28");
            obj.set_value("1234567890");
            obj.set_readonly("true");
            obj.set_text("1234567890");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00","777","84","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("검수일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","1050","17","120","30",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("메모내용");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01_00","1050","50","110","67",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("구매팀 메모");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_01_00","1159","50",null,"67","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","1050","116","110","67",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("지점 → 본사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01_00","1159","116",null,"67","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","1268","116","110","67",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("본사 → 지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_00","1050","182","110","67",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("본사 → CM");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00_00","1159","182",null,"67","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","1268","182","110","67",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("탁송메모");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1030","95","20","80",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("40");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_01","257","51","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("배송요청일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","515","2",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","114","56","85","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("42");
            obj.set_value("001가1234");
            obj.set_readonly("true");
            obj.set_text("001가1234");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","114","89","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","114","122","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("44");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01","371","122","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00","371","89","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_00","371","56","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01","649","89","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_01","535","216","110","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("49");
            obj.set_text("출발일자(배송)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00_01","644","216","386","34",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00_00_00","1268","50","110","67",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("CM메모");
            obj.set_cssclass("sta_DA_label");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1050","49",null,"2","0",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_00","649","122","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_00_00","649","155","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_00_00_00","649","188","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("54");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_00_00_00_00","649","221","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_01","891","89","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_01_00","891","122","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01_00_01_01_00_00","891","155","105","24",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("58");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_readonly("true");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","1164","56","100","57",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("59");
            obj.set_displaynulltext("구매팀 메모 내용 표시");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","1382","56",null,"57","5",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("60");
            obj.set_displaynulltext("CM 메모 내용 표시");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_01","1164","121","100","57",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("61");
            obj.set_displaynulltext("\'지점에서 본사로\' 메모 내용 표시");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00","1382","121",null,"57","5",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("62");
            obj.set_displaynulltext("\'본사에서 지점으로’ 메모 내용 표시");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_01_00","1164","187","100","57",null,null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("63");
            obj.set_displaynulltext("\'본사에서 CM으로\' 메모 내용 표시");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00_00","1382","187",null,"57","5",null,null,null,null,null,this.Div00.form.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("64");
            obj.set_displaynulltext("탁송메모 내용 표시");
            this.Div00.form.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","540",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("보류요청");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","36","0",null,null,null,null,this.div00.form);
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

            obj = new Button("Button00_00_01",null,"10","64","28","288",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","0","10","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("연계팝업");
            obj.set_cssclass("btn_Comm_popup");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_02_00","106","10","92","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            obj.set_iconPosition("left");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","202","10","200","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cmb_Comm_link");
            obj.set_text("연계화면 바로가기");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02",null,"10","88","28","448",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("보류취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00",null,"10","88","28","356",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("발주취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02",null,"10","115","28","169",null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("등록증출력");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02_00",null,"10","165","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("보험가입증명서 출력");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","DivSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Button00_00_01_00_03_00_00_01.addEventHandler("onclick",this.divTop_Button00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("MM11210.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
