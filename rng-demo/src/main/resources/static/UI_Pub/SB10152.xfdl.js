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
            this.set_titletext("위약금상담실적현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column19\"/><Col id=\"Column20\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("등록년월");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","86","18","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","94","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("조회 결과");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","412","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\" cssclass=\"cell_fix\"/><Cell col=\"2\" text=\"1일\"/><Cell col=\"3\" text=\"2일\"/><Cell col=\"4\" text=\"3일\"/><Cell col=\"5\" text=\"4일\"/><Cell col=\"6\" text=\"5일\"/><Cell col=\"7\" text=\"6일\"/><Cell col=\"8\" text=\"7일\"/><Cell col=\"9\" text=\"8일\"/><Cell col=\"10\" text=\"9일\"/><Cell col=\"11\" text=\"10일\"/><Cell col=\"12\" text=\"11일\"/><Cell col=\"13\" text=\"12일\"/><Cell col=\"14\" text=\"13일\"/><Cell col=\"15\" text=\"14일\"/><Cell col=\"16\" text=\"15일\"/><Cell col=\"17\" text=\"16일\"/><Cell col=\"18\" text=\"17일\"/><Cell col=\"19\" text=\"18일\"/><Cell col=\"20\" text=\"19일\"/><Cell col=\"21\" text=\"20일\"/><Cell col=\"22\" text=\"21일\"/><Cell col=\"23\" text=\"22일\"/><Cell col=\"24\" text=\"23일\"/><Cell col=\"25\" text=\"24일\"/><Cell col=\"26\" text=\"25일\"/><Cell col=\"27\" text=\"26일\"/><Cell col=\"28\" text=\"27일\"/><Cell col=\"29\" text=\"28일\"/><Cell col=\"30\" text=\"29일\"/><Cell col=\"31\" text=\"30일\"/><Cell col=\"32\" text=\"31일\"/><Cell col=\"33\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"cell_fix\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column4\"/><Cell col=\"7\" text=\"bind:Column5\"/><Cell col=\"8\" text=\"bind:Column6\"/><Cell col=\"9\" text=\"bind:Column7\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:Column14\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:Column15\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:Column16\"/><Cell col=\"18\" text=\"bind:Column17\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:Column18\"/><Cell col=\"20\" text=\"bind:Column19\"/><Cell col=\"21\" text=\"bind:Column20\"/><Cell col=\"22\" text=\"bind:Column21\"/><Cell col=\"23\" text=\"bind:Column22\"/><Cell col=\"24\" text=\"bind:Column23\"/><Cell col=\"25\" text=\"bind:Column24\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\" cssclass=\"cell_summ\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"합계\" cssclass=\"cell_fix\"/><Cell col=\"2\" text=\"0\" displaytype=\"number\"/><Cell col=\"3\" text=\"0\" displaytype=\"number\"/><Cell col=\"4\" text=\"0\" displaytype=\"number\"/><Cell col=\"5\" text=\"0\" displaytype=\"number\"/><Cell col=\"6\" text=\"0\" displaytype=\"number\"/><Cell col=\"7\" text=\"0\" displaytype=\"number\"/><Cell col=\"8\" textAlign=\"right\" displaytype=\"number\" text=\"0\"/><Cell col=\"9\" text=\"0\" displaytype=\"number\"/><Cell col=\"10\" text=\"0\" displaytype=\"number\"/><Cell col=\"11\" text=\"0\" displaytype=\"number\"/><Cell col=\"12\" text=\"0\" displaytype=\"number\"/><Cell col=\"13\" text=\"0\" displaytype=\"number\"/><Cell col=\"14\" displaytype=\"number\" text=\"0\"/><Cell col=\"15\" text=\"0\" displaytype=\"number\"/><Cell col=\"16\" text=\"0\" displaytype=\"number\"/><Cell col=\"17\" text=\"0\" displaytype=\"number\"/><Cell col=\"18\" text=\"0\" displaytype=\"number\"/><Cell col=\"19\" text=\"0\" displaytype=\"number\"/><Cell col=\"20\" text=\"0\" displaytype=\"number\"/><Cell col=\"21\" displaytype=\"number\" text=\"0\"/><Cell col=\"22\" text=\"0\" displaytype=\"number\"/><Cell col=\"23\" displaytype=\"number\" text=\"0\"/><Cell col=\"24\" text=\"0\" displaytype=\"number\"/><Cell col=\"25\" text=\"0\" displaytype=\"number\"/><Cell col=\"26\" text=\"0\" displaytype=\"number\"/><Cell col=\"27\" text=\"0\" displaytype=\"number\"/><Cell col=\"28\" text=\"0\" displaytype=\"number\"/><Cell col=\"29\" text=\"0\" displaytype=\"number\"/><Cell col=\"30\" text=\"0\" displaytype=\"number\"/><Cell col=\"31\" text=\"0\" displaytype=\"number\"/><Cell col=\"32\" text=\"0\" displaytype=\"number\"/><Cell col=\"33\" text=\"0\" displaytype=\"number\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
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
        this.registerScript("SB10152.xfdl", function() {

        this.div00_Static00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SB10152.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
