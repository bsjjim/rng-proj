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
            this.set_titletext("L/C개설관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
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

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","11","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","23","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","296","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("개설기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","74","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","336","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","630","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","670","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","818","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","858","18","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("L/C 번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00","738","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_01_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_01_00_innerdataset", obj);
            div00_form_cmb00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_01_00_innerdataset);
            obj.set_text("관리장기(실행)");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00_00","1071","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","1031","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","404","18","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","448","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","475","18","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01","925","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","1007","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_01_00","1139","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01_00","1221","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","div00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","81","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("물건선택");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","485","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"계약번호\"/><Cell col=\"5\" text=\"L/C 번호\"/><Cell col=\"6\" text=\"개설일자\"/><Cell col=\"7\" text=\"통화\"/><Cell col=\"8\" text=\"개설금액\"/><Cell col=\"9\" text=\"은행명\"/><Cell col=\"10\" text=\"개설비용\"/><Cell col=\"11\" text=\"전신료\"/><Cell col=\"12\" text=\"은행수수료\"/><Cell col=\"13\" text=\"비용합계\"/><Cell col=\"14\" text=\"선적기한\"/><Cell col=\"15\" text=\"L/C기한\"/><Cell col=\"16\" text=\"전표일자\"/><Cell col=\"17\" text=\"전표번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\" text=\"bind:Column9\"/><Cell col=\"13\" text=\"bind:Column9\"/><Cell col=\"14\" text=\"bind:Column9\"/><Cell col=\"15\" text=\"bind:Column9\"/><Cell col=\"16\" text=\"bind:Column9\"/><Cell col=\"17\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","73",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","57",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1429","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","69",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","88","28","92",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("LC삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("전표삭제");
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
        this.loadIncludeScript("MM30060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
