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
            this.set_titletext("(대외계)외산차량 정보관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("딜러사");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","194","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","234","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("차종코드");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","422","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","462","18","45","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("차종명");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","302","18","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","517","18","300","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_00","74","18","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_value("M900");
            obj.set_text("M900");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0","48.04%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","135","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("외산차량 주요 정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"제조사명\"/><Cell col=\"3\" text=\"모델코드\"/><Cell col=\"4\" text=\"차종코드\"/><Cell col=\"5\" text=\"차종명\"/><Cell col=\"6\" text=\"소비자가\"/><Cell col=\"7\" text=\"유예가 [면세가]\"/><Cell col=\"8\" text=\"할인율 [%]\"/><Cell col=\"9\" text=\"비고 [전달 및 공지사항]\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","Div01:20","div00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","117","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("차종별 재고현황");
            obj.set_cssclass("sta_WF_title1");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","132","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"외장색상명\"/><Cell col=\"3\" text=\"재고\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02",null,"20","45","24","527",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("차종명");
            obj.set_cssclass("sta_SA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_01",null,"20","187","24","331",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","240",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","160",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","80",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","403","0","15","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01_00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","0","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","0",null,"50","10",null,"0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM12060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
