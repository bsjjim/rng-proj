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
            this.set_titletext("장기견적요청 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"bgClass\" type=\"STRING\" size=\"256\"/><Column id=\"bgClass_1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"bgClass\">cell_bg_1</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"bgClass\">cell_bg_1</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"bgClass\">cell_bg_2</Col><Col id=\"bgClass_1\">cell_bg_2</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"bgClass\">cell_bg_1</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"bgClass\">cell_bg_1</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","337","18","53","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("본부");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","227","76","80","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","593","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("배분부서");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","553","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","927","18","79","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("담당자(SP)");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","886","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","297","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("배분구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","86","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","232","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","337","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("요청채널");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","593","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("진행현황");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","927","52","79","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","77","4","10","80",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","87","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","393","10","10","80",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","403","18","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("input_req");
            obj.set_text("채널영업부문");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","650","8","10","80",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","660","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_value("4410");
            obj.set_cssclass("input_req");
            obj.set_text("4410");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","704","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","731","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_value("SP영업1지점");
            obj.set_enable("false");
            obj.set_cssclass("input_req");
            obj.set_text("SP영업1지점");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00_00","997","12","10","65",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1007","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_displaynulltext("(SP코드)");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1071","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1098","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_enableevent("true");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_01","1007","52","72","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            obj.set_maskchar(" ");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","403","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_displaynulltext("선택");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00_00","660","52","227","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_displaynulltext("선택");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"40","318",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","18","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("장기견적요청");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","35",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"일련번호\"/><Cell col=\"3\" text=\"배분구분\"/><Cell col=\"4\" text=\"배분부서\"/><Cell col=\"5\" text=\"담당자(SP)\"/><Cell col=\"6\" text=\"배분확인자\" cssclass=\"cell_fix\"/><Cell col=\"7\" text=\"배분일자\"/><Cell col=\"8\" text=\"배분시간\"/><Cell col=\"9\" text=\"요청채널\"/><Cell col=\"10\" text=\"차종\"/><Cell col=\"11\" text=\"진행현황\"/><Cell col=\"12\" text=\"상담일지(직영)\"/><Cell col=\"13\" text=\"고객구분\"/><Cell col=\"14\" text=\"고객번호\"/><Cell col=\"15\" text=\"고객명\"/><Cell col=\"16\" text=\"휴대전화번호\"/><Cell col=\"17\" text=\"마케팅동의\"/><Cell col=\"18\" text=\"고객반응\"/><Cell col=\"19\" text=\"미성사사유\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"bind:bgClass\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"bind:bgClass\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"bind:bgClass\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"bind:bgClass\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"bind:bgClass\"/><Cell col=\"5\" text=\"bind:Column5\" cssclass=\"bind:bgClass\"/><Cell col=\"6\" text=\"bind:Column6\" cssclass=\"expr:bgClass==&apos;cell_bg_1&apos;?&quot;cell_bg_1 cell_fix&quot;:&quot;cell_fix&quot; &amp;&amp; bgClass_1==&apos;cell_bg_2&apos;?&quot;cell_bg_2 cell_fix&quot;:&quot;cell_fix&quot;\"/><Cell col=\"7\" text=\"bind:Column7\" cssclass=\"bind:bgClass\"/><Cell col=\"8\" text=\"bind:Column8\" cssclass=\"bind:bgClass\"/><Cell col=\"9\" text=\"bind:Column9\" cssclass=\"bind:bgClass\"/><Cell col=\"10\" cssclass=\"bind:bgClass\"/><Cell col=\"11\" cssclass=\"bind:bgClass\"/><Cell col=\"12\" cssclass=\"bind:bgClass\"/><Cell col=\"13\" cssclass=\"bind:bgClass\"/><Cell col=\"14\" cssclass=\"bind:bgClass\"/><Cell col=\"15\" cssclass=\"bind:bgClass\"/><Cell col=\"16\" cssclass=\"bind:bgClass\"/><Cell col=\"17\" cssclass=\"bind:bgClass\"/><Cell col=\"18\" cssclass=\"bind:bgClass\"/><Cell col=\"19\" cssclass=\"bind:bgClass\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","141",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1345","13","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","1333","14","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","156",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("45");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","84",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","80","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("SP배분");
            obj.set_cssclass("btn_Block_popup");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1408","16","11","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","810",null,"100","35",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0",null,"842","24",null,"2",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("11");
            obj.set_text("※체크박스로 선택 후, [SP배분] 버튼을 클릭 하여, 담당자(SP)를 지정하세요.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","50","302","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div01:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","18","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("배분정보");
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
            obj.set_text("배분구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51","712","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("배분지점");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84","712","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("배분일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117","712","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01","280","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01","280","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("담당자(SP)");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","280","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("배분시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01_00","560","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("배분확인자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","560","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("온라인다이렉트");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01_00","560","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("진행현황");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50","840","2",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","134","56","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_value("중복데이터");
            obj.set_readonly("true");
            obj.set_text("중복데이터");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","414","56","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_value("1001308885");
            obj.set_readonly("true");
            obj.set_text("1001308885");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","694","56","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_value("견적생성");
            obj.set_readonly("true");
            obj.set_text("견적생성");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01","134","89","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_value("SP영업1지점");
            obj.set_readonly("true");
            obj.set_text("SP영업1지점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","414","89","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_value("쏭카");
            obj.set_readonly("true");
            obj.set_text("쏭카");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","694","89","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_value("쏭카");
            obj.set_readonly("true");
            obj.set_text("쏭카");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","694","122","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_value("온라인다이렉트");
            obj.set_readonly("true");
            obj.set_text("온라인다이렉트");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","414","122","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_value("112011");
            obj.set_readonly("true");
            obj.set_text("112011");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_00","134","122","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_value("2022-08-12");
            obj.set_readonly("true");
            obj.set_text("2022-08-12");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","861","19","340","19",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("혼합형");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","861","49","75","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("상담자수");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","935","49","98","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("상담일자");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","1129","49",null,"29","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("상담내용");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","935","77","98","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","1129","77",null,"65","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","861","77","75","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("1차");
            obj.set_cssclass("sta_DA_label");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","935","141","98","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","1129","141",null,"65","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","861","141","75","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("2차");
            obj.set_cssclass("sta_DA_label");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00","935","205","98","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","1129","205",null,"65","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","861","205","75","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("3차");
            obj.set_cssclass("sta_DA_label");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00","1032","49","98","29",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("상담시간");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01","1032","77","98","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01","1032","141","98","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","861","48",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","1032","205","98","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","-1","169","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("차량및 고객정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","359","151","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","202","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("차종");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","202","712","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","235","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("고객구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","235","712","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01_01","280","235","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01_00_00","560","235","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_01_00_00","560","202","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("마케팅동의");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","201","840","2",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_02","134","207","420","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_value("올뉴스포티지");
            obj.set_readonly("true");
            obj.set_text("올뉴스포티지");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","694","207","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_value("동의");
            obj.set_readonly("true");
            obj.set_text("동의");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_01_01","134","240","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_value("개인");
            obj.set_readonly("true");
            obj.set_text("개인");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","414","240","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_value("홍길동(123456789)");
            obj.set_readonly("true");
            obj.set_text("홍길동(123456789)");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","694","240","104","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_value("010-1234-1234");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","940","97","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_format("9999-99-99");
            obj.set_value("2022-08-01");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","940","160","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.set_format("9999-99-99");
            obj.set_value("2022-08-05");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00","940","223","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.set_format("9999-99-99");
            obj.set_value("2022-08-07");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01","1037","97","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_format("99:99:99");
            obj.set_value("112011");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00","1037","160","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.set_format("99:99:99");
            obj.set_value("0910121");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_01_00_00","1037","223","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_readonly("true");
            obj.set_format("99:99:99");
            obj.set_value("121131");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","1134","82",null,"55","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_value("올뉴스포티지 그레비티  - 외장: 그레이 /  내장: 브라운 / 옵션: 파노라마 썬루프");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","1134","146",null,"55","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_value("올뉴스포티지 그레비티  - 외장: 그레이 /  내장: 브라운 / 옵션: 파노라마 썬루프");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00_00","1134","210",null,"55","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_value("올뉴스포티지 그레비티  - 외장: 그레이 /  내장: 브라운 / 옵션: 파노라마 썬루프");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","841","98","20","80",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","36","38",null,null,null,null,this.div00.form);
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
        this.registerScript("SD12990.xfdl", function() {

        this.Div00_Edit00_01_02_00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD12990.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
