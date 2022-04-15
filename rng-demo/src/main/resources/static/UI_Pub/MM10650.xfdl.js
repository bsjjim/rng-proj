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
            this.set_titletext("차량번호등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97","48.04%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","83","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("차량목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","485","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"계약번호\"/><Cell col=\"4\" text=\"발주번호\" cssclass=\"cell_fix\"/><Cell col=\"5\" text=\"계약지점\"/><Cell col=\"6\" text=\"등록지\"/><Cell col=\"7\" text=\"보유지점\"/><Cell col=\"8\" text=\"경유지\"/><Cell col=\"9\" text=\"요청자\"/><Cell col=\"10\" text=\"차종명\"/><Cell col=\"11\" text=\"고객명\"/><Cell col=\"12\" text=\"출고일자\"/><Cell col=\"13\" text=\"CM계약번호\"/><Cell col=\"14\" text=\"차대번호\"/><Cell col=\"15\" text=\"차량번호\"/><Cell col=\"16\" text=\"등록일자\"/><Cell col=\"17\" text=\"등록지코드\"/><Cell col=\"18\" text=\"등록지(구청)\"/><Cell col=\"19\" text=\"차령만료일자\"/><Cell col=\"20\" text=\"등록일자(전산)\"/><Cell col=\"21\" text=\"보험증권번호\"/><Cell col=\"22\" text=\"대폐차여부\"/><Cell col=\"23\" text=\"차량매입방법\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" cssclass=\"cell_fix\"/><Cell col=\"5\" text=\"bind:Column1\"/><Cell col=\"6\" text=\"bind:Column2\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/><Cell col=\"17\" text=\"bind:Column3\"/><Cell col=\"18\" text=\"bind:Column3\"/><Cell col=\"19\" text=\"bind:Column3\"/><Cell col=\"20\" text=\"bind:Column3\"/><Cell col=\"21\" text=\"bind:Column3\"/><Cell col=\"22\" text=\"bind:Column3\"/><Cell col=\"23\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","456",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("일괄번호등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("등록취소");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","74","24","180",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("번호등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","72","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","87","20","58","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("선택건수");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","138","20","50","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","529",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","513",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","971","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","194","24","258",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("일괄번호등록 엑셀양식다운로드");
            obj.set_cssclass("btn_Block");
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

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
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
            obj.set_text("등록여부");
            obj.set_cssclass("sta_SA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","273","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","313","18","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("등록지");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","592","15","40","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","632","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","700","18","117","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">등록증등록일자</Col><Col id=\"datacolumn\">등록증등록일자</Col></Row><Row><Col id=\"codecolumn\">구청등록일자</Col><Col id=\"datacolumn\">구청등록일자</Col></Row><Row><Col id=\"codecolumn\">전산등록일자</Col><Col id=\"datacolumn\">전산등록일자</Col></Row><Row><Col id=\"codecolumn\">입고일자</Col><Col id=\"datacolumn\">입고일자</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("등록증등록일자");
            obj.set_value("등록증등록일자");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","180","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","1069","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","20","52","84","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("차량매입방법");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","112","18","200","24",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("div00_form_Radio00_00_innerdataset", obj);
            div00_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_Radio00_00_innerdataset);
            obj.set_text("선택1");
            obj.set_value("선택1");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","1135","18","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_innerdataset", obj);
            div00_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">구매의뢰번호</Col><Col id=\"datacolumn\">구매의뢰번호</Col></Row><Row><Col id=\"codecolumn\">발주번호</Col><Col id=\"datacolumn\">발주번호</Col></Row><Row><Col id=\"codecolumn\">차대번호</Col><Col id=\"datacolumn\">차대번호</Col></Row><Row><Col id=\"codecolumn\">차대번호요약</Col><Col id=\"datacolumn\">차대번호요약</Col></Row><Row><Col id=\"codecolumn\">CM계약번호</Col><Col id=\"datacolumn\">CM계약번호</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","1247","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","1329","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb02","112","52","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb02_innerdataset = new nexacro.NormalDataset("div00_form_cmb02_innerdataset", obj);
            div00_form_cmb02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">롯데렌탈</Col><Col id=\"datacolumn\">롯데렌탈</Col></Row><Row><Col id=\"codecolumn\">롯데캐피탈</Col><Col id=\"datacolumn\">롯데캐피탈</Col></Row><Row><Col id=\"codecolumn\">DGB 캐피탈</Col><Col id=\"datacolumn\">DGB 캐피탈</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb02_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","366","18","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","410","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","437","18","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1029","12","40","45",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","819","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div01:20","97",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","73","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("등록비용");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","370","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"처리(승인일자)\"/><Cell col=\"3\" text=\"지급내역\"/><Cell col=\"4\" text=\"지급일자\"/><Cell col=\"5\" text=\"공급업체\"/><Cell col=\"6\" text=\"공급업체명\"/><Cell col=\"7\" text=\"공급가액\"/><Cell col=\"8\" text=\"부가세\"/><Cell col=\"9\" text=\"번호판업체\"/><Cell col=\"10\" text=\"세금코드\"/><Cell col=\"11\" text=\"카드번호\"/><Cell col=\"12\" text=\"승인번호\"/><Cell col=\"13\" text=\"카드공급사번호\"/><Cell col=\"14\" text=\"카드공급사명\"/><Cell col=\"15\" text=\"전표번호\"/><Cell col=\"16\" text=\"취소전표번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("일괄비용등록");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","102",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("전표취소");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","74","24","180",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","194","24","258",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("일괄비용등록 엑셀양식다운로드");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"97","20","60","774",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w20");
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

        };
        this.loadIncludeScript("MM10650.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
