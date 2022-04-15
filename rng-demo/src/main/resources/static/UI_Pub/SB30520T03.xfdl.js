(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SB30520T01");
            this.set_titletext("개별계산서발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,557);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","11",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00",null,"4","100","6","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","16","150","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("1234067890");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","288","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("비고");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","422","16","679","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("1234067890");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","div00:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
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
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","50","606","100","15",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","810",null,"100","35",null,"0",null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","164",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","116",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","221",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","235",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","112","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("일괄계산서발행");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,557,this,function(p){});
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

        };
        this.loadIncludeScript("SB30520T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
