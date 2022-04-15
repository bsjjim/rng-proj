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
            this.set_titletext("마스터탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">LOTZE (L) 2.0</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">1</Col><Col id=\"Column8\">1</Col><Col id=\"Column9\">23/11</Col></Row><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">4</Col><Col id=\"Column7\">4</Col><Col id=\"Column8\">4</Col><Col id=\"Column9\">23/11</Col></Row><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">22</Col><Col id=\"Column7\">22</Col><Col id=\"Column8\">22</Col><Col id=\"Column9\">23/11</Col></Row><Row><Col id=\"Column0\">1234567890</Col><Col id=\"Column1\">1113381258</Col><Col id=\"Column2\">홍길동</Col><Col id=\"Column3\">10허1234</Col><Col id=\"Column4\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column5\">1234-1234-****-****</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">1</Col><Col id=\"Column8\">1</Col><Col id=\"Column9\">23/11</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"40","48",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("현금정산");
            obj.set_url("UI_Template::P-07_tab_01_in.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("포인트정산");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("무료이용권정산");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("SWAP정산");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("Tabpage5");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"-62","40",null,"0","57",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","63","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","74","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("정산취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_02","0",null,"122","28",null,"10",null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("순회정비이관관리");
            obj.set_cssclass("btn_Comm_link");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","0","0","50","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","0",null,"50","10",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","UI_Template::P-07_tab_01_in.xfdl");
        };
        
        // User Script
        this.registerScript("P-07_tab_01.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("P-07_tab_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
