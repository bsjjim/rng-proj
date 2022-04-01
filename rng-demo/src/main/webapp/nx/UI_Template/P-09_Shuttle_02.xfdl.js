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
            this.set_titletext("Shuttle(상하배치)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">02-1234-****</Col><Col id=\"Column5\">010-1234-****</Col><Col id=\"Column7\">강남영업소</Col><Col id=\"Column6\">**st1234@test.com</Col><Col id=\"Column8\">2021-12-01</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\"/><Col id=\"Column2\">test123</Col><Col id=\"Column9\">2021-12-01</Col><Col id=\"Column11\">N</Col><Col id=\"Column10\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","53","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("예약소");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","74","19","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","166","19","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","193","19","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","455",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"18","60","24","331",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("SP 사용자정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","749","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"휴대전화번호\"/><Cell col=\"6\" text=\"이메일\"/><Cell col=\"7\" text=\"지점명\"/><Cell col=\"8\" text=\"사용시작일\"/><Cell col=\"9\" text=\"사용종료일\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"잠금여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1254","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","162",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","148",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01",null,"13","15","35","134",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","44","24","90",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00",null,"20","86","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("사용자조회");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","0","63",null,"357","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"휴대전화번호\"/><Cell col=\"6\" text=\"이메일\"/><Cell col=\"7\" text=\"지점명\"/><Cell col=\"8\" text=\"사용시작일\"/><Cell col=\"9\" text=\"사용종료일\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"잠금여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:Column7\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("SP 관리자정보");
            obj.set_cssclass("sta_WF_title1");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","72",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","58",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01",null,"13","15","35","44",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1344","38","100","12",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","44","24","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            obj.set_text("");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00_00","43.8%","Div02:15","225","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","0","100","20",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleUp");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","115","0","100","20",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleDn");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","953","420","130","85",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("85");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0",null,null,"48","40","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","675","420","200","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
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
        this.registerScript("P-09_Shuttle_02.xfdl", function() {

        this.Div02_Static02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static02_00.addEventHandler("onclick",this.Div02_Static02_00_onclick,this);
            this.Div02.form.Static02_00.addEventHandler("onclick",this.Div02_Static02_00_onclick,this);
        };
        this.loadIncludeScript("P-09_Shuttle_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
