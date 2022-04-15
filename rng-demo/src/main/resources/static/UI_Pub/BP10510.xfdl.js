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
            this.set_titletext("마스터관리");
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

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new CheckBox("CheckBox00_00","158","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("버전마스터");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","253","18","105","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("손익항목마스터");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","372","18","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("BS항목마스터");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","484","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("BS항목매핑");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","98","18","60","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_value("true");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","18","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("마스터구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","DivSearch:20",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("버전마스터");
            obj.set_url("BP::BP10510T01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("손익항목마스터");
            obj.set_url("BP::BP10510T02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("BS항목마스터");
            obj.set_url("BP::BP10510T03.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("BS항목매핑");
            obj.set_url("BP::BP10510T04.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
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
            this._addPreloadList("fdl","BP::BP10510T01.xfdl");
            this._addPreloadList("fdl","BP::BP10510T02.xfdl");
            this._addPreloadList("fdl","BP::BP10510T03.xfdl");
            this._addPreloadList("fdl","BP::BP10510T04.xfdl");
        };
        
        // User Script
        this.registerScript("BP10510.xfdl", function() {

        this.DivSearch_Static00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.div00_00.form.Button00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("BP10510.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
