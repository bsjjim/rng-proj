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
            this.set_titletext("(대외계)순회부품출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀명");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","460","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"발주일자\"/><Cell col=\"4\" text=\"발주번호\"/><Cell col=\"5\" text=\"순번\"/><Cell col=\"6\" text=\"품목그룹\"/><Cell col=\"7\" text=\"품목\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"단가\"/><Cell col=\"11\" text=\"단위\"/><Cell col=\"12\" text=\"패키지단위\"/><Cell col=\"13\" text=\"금액\"/><Cell col=\"14\" text=\"출고일자\"/><Cell col=\"15\" text=\"출고수량\"/><Cell col=\"16\" text=\"출고금액\"/><Cell col=\"17\" text=\"단가차이\"/><Cell col=\"18\" text=\"미출고수량\"/><Cell col=\"19\" text=\"소속MOT\"/><Cell col=\"20\" text=\"TRS연락처\"/><Cell col=\"21\" text=\"전화번호\"/><Cell col=\"22\" text=\"책임정비사\"/><Cell col=\"23\" text=\"차량번호\"/><Cell col=\"24\" text=\"주소1\"/><Cell col=\"25\" text=\"주소2\"/><Cell col=\"26\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/><Cell col=\"17\" text=\"bind:Column3\"/><Cell col=\"18\" text=\"bind:Column3\"/><Cell col=\"19\" text=\"bind:Column3\"/><Cell col=\"20\" text=\"bind:Column3\"/><Cell col=\"21\" text=\"bind:Column3\"/><Cell col=\"22\" text=\"bind:Column3\"/><Cell col=\"23\" text=\"bind:Column3\"/><Cell col=\"24\" text=\"bind:Column3\"/><Cell col=\"25\" text=\"bind:Column3\"/><Cell col=\"26\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","232",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("출고완료");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","98","24","132",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("발주취소요청");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","54","24","539",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("출고일자");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","431",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01",null,"20","74","24","355",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("일괄적용");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","60","24","305",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"4","5","47","300",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","15","24","289",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01",null,"15","15","35","276",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","71","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","85","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","136","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1133","13","50","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static01_00_00_01","712","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","752","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","910","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","950","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","336","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","392","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","52","62","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("소속MOT");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","90","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_innerdataset", obj);
            div00_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">발주일자</Col><Col id=\"datacolumn\">발주일자</Col></Row><Row><Col id=\"codecolumn\">출고일자</Col><Col id=\"datacolumn\">출고일자</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_innerdataset);
            obj.set_text("발주일자");
            obj.set_value("발주일자");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb02","500","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb02_innerdataset = new nexacro.NormalDataset("div00_form_cmb02_innerdataset", obj);
            div00_form_cmb02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">발주번호</Col><Col id=\"datacolumn\">발주번호</Col></Row><Row><Col id=\"codecolumn\">인수자</Col><Col id=\"datacolumn\">인수자</Col></Row><Row><Col id=\"codecolumn\">품목그룹</Col><Col id=\"datacolumn\">품목그룹</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb02_innerdataset);
            obj.set_text("발주번호");
            obj.set_value("발주번호");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","592","18","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb03","820","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb03_innerdataset = new nexacro.NormalDataset("div00_form_cmb03_innerdataset", obj);
            div00_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">발주확정</Col><Col id=\"datacolumn\">발주확정</Col></Row><Row><Col id=\"codecolumn\">출고완료</Col><Col id=\"datacolumn\">출고완료</Col></Row><Row><Col id=\"codecolumn\">입고완료</Col><Col id=\"datacolumn\">입고완료</Col></Row><Row><Col id=\"codecolumn\">취소요청</Col><Col id=\"datacolumn\">취소요청</Col></Row><Row><Col id=\"codecolumn\">취소확정</Col><Col id=\"datacolumn\">취소확정</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb04","1018","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb04_innerdataset = new nexacro.NormalDataset("div00_form_cmb04_innerdataset", obj);
            div00_form_cmb04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">가솔린오일</Col><Col id=\"datacolumn\">가솔린오일</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb04_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","90","51","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">그린카 정비지원PART</Col><Col id=\"datacolumn\">그린카 정비지원PART</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb05","252","51","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb05_innerdataset = new nexacro.NormalDataset("div00_form_cmb05_innerdataset", obj);
            div00_form_cmb05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">홍길동</Col><Col id=\"datacolumn\">홍길동</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb05_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","432","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("조회번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","182","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","0","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","0",null,"50","10",null,"0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00",null,"10","98","28","68",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("출고완료");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00_00",null,"10","122","28","170",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("발주취소요청");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM12090.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
