(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SD13070T01");
            this.set_titletext("과태료 처리 현황_T1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,592);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"처리유형\" cssclass=\"cell_fix\"/><Cell col=\"3\" rowspan=\"2\" text=\"전월이월\"/><Cell col=\"4\" colspan=\"31\" text=\"일자\"/><Cell col=\"35\" rowspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"4\" text=\"1일\"/><Cell row=\"1\" col=\"5\" text=\"2일\"/><Cell row=\"1\" col=\"6\" text=\"3일\"/><Cell row=\"1\" col=\"7\" text=\"4일\"/><Cell row=\"1\" col=\"8\" text=\"5일\"/><Cell row=\"1\" col=\"9\" text=\"6일\"/><Cell row=\"1\" col=\"10\" text=\"7일\"/><Cell row=\"1\" col=\"11\" text=\"8일\"/><Cell row=\"1\" col=\"12\" text=\"9일\"/><Cell row=\"1\" col=\"13\" text=\"10일\"/><Cell row=\"1\" col=\"14\" text=\"11일\"/><Cell row=\"1\" col=\"15\" text=\"12일\"/><Cell row=\"1\" col=\"16\" text=\"13일\"/><Cell row=\"1\" col=\"17\" text=\"14일\"/><Cell row=\"1\" col=\"18\" text=\"15일\"/><Cell row=\"1\" col=\"19\" text=\"16일\"/><Cell row=\"1\" col=\"20\" text=\"17일\"/><Cell row=\"1\" col=\"21\" text=\"18일\"/><Cell row=\"1\" col=\"22\" text=\"19일\"/><Cell row=\"1\" col=\"23\" text=\"20일\"/><Cell row=\"1\" col=\"24\" text=\"21일\"/><Cell row=\"1\" col=\"25\" text=\"22일\"/><Cell row=\"1\" col=\"26\" text=\"23일\"/><Cell row=\"1\" col=\"27\" text=\"24일\"/><Cell row=\"1\" col=\"28\" text=\"25일\"/><Cell row=\"1\" col=\"29\" text=\"26일\"/><Cell row=\"1\" col=\"30\" text=\"27일\"/><Cell row=\"1\" col=\"31\" text=\"28일\"/><Cell row=\"1\" col=\"32\" text=\"29일\"/><Cell row=\"1\" col=\"33\" text=\"30일\"/><Cell row=\"1\" col=\"34\" text=\"31일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\"/><Cell col=\"15\" text=\"bind:Column14\"/><Cell col=\"16\" text=\"bind:Column15\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","56","3","10","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1381","13","15","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","105",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1369","14","4","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1488","14","4","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1404","44","100","6",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1334","38","100","12",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","120",null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","48",null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,592,this,function(p){});
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
        this.loadIncludeScript("SD13070T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
