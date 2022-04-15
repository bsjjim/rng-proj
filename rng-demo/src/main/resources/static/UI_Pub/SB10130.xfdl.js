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
            this.set_titletext("미처리내역관리(청구)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"39","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","17","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","433","18","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","772","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","140","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","866","19","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","910","19","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","937","19","158","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","433","52","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01","1135","18","64","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","393","2","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","732","2","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod01","183","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","1201","18","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","1288","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","1315","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","513","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01_00","572","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","599","52","133","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","772","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","866","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","953","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","980","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","1097","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","20","52","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("청구부서");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","86","52","35","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("A06");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","123","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","150","52","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("전략기획팀");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01_00","1095","2","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","513","19","35","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("A06");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","550","19","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","577","19","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("전략기획팀");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00_00","86","18","95","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var divSearch_form_cmb01_00_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_00_00_innerdataset", obj);
            divSearch_form_cmb01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0","28%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","98","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("미처리내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","167","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"내역\"/><Cell col=\"2\" text=\"미청구건수\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","122",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","92",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","divGridWapper:20","divSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","103","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","102","0","100","50",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"계약번호\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"차량번호\"/><Cell col=\"4\" text=\"상품군명\"/><Cell col=\"5\" text=\"결제고객번호\"/><Cell col=\"6\" text=\"결제고객명\"/><Cell col=\"7\" text=\"결제담당자명\"/><Cell col=\"8\" text=\"청구회차\"/><Cell col=\"9\" text=\"통합청구번호\"/><Cell col=\"10\" text=\"청구구분\"/><Cell col=\"11\" text=\"사고접수번호\"/><Cell col=\"12\" text=\"결제방법\"/><Cell col=\"13\" text=\"청구일자\"/><Cell col=\"14\" text=\"결제일자\"/><Cell col=\"15\" text=\"청구금액\"/><Cell col=\"16\" text=\"발행구분\"/><Cell col=\"17\" text=\"수납상태\"/><Cell col=\"18\" text=\"세금계산서발행일\"/><Cell col=\"19\" text=\"청구발송여부\"/><Cell col=\"20\" text=\"청구보류\"/><Cell col=\"21\" text=\"계약지점\"/><Cell col=\"22\" text=\"청구부서\"/><Cell col=\"23\" text=\"청구매니저\"/><Cell col=\"24\" text=\"미청구사유\"/><Cell col=\"25\" text=\"등록사원\"/><Cell col=\"26\" text=\"(세금)계산서번호\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column9\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column10\"/><Cell col=\"4\" text=\"bind:Column11\"/><Cell col=\"5\" text=\"bind:Column12\"/><Cell col=\"6\" text=\"bind:Column13\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:Column14\"/><Cell col=\"8\" text=\"bind:Column14\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" textAlign=\"center\"/><Cell col=\"2\" text=\"합계\" textAlign=\"center\" cssclass=\"cell_fix\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\" text=\"0\" displaytype=\"number\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band></Format></Formats>");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","122",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","92",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00",null,"10","50","25","121",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"20","71","24","530",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("10");
            obj.set_text("미처리사유");
            obj.set_cssclass("sta_SA_label_req");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00",null,"20","300","24","223",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","50","24","171",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_Custom");
            this.divGridWapper00.addChild(obj.name, obj);
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
            this.divGridWapper00.form.Static00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
        };
        this.loadIncludeScript("SB10130.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
