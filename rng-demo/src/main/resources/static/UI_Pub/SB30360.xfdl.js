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
            this.set_titletext("채권정산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\">7</Col><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">1매</Col></Row><Row><Col id=\"Column1\">2매</Col></Row><Row><Col id=\"Column1\">3매</Col></Row><Row><Col id=\"Column1\">4매</Col></Row><Row><Col id=\"Column1\">5매</Col></Row><Row><Col id=\"Column1\">직접입력</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">내륙</Col></Row><Row><Col id=\"Column1\">제주</Col></Row><Row><Col id=\"Column1\">전지역</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdo3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">SMS</Col></Row><Row><Col id=\"Column1\">E-mail</Col></Row><Row><Col id=\"Column1\">지류</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97","48.04%",null,null,"131",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","258","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("채권 정산 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"회계연도\"/><Cell col=\"3\" text=\"정산예정일\"/><Cell col=\"4\" text=\"미정산계정과목\"/><Cell col=\"5\" text=\"계정과목명\"/><Cell col=\"6\" text=\"전표번호\"/><Cell col=\"7\" text=\"개발항목\"/><Cell col=\"8\" text=\"고객명\"/><Cell col=\"9\" text=\"차/대변\"/><Cell col=\"10\" text=\"미정산금액\"/><Cell col=\"11\" text=\"통화\"/><Cell col=\"12\" text=\"계약번호\"/><Cell col=\"13\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" text=\"0\" textAlign=\"right\"/><Cell col=\"11\" text=\"0\" textAlign=\"right\"/><Cell col=\"12\" text=\"0\" textAlign=\"right\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","60","24","455",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("차이계정");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","990","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"20","270","24","179",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Combo00_innerdataset = new nexacro.NormalDataset("Div01_form_Combo00_innerdataset", obj);
            Div01_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">제외</Col><Col id=\"datacolumn\">제외</Col></Row><Row><Col id=\"codecolumn\">대변 - 990010700 - 오토운용렌탈임시계정</Col><Col id=\"datacolumn\">대변 - 990010700 - 오토운용렌탈임시계정</Col></Row><Row><Col id=\"codecolumn\">차변 - 990010700 - 오토운용렌탈임시계정</Col><Col id=\"datacolumn\">차변 - 990010700 - 오토운용렌탈임시계정</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","60","24","111",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("정산일자");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal00",null,"19","105","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00",null,"20","15","30","164",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_01","1060","44","100","6",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_02","9","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","298","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","565","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","237","76","80","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","880","18","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","840","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","52","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","526","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","18","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("웹전표구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","366","18","160","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">외상매출금-중고차</Col><Col id=\"datacolumn\">외상매출금-중고차</Col></Row><Row><Col id=\"codecolumn\">미수금-일반</Col><Col id=\"datacolumn\">미수금-일반</Col></Row><Row><Col id=\"codecolumn\">미수금-영업</Col><Col id=\"datacolumn\">미수금-영업</Col></Row><Row><Col id=\"codecolumn\">미수금-자산처분</Col><Col id=\"datacolumn\">미수금-자산처분</Col></Row><Row><Col id=\"codecolumn\">미수금-해지자산처분</Col><Col id=\"datacolumn\">미수금-해지자산처분</Col></Row><Row><Col id=\"codecolumn\">미수금-보험료</Col><Col id=\"datacolumn\">미수금-보험료</Col></Row><Row><Col id=\"codecolumn\">미수금-차세-고객부담</Col><Col id=\"datacolumn\">미수금-차세-고객부담</Col></Row><Row><Col id=\"codecolumn\">미수금-범칙금/과태료</Col><Col id=\"datacolumn\">미수금-범칙금/과태료</Col></Row><Row><Col id=\"codecolumn\">미수금-면책금</Col><Col id=\"datacolumn\">미수금-면책금</Col></Row><Row><Col id=\"codecolumn\">미수금-반납면책금</Col><Col id=\"datacolumn\">미수금-반납면책금</Col></Row><Row><Col id=\"codecolumn\">미수금-위약금</Col><Col id=\"datacolumn\">미수금-위약금</Col></Row><Row><Col id=\"codecolumn\">미수금-휴차료</Col><Col id=\"datacolumn\">미수금-휴차료</Col></Row><Row><Col id=\"codecolumn\">미수금-고객수리</Col><Col id=\"datacolumn\">미수금-고객수리</Col></Row><Row><Col id=\"codecolumn\">미수금-반납고객수리</Col><Col id=\"datacolumn\">미수금-반납고객수리</Col></Row><Row><Col id=\"codecolumn\">미수금-고객유류</Col><Col id=\"datacolumn\">미수금-고객유류</Col></Row><Row><Col id=\"codecolumn\">미수금-연체이자</Col><Col id=\"datacolumn\">미수금-연체이자</Col></Row><Row><Col id=\"codecolumn\">미수금-세금</Col><Col id=\"datacolumn\">미수금-세금</Col></Row><Row><Col id=\"codecolumn\">미수금-계약이행보증금</Col><Col id=\"datacolumn\">미수금-계약이행보증금</Col></Row><Row><Col id=\"codecolumn\">미수금-기타</Col><Col id=\"datacolumn\">미수금-기타</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","631","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_value("P12345");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","698","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","725","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_value("홍길순");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","98","52","160","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","98","18","160","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","258","-6","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","947","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","Div01:20","97",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","50",null,"81","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA2");
            obj.set_formscrolltype("none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","63","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("입금기간");
            obj.set_cssclass("sta_SA_label_req");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","341","13","53","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("입금자");
            obj.set_cssclass("sta_SA_label");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"30","30","20","10",null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src2");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","19","42","89","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("가상계좌번호");
            obj.set_cssclass("sta_SA_label");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","321","5","20","60",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("예외w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","32","0",null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","419","13","115","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("8");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","111","42","150","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("홍길순");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","341","42","73","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_SA_label");
            obj.set_text("무통장계좌");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","419","42","130","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","551","42","120","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","111","13","210","24",null,null,null,null,null,null,this.Div00.form.DivSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("input_req");
            this.Div00.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","258","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("가상계좌 입금내역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_02","9","39","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","146",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"122\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"거래일자\"/><Cell col=\"3\" text=\"금융기관코드\"/><Cell col=\"4\" text=\"금융기관명\"/><Cell col=\"5\" text=\"계좌번호\"/><Cell col=\"6\" text=\"일련번호\"/><Cell col=\"7\" text=\"입금자\"/><Cell col=\"8\" text=\"거래금액\"/><Cell col=\"9\" text=\"통화키\"/><Cell col=\"10\" text=\"송금수수료\"/><Cell col=\"11\" text=\"수납금액\"/><Cell col=\"12\" text=\"정산금액\"/><Cell col=\"13\" text=\"합계금액\"/><Cell col=\"14\" text=\"회계연도\"/><Cell col=\"15\" text=\"회계전표번호\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" text=\"0\" textAlign=\"right\"/><Cell col=\"11\" text=\"0\" textAlign=\"right\"/><Cell col=\"12\" text=\"0\" textAlign=\"right\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","606","131","40","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0",null,"48.04%","83",null,"48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","49",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_03","0","16","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("차변합계");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","16",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_02","326","16","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("대변합계");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","21","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","21","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_format("#,###");
            obj.set_value("150000");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","580","21","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","460","21","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_format("#,###");
            obj.set_value("150000");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","134","54","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_format("#,###");
            obj.set_value("150000");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","15",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_03_01","0","49","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("차이금액");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","254","54","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","279","0","100","15",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("h15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div00","0","div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","112","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("반제전표작성");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
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
        this.registerScript("SB30360.xfdl", function() {

        this.Div01_Static27_03_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div01.form.Static27_03_00.addEventHandler("onclick",this.Div01_Static27_03_onclick,this);
            this.div01.form.Static27_03.addEventHandler("onclick",this.Div01_Static27_03_onclick,this);
        };
        this.loadIncludeScript("SB30360.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
