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
            this.set_titletext("차량발주");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("4");
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
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","799","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1131","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1214","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","468","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","83","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("요청매니저");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","232","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","508","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","839","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1171","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("장단기");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","89","5","10","70",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","99","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("input_req");
            obj.set_text("구매요청일자");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","201","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","413","18","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("input_req");
            obj.set_text("30일");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","565","5","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","575","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("구매요청번호");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","677","18","122","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","575","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","657","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","684","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","895","6","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","905","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","949","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","976","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb02","905","52","119","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Radio("rad00","1225","18","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("32");
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
            obj.set_taborder("33");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","508","86","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_text("카메이커");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","99","52","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","156","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","183","52","228","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","99","86","312","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","575","86","224","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("39");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divTop","0","DivSearch:0",null,null,"40","384",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("발주진행목록");
            obj.set_cssclass("sta_WF_title1");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"계약서류\" cssclass=\"cell_fix\"/><Cell col=\"4\" text=\"프로모션명\"/><Cell col=\"5\" text=\"출고방식\"/><Cell col=\"6\" text=\"구매요청번호\"/><Cell col=\"7\" text=\"차량출고희망일자\"/><Cell col=\"8\" text=\"발주일자\"/><Cell col=\"9\" text=\"발주번호\"/><Cell col=\"10\" text=\"구매유형\"/><Cell col=\"11\" text=\"장단기\"/><Cell col=\"12\" text=\"구매요청자\"/><Cell col=\"13\" text=\"구매승인자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\" cssclass=\"cell_fix\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","235",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1251","13","15","35",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","1239","14","4","35",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","250",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_text("0/0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","178",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","110","24","64",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_text("할인율일괄적용");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"20","60","24","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("9");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","131","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","0",null,null,"315","40","48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("차량정보");
            obj.set_formscrolltype("none");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","1008","285",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","99","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","99","84",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","99","117",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","99","183",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","99","150",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","99","249",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00","99","216",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("차량정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","272","84","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01","533","51","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("구매요청번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01","533","84","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","533","117","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","775","117","95","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("등록지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_01","533","150","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("대여구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00","533","183","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("장단기");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","775","150","95","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","775","183","95","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00","775","84","95","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_01","533","216","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("공급자코드");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","150","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","183","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("유에가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_01","272","150","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("할인1");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","272","183","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("할인2");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","216","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text(" DC후 구매가");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","249","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_01_00","272","216","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("할인3");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","272","249","90","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("총할인");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","104","56","360","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("32");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00_00","775","51","95","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("요청자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_01_00","533","249","100","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("선급금전표");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","104","122","405","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("35");
            obj.set_value("(14042)  경기 안영시 동안구 전파로 8층(호계동, 신일비젼타워)");
            obj.set_readonly("true");
            obj.set_text("(14042)  경기 안영시 동안구 전파로 8층(호계동, 신일비젼타워)");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","104","89","164","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("36");
            obj.set_value("(0000000010)  롯데렌탈㈜");
            obj.set_readonly("true");
            obj.set_text("(0000000010)  롯데렌탈㈜");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","366","89","85","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("37");
            obj.set_value("2220000069");
            obj.set_readonly("true");
            obj.set_text("2220000069");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","453","89","75","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("계약조회");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","104","155","148","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("39");
            obj.set_format("#,##9");
            obj.set_value("35530000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","248","155","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("40");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","104","188","148","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("41");
            obj.set_format("#,##9");
            obj.set_value("35530000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","248","188","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("42");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","104","221","148","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("43");
            obj.set_format("#,##9");
            obj.set_value("35530000");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","248","221","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","481","155","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("45");
            obj.set_format("#,##9.##");
            obj.set_value("4");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","508","155","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("46");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01","366","155","93","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("47");
            obj.set_format("#,##9");
            obj.set_value("710600");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01","455","155","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00","366","188","93","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("49");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01_00","455","188","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("50");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","481","188","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("51");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","508","188","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_00_00","366","221","93","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("53");
            obj.set_format("#,##9");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01_00_00","455","221","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("54");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","481","221","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("55");
            obj.set_format("#,##9.##");
            obj.set_value("0");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","508","221","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("56");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_01_01","366","254","93","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("57");
            obj.set_format("#,##9");
            obj.set_value("710600");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_01_01","455","254","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("58");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_01","481","254","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("59");
            obj.set_format("#,##9.##");
            obj.set_value("4");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_01","508","254","20","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("60");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","637","56","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("61");
            obj.set_value("0010690909");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("0010690909");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","637","89","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("62");
            obj.set_value("534  채널영업2지점");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("534  채널영업2지점");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","637","122","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("63");
            obj.set_value("534  채널영업2지점");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("534  채널영업2지점");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","637","155","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("64");
            obj.set_value("렌트");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("렌트");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","637","188","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("65");
            obj.set_value("장기");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("장기");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","874","56","129","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("66");
            obj.set_value("R00471 홍길동");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("R00471 홍길동");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","874","89","129","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("67");
            obj.set_value("402 강남영업소");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("402 강남영업소");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00","874","122","129","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("68");
            obj.set_value("402 강남영업소");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("402 강남영업소");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00","874","155","129","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("69");
            obj.set_value("내장기본색");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("내장기본색");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00_00","874","188","129","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("70");
            obj.set_value("미드나잇블랙");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("미드나잇블랙");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","459","154","3","95",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("71");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","252","154","3","95",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("72");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","264","155","8","95",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00_00","471","199","10","45",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("74");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00","511","214","3","45",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("75");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_01","525","184","8","70",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("76");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","637","221","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("77");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("장기");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","637","254","134","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("78");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("장기");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","928","254","75","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("79");
            obj.set_text("전표취소");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","849","254","75","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("80");
            obj.set_text("전표조회");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_01_00_00_00","924","245","4","45",null,null,null,null,null,null,this.tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("81");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Div("div00_00","1028","0",null,"266","0",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("메모내용");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01_00","0","51","95","67",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("구매팀 메모");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_01_00","94","51",null,"67","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","0","117","95","67",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("지점 → 본사");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01_00","94","117",null,"67","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","237","117","95","67",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("본사 → 지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_00","0","183","95","67",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("본사 → CM");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00_00","94","183",null,"67","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","237","183","95","67",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("탁송메모");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00_00_00","237","51","95","67",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("CM메모");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00","99","56","134","57",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("11");
            obj.set_displaynulltext("구매팀 메모 내용 표시");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","336","57",null,"57","4",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("12");
            obj.set_displaynulltext("CM 메모 내용 표시");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_01","99","122","134","57",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("\'지점에서 본사로\' 메모 내용 표시");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00","336","122",null,"57","4",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("14");
            obj.set_displaynulltext("\'본사에서 지점으로’ 메모 내용 표시");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_01_00","99","188","134","57",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("15");
            obj.set_displaynulltext("\'본사에서 CM으로\' 메모 내용 표시");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00_00","336","188",null,"57","4",null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("탁송메모 내용 표시");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("용품정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("Div01","454","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("순회정비계획");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.tab00.Tabpage2.form.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"진행상태\"/><Cell col=\"2\" text=\"용품코드\"/><Cell col=\"3\" text=\"구매요청번호\"/><Cell col=\"4\" text=\"발주번호\"/><Cell col=\"5\" text=\"용품명\"/><Cell col=\"6\" text=\"단가\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:계획일\"/><Cell col=\"2\" text=\"bind:지연일수\"/><Cell col=\"3\" text=\"bind:MOT\"/><Cell col=\"4\" text=\"bind:정비차량번호\"/><Cell col=\"5\" text=\"bind:고객차량번호\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","434","45","20","50",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","434",null,null,"0",null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("옵션정보");
            obj.set_cssclass("sta_WF_title2");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0",null,null,"150","0","0",null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"옵션명\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:대상구분\"/><Cell col=\"1\" text=\"bind:정비\"/><Cell col=\"2\" text=\"bind:외주\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","155","0","60","50",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00_00","0","51","110","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_01","109","51",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","50",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","114","56",null,"24","6",null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("5");
            obj.set_value("TESLA MODEL 3 (E) LONG RANGE");
            obj.set_readonly("true");
            obj.set_text("TESLA MODEL 3 (E) LONG RANGE");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00","47","85","100","15",null,null,null,null,null,null,this.tab00.Tabpage2.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.Div00.addChild(obj.name, obj);

            obj = new Div("div00","0","tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","644",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("발주확정");
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

            obj = new Button("Button00_00_01",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
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

            obj = new Button("Button00_00_02",null,"10","88","28","552",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00",null,"10","88","28","460",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("생산불가");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00",null,"10","112","28","344",null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("생산불가취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01",null,"10","88","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("보류취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_02",null,"10","88","28","160",null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("출고보류");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_03",null,"10","88","28","252",null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("발주보류");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","656","368","100","50",null,null,null,null,null,null,this);
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
        this.registerScript("MM10220.xfdl", function() {

        this.temp_onload = function(obj,e)
        {

        };


        this.divTop_Button00_onclick = function(obj,e)
        {
            this.gfnDivExpand("bottom-bottom",0,this.divTop,obj);
        };

        this.divBottom_Button00_01_onclick = function(obj,e)
        {
            this.gfnDivExpand("height-top",63,this.divBottom,obj);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_onload,this);
            this.divTop.form.Button00_00_01_00_03_00_00_01.addEventHandler("onclick",this.divTop_Button00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("MM10220.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
