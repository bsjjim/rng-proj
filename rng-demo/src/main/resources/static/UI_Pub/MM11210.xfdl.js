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
            obj.set_formscrolltype("none");
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

            obj = new Static("Static01_01_00_00","1188","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Edit("Edit00_01_00_00","99","52","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","156","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","183","52","228","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","575","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("구매요청번호");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","677","18","122","24",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Combo("cmb02","905","52","119","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","1034","52","75","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_text("취소현황");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00","1109","57","14","14",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_tooltiptext("도움말 툴팁입니다.");
            obj.set_cssclass("sta_WF_help");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","1099","53","10","15",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","1315","18","86","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("39");
            obj.set_text("21YHOTY");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Radio("rad00","1241","52","180","24",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Combo("cmb03","99","86","312","24",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Combo("cmb00_00_00","575","86","224","24",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Static("Static01_00_00_01_00_00_00_00","1024","58","10","15",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"40","351",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_cssclass("btn_Block_expand2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","321",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","0",null,null,"282","40","48",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("계약 및 영업정보");
            obj.set_formscrolltype("none");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"251","698",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","89","51","701","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","260","51","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","89","84","701","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","89","117","701","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","260","117","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("차량가격");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","150","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("할인율");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","183","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("월대여료");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","89","150","701","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","89","183","701","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00","0","216","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("계약상품군");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00","89","216","701","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","260","150","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("면세가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","260","183","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("계약월수");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","94","56","162","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("18");
            obj.set_value("(0000000010)  롯데렌탈㈜");
            obj.set_text("(0000000010)  롯데렌탈㈜");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","500","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("업종");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","500","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("예상공헌이익");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","500","150","110","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("예상공헌이익률");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_01","500","183","110","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("확정공헌이익률");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","500","216","110","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("보조금신청지역");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","790","2",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","500","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("업태");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","94","89","402","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("26");
            obj.set_value("(14042)  경기 안영시 동안구 전파로 8층(호계동, 신일비젼타워)");
            obj.set_text("(14042)  경기 안영시 동안구 전파로 8층(호계동, 신일비젼타워)");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","94","122","85","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("27");
            obj.set_value("2220000069");
            obj.set_text("2220000069");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","354","122","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("28");
            obj.set_format("#,##9");
            obj.set_value("63076200");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","474","122","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","354","155","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("30");
            obj.set_format("#,##9");
            obj.set_value("60376200");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","474","155","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","94","155","60","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("32");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","154","155","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","94","188","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("34");
            obj.set_format("#,##9");
            obj.set_value("1125000");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","214","188","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","354","188","60","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("36");
            obj.set_format("#,##9.##");
            obj.set_value("38");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","414","188","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("37");
            obj.set_text("일");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","94","221","402","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("38");
            obj.set_value("신차장기 인수옵션형 표준잔기-법인");
            obj.set_text("신차장기 인수옵션형 표준잔기-법인");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","354","56","89","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("구매요청");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","445","56","51","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("40");
            obj.set_text("수정");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","614","56","172","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("41");
            obj.set_value("사회, 서비스업");
            obj.set_text("사회, 서비스업");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","614","89","172","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("42");
            obj.set_value("정보통신기기및장비렌탈,정보");
            obj.set_text("정보통신기기및장비렌탈,정보");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01","614","122","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("43");
            obj.set_format("#,##9");
            obj.set_value("4798370");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01","734","122","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_01","614","155","60","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("45");
            obj.set_format("#,##9.##");
            obj.set_value("13.03");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_01","674","155","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("46");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00","614","188","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("47");
            obj.set_format("#,##9");
            obj.set_value("0");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01_00","734","188","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","614","221","171","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("49");
            obj.set_value("서울");
            obj.set_text("서울");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","790","98","20","80",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00_00","810","0",null,"250","0",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","51","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","99","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","84","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","99","84",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","117","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("PR요청자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","99","117",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00","0","150","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("대여구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","99","150",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","232","84","75","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","455","84","75","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01","232","117","75","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","455","117","75","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("등록지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01_00","232","150","75","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("장단기");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","455","150","75","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("서류완료");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_02","104","56",null,"24","5",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("17");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","104","89","124","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("18");
            obj.set_value("0010690909");
            obj.set_enable("false");
            obj.set_text("0010690909");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","311","89","42","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("19");
            obj.set_value("534");
            obj.set_enable("false");
            obj.set_text("534");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","355","89","90","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("20");
            obj.set_value("채널영업2지점");
            obj.set_enable("false");
            obj.set_text("채널영업2지점");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","311","122","42","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("21");
            obj.set_value("534");
            obj.set_enable("false");
            obj.set_text("534");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","355","122","90","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("22");
            obj.set_value("채널영업2지점");
            obj.set_enable("false");
            obj.set_text("채널영업2지점");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","104","122","57","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("23");
            obj.set_value("R00471");
            obj.set_enable("false");
            obj.set_text("R00471");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","163","122","65","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("24");
            obj.set_value("홍길순");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","104","155","124","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("25");
            obj.set_value("렌트");
            obj.set_enable("false");
            obj.set_text("렌트");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","311","155","90","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("26");
            obj.set_value("장기");
            obj.set_enable("false");
            obj.set_text("장기");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","534","89","35","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("27");
            obj.set_value("402");
            obj.set_enable("false");
            obj.set_text("402");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","571","89","24","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","598","89",null,"24","5",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("29");
            obj.set_value("강남영업소");
            obj.set_enable("false");
            obj.set_text("강남영업소");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","534","122","35","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("30");
            obj.set_value("402");
            obj.set_enable("false");
            obj.set_text("402");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","571","122","24","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","598","122",null,"24","5",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("32");
            obj.set_value("강남영업소");
            obj.set_enable("false");
            obj.set_text("강남영업소");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_00","534","155",null,"24","5",null,null,null,null,null,this.tab00.Tabpage1.form.Div00_00.form);
            obj.set_taborder("33");
            obj.set_value("서류심사완료");
            obj.set_enable("false");
            obj.set_text("서류심사완료");
            this.tab00.Tabpage1.form.Div00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("차량 및 보험정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"220","698",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("차량정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","109","51","681","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","109","84","681","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","109","117","681","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","260","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("키메이커");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","150","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("CM계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","183","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","109","150","681","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","109","183","681","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","260","150","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("공급상명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","260","183","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("선급금전표");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","114","56","403","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("15");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","521","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","521","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","521","150","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","790","2",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","521","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("출고방식");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","635","122","150","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("21");
            obj.set_value("펄화이트멀티코트");
            obj.set_readonly("true");
            obj.set_text("펄화이트멀티코트");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","635","89","150","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("22");
            obj.set_value("국산차-특판팀");
            obj.set_readonly("true");
            obj.set_text("국산차-특판팀");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","114","89","142","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("0010690909");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","260","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("임시번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00","374","122","143","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("25");
            obj.set_value("TESLATESLA");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01","635","56","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("26");
            obj.set_format("#,##9");
            obj.set_value("63076200");
            obj.set_readonly("true");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01","755","56","20","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("27");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","635","155","150","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("28");
            obj.set_value("블랙");
            obj.set_readonly("true");
            obj.set_text("블랙");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","710","188","75","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("전표조회");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00","374","89","143","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00","374","155","143","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_00","374","188","334","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","114","122","142","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_text("0010690909");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","114","155","142","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_text("0010690909");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","114","188","142","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("0010690909");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","790","98","20","80",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div00_00","810","0",null,"220","0",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","51","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("보험사");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","89","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","84","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("보험기간");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","89","84",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","117","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("에어백/\r\n보험계약");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","89","117",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00","0","150","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("차량구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","89","150",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("보험정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","220","84","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("대인 2");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","440","84","105","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("블랙박스 요율");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01","220","117","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("대물");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","440","117","105","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("지명보험");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01_00","220","150","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("자손");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00","440","150","105","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_02","220","51","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("대인 1");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_01","440","51","105","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("자차");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00_00","0","183","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","89","183",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_01_00_00","220","183","90","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("무보험");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00_00_00","440","183","105","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01","94","56","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00","94","89","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00","94","122","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_00","94","155","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_00_00","94","188","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_00_00_00","314","188","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_00_01","314","155","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_01","314","122","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_01","314","89","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_01","314","56","122","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_00_00_00_00","549","188",null,"24","5",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_00_01_00","549","155",null,"24","5",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_00_01_00","549","122",null,"24","5",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_00_01_00","549","89",null,"24","5",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00_00_00_00_01_01_00","549","56",null,"24","5",null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("TESLATESLA");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00_00.form);
            obj.set_taborder("37");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.Div00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("옵션 및 용품정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div01","454","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("순회정비계획");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.tab00.Tabpage3.form.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"진행상태\"/><Cell col=\"2\" text=\"구매요청번호\"/><Cell col=\"3\" text=\"발주번호\"/><Cell col=\"4\" text=\"공급업체명\"/><Cell col=\"5\" text=\"순번\"/><Cell col=\"6\" text=\"용품구분\"/><Cell col=\"7\" text=\"용품명\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"용품메모\"/><Cell col=\"10\" text=\"발주일자\"/><Cell col=\"11\" text=\"출고일자\"/><Cell col=\"12\" text=\"입고일자\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:계획일\"/><Cell col=\"2\" text=\"bind:지연일수\"/><Cell col=\"3\" text=\"bind:MOT\"/><Cell col=\"4\" text=\"bind:정비차량번호\"/><Cell col=\"5\" text=\"bind:고객차량번호\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","434","130","20","50",null,null,null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","434",null,null,"0",null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("옵션정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0",null,null,"150","0","0",null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"옵션명\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:대상구분\"/><Cell col=\"1\" text=\"bind:정비\"/><Cell col=\"2\" text=\"bind:외주\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","155","0","60","50",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00","0","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_01","109","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","114","56",null,"24","6",null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("5");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00","47","85","100","15",null,null,null,null,null,null,this.tab00.Tabpage3.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab00);
            obj.set_text("등록정보");
            obj.set_formscrolltype("none");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","434",null,null,"0",null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("등록정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","320","0","70","50",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","109","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","109","84",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("등록일자(구청)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","109","117",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","217","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("등록일자(전산)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","217","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("투입일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_01","217","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("배송요청일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","114","56","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("12");
            obj.set_value("001가1234");
            obj.set_readonly("true");
            obj.set_text("001가1234");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","114","89","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("13");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","114","122","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("14");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00","331","122","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("15");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","331","89","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("16");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00","331","56","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.Div00.form);
            obj.set_taborder("17");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.Div00.addChild(obj.name, obj);

            obj = new Div("div00","454","0","439","266",null,null,null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("대외계정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01","0","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_01","109","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01","0","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("차량출고 \r\n희망일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_01","109","84",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("생산예정일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","109","117",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","219","117","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("출고일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_01","0","150","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("차량배정일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00","0","183","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("출발일자(탁송)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","109","150",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00","109","183",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","219","150","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","219","183","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("영상기록장치\r\n번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","114","56","320","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("14");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","333","187","101","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("16");
            obj.set_value("1234567890");
            obj.set_readonly("true");
            obj.set_text("1234567890");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00","219","84","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("검수일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_01","0","214","110","34",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("출발일자(배송)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00_01","109","214",null,"34","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00","333","155","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("21");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","333","122","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("22");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00","333","89","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("23");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00_00","114","155","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("24");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_01","114","122","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("25");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00","114","89","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("26");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00_00_00","114","219","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("27");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_01_00","114","187","85","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00.form);
            obj.set_taborder("28");
            obj.set_format("9999-99-99");
            obj.set_type("string");
            obj.set_value("2022-02-02");
            obj.set_readonly("true");
            this.tab00.Tabpage4.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","434","79","20","80",null,null,null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Div("div00_00","913","0",null,"266","0",null,null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("메모내용");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01_00","0","51","95","67",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("구매팀 메모");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_01_00","94","51",null,"67","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","0","117","95","67",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("지점 → 본사");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01_00","94","117",null,"67","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","282","117","95","67",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("본사 → 지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_00","0","183","95","67",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("본사 → CM");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00_00","94","183",null,"67","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","282","183","95","67",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("탁송메모");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00_00_00","282","51","95","67",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("CM메모");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","99","56","179","57",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("11");
            obj.set_displaynulltext("구매팀 메모 내용 표시");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","381","57",null,"57","4",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("12");
            obj.set_displaynulltext("CM 메모 내용 표시");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_01","99","122","179","57",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("\'지점에서 본사로\' 메모 내용 표시");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00","381","122",null,"57","4",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("14");
            obj.set_displaynulltext("\'본사에서 지점으로’ 메모 내용 표시");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_01_00","99","188","179","57",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("\'본사에서 CM으로\' 메모 내용 표시");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00_00","381","188",null,"57","4",null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("탁송메모 내용 표시");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage4.form.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","893","89","20","80",null,null,null,null,null,null,this.tab00.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Div("div00","0","tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","569","401","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
