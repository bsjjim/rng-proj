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
            this.set_titletext("조회영역 여백 케이스 테스트");
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
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("일이삼사");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","413","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("충돌");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","373","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","712","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("일이삼사");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","660","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","958","0","40","80",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1065","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("요청순번");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","480","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","567","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","94","4","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","470","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","768","6","10","70",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","1121","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","52","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("충돌테스트");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_03","413","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("저장위치");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","712","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("기능위치");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","104","52","105","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">품명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">모델명</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","480","52","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_02_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_02_innerdataset", obj);
            DivSearch_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">측정기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">구매설비(물품자산)입고</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_02_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02_00","778","52","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_02_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_02_00_innerdataset", obj);
            DivSearch_form_Combo00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">측정기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">구매설비(물품자산)입고</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_02_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","1131","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","211","52","162","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1065","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("전산출고");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1131","52","25","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01","778","18","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","105","18","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","704",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","103",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Div("DivSearch00","0","120",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("0");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01","354","18","63","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("1");
            obj.set_text("분실일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","198","0","40","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","411","-2","10","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","77","1","10","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","87","18","85","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("6");
            obj.set_text("10허4048");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","174","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("9");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","0","0",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("10");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","421","18","240","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("11");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Div("DivSearch01","0","280",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("0");
            obj.set_text("관리지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01","354","18","63","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("1");
            obj.set_text("취득일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01","712","18","94","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("5");
            obj.set_text("자산상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00","802","18","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("6");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00","1066","18","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("8");
            obj.set_text("설비번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","52","63","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("9");
            obj.set_text("개산년월");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","354","52","94","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("10");
            obj.set_text("처분일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","712","52","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("11");
            obj.set_text("계층구조");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","20","86","63","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("12");
            obj.set_text("저장위치");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","354","86","94","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("13");
            obj.set_text("렌탈취급구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","434","86","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("14");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","712","86","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("15");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1069","86","63","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("16");
            obj.set_text("모델명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","77","7","10","135",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","87","18","50","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","139","18","24","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","166","18","155","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("20");
            obj.set_text("P12345");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01","1136","18","180","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("21");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00_00","802","52","120","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch01_form_Combo00_01_00_00_innerdataset = new nexacro.NormalDataset("DivSearch01_form_Combo00_01_00_00_innerdataset", obj);
            DivSearch01_form_Combo00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">오토</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">정비자재</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">브랜드</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch01_form_Combo00_01_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00_01","924","52","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("23");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00_01_00","1136","52","180","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("24");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","802","86","95","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("25");
            obj.set_text("1234067890");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","899","86","24","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01","87","86","180","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch01_form_Combo00_01_01_innerdataset = new nexacro.NormalDataset("DivSearch01_form_Combo00_01_01_innerdataset", obj);
            DivSearch01_form_Combo00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">구매설비(물품자산)입고</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch01_form_Combo00_01_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","1136","86","180","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("28");
            obj.set_text("P12345");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","952","7","40","60",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("29");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","1066","52","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("30");
            obj.set_text("설비번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","434","18","240","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","87","52","210","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("32");
            obj.set_cssclass("input_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00_00","434","52","240","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("33");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Div("DivSearch02","0","469",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","68","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("0");
            obj.set_text("계층구조");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01","601","18","68","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("1");
            obj.set_text("품명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","531","0","40","60",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_01","846","18","64","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("5");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","77","2","10","60",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Combo("Combo00","87","18","100","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch02_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch02_form_Combo00_innerdataset", obj);
            DivSearch02_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">오토</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"datacolumn\">정비자재</Col><Col id=\"codecolumn\">3</Col></Row><Row><Col id=\"datacolumn\">브랜드</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch02_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","189","18","220","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch02_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch02_form_Combo00_00_innerdataset", obj);
            DivSearch02_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">오토밋션/스티어링/티퍼렌셜 오일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">벨트(에어컨/팬/파워벨트)</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch02_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","411","18","120","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch02_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch02_form_Combo00_00_00_innerdataset", obj);
            DivSearch02_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch02_form_Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","601","3","10","60",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","641","18","135","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("12");
            obj.set_text("홍길순");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","913","19","90","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("13");
            obj.set_text("P12345");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1005","19","24","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","903","1","10","60",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1095","18","64","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("16");
            obj.set_text("모델명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","1148","18","135","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("17");
            obj.set_text("홍길순");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","1285","18","135","24",null,null,null,null,null,null,this.DivSearch02.form);
            obj.set_taborder("18");
            obj.set_text("홍길순");
            this.DivSearch02.addChild(obj.name, obj);

            obj = new Div("DivSearch03","0","552",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("0");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01","353","52","63","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("1");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","192","0","40","60",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","52","64","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("4");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","526","0","40","60",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit00","86","18","80","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("6");
            obj.set_value("123456789");
            obj.set_text("123456789");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Button("Button00","168","18","24","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","420","52","35","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("8");
            obj.set_text("P12345");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","457","52","24","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","485","52","162","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","52","86","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch03_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch03_form_cmb00_innerdataset", obj);
            DivSearch03_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">등록</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">진행</Col><Col id=\"datacolumn\">진행</Col></Row><Row><Col id=\"codecolumn\">종료</Col><Col id=\"datacolumn\">종료</Col></Row><Row><Col id=\"codecolumn\">중도해지</Col><Col id=\"datacolumn\">중도해지</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch03_form_cmb00_innerdataset);
            obj.set_text("등록");
            obj.set_value("등록");
            obj.set_index("0");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static00_00","353","18","63","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("12");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","711","18","63","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("13");
            obj.set_text("만기일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1066","18","64","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("14");
            obj.set_text("임대구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","1133","18","95","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch03_form_cmb00_00_innerdataset = new nexacro.NormalDataset("DivSearch03_form_cmb00_00_innerdataset", obj);
            DivSearch03_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">선급</Col><Col id=\"datacolumn\">선급</Col></Row><Row><Col id=\"codecolumn\">월납(고정)</Col><Col id=\"datacolumn\">월납(고정)</Col></Row><Row><Col id=\"codecolumn\">월납(변동)</Col><Col id=\"datacolumn\">월납(변동)</Col></Row><Row><Col id=\"datacolumn\">전세</Col><Col id=\"codecolumn\">전세</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch03_form_cmb00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","711","52","63","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("16");
            obj.set_text("임대인");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1066","52","64","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("17");
            obj.set_text("물건용도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","1133","52","115","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch03_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch03_form_cmb00_00_00_innerdataset", obj);
            DivSearch03_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">사무실(본사)</Col><Col id=\"datacolumn\">사무실(본사)</Col></Row><Row><Col id=\"codecolumn\">사무실(영업소)</Col><Col id=\"datacolumn\">사무실(영업소)</Col></Row><Row><Col id=\"codecolumn\">사무실(예약소)</Col><Col id=\"datacolumn\">사무실(예약소)</Col></Row><Row><Col id=\"datacolumn\">주차장</Col><Col id=\"codecolumn\">주차장</Col></Row><Row><Col id=\"codecolumn\">차고지</Col><Col id=\"datacolumn\">차고지</Col></Row><Row><Col id=\"codecolumn\">숙소(사택)</Col><Col id=\"datacolumn\">숙소(사택)</Col></Row><Row><Col id=\"codecolumn\">창고</Col><Col id=\"datacolumn\">창고</Col></Row><Row><Col id=\"codecolumn\">기타</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch03_form_cmb00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("19");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","0","86","25",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("20");
            obj.set_text("left 86");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("21");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","810","52","85","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("22");
            obj.set_value("1234067890");
            obj.set_text("1234067890");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","897","52","24","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","924","52","115","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("24");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","420","18","210","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("25");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","810","18","210","24",null,null,null,null,null,null,this.DivSearch03.form);
            obj.set_taborder("26");
            this.DivSearch03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","0","97","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","355","97","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","711","97","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","1066","97","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02","0","183","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_01","355","183","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","711","183","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00","1066","183","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00","0","411","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_01_00","355","411","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","711","411","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00","1066","411","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00_00_00","0","533","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_01_00_00_00","355","533","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","711","533","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00_00_00","1066","533","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_02_00_00_00_00","0","652","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_01_00_00_00_00","355","652","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00_00","711","652","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00_00_00_00","1066","652","355","9",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch04","0","671",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("0");
            obj.set_text("계정유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","212","0","40","60",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","672","0","40","60",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","126","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch04_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch04_form_cmb00_innerdataset", obj);
            DivSearch04_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">선급금-업무가불</Col><Col id=\"datacolumn\">선급금-업무가불</Col></Row><Row><Col id=\"codecolumn\">선급금-차량현금</Col><Col id=\"datacolumn\">선급금-차량현금</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch04_form_cmb00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static01","353","18","63","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("5");
            obj.set_text("실적부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","420","18","35","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("6");
            obj.set_text("P12345");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","457","18","24","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","484","18","155","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("8");
            obj.set_text("P12345");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","712","18","63","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("9");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("10");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","0","86","25",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("11");
            obj.set_text("left 86");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","778","18","210","24",null,null,null,null,null,null,this.DivSearch04.form);
            obj.set_taborder("13");
            this.DivSearch04.addChild(obj.name, obj);

            obj = new Div("DivSearch00_00","0","195",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("0");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01","713","18","63","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("1");
            obj.set_text("분실일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","198","0","40","60",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","411","-2","10","60",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","77","1","10","60",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","87","18","85","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("6");
            obj.set_text("10허4048");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","174","18","24","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("9");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","0","0",null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("10");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","780","18","240","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("11");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch05","-1","762",null,"97","41",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("0");
            obj.set_text("본부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01","256","18","63","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","216","0","40","60",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_01","551","18","64","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("6");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","511","0","40","60",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Combo("Combo00","618","52","110","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch05_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch05_form_Combo00_innerdataset", obj);
            DivSearch05_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신차장기</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신차&amp;중고차</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch05_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","819","0","40","60",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","859","18","63","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("10");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","925","18","150","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("11");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","15","10","50",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","300","11","10","50",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","608","8","10","65",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","965","5","10","50",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("17");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","86","18","130","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch05_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch05_form_Combo00_01_innerdataset", obj);
            DivSearch05_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반렌탈부문</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">소비재렌탈부문</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch05_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","86","52","150","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch05_form_Combo00_01_00_innerdataset = new nexacro.NormalDataset("DivSearch05_form_Combo00_01_00_innerdataset", obj);
            DivSearch05_form_Combo00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약승인일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">최초계약종료예정일</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch05_form_Combo00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","310","18","42","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("20");
            obj.set_text("3666");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","354","18","24","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","381","18","130","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("22");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","551","52","64","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("23");
            obj.set_text("장기구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","618","18","42","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("24");
            obj.set_text("3666");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","662","18","24","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","689","18","130","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("26");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","779","52","63","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("27");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","845","52","85","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("28");
            obj.set_value("1234067890");
            obj.set_text("1234067890");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","982","52","24","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","959","52","115","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("30");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1074","-5","40","60",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("31");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","1114","18","63","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("32");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01_00","1114","52","83","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("33");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00","1193","18","80","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("34");
            obj.set_text("123456789");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button00","1275","18","24","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1193","52","57","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("36");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1252","52","24","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1279","52","115","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("38");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","932","52","24","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("39");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","238","52","240","24",null,null,null,null,null,null,this.DivSearch05.form);
            obj.set_taborder("40");
            this.DivSearch05.addChild(obj.name, obj);

            obj = new Div("DivSearch06","0","869",null,"97","42",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("0");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01","346","18","63","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("1");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","306","0","40","60",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_01","538","18","59","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("6");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","498","0","40","60",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Combo("Combo00","604","18","85","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch06_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch06_form_Combo00_innerdataset", obj);
            DivSearch06_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch06_form_Combo00_innerdataset);
            obj.set_index("0");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("9");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","413","18","85","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("10");
            obj.set_text("123허1234");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","4","10","50",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","403","5","10","50",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","594","6","10","50",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","194","0","100","18",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("14");
            obj.set_text("h18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","191","42","100","10",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static00_00","729","17","58","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("16");
            obj.set_text("품목");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","769","17","110","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch06_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch06_form_Combo00_00_innerdataset", obj);
            DivSearch06_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch06_form_Combo00_00_innerdataset);
            obj.set_index("0");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","881","17","180","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch06_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch06_form_Combo00_00_00_innerdataset", obj);
            DivSearch06_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch06_form_Combo00_00_00_innerdataset);
            obj.set_index("0");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","87","52","35","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("19");
            obj.set_text("A06");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","124","52","24","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","151","52","155","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_text("전략기획팀");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("22");
            obj.set_text("부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","346","52","59","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("23");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","413","52","60","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch06_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch06_form_Combo00_01_innerdataset", obj);
            DivSearch06_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">신청</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">반려</Col><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch06_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","689","0","40","60",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","759","6","10","50",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","86","18","210","24",null,null,null,null,null,null,this.DivSearch06.form);
            obj.set_taborder("27");
            obj.set_cssclass("input_req");
            this.DivSearch06.addChild(obj.name, obj);

            obj = new Div("DivSearch07","0","987",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","53","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("0");
            obj.set_text("모듈ID");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01","236","18","48","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("1");
            obj.set_text("모듈명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","196","0","40","60",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_01","450","18","64","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("6");
            obj.set_text("모듈유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","410","0","40","60",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","827","0","40","60",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","865","18","53","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("9");
            obj.set_text("시스템");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","919","18","175","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("10");
            obj.set_text("KB렌탈 대외 WEB시스템");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","66","4","10","50",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","280","5","10","50",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","909","5","10","50",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Edit("edt00","76","18","120","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("15");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Edit("edt00_00","290","18","120","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("16");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","1134","18","64","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("17");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1094","0","40","60",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("18");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Combo("cmb00","1200","18","75","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch07_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch07_form_cmb00_innerdataset", obj);
            DivSearch07_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch07_form_cmb00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","516","18","75","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("20");
            obj.set_text("xfdl");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","631","18","64","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("21");
            obj.set_text("모듈구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","697","18","130","24",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("22");
            obj.set_text("고객만족(콜센터)");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_03","591","0","40","60",null,null,null,null,null,null,this.DivSearch07.form);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch07.addChild(obj.name, obj);

            obj = new Div("divSearch","0","1088",null,"131","43",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","432","38","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","942","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","902","33","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","942","86","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","115","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","86","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","110","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","197","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","224","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","114","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","110","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","192","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","219","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","341","86","91","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","1021","52","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1065","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1092","52","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","715","86","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","796","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","878","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1021","86","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1080","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1107","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","114","110","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","675","34","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","110","18","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var divSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb00_innerdataset", obj);
            divSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">청구일자</Col><Col id=\"datacolumn\">청구일자</Col></Row><Row><Col id=\"codecolumn\">사고접수일자</Col><Col id=\"datacolumn\">사고접수일자</Col></Row><Row><Col id=\"codecolumn\">결제일자</Col><Col id=\"datacolumn\">결제일자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb00_innerdataset);
            obj.set_text("청구일자");
            obj.set_value("청구일자");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","564","18","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("123허1234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","642","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00","472","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","564","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("1234567890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","651","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_00","472","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("정비접수번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","564","86","111","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_01","472","86","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("운전자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_02","715","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("청구상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_02_00","715","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("수납상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","796","18","106","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_innerdataset", obj);
            divSearch_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">청구서발송</Col><Col id=\"datacolumn\">청구서발송</Col></Row><Row><Col id=\"codecolumn\">청구서미발송</Col><Col id=\"datacolumn\">청구서미발송</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_innerdataset);
            obj.set_text("청구서미발송");
            obj.set_value("청구서미발송");
            obj.set_index("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00","796","52","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_00_innerdataset", obj);
            divSearch_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">미납</Col><Col id=\"datacolumn\">미납</Col></Row><Row><Col id=\"codecolumn\">부분수납</Col><Col id=\"datacolumn\">부분수납</Col></Row><Row><Col id=\"codecolumn\">완제</Col><Col id=\"datacolumn\">완제</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","942","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("지로번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00","1021","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","222","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div00_00","0","1248",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("계획구분");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","212","0","40","60",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","87","18","125","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_00_form_cmb00_innerdataset", obj);
            div00_00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">속보</Col><Col id=\"datacolumn\">속보</Col></Row><Row><Col id=\"codecolumn\">경영계획</Col><Col id=\"datacolumn\">경영계획</Col></Row><Row><Col id=\"codecolumn\">ROLLING PLAN</Col><Col id=\"datacolumn\">ROLLING PLAN</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_value("경영계획");
            obj.set_index("-1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","447","18","63","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("수립년도");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","252","18","38","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("버전");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","292","18","70","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_00_form_cmb00_00_innerdataset", obj);
            div00_00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">최종</Col><Col id=\"datacolumn\">최종</Col></Row><Row><Col id=\"codecolumn\">현업용</Col><Col id=\"datacolumn\">현업용</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_cmb00_00_innerdataset);
            obj.set_text("최종");
            obj.set_value("최종");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","514","18","43","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","407","0","40","60",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","504","4","10","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","679","18","53","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("수립월");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","732","18","28","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","639","35","40","44",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","722","4","10","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","52","68","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","87","52","43","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_textAlign("left");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","77","19","10","60",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","252","52","38","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_text("사업");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","292","52","115","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_value("오토렌탈");
            obj.set_enable("true");
            obj.set_text("오토렌탈");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_02","447","52","58","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_text("영업부문");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","514","52","125","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_00_form_cmb00_01_innerdataset = new nexacro.NormalDataset("div00_00_form_cmb00_01_innerdataset", obj);
            div00_00_form_cmb00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_00_form_cmb00_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","282","45","10","40",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_03","557","18","28","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_text("년");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","130","52","28","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_text("년");
            obj.set_cssclass("sta_SA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_03_01","760","18","28","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_text("월");
            obj.set_cssclass("sta_SA_label");
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
        this.registerScript("SD11990.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.DivSearch.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch05.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch05.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch06.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch06.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch07.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.divSearch.form.Static00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
        };
        this.loadIncludeScript("SD11990.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
