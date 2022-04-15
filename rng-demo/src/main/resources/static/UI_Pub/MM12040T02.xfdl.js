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
            this.set_titletext("차량정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,144);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"144","0",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","372","44",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","11",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","44","130","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("옵션");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","372","77",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","372","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("카메이커");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","744","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","1116","77","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("경유지");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","1116","44","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("출고일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","1116","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("출고예정일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","372","110",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","1116","110","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","16","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","44",null,"100","1115",null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","134","50","233","89",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","506","16","112","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","506","49","112","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00","506","82","112","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_00_00","506","115","112","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00_01","620","49","112","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01","878","16","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00","878","49","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00_00","878","82","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00_00_00","878","115","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00_00_01","1250","82","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_01_00_00_01_00","1250","115","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","1250","49","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","1250","16","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","0","145","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","372","44","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공급자");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","372","77","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("외장색상");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","372","110","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("내장색상");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","744","44","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("요청자");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","744","77","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","744","110","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);
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
        this.loadIncludeScript("MM12040T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
