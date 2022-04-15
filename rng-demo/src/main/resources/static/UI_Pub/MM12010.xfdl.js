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
            this.set_titletext("(대외계)차량출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"97","40",null,null,null,null,null,this);
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
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","398","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","438","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","732","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","772","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","304","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","840","18","140","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">출고지시(가격보류)</Col><Col id=\"datacolumn\">출고지시(가격보류)</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_value("출고지시(가격보류)");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","188","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1101","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("카메이커");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","86","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_innerdataset", obj);
            div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">차량등록일자</Col><Col id=\"datacolumn\">차량등록일자</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_innerdataset);
            obj.set_text("차량등록일자");
            obj.set_value("차량등록일자");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","1167","18","125","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("르노코리아자동차");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","86","52","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","130","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","157","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("서진아이앤디(주)");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","980","0","15","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","996","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("취소대상");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_00","506","18","95","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("CM계약번호");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01_00","603","18","129","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("서진아이앤디(주)");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1061","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","195",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_01",null,"20","122","24","414",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("일괄등록 양식다운");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("출고 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"출고가능여부\"/><Cell col=\"4\" text=\"변경이력\"/><Cell col=\"5\" text=\"발주일자\"/><Cell col=\"6\" text=\"발주번호\" cssclass=\"cell_fix\"/><Cell col=\"7\" text=\"계약지점\"/><Cell col=\"8\" text=\"차종명\"/><Cell col=\"9\" text=\"옵션명\"/><Cell col=\"10\" text=\"외장색상\"/><Cell col=\"11\" text=\"내장색상\"/><Cell col=\"12\" text=\"소비자가\"/><Cell col=\"13\" text=\"유예가\"/><Cell col=\"14\" text=\"할인액\"/><Cell col=\"15\" text=\"할인율\"/><Cell col=\"16\" text=\"DC후구매가\"/><Cell col=\"17\" text=\"국가보조금\"/><Cell col=\"18\" text=\"포인트\"/><Cell col=\"19\" text=\"본사-&gt;CM\"/><Cell col=\"20\" text=\"차량출고희망일\"/><Cell col=\"21\" text=\"생산예정일\"/><Cell col=\"22\" text=\"차량배정일\"/><Cell col=\"23\" text=\"출문예정일\"/><Cell col=\"24\" text=\"출고방식\"/><Cell col=\"25\" text=\"CM계약번호\"/><Cell col=\"26\" text=\"출고금액\"/><Cell col=\"27\" text=\"공급가액\"/><Cell col=\"28\" text=\"세액\"/><Cell col=\"29\" text=\"금액차이분\"/><Cell col=\"30\" text=\"추가탁송비\"/><Cell col=\"31\" text=\"출고지\"/><Cell col=\"32\" text=\"출고지명\"/><Cell col=\"33\" text=\"세금계산서일자\"/><Cell col=\"34\" text=\"차대번호\"/><Cell col=\"35\" text=\"임시번호\"/><Cell col=\"36\" text=\"CM메모\"/><Cell col=\"37\" text=\"제작일자\"/><Cell col=\"38\" text=\"신차탁송이동요청번호\"/><Cell col=\"39\" text=\"출발일자\"/><Cell col=\"40\" text=\"탁송사 접수여부\"/><Cell col=\"41\" text=\"경유지\"/><Cell col=\"42\" text=\"등록지\"/><Cell col=\"43\" text=\"등록일(구청)\"/><Cell col=\"44\" text=\"차량번호\"/><Cell col=\"45\" text=\"차량등록증\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\" cssclass=\"cell_fix\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/><Cell col=\"17\" text=\"bind:Column3\"/><Cell col=\"18\" text=\"bind:Column3\"/><Cell col=\"19\" text=\"bind:Column3\"/><Cell col=\"20\" text=\"bind:Column3\"/><Cell col=\"21\" text=\"bind:Column3\"/><Cell col=\"22\" text=\"bind:Column3\"/><Cell col=\"23\" text=\"bind:Column3\"/><Cell col=\"24\" text=\"bind:Column3\"/><Cell col=\"25\" text=\"bind:Column3\"/><Cell col=\"26\" text=\"bind:Column3\"/><Cell col=\"27\" text=\"bind:Column3\"/><Cell col=\"28\" text=\"bind:Column3\"/><Cell col=\"29\" text=\"bind:Column3\"/><Cell col=\"30\" text=\"bind:Column3\"/><Cell col=\"31\" text=\"bind:Column3\"/><Cell col=\"32\" text=\"bind:Column3\"/><Cell col=\"33\" text=\"bind:Column3\"/><Cell col=\"34\" text=\"bind:Column3\"/><Cell col=\"35\" text=\"bind:Column3\"/><Cell col=\"36\" text=\"bind:Column3\"/><Cell col=\"37\" text=\"bind:Column3\"/><Cell col=\"38\" text=\"bind:Column3\"/><Cell col=\"39\" text=\"bind:Column3\"/><Cell col=\"40\" text=\"bind:Column3\"/><Cell col=\"41\" text=\"bind:Column3\"/><Cell col=\"42\" text=\"bind:Column3\"/><Cell col=\"43\" text=\"bind:Column3\"/><Cell col=\"44\" text=\"bind:Column3\"/><Cell col=\"45\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","540",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","74","24","664",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("일괄적용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","43","24","1275",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("CM메모");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","122","24","288",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("차대번호이력삭제");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","75","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","89","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","140","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","613",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","597",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","889","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","563",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","84","24","855",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("세금계산서일자");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","824","10","50","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"0","20","50","938",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00",null,"20","120","24","1150",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","74","24","210",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("일괄등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00",null,"20","50","24","156",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00_00",null,"20","50","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00_00_00_00",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("금액차이승인");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","740",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_01",null,"20","60","24","1071",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("차량배정일");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00",null,"20","105","24","958",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"0","20","50","1130",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","0",null,null,"174","40","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("차량정보");
            obj.set_url("MM::MM12010T01.xfdl");
            obj.set_formscrollbartype("none none");
            this.tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("대외계정보");
            obj.set_url("MM::MM12010T02.xfdl");
            obj.set_formscrollbartype("none none");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00",null,"557","20","50","1011",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("50");
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
            this._addPreloadList("fdl","MM::MM12010T01.xfdl");
            this._addPreloadList("fdl","MM::MM12010T02.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.cmb00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.div00.form.cmb00_00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.div00.form.cmb00_00_00_00.addEventHandler("onitemchanged",this.div00_cmb00_00_onitemchanged,this);
            this.Div01.form.Button00_00_01_00_01_01.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_01_onclick,this);
            this.Div01.form.Button00_00_01_00_01_00.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_00_onclick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
        };
        this.loadIncludeScript("MM12010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
