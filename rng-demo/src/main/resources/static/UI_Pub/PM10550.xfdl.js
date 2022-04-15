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
            this.set_titletext("정비이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","568","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","841","18","79","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("말소여부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","801","0","40","45",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","101","4","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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

            obj = new Static("Static01_01_00_00","20","52","84","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("정비접수번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","608","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("정비유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","919","52","202","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","253","52","84","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("정비종료기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","213","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","253","18","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","608","52","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("정비항목코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","841","52","79","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("정비항목명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","111","18","76","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_value("123허1234");
            obj.set_cssclass("input_select");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","189","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","111","52","76","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","189","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","344","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_value("123406789");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","426","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","453","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","344","52","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","700","18","101","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","700","52","76","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","778","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","919","18","101","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div00","0","DivSearch:0",null,"295","794",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","215","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("정비차량번호");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"차종명\"/><Cell col=\"3\" text=\"차량등록일시\"/><Cell col=\"4\" text=\"차대번호\"/><Cell col=\"5\" text=\"말소일자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","48",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Div00:0",null,null,"794","50",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","215","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("정비이력정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\" \"/><Cell col=\"2\" text=\" \"/><Cell col=\"3\" text=\" \"/><Cell col=\"4\" text=\" \"/><Cell col=\"5\" text=\" \"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","3","10","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","48",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1155","97","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00",null,"390","734","346","39",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("정비상품");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("일반타이어");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("일반정비");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","211","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("정비옵션정보");
            obj.set_cssclass("sta_WF_title2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","117","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("검사정비");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("대차제공서비스");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("순회정비주기");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","150",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","150","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("타이어펑크");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","183","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("스노우타이어");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","183",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","183","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("체인");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","150","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("긴급출동횟수");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","216","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","216",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","134","122","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","89","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","56","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","134","221","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","134","188","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_value("OOOO / OOOOEA");
            obj.set_text("OOOO / OOOOEA");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","155","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","500","188","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_value("OOOO / OOOOEA");
            obj.set_text("OOOO / OOOOEA");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","500","155","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01","500","122","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_02","500","89","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","500","56","228","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","0",null,null,"50","794","0",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","16","78","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("사고정비");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","77","16",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","438","0","100","15",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","147","16","78","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("일반정비");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00","82","21","45","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00","123","21","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00","127","16","3","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","294","16","78","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("순회정비");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","441","16","78","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("긴급출동");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_00","139","16","8","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00","229","21","45","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00","270","21","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_01","274","16","3","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("13");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_00_00","286","16","8","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00_00","376","21","45","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("15");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00","417","21","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("16");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_01_00","421","16","3","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_00_00_00","433","16","8","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","588","16","78","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("19");
            obj.set_text("긴급출동");
            obj.set_cssclass("sta_DA_label");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00_00_00","523","21","45","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("20");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00","564","21","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("21");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_01_00_00","568","16","3","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("22");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_00_00_00_00","580","16","8","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("23");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00_00_00_00","670","21","45","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("24");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00_00","711","21","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("25");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_01_00_00_00","715","16","3","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("26");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00_00_00_00_00_00_00","727","16","8","35",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","15",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Tab("tab00",null,"118","734","283","40",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("차량정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0","734","247",null,null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","44",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","11","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","11",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","44","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","77","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("운전자명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","77",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","10",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","77","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","44","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","110",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","110","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("소재지주소");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","175","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("타이어스펙(앞)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","175",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","208",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","208","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("순회차량");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","16","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","49","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","134","82","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","500","82","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","500","49","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01","134","115","594","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01_01","134","213","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","366","11","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("차종");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","142","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("24");
            obj.set_text("고객담담자명");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","142",null,"34","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","142","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_02","134","147","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00","500","147","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","366","175","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("타이어스펙(뒤)");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","366","208","130","34",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("30");
            obj.set_text("최종주행거리");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","645","213","60","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("31");
            obj.set_format("#,##9.##");
            obj.set_value("30");
            obj.set_readonly("true");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","701","213","30","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("32");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","725","205","8","35",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("33");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00_00","705","205","3","35",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_00","500","180","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_02_00","134","180","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","500","16","228","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("계약정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0","734","238",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","44",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","11","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","11",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","44","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","77","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("보유지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","77",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","10",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","77","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","44","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","10",null,"2","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","110",null,"62","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","0","110","130","62",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("위탁기간");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","171","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("차량등록일자");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","171",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","204",null,"34","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_02_00","0","204","130","34",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("LDW");
            obj.set_cssclass("sta_DA_label");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","16","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("16");
            obj.set_value("2021012012");
            obj.set_readonly("true");
            obj.set_text("2021012012");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","49","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","134","82","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","500","82","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","500","49","228","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01","134","115","594","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01_00_00","134","143","364","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_value("30개월 OOOO");
            obj.set_text("30개월 OOOO");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","134","176","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("23");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_readonly("true");
            obj.set_value("20221010");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_01_01","134","209","596","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_text("홍길순");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","1174","390","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h50");
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

        };
        this.loadIncludeScript("PM10550.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
