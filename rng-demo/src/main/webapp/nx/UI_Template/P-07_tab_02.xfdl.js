(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("탭 내 조회+서브탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">LOTZE (L) 2.0</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">1</Col><Col id=\"Column8\">1</Col><Col id=\"Column9\">23/11</Col></Row><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">4</Col><Col id=\"Column7\">4</Col><Col id=\"Column8\">4</Col><Col id=\"Column9\">23/11</Col></Row><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">22</Col><Col id=\"Column7\">22</Col><Col id=\"Column8\">22</Col><Col id=\"Column9\">23/11</Col></Row><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">1</Col><Col id=\"Column8\">1</Col><Col id=\"Column9\">23/11</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"40","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("메인탭1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","10",null,"62","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label_req");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,"11","38","38","20",null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02","86","18","95","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","183","18","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Comp_src");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","210","18","115","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","360","72","100","15",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","87",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_initvalueid("iv_Tab_2Depth");
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_WF_second");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("서브탭1");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"21","69","24","129",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02_01",null,"21","15","24","113",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"39","30","11","114",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00",null,"4","5","42","124",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","360","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"장기계약번호\"/><Cell col=\"1\" text=\"고객번호\"/><Cell col=\"2\" text=\"고객명\"/><Cell col=\"3\" text=\"장기차량번호\"/><Cell col=\"4\" text=\"차종\"/><Cell col=\"5\" text=\"카드번호\"/><Cell col=\"6\" text=\"발행건수\"/><Cell col=\"7\" text=\"사용건수\"/><Cell col=\"8\" text=\"잔여건수\"/><Cell col=\"9\" text=\"유효기간\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-2","15","60","44",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","58",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridCount");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01",null,"3","10","47","106",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            this.Tab00.Tabpage1.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00.Tabpage1.form.Tab00);
            obj.set_text("서브탭2");
            this.Tab00.Tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("메인탭2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"-62","40",null,"0","57",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
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
        this.registerScript("P-07_tab_02.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("P-07_tab_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
