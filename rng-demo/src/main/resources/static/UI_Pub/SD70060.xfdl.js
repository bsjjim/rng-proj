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
            this.set_titletext("반납차량 외관체크 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","747","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("수행자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","814","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","881","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","908","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","430","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","52","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","752","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","0","86","25",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("left 86");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1023","-1","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","470","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("수행자 MOT");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1063","18","84","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","470","52","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","747","52","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","76","15","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_innerdataset", obj);
            DivSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미배정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"datacolumn\">취소</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_innerdataset);
            obj.set_text("등록");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","86","52","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_01_innerdataset", obj);
            DivSearch_form_cmb00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">반납일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수행예정일</Col></Row><Row><Col id=\"datacolumn\">수행완료일</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","547","4","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_02","557","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_02_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_02_innerdataset", obj);
            DivSearch_form_cmb00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">서울중앙MOT</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그린카MOT</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">그린카사고보상PART</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_02_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","804","12","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","557","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","644","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00_00","1132","18","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","1142","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","1209","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","814","52","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","1236","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","0","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","188","52","240","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","97",null,null,"794","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","228","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("반납차량 현황");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"No\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"이동번호\"/><Cell col=\"4\" text=\"계약번호\"/><Cell col=\"5\" text=\"차량번호\"/><Cell col=\"6\" text=\"고객명(계약)\"/><Cell col=\"7\" text=\"계약지점\"/><Cell col=\"8\" text=\"영업사원\"/><Cell col=\"9\" text=\"차량명\"/><Cell col=\"10\" text=\"반납일\"/><Cell col=\"11\" text=\"반납일시\"/><Cell col=\"12\" text=\"등록일\"/><Cell col=\"13\" text=\"등록일시\"/><Cell col=\"14\" text=\"수행자MOT\"/><Cell col=\"15\" text=\"수행자\"/><Cell col=\"16\" text=\"수행예정일\"/><Cell col=\"17\" text=\"수행예정일시\"/><Cell col=\"18\" text=\"수행완료일\"/><Cell col=\"19\" text=\"수행완료일시\"/><Cell col=\"20\" text=\"예상면책금건수\"/><Cell col=\"21\" text=\"예상면책금 금액\"/><Cell col=\"22\" text=\"실비건수\"/><Cell col=\"23\" text=\"건당면책금\"/><Cell col=\"24\" text=\"미실시사유_대분류\"/><Cell col=\"25\" text=\"미실시사유_소분류\"/><Cell col=\"26\" text=\"담당자\"/><Cell col=\"27\" text=\"고객연락처\"/><Cell col=\"28\" text=\"우편번호\"/><Cell col=\"29\" text=\"요청장소\"/><Cell col=\"30\" text=\"요청지점명\"/><Cell col=\"31\" text=\"요청자\"/><Cell col=\"32\" text=\"요청자연락처\"/><Cell col=\"33\" text=\"특이사항\"/><Cell col=\"34\" text=\"수행자조치사항\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01_01","2","39","80","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","128",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1336","14","4","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1244","38","100","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","148",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","78",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1349","17","15","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1388","44","100","6",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("일괄취소");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00",null,"499","734",null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("이미지");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"항목\"/><Cell col=\"3\" text=\"파일번호\"/><Cell col=\"4\" text=\"순번\"/><Cell col=\"5\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","74","24","54",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","74","24","132",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_Block");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("수행자변경이력");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","10",null,null,"0","0",null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"수정일\"/><Cell col=\"2\" text=\"수정일시\"/><Cell col=\"3\" text=\"변경자\"/><Cell col=\"4\" text=\"수정전\"/><Cell col=\"5\" text=\"수정후\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","0","100","10",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab00);
            obj.set_text("면책금변경이력");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","10",null,null,"0","0",null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"수정일\"/><Cell col=\"2\" text=\"수정일시\"/><Cell col=\"3\" text=\"변경자\"/><Cell col=\"4\" text=\"예상면책금(전)\"/><Cell col=\"5\" text=\"예상면책금(후)\"/><Cell col=\"6\" text=\"실비건수(전)\"/><Cell col=\"7\" text=\"실비건수(후)\"/><Cell col=\"8\" text=\"실비금액(전)\"/><Cell col=\"9\" text=\"실비금액(후)\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","0","100","10",null,null,null,null,null,null,this.tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1075","367","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"97","734","382","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","140","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("반납차량 기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","382","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("요청장소");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","382","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("차량명");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","56","85","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_innerdataset", obj);
            Div00_00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미배정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배정</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">완료</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">취소</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","516","56","213","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("반납일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","150","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","382","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("고객연락처");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","183","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("수행자MOT");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","183","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","382","183","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("수행자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","216","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00","382","216","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("수행완료일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","216","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("수행예정일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","249","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("예상면책금건수");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00","129","249","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00","382","249","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_text("실비건수");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00","0","282","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("요청자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00","129","282","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00_00","382","282","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("요청자연락처");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00_00","129","315","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00_00_00","382","315","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_text("수행자조치사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00","0","315","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00_00_00_00","129","348","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00_00","0","348","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_text("미실시사유");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00_00","130","44","4","346",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","134","89","243","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_text("10허4048");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","122","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","201","122","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","228","122","242","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","472","122","257","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","134","188","155","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_00_innerdataset", obj);
            Div00_00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00","134","254","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00_00","251","254","126","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","134","287","243","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("43");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","134","320","243","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("44");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","134","353","243","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_00_00_innerdataset", obj);
            Div00_00_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00","381","353","257","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("46");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_00_form_Combo00_00_00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_00_00_00_innerdataset", obj);
            Div00_00_form_Combo00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","516","89","213","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("47");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","516","188","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("48");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","583","188","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_02","610","188","119","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("50");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","516","254","45","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("51");
            obj.set_format("#,###");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","560","254","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("52");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","591","254","113","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("53");
            obj.set_format("#,###");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","704","254","20","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("54");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00","516","287","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("55");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","516","320","213","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("56");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","86","24","54",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("57");
            obj.set_text("수행자배정");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("58");
            obj.set_text("수정");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00","516","155","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("59");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","723","239","10","60",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","576","254","15","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("61");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","134","221","155","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("62");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_00","134","155","155","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("63");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_00_00","516","221","155","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("64");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,null,"20","60","774","200",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","734","96","20","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1196","478","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
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
        this.registerScript("SD70060.xfdl", function() {

        this.DivSearch_cmb00_00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static02_00.addEventHandler("onclick",this.divGridWapper_Static02_00_onclick,this);
        };
        this.loadIncludeScript("SD70060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
