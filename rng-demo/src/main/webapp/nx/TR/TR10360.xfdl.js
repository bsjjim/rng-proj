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
            this.set_titletext("입금BC 정산관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column8\"/><Col id=\"Column9\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","35","48.04%","97",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","296","0","40","45",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","-341","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","402","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","494","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","521","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_03_00","197",null,"80","18",null,"0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","52","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("계좌코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","86","52","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_format("##############");
            obj.set_value("79005691157411");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","208","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","235","52","250","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_value("농협은행 79005691157411 가상계좌");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","336","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","0","86","25",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("left 86");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("정산내역");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","350","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","0","24","80","11",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","147","48.04%",null,null,"48",null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("5");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"BC계정\"/><Cell col=\"3\" text=\"계정명\"/><Cell col=\"4\" text=\"계좌ID\"/><Cell col=\"5\" text=\"은행명\"/><Cell col=\"6\" text=\"계좌번호\"/><Cell col=\"7\" text=\"처리일자\"/><Cell col=\"8\" text=\"금액\"/><Cell col=\"9\" text=\"통장적요\"/><Cell col=\"10\" text=\"연도\"/><Cell col=\"11\" text=\"전표번호\"/><Cell col=\"12\" text=\"ITEM번호    \"/><Cell col=\"13\" text=\"반제전표\"/><Cell col=\"14\" text=\"메시지\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column4\"/><Cell col=\"7\" text=\"bind:Column5\"/><Cell col=\"8\" text=\"bind:Column6\"/><Cell col=\"9\" text=\"bind:Column7\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\" text=\"bind:Column10\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"6\" text=\"합계\" textAlign=\"center\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_03_00","248",null,"80","15",null,"639",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","753","24","80","11",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","DivSearch:20","5","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("입금내역");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01",null,"5","62","24","149",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("정산일자");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00",null,"5","105","24","40",null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220110");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","6","68","1265",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","Grid00:20","147",null,null,"40","98",null,null,null,null,this);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("12");
            obj.set_binddataset("ds_grid");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"BC계정\"/><Cell col=\"3\" text=\"계정명\"/><Cell col=\"4\" text=\"계좌ID\"/><Cell col=\"5\" text=\"은행명\"/><Cell col=\"6\" text=\"계좌번호\"/><Cell col=\"7\" text=\"처리일자\"/><Cell col=\"8\" text=\"금액\"/><Cell col=\"9\" text=\"통장적요\"/><Cell col=\"10\" text=\"연도\"/><Cell col=\"11\" text=\"전표번호\"/><Cell col=\"12\" text=\"ITEM번호    \"/><Cell col=\"13\" text=\"반제전표\"/><Cell col=\"14\" text=\"메시지\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column4\"/><Cell col=\"7\" text=\"bind:Column5\"/><Cell col=\"8\" text=\"bind:Column6\"/><Cell col=\"9\" text=\"bind:Column7\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\" text=\"bind:Column9\"/><Cell col=\"12\" text=\"bind:Column10\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"6\" text=\"합계\" textAlign=\"center\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","Grid00:20",null,null,"50","40","48",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","16","80","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("정산금액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","79","16",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","231","16","80","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("입금금액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","482","16","80","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("차액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","15",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_03_00_00","257","0","80","15",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","84","21","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","204","21","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","315","21","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","435","21","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","570","21","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_format("#,###");
            obj.set_value("150000");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","690","21","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02","527","26","14","14",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_tooltiptext("정산금액-입금금액");
            obj.set_cssclass("sta_WF_help");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","518","27","10","15",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Grid00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("정산");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","114","38",null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch00","DivSearch:20","35",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","296","0","40","45",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","-341","18","62","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("4");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","402","18","90","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("5");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","494","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","521","18","155","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("7");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_03_00","197",null,"80","18",null,"0",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("8");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","52","62","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("9");
            obj.set_text("계좌코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","86","52","120","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("10");
            obj.set_format("##############");
            obj.set_value("79005691157411");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","208","52","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","235","52","250","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("12");
            obj.set_value("농협은행 79005691157411 가상계좌");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","336","18","62","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("13");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("15");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","0","86","25",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("16");
            obj.set_text("left 86");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("17");
            this.DivSearch00.addChild(obj.name, obj);
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
        this.loadIncludeScript("TR10360.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
