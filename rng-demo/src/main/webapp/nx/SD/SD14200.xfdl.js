(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp01");
            this.set_titletext("마케팅활용동의 고객관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","366","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("견적지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,"11","38",null,"20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","326","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","127","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","698","18","81","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","658","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","978","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1018","18","89","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("요청채널구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","1112","18","110","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">장기계약 고객</Col><Col id=\"datacolumn\">장기계약 고객</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("장기계약 고객");
            obj.set_value("장기계약 고객");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","432","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_value("3666");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","476","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","503","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_value("서울중앙MOT 강북 Part");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","777","18","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","836","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","863","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","86","18","240","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀명");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"일련번호\"/><Cell col=\"3\" text=\"고객번호\"/><Cell col=\"4\" text=\"요청채널구분\"/><Cell col=\"5\" text=\"구분\"/><Cell col=\"6\" text=\"견적 고객명\"/><Cell col=\"7\" text=\"견적요청일\"/><Cell col=\"8\" text=\"휴대전화번호\"/><Cell col=\"9\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"cell_link\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("2");
            obj.set_text("SMS전송");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","86",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1399","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1386","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1354","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1356","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","102",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","93","28","-2",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("SMS전송");
            obj.set_cssclass("btn_Comm_func");
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

        };
        
        // User Script
        this.registerScript("SD14200.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
        };
        this.loadIncludeScript("SD14200.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
