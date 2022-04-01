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
            this.set_titletext("입찰결과확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","63",null,null,"40","319",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("마스터그리드");
            obj.set_cssclass("sta_WF_title1");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"매각구분\"/><Cell col=\"2\" text=\"입찰번호\"/><Cell col=\"3\" text=\"입찰명\"/><Cell col=\"4\" text=\"소속센터\"/><Cell col=\"5\" text=\"유통경로\"/><Cell col=\"6\" text=\"공시일자\"/><Cell col=\"7\" text=\"입찰일자\"/><Cell col=\"8\" text=\"입찰종료일자\"/><Cell col=\"9\" text=\"입찰참여\"/><Cell col=\"10\" text=\"미참여\"/><Cell col=\"11\" text=\"낙찰대수\"/><Cell col=\"12\" text=\"유찰대수\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"20","60","24","0",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","395",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"20","15","24","73",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"6","5","47","84",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-4","15","60","60",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"20","69","24","89",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"271","40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("입찰상세내역");
            obj.set_cssclass("sta_WF_title2");
            this.divBottom.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.divBottom.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"입찰번호\"/><Cell col=\"4\" text=\"설비번호\"/><Cell col=\"5\" text=\"차량번호\"/><Cell col=\"6\" text=\"경매차량번호\"/><Cell col=\"7\" text=\"차량명\"/><Cell col=\"8\" text=\"고객번호\"/><Cell col=\"9\" text=\"업체명\"/><Cell col=\"10\" text=\"낙찰가\"/><Cell col=\"11\" text=\"수출가(USD)\"/><Cell col=\"12\" text=\"환율\"/><Cell col=\"13\" text=\"낙찰유무\"/><Cell col=\"14\" text=\"총 낙찰대수\"/><Cell col=\"15\" text=\"전송여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","148","0","100","50",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"20","69","24","839",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static02_01",null,"20","15","24","823",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"-2","15","60","810",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00",null,"3","5","42","834",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("6");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"20","60","24","0",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("7");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02",null,"20","58","24","1126",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("8");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_unit");
            this.divBottom.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_01",null,"20","76","24","1048",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("9");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00",null,"20","58","24","976",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("10");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_WF_unit");
            this.divBottom.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_01_00",null,"20","85","24","889",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("11");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","766",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","718",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","98","24","550",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("14");
            obj.set_text("오토리스 전송");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","50","24","118",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("15");
            obj.set_text("승인");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_01",null,"20","50","24","226",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("16");
            obj.set_text("낙찰");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_02",null,"20","86","24","460",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("17");
            obj.set_text("1순위낙찰");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_03",null,"20","62","24","652",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("18");
            obj.set_text("이메일");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_02_00",null,"20","86","24","370",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("19");
            obj.set_text("2순위낙찰");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_02_01",null,"20","86","24","280",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("20");
            obj.set_text("3순위낙찰");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"20","50","24","172",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("21");
            obj.set_text("유찰");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_01",null,"20","50","24","64",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("22");
            obj.set_text("전송");
            obj.set_cssclass("btn_Block");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","599","14","50","18",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("23");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"3","20","41","1028",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("24");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("입찰번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","207","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("입찰기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","167","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","524","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("매각센터");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","484","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","77","1","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","87","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_value("123456789");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","264","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","580","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","590","18","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","720","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","760","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("매각구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","816","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","826","18","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","274","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divBottom:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_01",null,"10","100","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("계약서출력");
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
        this.registerScript("SD12890.xfdl", function() {

        this.temp_onload = function(obj,e)
        {

        };


        this.divTop_Button00_onclick = function(obj,e)
        {
            this.gfnDivExpand("bottom-bottom",0,this.divTop,obj);
        };

        this.divBottom_Button00_01_onclick = function(obj,e)
        {
            this.gfnDivExpand("height-top",63,this.divBottom,obj);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_onload,this);
            this.divTop.form.Button00_00_01_00_03_00_00_01.addEventHandler("onclick",this.divTop_Button00_onclick,this);
            this.divBottom.form.Button00_01.addEventHandler("onclick",this.divBottom_Button00_01_onclick,this);
        };
        this.loadIncludeScript("SD12890.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
