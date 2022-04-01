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
            this.set_titletext("월 자금수지계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\">7</Col><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_requred");
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","186","0","60","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w60");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","30","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","30","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","0","96","25",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("left 96");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","1242","0","80","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w80");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","246","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","312","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","404","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","431","18","180","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","611","0","60","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w60");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","671","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_src_label");
            obj.set_taborder("12");
            obj.set_text("입력사원");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","737","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","804","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","831","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","96","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","280",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","213","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("차월 자금수지 계획");
            obj.set_cssclass("sta_WF_title1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"일시\"/><Cell col=\"3\" text=\"수입\"/><Cell col=\"4\" text=\"지출\"/><Cell col=\"5\" text=\"거래처명\"/><Cell col=\"6\" text=\"자금수지항목명\"/><Cell col=\"7\" text=\"회계처리구분\"/><Cell col=\"8\" text=\"영업조직\"/><Cell col=\"9\" text=\"사번\"/><Cell col=\"10\" text=\"담당자\"/><Cell col=\"11\" text=\"전표번호\"/><Cell col=\"12\" text=\"입력일시\"/><Cell col=\"13\" text=\"입력사원\"/><Cell col=\"14\" text=\"비고\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1007","5","15","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","478",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("[단위:건]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","549",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","535",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","951","5","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","422",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","374",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","294",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","214",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","134",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","54",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","63","734","217",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","129","117","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","117","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("계획");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","150","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("실적");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","0","183","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("6");
            obj.set_text("차이");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","280","117","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01","280","150","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01","129","150","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02","431","117","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_02","582","117","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00","582","150","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00","431","150","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","51","130","67",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00","129","84","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("수입");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00_00","280","84","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("지출");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00_01","431","84","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("수입");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00_00_00","582","84","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("지출");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","213","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("전월 계획대비 실적 현황");
            obj.set_cssclass("sta_WF_title1");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00","134","122",null,"24","479",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00",null,"122","20","24","459",null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","271","84","10","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00","134","155",null,"24","479",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00",null,"155","20","24","459",null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00","284","155",null,"24","329",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00",null,"155","20","24","309",null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_01","284","122",null,"24","329",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01",null,"122","20","24","309",null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","421","84","10","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_00","435","155",null,"24","178",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00",null,"155","20","24","158",null,null,null,null,null,this.div00.form);
            obj.set_taborder("31");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_01_00","435","122",null,"24","178",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00",null,"122","20","24","158",null,null,null,null,null,this.div00.form);
            obj.set_taborder("33");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","572","84","10","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_00_00","586","155",null,"24","27",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00",null,"155","20","24","7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("36");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_01_00_00","586","122",null,"24","27",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00_00",null,"122","20","24","7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00","723","84","10","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_01","280","183","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_01","129","183","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00_00","582","183","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00_00","431","183","152","34",null,null,null,null,null,null,this.div00.form);
            obj.set_initvalueid("iv_tbl_summ");
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_01","134","188",null,"24","479",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_01",null,"188","20","24","459",null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_01","284","188",null,"24","329",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01",null,"188","20","24","309",null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_00_01","435","188",null,"24","178",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("48");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_01",null,"188","20","24","158",null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_00_00_00","586","188",null,"24","27",null,null,null,null,null,this.div00.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00",null,"188","20","24","7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("51");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","129","51","303","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("전월");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","431","51","303","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("당월");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","50",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
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

            obj = new Button("Button00_01_02","0","10","102","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("권한관리");
            obj.set_cssclass("btn_Comm_popup");
            obj.set_iconPosition("left");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
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
        this.loadIncludeScript("TR10060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
