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
            this.set_titletext("(대외계)차량출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,144);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static26_03_00","0","11","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차량출고 희망일자");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","11",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","381","11","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CM계약번호");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","44",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","77",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","381","77","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("임판번호");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","110",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","381","110","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","134","16","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","381","44","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","753","12","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("DC후 구매가");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00","753","45","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("출고금액");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00","753","78","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("차액");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_00_00_00","753","110","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("등록지");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01","515","49","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00","515","16","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_00","515","82","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_00_00","515","115","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_01","887","16","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_01_00","887","49","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_01_01","887","82","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_01_00_01_01_00","887","115","224","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","44","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("차량배정일자");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","0","77","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("세금계산서");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","0","110","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("출발일자");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01","1116","12","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("본사 > CM");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00_01_00","1116","44","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("CM 메모");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","134","49","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_02","134","82","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_02_00","134","115","243","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_02_01","1250","16",null,"24","4",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_02_01_00","1250","49",null,"24","4",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1033","82","122","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("출고정보변경저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1007","16","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","1007","49","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","1007","82","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_02_00","168","0","50","10",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,144,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MM12010T02.xfdl", function() {

        this.div00_cmb00_00_onitemchanged = function(obj,e)
        {

        };

        this.Div01_Button00_00_01_00_01_00_onclick = function(obj,e)
        {

        };

        this.tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM12010T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
