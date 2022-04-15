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
            this.set_titletext("차량이동관리(중단-핵심화면)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">R2B</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">인수형매각</Col></Row><Row><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">인수형매각</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("이동유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","455","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("이동상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","30","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","455","52","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("페이퍼리스");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","756","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","822","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","904","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","998","52","69","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","822","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이동요청일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">이동완료일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">등록일자</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","756","86","48","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("출발지");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","1065","86","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","395","5","60","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w60");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","86","15","10","76",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","96","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_00_innerdataset", obj);
            DivSearch_form_Combo00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중고차배송</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">반납이동</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">정비대차</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">신차전대차</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00_00","546","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_00_00_innerdataset", obj);
            DivSearch_form_Combo00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00","822","86","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","998","86","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","536","20","10","76",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01","546","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_01_innerdataset", obj);
            DivSearch_form_Combo00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">출발대상</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">도착대상</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">이동완료</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">취소</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","696","10","60","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("w60");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","756","18","69","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("일자선택");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","812","17","10","76",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02","1187","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("90일");
            obj.set_cssclass("btn_Comp");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00","1252","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("120일");
            obj.set_cssclass("btn_Comp");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01","1317","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("180일");
            obj.set_cssclass("btn_Comp");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","455","86","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","96","52","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","188","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","215","52","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","30","86","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("탁송사");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00_01","96","86","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">롯데글로벌로지스(주)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">내부직원</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">코오롱 모터스(BMW)</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","942","49","60","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("w60");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","1065","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","546","86","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","945","18","240","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"40","300",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","21","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"설비번호\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"차량명\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"매각일\"/><Cell col=\"5\" text=\"상태값\"/><Cell col=\"6\" text=\"보험해지일자\"/><Cell col=\"7\" text=\"매각유형\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\" cssclass=\"cell_link\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","331",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"18","15","24","385",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"18","50","24","330",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"6","5","47","396",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01",null,"1","10","47","377",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-4","15","60","316",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","240",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","160",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","76","24","80",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","76","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1","40","100","10",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.38%","DivSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","divGridWapper:0",null,"300","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","21","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("차량이동기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이동번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","368","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이동유형");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("출발지");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("도착지");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","368","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","738","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","0","150",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00","1108","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("탁송이행");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","368","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","1108","52","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("차량명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","1108","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("도착일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00_00","1108","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("출발일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01_00_00","134","122","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_text("12345678");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00","872","155","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("탁송사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","368","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("기사명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","738","150","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01","134","56","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01_00_00_00","134","89","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_text("12345678");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01_00_00_01","134","155","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_text("12345678");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00_01_00_00_00_00","502","56","200","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_text("12345678");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","502","89","242","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","746","89","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01","502","122","242","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","746","122","237","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","502","155","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_02","872","56","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_02_00","1242","56","180","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1242","155","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","1364","155","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_format("#,###.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","1424","155","45","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01","1242","89","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01_00","1242","122","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","24","12","1451","663",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("설계필요 - 핵심화면");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.set_color("#ffffff");
            obj.set_font("normal 50pt/normal \"Arial\"");
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
            this.addEventHandler("onload",this.temp01_onload,this);
            this.btnSearchExpand.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("SD10340.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
