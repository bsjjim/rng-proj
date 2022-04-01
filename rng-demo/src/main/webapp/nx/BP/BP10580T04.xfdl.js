(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO00050T01");
            this.set_titletext("그린카");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,557);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"사업\"/><Cell col=\"2\" rowspan=\"2\" text=\"지표LV1\"/><Cell col=\"3\" rowspan=\"2\" text=\"지표LV2\"/><Cell col=\"4\" rowspan=\"2\" text=\"단위\"/><Cell col=\"5\" text=\"년\"/><Cell col=\"6\" text=\"년\" cssclass=\"cell_fix\"/><Cell col=\"7\" colspan=\"12\" text=\"년\"/><Cell col=\"19\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"5\" text=\"합계\"/><Cell row=\"1\" col=\"6\" text=\"합계\" cssclass=\"cell_fix\"/><Cell row=\"1\" col=\"7\" text=\"1월\"/><Cell row=\"1\" col=\"8\" text=\"2월\"/><Cell row=\"1\" col=\"9\" text=\"3월\"/><Cell row=\"1\" col=\"10\" text=\"4월\"/><Cell row=\"1\" col=\"11\" text=\"5월\"/><Cell row=\"1\" col=\"12\" text=\"6월\"/><Cell row=\"1\" col=\"13\" text=\"7월\"/><Cell row=\"1\" col=\"14\" text=\"8월\"/><Cell row=\"1\" col=\"15\" text=\"9월\"/><Cell row=\"1\" col=\"16\" text=\"10월\"/><Cell row=\"1\" col=\"17\" text=\"11월\"/><Cell row=\"1\" col=\"18\" text=\"12월\"/><Cell row=\"1\" col=\"19\" text=\"1월\"/><Cell row=\"1\" col=\"20\" text=\"2월\"/><Cell row=\"1\" col=\"21\" text=\"3월\"/><Cell row=\"1\" col=\"22\" text=\"4월\"/><Cell row=\"1\" col=\"23\" text=\"5월\"/><Cell row=\"1\" col=\"24\" text=\"6월\"/><Cell row=\"1\" col=\"25\" text=\"7월\"/><Cell row=\"1\" col=\"26\" text=\"8월\"/><Cell row=\"1\" col=\"27\" text=\"9월\"/><Cell row=\"1\" col=\"28\" text=\"10월\"/><Cell row=\"1\" col=\"29\" text=\"11월\"/><Cell row=\"1\" col=\"30\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"bind:Column0\"/><Cell col=\"8\" text=\"bind:Column1\"/><Cell col=\"9\" text=\"bind:Column2\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column4\"/><Cell col=\"12\" text=\"bind:Column5\"/><Cell col=\"13\" text=\"bind:Column6\"/><Cell col=\"14\" text=\"bind:Column7\"/><Cell col=\"15\" text=\"bind:Column8\"/><Cell col=\"16\" text=\"bind:Column9\"/><Cell col=\"17\" text=\"bind:Column10\"/><Cell col=\"18\" text=\"bind:Column11\"/><Cell col=\"19\" text=\"bind:Column12\"/><Cell col=\"20\" text=\"bind:Column13\"/><Cell col=\"21\" text=\"bind:Column14\"/><Cell col=\"22\" text=\"bind:Column15\"/><Cell col=\"23\" text=\"bind:Column16\"/><Cell col=\"24\" text=\"bind:Column17\"/><Cell col=\"25\" text=\"bind:Column18\"/><Cell col=\"26\" text=\"bind:Column19\"/><Cell col=\"27\" text=\"bind:Column20\"/><Cell col=\"28\" text=\"bind:Column21\"/><Cell col=\"29\" text=\"bind:Column22\"/><Cell col=\"30\" text=\"bind:Column23\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","96","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","296",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","344",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00",null,"20","150","24","142",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("전사지표 양식다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","138","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("전사지표 양식업로드");
            this.Div01.addChild(obj.name, obj);
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
        this.loadIncludeScript("BP10580T04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
