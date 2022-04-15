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
            this.set_titletext("지급내역 확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("2");
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
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","287","0","40","110",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","327","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","614","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","654","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","129","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","395","18","219","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","1054","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","986","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","86","18","201","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_innerdataset", obj);
            div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">위탁장기</Col><Col id=\"datacolumn\">위탁장기</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_innerdataset);
            obj.set_text("차량등록일자");
            obj.set_value("차량등록일자");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","1054","52","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">211010010(외상매입금-영업)</Col><Col id=\"datacolumn\">211010010(외상매입금-영업)</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("211010010(외상매입금-영업)");
            obj.set_value("211010010(외상매입금-영업)");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","86","52","201","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","946","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","654","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","986","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","327","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("작성부서");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","20","86","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("작성자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01_00","722","52","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01_00","804","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01_00","831","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("서진아이앤디(주)");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","722","18","224","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","395","52","35","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_value("A06");
            obj.set_text("A06");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","432","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","459","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_value("전략기획팀");
            obj.set_text("전략기획팀");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","86","86","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","145","86","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","172","86","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","134","76","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","212",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("전표조회");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"imagecontrol\" edittype=\"none\" text=\"theme://images/flag.png\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"전표번호\"/><Cell col=\"3\" text=\"회계연도\"/><Cell col=\"4\" text=\"전기일자\"/><Cell col=\"5\" text=\"공급업체\"/><Cell col=\"6\" text=\"G/L계정\"/><Cell col=\"7\" text=\"전표금액\"/><Cell col=\"8\" text=\"정산금액\"/><Cell col=\"9\" text=\"미정산잔액\"/><Cell col=\"10\" text=\"지급처\"/><Cell col=\"11\" text=\"지급처명\"/><Cell col=\"12\" text=\"지급금액\"/><Cell col=\"13\" text=\"G/L계정\"/><Cell col=\"14\" text=\"지급기산일자\"/><Cell col=\"15\" text=\"계약번호\"/><Cell col=\"16\" text=\"상품구분\"/><Cell col=\"17\" text=\"발주번호\"/><Cell col=\"18\" text=\"작성부서\"/><Cell col=\"19\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/><Cell col=\"17\" text=\"bind:Column3\"/><Cell col=\"18\" text=\"bind:Column3\"/><Cell col=\"19\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","262",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","74","24","386",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("일괄적용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","71","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","85","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","136","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","335",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","319",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1167","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","331",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","80","24","925",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("지급기산일자");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1102","10","50","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"0","20","50","724",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00_00_00",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("확정내역 조회");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","820",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","182",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","210","24","462",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_cmb00_00_innerdataset = new nexacro.NormalDataset("Div01_form_cmb00_00_innerdataset", obj);
            Div01_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">211020020(미지급금-자금출금)</Col><Col id=\"datacolumn\">211020020(미지급금-자금출금)</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_cmb00_00_innerdataset);
            obj.set_text("211020020(미지급금-자금출금)");
            obj.set_value("211020020(미지급금-자금출금)");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00_00",null,"20","74","24","744",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("일괄적용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00_00",null,"20","50","24","675",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("G/L계정");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","div00:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","Div01:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("지급 확정내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"imagecontrol\" edittype=\"none\" text=\"theme://images/flag.png\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"지급처\"/><Cell col=\"3\" text=\"지급처명\"/><Cell col=\"4\" text=\"G/L계정\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"지급기산일자\"/><Cell col=\"7\" text=\"은행유형\"/><Cell col=\"8\" text=\"은행\"/><Cell col=\"9\" text=\"계좌번호\"/><Cell col=\"10\" text=\"지급방법\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","50","24","48",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("전표");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","105","24","585",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("처리일자(전기일자)");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","475",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00_00",null,"20","74","24","386",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"20","140","24","100",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00",null,"20","140","24","242",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_text("Lotte Rental");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"0","20","50","689",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00",null,"20","392","24","709",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("11");
            obj.set_text("Lotte Rental");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00_00",null,"20","24","24","1106",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("12");
            obj.set_text("적요");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00",null,"0","15","50","460",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);
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
        this.registerScript("MM30600.xfdl", function() {

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
            this.Div01.form.Button00_00_01_00_01_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
            this.Div01.form.cmb00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.Div01.form.Button00_00_01_00_01_00_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
            this.Div01_00.form.Button00_00_01_00_01_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
            this.Div01_00.form.Button00_00_01_00_01_00_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
        };
        this.loadIncludeScript("MM30600.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
