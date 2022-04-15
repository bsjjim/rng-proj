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
            this.set_titletext("발주정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,144);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"78","0",null,null,null,null,null,this);
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
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","11",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","44","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("주소");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","1116","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","0","145","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","372","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("인수자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","16","207","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","506","16","95","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","603","16","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_01","134","49","50","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","1250","16","207","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","744","11","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","878","16","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","188","49","242","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","432","49","252","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
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
        this.registerScript("MM12040T01.xfdl", function() {

        this.div00_Static26_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div00.form.Static26_02.addEventHandler("onclick",this.div00_Static26_02_onclick,this);
        };
        this.loadIncludeScript("MM12040T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
