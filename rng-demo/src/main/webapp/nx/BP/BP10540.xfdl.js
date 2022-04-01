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
            this.set_titletext("인건비외 고정비");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","118",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("고정비 산출");
            obj.set_url("BP::BP10540T01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("기타수익/비용 산출");
            obj.set_url("BP::BP10540T02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("카셰어링/오토리스 목표");
            obj.set_url("BP::BP10540T03.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("배부율 산출");
            obj.set_url("BP::BP10540T04.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("배부");
            obj.set_url("BP::BP10540T05.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Tab00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","1394","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","64","28","68",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("산출");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("3");
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

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("계획구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","212","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","87","18","125","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">속보</Col><Col id=\"datacolumn\">속보</Col></Row><Row><Col id=\"codecolumn\">경영계획</Col><Col id=\"datacolumn\">경영계획</Col></Row><Row><Col id=\"codecolumn\">ROLLING PLAN</Col><Col id=\"datacolumn\">ROLLING PLAN</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_value("경영계획");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","447","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("수립년도");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","252","18","38","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("버전");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","292","18","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_innerdataset", obj);
            div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">최종</Col><Col id=\"datacolumn\">최종</Col></Row><Row><Col id=\"codecolumn\">현업용</Col><Col id=\"datacolumn\">현업용</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_innerdataset);
            obj.set_text("최종");
            obj.set_value("최종");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","514","18","43","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","407","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","504","4","10","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","679","18","48","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("수립월");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","732","18","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","639","35","40","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","722","4","10","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","52","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","87","52","43","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","77","19","10","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","252","52","38","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("사업");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","292","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_value("오토렌탈");
            obj.set_enable("true");
            obj.set_text("오토렌탈");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","447","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("영업부문");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","514","52","125","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_01_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_01_innerdataset", obj);
            div00_form_cmb00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","282","45","10","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","679","52","43","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("지점");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","732","52","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("최종");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03","560","18","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","132","52","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03_01","763","18","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","660","97","40","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("50");
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
            this._addPreloadList("fdl","BP::BP10540T01.xfdl");
            this._addPreloadList("fdl","BP::BP10540T02.xfdl");
            this._addPreloadList("fdl","BP::BP10540T03.xfdl");
            this._addPreloadList("fdl","BP::BP10540T04.xfdl");
            this._addPreloadList("fdl","BP::BP10540T05.xfdl");
        };
        
        // User Script
        this.registerScript("BP10540.xfdl", function() {

        this.DivSearch_Static00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.div00_00.form.Button00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
            this.div00_00.form.Button00_00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("BP10540.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
