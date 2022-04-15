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
            this.set_titletext("(세금)계산서전송관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column19\"/><Col id=\"Column20\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"69","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","17","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","445","18","64","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("번호구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","1125","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1085","43","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","143","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","153","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("input_select");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","235","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","262","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_select");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","18","123","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("세금계산서작성기간");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","643","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","379","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","1204","19","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1248","19","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1275","19","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","534","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("통합청구번호");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","778","86","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","627","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","714","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","628","18","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","534","86","88","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("메일전송결과");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","627","86","111","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onchanged").set("Common_onchanged");
            var divSearch_form_cmb01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_innerdataset", obj);
            divSearch_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","127","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01","20","86","64","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","494","17","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","778","18","103","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("세무로전송결과");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_01","884","18","147","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onchanged").set("Common_onchanged");
            var divSearch_form_cmb01_01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_01_innerdataset", obj);
            divSearch_form_cmb01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","738","17","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod01","153","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00_00","511","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("세금계산서번호");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_02","1125","52","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","153","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_cssclass("input_select");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","240","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","267","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("input_select");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","1204","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","1263","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","1290","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","884","86","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01_00","943","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","970","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_00","778","52","103","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("국세청전송결과");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","1041","18","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("오류");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_01_00","884","52","147","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("onchanged").set("Common_onchanged");
            var divSearch_form_cmb01_01_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_01_00_innerdataset", obj);
            divSearch_form_cmb01_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divSearch_form_cmb01_01_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","1041","52","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("오류");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0","48%",null,null,"48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","153","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("세금계산서전송내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","167","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"세금계산서번호\"/><Cell col=\"2\" text=\"결제고객번호\"/><Cell col=\"3\" text=\"결제고객명\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"결제담당자번호\"/><Cell col=\"6\" text=\"결제담당자\"/><Cell col=\"7\" text=\"메일(우편)주소\"/><Cell col=\"8\" text=\"전송일시\"/><Cell col=\"9\" text=\"전송이력확인일시\"/><Cell col=\"10\" text=\"전송이력결과\"/><Cell col=\"11\" text=\"전송이력확인유무\"/><Cell col=\"12\" text=\"계산서합계금액\"/><Cell col=\"13\" text=\"공급가액\"/><Cell col=\"14\" text=\"부가세\"/><Cell col=\"15\" text=\"계약지점\"/><Cell col=\"16\" text=\"영업매니저명\"/><Cell col=\"17\" text=\"영업매니저Email\"/><Cell col=\"18\" text=\"청구매니저명\"/><Cell col=\"19\" text=\"국세청전송결과\"/><Cell col=\"20\" text=\"청구서번호\"/><Cell col=\"21\" text=\"국세청승인번호\"/><Cell col=\"22\" text=\"세무로전송여부\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column9\"/><Cell col=\"2\" text=\"bind:Column10\"/><Cell col=\"3\" text=\"bind:Column11\"/><Cell col=\"4\" text=\"bind:Column12\"/><Cell col=\"5\" text=\"bind:Column13\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:Column14\"/><Cell col=\"7\" text=\"bind:Column14\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","122",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","92",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","38","0","50","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","38",null,"50","10",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00","0","10","128","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("결제담당자등록");
            obj.set_cssclass("btn_Comm_link");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","divGridWapper:20","divSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","203","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("세금계산서번호별 전송이력");
            obj.set_cssclass("sta_WF_title2");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","222","0","100","50",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"세금계산서번호\"/><Cell col=\"2\" text=\"결제고객번호\"/><Cell col=\"3\" text=\"결제고객명\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"결제담당자번호\"/><Cell col=\"6\" text=\"결제담당자\"/><Cell col=\"7\" text=\"메일(우편)주소\"/><Cell col=\"8\" text=\"세무로전송여부\"/><Cell col=\"9\" text=\"전송일시\"/><Cell col=\"10\" text=\"전송이력확인일시\"/><Cell col=\"11\" text=\"전송이력결과\"/><Cell col=\"12\" text=\"전송이력확인유무\"/><Cell col=\"13\" text=\"계산서합계금액\"/><Cell col=\"14\" text=\"공급가액\"/><Cell col=\"15\" text=\"부가세\"/><Cell col=\"16\" text=\"계약지점\"/><Cell col=\"17\" text=\"영업매니저명\"/><Cell col=\"18\" text=\"청구매니저명\"/><Cell col=\"19\" text=\"국세청전송결과\"/><Cell col=\"20\" text=\"통화키\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column9\"/><Cell col=\"2\" text=\"bind:Column10\"/><Cell col=\"3\" text=\"bind:Column11\"/><Cell col=\"4\" text=\"bind:Column12\"/><Cell col=\"5\" text=\"bind:Column13\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:Column14\"/><Cell col=\"7\" text=\"bind:Column14\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","122",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("6");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","92",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","divGridWapper:-10","131","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
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
            this.divSearch.form.Edit00_00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.divSearch.form.Edit00_00_00.addEventHandler("onchanged",this.Common_onchanged,this);
            this.divSearch.form.Static00_00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.div00.form.Button00_00_01_02_00_00_00_00_00.addEventHandler("onclick",this.div00_Button00_00_01_02_00_00_00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SB10230.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
