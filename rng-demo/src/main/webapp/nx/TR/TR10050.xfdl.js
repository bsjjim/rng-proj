(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TR10050");
            this.set_titletext("자금집행내역 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch00","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","22","18","53","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("0");
            obj.set_text("거래처");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01","303","18","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("1");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01","596","18","56","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("2");
            obj.set_text("AP계정");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00","859","18","88","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("3");
            obj.set_text("지급요청기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1232","18","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("4");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","1298","18","80","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch00_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch00_form_Combo00_00_innerdataset", obj);
            DivSearch00_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">지급</Col><Col id=\"datacolumn\">지급</Col></Row><Row><Col id=\"codecolumn\">미지급</Col><Col id=\"datacolumn\">미지급</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch00_form_Combo00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","261","1","40","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02","394","5","10","50",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01","678","5","10","50",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","555","1","40","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","653","18","165","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch00_form_Combo00_00_00_innerdataset", obj);
            DivSearch00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">미지급금-법인카</Col><Col id=\"datacolumn\">미지급금-법인카</Col></Row><Row><Col id=\"codecolumn\">미지급금-경매매입대금</Col><Col id=\"datacolumn\">미지급금-경매매입대금</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch00_form_Combo00_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"19","20","60","0",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("13");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","-1",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("14");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01","369","18","42","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("15");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","413","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01","440","18","115","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("17");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","76","18","42","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("18");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","120","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","147","18","115","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("20");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_03_00_00_00","166","0","80","18",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("21");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","818","1","40","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("22");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1191","1","40","60",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("23");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","951","18","240","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("24");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch00:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"거래처\"/><Cell col=\"2\" text=\"고객/벤더번호\"/><Cell col=\"3\" text=\"AP계정\"/><Cell col=\"4\" text=\"지급구분\"/><Cell col=\"5\" text=\"지급일자\"/><Cell col=\"6\" text=\"영업조직\"/><Cell col=\"7\" text=\"지급방법\"/><Cell col=\"8\" text=\"요청금액\"/><Cell col=\"9\" text=\"지급금액\"/><Cell col=\"10\" text=\"미지급잔액\"/><Cell col=\"11\" text=\"전표적요\"/><Cell col=\"12\" text=\"요청일자\"/><Cell col=\"13\" text=\"지급은행\"/><Cell col=\"14\" text=\"계좌번호\"/><Cell col=\"15\" text=\"예금주\"/><Cell col=\"16\" text=\"원전표번호\"/><Cell col=\"17\" text=\"지급전표번호\"/><Cell col=\"18\" text=\"비고\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:Column8\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:Column9\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\"/><Cell col=\"15\" text=\"bind:Column14\"/><Cell col=\"16\" text=\"bind:Column15\"/><Cell col=\"17\" text=\"bind:Column16\"/><Cell col=\"18\" text=\"bind:Column17\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1374","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","119",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","105",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","1298","38","70","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_01","1381","-5","15","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.DivSearch00.form.Combo00_00.addEventHandler("onitemchanged",this.DivSearch00_Combo00_00_onitemchanged,this);
            this.divGridWapper.form.Static00.addEventHandler("onclick",this.divGridWapper_Static00_onclick,this);
        };
        this.loadIncludeScript("TR10050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
