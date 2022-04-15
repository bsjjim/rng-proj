(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_05");
            this.set_titletext("매각실적현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63",null,null,"794","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"4\"/><Cell col=\"6\" colspan=\"4\"/><Cell row=\"1\" col=\"2\" text=\"사업계획\"/><Cell row=\"1\" col=\"3\" text=\"실적\"/><Cell row=\"1\" col=\"4\" text=\"계획대비\"/><Cell row=\"1\" col=\"5\" text=\"달성율\"/><Cell row=\"1\" col=\"6\" text=\"사업계획\"/><Cell row=\"1\" col=\"7\" text=\"실적\"/><Cell row=\"1\" col=\"8\" text=\"계획대비\"/><Cell row=\"1\" col=\"9\" text=\"달성율\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","509","44","100","6",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("매각실적");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","77","2","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01","87","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_value("20220110");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"60","20","60","774",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"63","734",null,"40","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","525","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","20","734",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00.form.Tab00);
            obj.set_text("상품별 현황");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50","734",null,null,"0",null,null,null,null,this.Div00.form.Tab00.Tabpage1.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"대수\"/><Cell col=\"3\" text=\"구성비\"/><Cell col=\"4\" text=\"영업개월\"/><Cell col=\"5\" text=\"매각이익율\"/><Cell col=\"6\" text=\"매출액\"/><Cell col=\"7\" text=\"매각원가\"/><Cell col=\"8\" text=\"매각이익\"/><Cell col=\"9\" text=\"대당매각이익\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:차량번호\"/><Cell col=\"2\" text=\"bind:상품군명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:결제고객번호\"/><Cell col=\"4\" text=\"bind:결제고객명\"/><Cell col=\"5\" text=\"bind:수납일시\"/><Cell col=\"6\" text=\"bind:청구금액\"/><Cell col=\"7\" text=\"bind:포인트수납금액\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div00.form.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00.form.Tab00);
            obj.set_text("차급별 현황");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50","734",null,null,"0",null,null,null,null,this.Div00.form.Tab00.Tabpage2.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차급\"/><Cell col=\"2\" text=\"대수\"/><Cell col=\"3\" text=\"구성비\"/><Cell col=\"4\" text=\"영업개월\"/><Cell col=\"5\" text=\"매각이익율\"/><Cell col=\"6\" text=\"매출액\"/><Cell col=\"7\" text=\"매각원가\"/><Cell col=\"8\" text=\"매각이익\"/><Cell col=\"9\" text=\"대당매각이익\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:차량번호\"/><Cell col=\"2\" text=\"bind:상품군명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:결제고객번호\"/><Cell col=\"4\" text=\"bind:결제고객명\"/><Cell col=\"5\" text=\"bind:수납일시\"/><Cell col=\"6\" text=\"bind:청구금액\"/><Cell col=\"7\" text=\"bind:포인트수납금액\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div00.form.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00.form.Tab00);
            obj.set_text("영업개월별 현황");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50","734",null,null,"0",null,null,null,null,this.Div00.form.Tab00.Tabpage3.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"대수\"/><Cell col=\"3\" text=\"구성비\"/><Cell col=\"4\" text=\"영업개월\"/><Cell col=\"5\" text=\"매각이익율\"/><Cell col=\"6\" text=\"매출액\"/><Cell col=\"7\" text=\"매각원가\"/><Cell col=\"8\" text=\"매각이익\"/><Cell col=\"9\" text=\"대당매각이익\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:차량번호\"/><Cell col=\"2\" text=\"bind:상품군명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:결제고객번호\"/><Cell col=\"4\" text=\"bind:결제고객명\"/><Cell col=\"5\" text=\"bind:수납일시\"/><Cell col=\"6\" text=\"bind:청구금액\"/><Cell col=\"7\" text=\"bind:포인트수납금액\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div00.form.Tab00.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.form.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00.form.Tab00);
            obj.set_text("유종별 현황");
            this.Div00.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.form.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","261","24",null,null,null,null,null,null,this.Div00.form.Tab00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.form.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50","734",null,null,"0",null,null,null,null,this.Div00.form.Tab00.Tabpage4.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"대수\"/><Cell col=\"3\" text=\"구성비\"/><Cell col=\"4\" text=\"영업개월\"/><Cell col=\"5\" text=\"매각이익율\"/><Cell col=\"6\" text=\"매출액\"/><Cell col=\"7\" text=\"매각원가\"/><Cell col=\"8\" text=\"매각이익\"/><Cell col=\"9\" text=\"대당매각이익\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:차량번호\"/><Cell col=\"2\" text=\"bind:상품군명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:결제고객번호\"/><Cell col=\"4\" text=\"bind:결제고객명\"/><Cell col=\"5\" text=\"bind:수납일시\"/><Cell col=\"6\" text=\"bind:청구금액\"/><Cell col=\"7\" text=\"bind:포인트수납금액\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.Div00.form.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div00.form.Tab00.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.form.Tab00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
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
        this.registerScript("SD13410.xfdl", function() {

        this.Div01_Static02_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD13410.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
