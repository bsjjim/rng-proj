(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("프로세스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0126</Col><Col id=\"Column4\">4403694650</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">85조0338</Col><Col id=\"Column6\">SONATA DN8 (G) 2.0 프리미엄</Col><Col id=\"Column8\">85조0338</Col><Col id=\"Column9\">70414</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-04</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0157</Col><Col id=\"Column4\">4403718079</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">07어5376</Col><Col id=\"Column6\">GRANDEUR IG (G) 2.4 PREMIUM</Col><Col id=\"Column8\">07어5376</Col><Col id=\"Column9\">71613</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-01</Col><Col id=\"Column12\">홍길동</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0400</Col><Col id=\"Column4\">4403688952</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">97도3346</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column8\">97도3346</Col><Col id=\"Column9\">70112</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-02</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0403</Col><Col id=\"Column4\">4403687767</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">85도1564</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column8\">85도1564</Col><Col id=\"Column9\">70375</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-01</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0407</Col><Col id=\"Column4\">4403687057</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">88머5895</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column8\">88머5895</Col><Col id=\"Column9\">71142</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-07</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0411</Col><Col id=\"Column4\">4403688975</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">97도3346</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column8\">97도3346</Col><Col id=\"Column9\">70112</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-03</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column3\">01하0412</Col><Col id=\"Column4\">4403687436</Col><Col id=\"Column5\">완료</Col><Col id=\"Column7\">84부0710</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column8\">84부0710</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\"/><Col id=\"Column2\">고급형</Col><Col id=\"Column9\">70110</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-02</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0413</Col><Col id=\"Column4\">4403687059</Col><Col id=\"Column5\">완료</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column7\">88머5895</Col><Col id=\"Column8\">88머5895</Col><Col id=\"Column9\">71142</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-08</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0414</Col><Col id=\"Column4\">4403686659</Col><Col id=\"Column5\">완료</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column7\">88머5882</Col><Col id=\"Column8\">88머5882</Col><Col id=\"Column9\">70080</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-03</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0416</Col><Col id=\"Column4\">4403687077</Col><Col id=\"Column5\">완료</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column7\">88머5895</Col><Col id=\"Column8\">88머5895</Col><Col id=\"Column9\">71142</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-03</Col><Col id=\"Column12\">(주)그린카</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column2\">고급형</Col><Col id=\"Column3\">01하0427</Col><Col id=\"Column4\">4403688614</Col><Col id=\"Column5\">완료</Col><Col id=\"Column6\">THE NEW RAY (G) 1.0 럭셔리</Col><Col id=\"Column7\">82머1701</Col><Col id=\"Column8\">82머1701</Col><Col id=\"Column9\">71469</Col><Col id=\"Column10\">홍길동</Col><Col id=\"Column11\">2020-07-01</Col><Col id=\"Column12\">(주)그린카</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","190",null,null,"40","188",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","159","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("순회정비진행관리 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"대상구분\"/><Cell col=\"3\" text=\"차량번호\"/><Cell col=\"4\" text=\"정비접수번호\"/><Cell col=\"5\" text=\"정비진행상태\"/><Cell col=\"6\" text=\"차량명\"/><Cell col=\"7\" text=\"순회차량\"/><Cell col=\"8\" text=\"실처리순회차량\"/><Cell col=\"9\" text=\"실처리순회사번\"/><Cell col=\"10\" text=\"실처리순회사원\"/><Cell col=\"11\" text=\"정비완료일\"/><Cell col=\"12\" text=\"고객명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","342",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","328",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1159","13","10","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","270",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1172","38","100","12",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1215","13","15","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","44","24","214",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","44","24","166",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"20","84","24","78",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","74","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","479","44","60","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","59",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","438","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("순회차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","227",null,"80","18",null,"0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","737","18","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("고객차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","697","0","40","85",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1009","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","398","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("고객");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","86","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("input_req");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">순회요청일자</Col><Col id=\"datacolumn\">순회요청일자</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("순회요청일자");
            obj.set_value("순회요청일자");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","216","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","438","52","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("지연일수");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","531","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","618","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","737","52","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("순회주기");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","829","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","916","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1049","18","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("정비접수번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","829","52","111","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1049","52","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("정비진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_01","1143","52","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_01_innerdataset", obj);
            DivSearch_form_Combo00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","86","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","438","86","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("미점검차량");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","531","86","166","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_innerdataset", obj);
            DivSearch_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","737","86","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("미실시사유");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00","829","86","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_01_00","1143","86","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_00_01_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_00_01_00_innerdataset", obj);
            DivSearch_form_Combo00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_00_01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","1049","86","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("MOT");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1143","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1230","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","86","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","173","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00","86","86","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_01_00","173","86","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01","586","52","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02","531","52","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02_00","606","52","55","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","661","52","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            obj.set_text("일");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","200","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("39");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","200","86","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("40");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","216","76","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("42");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("43");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","188","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("44");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","0",null,"44","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_step");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","25%","42",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("순회정비 계획현황");
            obj.set_cssclass("btn_WF_step_done");
            obj.set_edge(" ");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00:0","0","25%","42",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("순회정비 진행관리");
            obj.set_cssclass("btn_WF_stepS");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","Button00_00:0","0","25%","42",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("순회정비 결과등록");
            obj.set_cssclass("btn_WF_step");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","Button00_00_00:0","0",null,"42","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("정비이력조회");
            obj.set_cssclass("btn_WF_step_last");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","190","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","2","0",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","0","10","140","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("순회정비이관관리");
            obj.set_cssclass("btn_Comm_link");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","144","10","114","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("SMS발송");
            obj.set_cssclass("btn_Comm_popup");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00_00","262","10","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("이관이력");
            obj.set_cssclass("btn_Comm_popup");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","144","28","459",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("미실시 등록취소");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","83",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00",null,"10","79","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"10","144","28","311",null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("미실시 사유등록");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00",null,"10","156","28","151",null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("순회주소 변경등록");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"140","40","48",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","145","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("순회예정일 일괄변경");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("순회예정일 변경");
            obj.set_cssclass("sta_DA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01","292","56","74","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("일괄적용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","94","1180","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("6");
            obj.set_text("※ 순회예정일을 변경할 항목 체크박스 선택 후, 변경된 날짜를 일괄 적용해주세요.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","116","1180","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("7");
            obj.set_text("※ [저장] 버튼 클릭 시, 서버에 반영됩니다.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","85","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","0","112","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new CalTime("CalTime00","135","56","155","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            this.Div01.addChild(obj.name, obj);
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
        this.registerScript("P-08_Process.xfdl", function() {

        this.Div01_Button00_00_01_00_01_onclick = function(obj,e)
        {

        };

        this.Div01_Static00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSearchExpand.addEventHandler("onclick",this.Button01_onclick,this);
            this.Div01.form.Static27.addEventHandler("onclick",this.Static27_onclick,this);
            this.Div01.form.Button00_00_01_00_01.addEventHandler("onclick",this.Div01_Button00_00_01_00_01_onclick,this);
            this.Div01.form.Static00_00_00_00.addEventHandler("onclick",this.Div01_Static00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("P-08_Process.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
