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
            this.set_titletext("심사포괄계약한도조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","38",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("심사고객구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","377","18","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("계약부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","337","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
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

            obj = new Static("Static01_01","750","18","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","710","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","946","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","986","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","816","18","130","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","103","4","10","65",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","460","5","10","70",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","806","6","10","65",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","1056","10","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","377","52","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("한도만료기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00_00","-890","54","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("201601011234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","113","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","470","52","240","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","113","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("1234067890");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","195","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","222","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","470","18","35","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("A06");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","507","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","534","18","176","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("전략기획팀");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1066","18","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1125","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1152","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column2\"/><Cell col=\"2\" text=\"Column3\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column5\"/><Cell col=\"5\" text=\"Column6\"/><Cell col=\"6\" text=\"Column7\"/><Cell col=\"7\" text=\"Column8\"/><Cell col=\"8\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","15",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","76","28","83",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01",null,"10","79","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
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
        this.registerScript("SD11880.xfdl", function() {

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
        };
        this.loadIncludeScript("SD11880.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
