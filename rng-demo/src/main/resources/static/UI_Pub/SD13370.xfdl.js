(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_06");
            this.set_titletext("KT 계약조직체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","255","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("만료일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","501","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","541","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("계약조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","215","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","52","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","20","86","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("장비담당자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","255","52","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("계약담당조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","255","86","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("장비담당조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","541","52","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("팀장");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","541","86","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("총괄담당자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","776","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("담당자조직선택");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00","776","52","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("팀장담당조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00_00","776","86","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("총괄담당조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","90","13","10","100",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","100","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","182","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","100","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","100","86","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","336","17","10","100",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","346","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_value("20221001");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","346","52","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("전략기획팀");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","346","86","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("전략기획팀");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","611","15","10","100",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","621","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","621","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00_00","621","86","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","736","1","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00_00","871","13","10","100",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","881","52","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_text("전략기획팀");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01_00","881","86","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("전략기획팀");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","881","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_text("계약");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","932","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_text("장비");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","982","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_text("팀장");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","1033","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_text("총괄");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"560","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","145","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("KT 계약조직 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column6\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"계약조직\"/><Cell col=\"4\" text=\"계약조직명\"/><Cell col=\"5\" text=\"계약담당\"/><Cell col=\"6\" text=\"퇴사여부\"/><Cell col=\"7\" text=\"계약담당조직\"/><Cell col=\"8\" text=\"계약담당조직명\"/><Cell col=\"9\" text=\"장비담당\"/><Cell col=\"10\" text=\"퇴사여부\"/><Cell col=\"11\" text=\"장비담당조직\"/><Cell col=\"12\" text=\"장비담당조직명\"/><Cell col=\"13\" text=\"팀장\"/><Cell col=\"14\" text=\"퇴사여부\"/><Cell col=\"15\" text=\"팀장조직\"/><Cell col=\"16\" text=\"팀장조직명\"/><Cell col=\"17\" text=\"총괄담당\"/><Cell col=\"18\" text=\"퇴사여부\"/><Cell col=\"19\" text=\"총괄담당조직\"/><Cell col=\"20\" text=\"총괄담당조직명\"/><Cell col=\"21\" text=\"설비번호\"/><Cell col=\"22\" text=\"상품코드\"/><Cell col=\"23\" text=\"품명\"/><Cell col=\"24\" text=\"모델명\"/><Cell col=\"25\" text=\"계약구분\"/><Cell col=\"26\" text=\"개시일자\"/><Cell col=\"27\" text=\"만료일자\"/><Cell col=\"28\" text=\"계약월\"/><Cell col=\"29\" text=\"계약주\"/><Cell col=\"30\" text=\"월렌탈료\"/><Cell col=\"31\" text=\"주렌탈료\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","44","24","48",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1009","44","100","6",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","877","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","961","13","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","948","14","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","121",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00",null,"DivSearch:0","500",null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","175","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("KT조직/담당자 일괄변경");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","50","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("KT조직코드명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","50",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","83","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("계약");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","83",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","116","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("장비");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","116",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","149","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("팀장");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","149",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","182","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("총괄");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","129","182",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","163","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","134","56","42","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_value("3666");
            obj.set_text("3666");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","178","56","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","205","56","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_value("서울중앙MOT 강북 Part");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","362","56","122","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("KT조직일괄변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","88","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("123456789");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","221","88","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","248","88","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00","134","121","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("201601011234");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_01","236","121","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","263","121","232","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","134","154","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","193","154","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","220","154","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","187","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","193","187","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","220","187","115","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","337","187","134","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("KT담당자일괄변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","1068","127","20","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
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
        this.registerScript("SD13370.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD13370.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
