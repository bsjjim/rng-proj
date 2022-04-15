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
            this.set_titletext("용품발주(신차)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","438","18","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","398","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","1155","18","140","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("전체");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","4","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","1295","5","10","65",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","86","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("용품요청일자");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","504","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("신차(장기)");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","718","18","125","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02_00","591","18","125","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("용품구매의뢰번호");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","843","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","883","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00_00","939","5","10","65",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","949","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("구매요청");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","1089","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("용품분류");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","52","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","130","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","157","52","241","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","438","52","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("요청자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","504","52","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","563","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","590","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01_00","759","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","825","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","907","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","934","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("서진아이앤디(주)");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1089","50","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("조회번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","1155","50","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_text("차대번호");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","1247","50","111","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","1305","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_text("핫세일");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriodQuater("CalPeriodQuater00","188","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"40","195",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","48","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("용품발주 목록");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","78",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"차량구매요청번호\"/><Cell col=\"3\" text=\"요청일자\"/><Cell col=\"4\" text=\"발주일자\"/><Cell col=\"5\" text=\"발주시간\"/><Cell col=\"6\" text=\"발주번호\"/><Cell col=\"7\" text=\"차종명\"/><Cell col=\"8\" text=\"차량번호\"/><Cell col=\"9\" text=\"장단기\"/><Cell col=\"10\" text=\"보유지점\"/><Cell col=\"11\" text=\"계약번호\"/><Cell col=\"12\" text=\"요청매니저\"/><Cell col=\"13\" text=\"구매유형\"/><Cell col=\"14\" text=\"구매요청번호\"/><Cell col=\"15\" text=\"구매의뢰 Item\"/><Cell col=\"16\" text=\"진행상태\"/><Cell col=\"17\" text=\"용품분류\"/><Cell col=\"18\" text=\"용품코드\"/><Cell col=\"19\" text=\"용품명\"/><Cell col=\"20\" text=\"차대번호\"/><Cell col=\"21\" text=\"차량진행상태\"/><Cell col=\"22\" text=\"장기프로모션명\"/><Cell col=\"23\" text=\"수량\"/><Cell col=\"24\" text=\"단가\"/><Cell col=\"25\" text=\"금액\"/><Cell col=\"26\" text=\"공급업체\"/><Cell col=\"27\" text=\"자산/소모품\"/><Cell col=\"28\" text=\"인수자구분\" cssclass=\"cell_req\"/><Cell col=\"29\" text=\"인수자명\" cssclass=\"cell_req\"/><Cell col=\"30\" text=\"경유지\"/><Cell col=\"31\" text=\"우편번호\" cssclass=\"cell_req\"/><Cell col=\"32\" text=\"주소1\" cssclass=\"cell_req\"/><Cell col=\"33\" text=\"주소2\" cssclass=\"cell_req\"/><Cell col=\"34\" text=\"연락처\" cssclass=\"cell_req\"/><Cell col=\"35\" text=\"용품사전달내용\"/><Cell col=\"36\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","-36","67","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"48","74","24","258",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("발주확정");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"48","50","24","538",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"48","15","24","523",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","963","41","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_02","901","32","50","32",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_01","118","48","58","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("선택건수");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","103","28","15","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","169","48","50","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"48","74","24","180",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"48","74","24","102",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_text("발주준비");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00",null,"48","98","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("발주준비취소");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_00",null,"48","126","24","336",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("14");
            obj.set_text("차대번호선택/해제");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"48","44","24","466",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","284","0","62","78",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("16");
            obj.set_text("예외 78");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","74","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("17");
            obj.set_text("일괄적용");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_02_00","779","20","50","32",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("18");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00",null,"20","155","24","76",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02",null,"20","46","24","1064",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("20");
            obj.set_text("인수자");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","65","24","991",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("21");
            obj.set_type("dropdown");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","61","24","809",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("22");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00_00",null,"20","74","24","349",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("23");
            obj.set_text("일괄적용");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00",null,"20","80","24","909",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("24");
            obj.set_text("123406789");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00",null,"20","24","24","883",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00",null,"20","50","24","754",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00",null,"20","24","24","728",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00",null,"20","167","24","559",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00",null,"20","132","24","425",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("29");
            obj.set_text("P12345");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","106","24","230",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("30");
            obj.set_text("용품사전달내용");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1139","11","20","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("31");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","605","11","20","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("32");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0",null,null,"174","40","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("차량정보");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","44",null,"100","1113",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","11",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","370","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","44","130","100",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("옵션");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","499","44",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","499","77",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","370","77","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","370","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","740","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("출고예정일자");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","740","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("세금계산서");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","740","77","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("출발일자");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","1110","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("CM계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01_00","1110","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","134","16","232","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("txt00","134","49","232","90",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","504","16","232","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00","504","49","232","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_00","504","82","232","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_01","874","49","232","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_01_01","1244","49","240","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_01_01_00","1244","16","240","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","874","16","105","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","874","82","105","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","499","110",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","370","110","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_00_00","504","115","232","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","954","0","20","10",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("용품정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","10",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"구매요청번호\"/><Cell col=\"2\" text=\"품목번호\"/><Cell col=\"3\" text=\"발주번호\"/><Cell col=\"4\" text=\"자재그룹내역\"/><Cell col=\"5\" text=\"내역\"/><Cell col=\"6\" text=\"가격\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("영업정보");
            obj.set_formscrolltype("none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","11",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","370","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","44",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","77",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","370","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","740","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("요청자");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","740","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_text("장단기");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","740","77","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","1110","11","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_text("대여구분");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01_00","1110","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_text("출고요청일");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","134","49","197","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("12");
            obj.set_text("P12345");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_01","874","49","197","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("13");
            obj.set_text("P12345");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00_01_01_00","1244","16","227","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("14");
            obj.set_text("P12345");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","1244","49","105","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","110",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","740","110","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("17");
            obj.set_text("등록지");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","0","44","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("18");
            obj.set_text("계약번호/기간");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_03","0","77","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("19");
            obj.set_text("우편주소");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","0","110","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("20");
            obj.set_text("상세주소");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","16","80","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("21");
            obj.set_text("123406789");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","216","16","115","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("22");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","956","16","115","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("23");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","874","16","80","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("24");
            obj.set_text("123406789");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","504","16","42","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("25");
            obj.set_text("3666");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","548","16","155","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("26");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","504","49","42","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("27");
            obj.set_text("3666");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","548","49","155","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("28");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","82","50","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("29");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01","186","82","362","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","134","115","414","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("31");
            obj.set_text("P12345");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00","874","82","80","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("32");
            obj.set_text("123406789");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","956","82","115","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("33");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00_00_00","874","115","80","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("34");
            obj.set_text("123406789");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","956","115","115","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("35");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","517","557","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
        this.registerScript("MM10300.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.DivSearch.form.Static01_00_00_00_02_00_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
        };
        this.loadIncludeScript("MM10300.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
