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
            this.set_titletext("대외계정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,144);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"111","0",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","44",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("지점→본사");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","11",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","44","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("본사→용품사");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","77","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("용품사메모");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","77",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","489","44","215","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("영상기록장치번호(IoT단말기CTN)");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","489","11","215","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("운송장번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","985","77","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("차액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","985","44","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("출고금액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","985","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("단가");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","16","351","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","134","49","351","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","134","82","351","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","708","49","272","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","708","16","272","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","0","145","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","1119","16","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_format("#,##9");
            obj.set_value("150000");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1239","16","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","1239","49","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","1119","49","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_format("#,##9");
            obj.set_value("150000");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","1239","82","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","1119","82","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_format("#,##9");
            obj.set_value("150000");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,144,this,function(p){});
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
        this.loadIncludeScript("MM12040T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
