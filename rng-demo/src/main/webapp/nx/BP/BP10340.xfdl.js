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
            this.set_titletext("매출 및 직접비 산출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","84",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("정비위탁");
            obj.set_url("BP::BP10340T01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("정비위탁외");
            obj.set_url("BP::BP10340T02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","1394","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","108","28","1",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("산출 및 저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","38","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("계획구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","211","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","125","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var DivSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_innerdataset", obj);
            DivSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","251","18","38","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("버전");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","291","18","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_text("최종");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","76","19","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","870","18","38","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("사업");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","910","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_text("오토렌탈");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","401","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("수립년도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","468","18","43","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","361","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","458","4","10","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","567","18","48","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("수립월");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","620","18","28","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","610","4","10","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","704","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00","770","18","43","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00","511","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00_00","648","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01_00_01","813","18","20","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","527","4","40","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00","664","4","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00","830","10","40","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","BP::BP10340T01.xfdl");
            this._addPreloadList("fdl","BP::BP10340T02.xfdl");
        };
        
        // User Script
        this.registerScript("BP10340.xfdl", function() {

        this.DivSearch_Static00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.div00_00.form.Button00_00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("BP10340.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
