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
            this.set_titletext("발주등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,"97","40",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_00_01","322","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("의뢰기간");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","74","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","112","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","88","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("납품예정일자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","454","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","541","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","568","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","362","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","683","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","723","18","68","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","814","18","42","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("3666");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","858","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","885","18","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","1040","4","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","1080","18","68","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00","1145","18","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_01_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_01_00_innerdataset", obj);
            div00_form_cmb00_00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_01_00_innerdataset);
            obj.set_text("관리장기(실행)");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","112","52","105","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_01","362","52","88","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("구매의뢰번호");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","454","52","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","541","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","568","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_01_00","723","52","88","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("구매의뢰유형");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00","814","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb00_00_01_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_01_00_00_innerdataset", obj);
            div00_form_cmb00_00_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_00_01_00_00_innerdataset);
            obj.set_text("일반연불판매내자구매");
            obj.set_index("0");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","121",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","105",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1381","0","15","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00",null,"0","5","50","117",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","48",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01",null,"20","58","24","266",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00",null,"5","50","25","122",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_00",null,"20","38","24","459",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("금액");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00",null,"20","120","24","337",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_format("#,##9");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00",null,"20","85","24","172",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("2021012012");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00",null,"0","20","60","317",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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

            obj = new Button("Button00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
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
        this.loadIncludeScript("MM30030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
