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
            this.set_titletext("중고차 용품입고");
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

            obj = new Static("Static00","0","20","73","24",null,null,null,null,null,null,this.Div01.form);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"용품구매의뢰번호\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"Item\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"용품구분\"/><Cell col=\"6\" text=\"용품명\"/><Cell col=\"7\" text=\"공급업체\"/><Cell col=\"8\" text=\"차대번호\"/><Cell col=\"9\" text=\"차량번호\"/><Cell col=\"10\" text=\"계약번호\"/><Cell col=\"11\" text=\"고객명\"/><Cell col=\"12\" text=\"요청매니저\"/><Cell col=\"13\" text=\"용품발주번호\"/><Cell col=\"14\" text=\"용품출고일\"/><Cell col=\"15\" text=\"출고수량\"/><Cell col=\"16\" text=\"입고수량\"/><Cell col=\"17\" text=\"입고매니저\"/><Cell col=\"18\" text=\"입고일자\"/><Cell col=\"19\" text=\"전기일자\"/><Cell col=\"20\" text=\"반품사유\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/><Cell col=\"17\" text=\"bind:Column3\"/><Cell col=\"18\" text=\"bind:Column3\"/><Cell col=\"19\" text=\"bind:Column3\"/><Cell col=\"20\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","156",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("입고취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","78",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("입고완료");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","354",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01",null,"20","74","24","278",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("일괄적용");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","59","24","466",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","60","24","229",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","15","24","213",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01",null,"15","15","35","200",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1210","12","50","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","71","0","15","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","85","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","136","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
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

            obj = new Static("Static01_00_00_01","1122","12","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","788","18","84","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("용품진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","748","16","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","20","52","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("경유지");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","106","52","50","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","158","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","185","52","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","155","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02","82","23","14","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_tooltiptext("기본조회는 3개월, 용품진행상태 선택시 1년까지 조회 가능합니다.");
            obj.set_cssclass("sta_WF_help");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb02","106","18","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb02_innerdataset = new nexacro.NormalDataset("div00_form_cmb02_innerdataset", obj);
            div00_form_cmb02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">용품입고일자</Col><Col id=\"datacolumn\">용품입고일자</Col></Row><Row><Col id=\"codecolumn\">용품출고일자</Col><Col id=\"datacolumn\">용품출고일자</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb02_innerdataset);
            obj.set_text("용품출고일");
            obj.set_value("용품출고일");
            obj.set_index("1");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","531","18","130","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">용품구매의뢰번호</Col><Col id=\"datacolumn\">용품구매의뢰번호</Col></Row><Row><Col id=\"codecolumn\">용품발주번호</Col><Col id=\"datacolumn\">용품발주번호</Col></Row><Row><Col id=\"codecolumn\">차량번호</Col><Col id=\"datacolumn\">차량번호</Col></Row><Row><Col id=\"codecolumn\">계약번호</Col><Col id=\"datacolumn\">계약번호</Col></Row><Row><Col id=\"codecolumn\">차대번호</Col><Col id=\"datacolumn\">차대번호</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("계약번호");
            obj.set_value("계약번호");
            obj.set_index("3");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","663","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","463","52","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("요청자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","531","52","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","590","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","617","52","131","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","881","18","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_innerdataset", obj);
            div00_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">구매요청</Col><Col id=\"datacolumn\">구매요청</Col></Row><Row><Col id=\"codecolumn\">구매발주</Col><Col id=\"datacolumn\">구매발주</Col></Row><Row><Col id=\"codecolumn\">출고준비</Col><Col id=\"datacolumn\">출고준비</Col></Row><Row><Col id=\"codecolumn\">출고</Col><Col id=\"datacolumn\">출고</Col></Row><Row><Col id=\"codecolumn\">입고</Col><Col id=\"datacolumn\">입고</Col></Row><Row><Col id=\"codecolumn\">취득원가확정</Col><Col id=\"datacolumn\">취득원가확정</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","1162","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("품목구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","788","52","71","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("공급매니저");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","881","52","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("0123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","940","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","967","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb03","1230","18","140","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb03_innerdataset = new nexacro.NormalDataset("div00_form_cmb03_innerdataset", obj);
            div00_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">블랙박스보조용품</Col><Col id=\"datacolumn\">블랙박스보조용품</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","423","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","463","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("조회번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","213","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
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

            obj = new Button("Button00_00_01_00_00_00",null,"10","98","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("입고취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00_00_00_00",null,"10","98","28","102",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("입고완료");
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
        this.loadIncludeScript("MM10560.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
