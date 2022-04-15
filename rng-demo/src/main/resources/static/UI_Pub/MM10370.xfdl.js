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
            this.set_titletext("순회부품발주");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
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

            obj = new Static("Static01_00_00_01","388","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","428","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","730","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","770","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1140","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","972","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","314","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("신청자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","426","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb04","496","18","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb04_innerdataset = new nexacro.NormalDataset("div00_form_cmb04_innerdataset", obj);
            div00_form_cmb04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">구매의뢰번호</Col><Col id=\"datacolumn\">구매의뢰번호</Col></Row><Row><Col id=\"codecolumn\">발주번호</Col><Col id=\"datacolumn\">발주번호</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb04_innerdataset);
            obj.set_text("구매의뢰번호");
            obj.set_value("구매의뢰번호");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","496","52","50","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","548","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","575","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","770","52","62","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("소속MOT");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","842","52","160","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_innerdataset", obj);
            div00_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">그린카 정비지원PART</Col><Col id=\"datacolumn\">그린카 정비지원PART</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","86","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">의뢰일자</Col><Col id=\"datacolumn\">의뢰일자</Col></Row><Row><Col id=\"codecolumn\">발주일자</Col><Col id=\"datacolumn\">발주일자</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("의뢰일자");
            obj.set_value("의뢰일자");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","608","18","122","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","842","18","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">신청승인</Col><Col id=\"datacolumn\">신청승인</Col></Row><Row><Col id=\"codecolumn\">신청반려</Col><Col id=\"datacolumn\">신청반려</Col></Row><Row><Col id=\"codecolumn\">발주확정</Col><Col id=\"datacolumn\">발주확정</Col></Row><Row><Col id=\"codecolumn\">출고완료</Col><Col id=\"datacolumn\">출고완료</Col></Row><Row><Col id=\"codecolumn\">입고완료</Col><Col id=\"datacolumn\">입고완료</Col></Row><Row><Col id=\"codecolumn\">취소요청</Col><Col id=\"datacolumn\">취소요청</Col></Row><Row><Col id=\"codecolumn\">취소확정</Col><Col id=\"datacolumn\">취소확정</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb03","1040","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb03_innerdataset = new nexacro.NormalDataset("div00_form_cmb03_innerdataset", obj);
            div00_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">가솔린오일</Col><Col id=\"datacolumn\">가솔린오일</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","86","52","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","145","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","172","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb05","1004","52","136","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb05_innerdataset = new nexacro.NormalDataset("div00_form_cmb05_innerdataset", obj);
            div00_form_cmb05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">홍길동</Col><Col id=\"datacolumn\">홍길동</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb05_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","1222","18","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("123456");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","1284","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","1311","18","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1180","18","32","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_text("품목");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","932","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("32");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","178","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("발주요청현황");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"진행상태\"/><Cell col=\"3\" text=\"구매의뢰번호\"/><Cell col=\"4\" text=\"순번\"/><Cell col=\"5\" text=\"발주번호\"/><Cell col=\"6\" text=\"순번\"/><Cell col=\"7\" text=\"순회차량번호\"/><Cell col=\"8\" text=\"공급업체\"/><Cell col=\"9\" text=\"공급업체명\"/><Cell col=\"10\" text=\"품목그룹\"/><Cell col=\"11\" text=\"품목\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"수량\"/><Cell col=\"14\" text=\"단위\"/><Cell col=\"15\" text=\"패키지단위\"/><Cell col=\"16\" text=\"단가\"/><Cell col=\"17\" text=\"금액\"/><Cell col=\"18\" text=\"발주비고\"/><Cell col=\"19\" text=\"수령지전화번호\"/><Cell col=\"20\" text=\"발주일자\"/><Cell col=\"21\" text=\"발주매니저\"/><Cell col=\"22\" text=\"신청일자\"/><Cell col=\"23\" text=\"소속MOT\"/><Cell col=\"24\" text=\"TRS전화번호\"/><Cell col=\"25\" text=\"신청자\"/><Cell col=\"26\" text=\"승인일자\"/><Cell col=\"27\" text=\"승인자\"/><Cell col=\"28\" text=\"우편번호\"/><Cell col=\"29\" text=\"주소1\"/><Cell col=\"30\" text=\"주소2\"/><Cell col=\"31\" text=\"출고일자\"/><Cell col=\"32\" text=\"출고수량\"/><Cell col=\"33\" text=\"입고일자\"/><Cell col=\"34\" text=\"입고수량\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/><Cell col=\"13\" text=\"bind:Column13\"/><Cell col=\"14\" text=\"bind:Column14\"/><Cell col=\"15\" text=\"bind:Column15\"/><Cell col=\"16\" text=\"bind:Column16\"/><Cell col=\"17\" text=\"bind:Column17\"/><Cell col=\"18\" text=\"bind:Column18\"/><Cell col=\"19\" text=\"bind:Column19\"/><Cell col=\"20\" text=\"bind:Column20\"/><Cell col=\"21\" text=\"bind:Column21\"/><Cell col=\"22\" text=\"bind:Column22\"/><Cell col=\"23\" text=\"bind:Column23\"/><Cell col=\"24\" text=\"bind:Column24\"/><Cell col=\"25\" text=\"bind:Column25\"/><Cell col=\"26\" text=\"bind:Column26\"/><Cell col=\"27\" text=\"bind:Column27\"/><Cell col=\"28\" text=\"bind:Column28\"/><Cell col=\"29\" text=\"bind:Column29\"/><Cell col=\"30\" text=\"bind:Column30\"/><Cell col=\"31\" text=\"bind:Column31\"/><Cell col=\"32\" text=\"bind:Column32\"/><Cell col=\"33\" text=\"bind:Column33\"/><Cell col=\"34\" text=\"bind:Column34\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","282",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("발주확정취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("발주확정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","351",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1147","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","98","24","180",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("취소요청확정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","113","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","99","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","164","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","355",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","339",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","0","704",null,"48","40",null,null,null,null,null,this);
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

            obj = new Button("Button00_00_01_00",null,"10","112","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("발주확정취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00",null,"10","88","28","116",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("발주확정");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00",null,"10","112","28","208",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("취소요청확정");
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
        this.loadIncludeScript("MM10370.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
