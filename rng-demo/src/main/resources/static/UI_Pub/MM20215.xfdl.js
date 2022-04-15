(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_07_01");
            this.set_titletext("(대외계)보험사고 기초데이터 업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid3", this);
            obj.set_saveinvaliddate("exclude");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"1","40",null,"0","242",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
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

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","214","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","254","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","410","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("사고접수번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","114","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","320","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","450","18","50","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("보험사");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01_00","506","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_00_00_01_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_00_00_01_00_innerdataset", obj);
            DivSearch_form_cmb00_00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_cmb00_00_00_01_00_innerdataset);
            obj.set_text("에르고다음다이렉트손해보험(주)");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","DivSearch:21",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("조회");
            obj.set_url("MM::MM20215T01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("엑셀업로드 오류내역");
            obj.set_url("MM::MM20215T02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1180","63","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","MM::MM20215T01.xfdl");
            this._addPreloadList("fdl","MM::MM20215T02.xfdl");
        };
        
        // User Script
        this.registerScript("MM20215.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        this.divGridWapper_Static01_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM20215.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
