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
            this.set_titletext("단기차 요청확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">현대</Col></Row><Row><Col id=\"Column0\">기아</Col></Row><Row><Col id=\"Column0\">한국지엠</Col></Row><Row><Col id=\"Column0\">르노삼성</Col></Row><Row><Col id=\"Column0\">쌍용/외산/기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","97",null,null,"40","393",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","135","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("단기차 요청목록");
            obj.set_cssclass("sta_WF_title1");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","335","0","40","50",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"구매목적\"/><Cell col=\"4\" text=\"본부\"/><Cell col=\"5\" text=\"지점\"/><Cell col=\"6\" text=\"영업소\"/><Cell col=\"7\" text=\"경유지\"/><Cell col=\"8\" text=\"등록지\"/><Cell col=\"9\" text=\"차종명\"/><Cell col=\"10\" text=\"옵션명\"/><Cell col=\"11\" text=\"외장색상\"/><Cell col=\"12\" text=\"내장색상\"/><Cell col=\"13\" text=\"보조금지역\"/><Cell col=\"14\" text=\"보조금\"/><Cell col=\"15\" text=\"소비자가\"/><Cell col=\"16\" text=\"1차저장일\"/><Cell col=\"17\" text=\"2차저장일\"/><Cell col=\"18\" text=\"초안확정일\"/><Cell col=\"19\" text=\"구매요청일\"/><Cell col=\"20\" text=\"영업번호\"/><Cell col=\"21\" text=\"구매요청번호\"/><Cell col=\"22\" text=\"1차저장인\"/><Cell col=\"23\" text=\"2차저장인\"/><Cell col=\"24\" text=\"초장확정인\"/><Cell col=\"25\" text=\"구매요청인\"/><Cell col=\"26\" text=\"승인여부\"/><Cell col=\"27\" text=\"변경여부\"/><Cell col=\"28\" text=\"카메이커\"/><Cell col=\"29\" text=\"모델명\"/><Cell col=\"30\" text=\"연료구분\"/><Cell col=\"31\" text=\"차종사이즈\"/><Cell col=\"32\" text=\"메모\"/><Cell col=\"33\" text=\"취소사유\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/></Band></Format></Formats>");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"20","60","24","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","633",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","585",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","352",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_text("승인처리");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","74","24","274",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_text("승인취소");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_01",null,"20","50","24","220",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_02",null,"20","74","24","142",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("9");
            obj.set_text("변경처리");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_02_00",null,"20","74","24","64",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("10");
            obj.set_text("변경취소");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","130","20","58","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("11");
            obj.set_text("선택건수");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","116","0","15","60",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","181","20","50","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","61","24","1168",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("13");
            obj.set_text("구매목적");
            obj.set_cssclass("sta_SA_label");
            this.divTop.addChild(obj.name, obj);

            obj = new Combo("cmb00",null,"20","125","24","1040",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("15");
            obj.set_type("dropdown");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","448","15","20","35",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","36","24","991",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("17");
            obj.set_text("메모");
            obj.set_cssclass("sta_SA_label");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00",null,"20","155","24","831",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01_00",null,"20","74","24","755",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("19");
            obj.set_text("일괄적용");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_02","733","4","50","32",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("20");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","705",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("21");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","690",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("22");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","796","13","15","35",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("23");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_03",null,"20","74","24","508",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("24");
            obj.set_text("초안확정");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","74","24","430",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("25");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_Block");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"346","40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","240","24",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("서브그리드 타이틀을 넣어주세요");
            obj.set_cssclass("sta_WF_title2");
            this.divBottom.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.divBottom.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid00");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" colspan=\"6\" text=\"초안확정 전체\"/><Cell col=\"7\" colspan=\"6\" text=\"승인\"/><Cell col=\"13\" colspan=\"6\" text=\"취소\"/><Cell col=\"19\" rowspan=\"2\" text=\"미처리\"/><Cell row=\"1\" col=\"1\" text=\"1본부\"/><Cell row=\"1\" col=\"2\" text=\"2본부\"/><Cell row=\"1\" col=\"3\" text=\"3본부\"/><Cell row=\"1\" col=\"4\" text=\"4본부\"/><Cell row=\"1\" col=\"5\" text=\"기타\"/><Cell row=\"1\" col=\"6\" text=\"합계\"/><Cell row=\"1\" col=\"7\" text=\"1본부\"/><Cell row=\"1\" col=\"8\" text=\"2본부\"/><Cell row=\"1\" col=\"9\" text=\"3본부\"/><Cell row=\"1\" col=\"10\" text=\"4본부\"/><Cell row=\"1\" col=\"11\" text=\"기타\"/><Cell row=\"1\" col=\"12\" text=\"합계\"/><Cell row=\"1\" col=\"13\" text=\"1본부\"/><Cell row=\"1\" col=\"14\" text=\"2본부\"/><Cell row=\"1\" col=\"15\" text=\"3본부\"/><Cell row=\"1\" col=\"16\" text=\"4본부\"/><Cell row=\"1\" col=\"17\" text=\"기타\"/><Cell row=\"1\" col=\"18\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"cell_header\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band><Band id=\"summary\"><Cell text=\"합계(대수)\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell row=\"1\" text=\"합계(금액,백만원)\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\"/><Cell row=\"1\" col=\"18\"/><Cell row=\"1\" col=\"19\"/><Cell row=\"2\" text=\"대당단가(백만원)\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/><Cell row=\"2\" col=\"15\"/><Cell row=\"2\" col=\"16\"/><Cell row=\"2\" col=\"17\"/><Cell row=\"2\" col=\"18\"/><Cell row=\"2\" col=\"19\"/></Band></Format></Formats>");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"20","60","24","0",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","64",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","0","divBottom:0",null,"48","40",null,null,null,null,null,this);
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

            obj = new Button("Button00_00_01_00",null,"10","76","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","428","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("본부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","388","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","755","18","69","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","715","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","821","18","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1094","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1134","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("구매목적");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","1200","18","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("전체");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","4","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","471","5","10","65",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","811","6","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","1190","5","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("카메이커");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","428","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("모델명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","755","52","69","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("조회번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1134","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","86","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","178","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","86","52","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("전체");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","481","18","234","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("전체");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","481","52","50","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("CL010");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","533","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","560","52","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("크라이슬러 크로스파이어");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","893","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","937","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","964","18","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_03","821","52","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("구매요청번호");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","923","52","171","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","1200","52","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("전체");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);
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
            this.addEventHandler("onload",this.temp_onload,this);
            this.divTop.form.Button00_00_01_00_03_00_00_01.addEventHandler("onclick",this.divTop_Button00_onclick,this);
            this.divBottom.form.Button00_01.addEventHandler("onclick",this.divBottom_Button00_01_onclick,this);
            this.DivSearch.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
        };
        this.loadIncludeScript("MM10030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
