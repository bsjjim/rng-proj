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
            this.set_titletext("조기지연반납");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"165","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("오더유형");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","355","18","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","695","18","54","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("품명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1045","18","93","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약진행상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("서비스상품코드");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","355","52","83","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","695","52","94","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("모델명");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","355","86","63","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","695","86","94","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("조기지연일수");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","315","5","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","655","5","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","1005","13","40","135",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","115","8","10","170",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","429","19","10","165",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","777","17","10","140",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1128","13","10","135",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","120","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("관리담당자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","355","120","83","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("확인여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","695","120","94","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("만료기간");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","1045","52","68","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("반납구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1045","86","83","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("상신여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","125","18","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("input_req");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","125","52","190","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("input_req");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01","125","86","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","125","120","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","184","120","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","211","120","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","439","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01","526","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","553","86","102","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","439","54","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","521","54","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","439","18","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","483","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","510","18","145","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_cssclass("input_req");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_02","787","18","190","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_01","1138","52","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_01_00","1335","86","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01_00","439","120","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","787","120","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_02_00","787","52","190","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","787","86","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_format("#,###.##");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","847","86","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("일 이상");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","961","86","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("일 이하");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00","901","86","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_format("#,###.##");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_01_01","1138","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_01_02","1138","86","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","1228","61","40","50",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","1268","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1325","61","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00_00_00","1044","120","94","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_text("입고기간");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_01","1138","120","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"확인\"/><Cell col=\"2\" text=\"반납구분\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"KT조직명\"/><Cell col=\"5\" text=\"계약번호\"/><Cell col=\"6\" text=\"계약구분\"/><Cell col=\"7\" text=\"계약진행상태\"/><Cell col=\"8\" text=\"변경구분\"/><Cell col=\"9\" text=\"만기구분\"/><Cell col=\"10\" text=\"설비번호\"/><Cell col=\"11\" text=\"구설비번호(1)\"/><Cell col=\"12\" text=\"구설비번호(2)\"/><Cell col=\"13\" text=\"상품코드\"/><Cell col=\"14\" text=\"품명\"/><Cell col=\"15\" text=\"모델명\"/><Cell col=\"16\" text=\"개시일자\"/><Cell col=\"17\" text=\"출고일자\"/><Cell col=\"18\" text=\"만료일자\"/><Cell col=\"19\" text=\"입고일자\"/><Cell col=\"20\" text=\"조기지연일수\"/><Cell col=\"21\" text=\"렌탈형식\"/><Cell col=\"22\" text=\"영업매니저\"/><Cell col=\"23\" text=\"관리담당자\"/><Cell col=\"24\" text=\"휴대전화번호\"/><Cell col=\"25\" text=\"이메일\"/><Cell col=\"26\" text=\"KT사용담당\"/><Cell col=\"27\" text=\"휴대전화번호\"/><Cell col=\"28\" text=\"이메일\"/><Cell col=\"29\" text=\"기타사항\"/><Cell col=\"30\" text=\"지연입고사유\"/><Cell col=\"31\" text=\"상신상태\"/><Cell col=\"32\" text=\"승인상태\"/><Cell col=\"33\" text=\"확인(취소)자명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1381","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","105",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1369","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1463","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1404","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1334","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","120",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.38%","divSearch:0","40","20",null,null,null,null,null,null,this);
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

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
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

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00",null,"10","127","28","92",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("지연입고결제");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_01",null,"10","88","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("영업확인");
            obj.set_cssclass("btn_Comm_func");
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
        this.registerScript("SD11911.xfdl", function() {

        this.temp01_onload = function(obj,e)
        {
        	this.gfnDivSearchExpand(this.btnSearchExpand,this.divSearch);
        };



        this.Button01_onclick = function(obj,e)
        {

        };

        this.btnSearchExpand_onclick = function(obj,e)
        {
            this.gfnDivSearchExpand(obj,this.divSearch);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SD11911.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
