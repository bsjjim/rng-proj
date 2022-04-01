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
            this.set_titletext("SGI보상청구관리");
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
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("청구신청");
            obj.set_url("SD::SD17020T01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("기각내역");
            obj.set_url("SD::SD17020T02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("지급내역");
            obj.set_url("SD::SD17020T03.xfdl");
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
            this._addPreloadList("fdl","SD::SD17020T01.xfdl");
            this._addPreloadList("fdl","SD::SD17020T02.xfdl");
            this._addPreloadList("fdl","SD::SD17020T03.xfdl");
        };
        
        // User Script
        this.registerScript("SD17020.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD17020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
