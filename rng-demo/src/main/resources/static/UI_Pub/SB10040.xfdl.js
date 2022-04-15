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
            this.set_titletext("사고고객부담금 청구관리");
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
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","432","38","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","942","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","902","33","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","942","86","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","115","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","86","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","110","86","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","197","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","224","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","114","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","110","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","192","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","219","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","341","86","91","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","1021","52","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1065","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1092","52","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","715","86","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","796","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","878","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1021","86","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1080","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1107","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","114","110","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","675","34","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","110","18","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var divSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb00_innerdataset", obj);
            divSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">청구일자</Col><Col id=\"datacolumn\">청구일자</Col></Row><Row><Col id=\"codecolumn\">사고접수일자</Col><Col id=\"datacolumn\">사고접수일자</Col></Row><Row><Col id=\"codecolumn\">결제일자</Col><Col id=\"datacolumn\">결제일자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb00_innerdataset);
            obj.set_text("청구일자");
            obj.set_value("청구일자");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","564","18","76","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("123허1234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","642","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00","472","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","564","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("1234567890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","651","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_00","472","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("정비접수번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","564","86","111","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_01","472","86","45","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("운전자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_02","715","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("청구상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00_00_02_00","715","52","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("수납상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","796","18","106","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_innerdataset", obj);
            divSearch_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">청구서발송</Col><Col id=\"datacolumn\">청구서발송</Col></Row><Row><Col id=\"codecolumn\">청구서미발송</Col><Col id=\"datacolumn\">청구서미발송</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_innerdataset);
            obj.set_text("청구서미발송");
            obj.set_value("청구서미발송");
            obj.set_index("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00","796","52","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_00_innerdataset", obj);
            divSearch_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">미납</Col><Col id=\"datacolumn\">미납</Col></Row><Row><Col id=\"codecolumn\">부분수납</Col><Col id=\"datacolumn\">부분수납</Col></Row><Row><Col id=\"codecolumn\">완제</Col><Col id=\"datacolumn\">완제</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","942","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("지로번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00_00","1021","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","222","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0","48.04%",null,null,"85",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","73","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("청구내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","122","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"청구상태\"/><Cell col=\"3\" text=\"수납상태\"/><Cell col=\"4\" text=\"자동발송 여부\"/><Cell col=\"5\" text=\"정비접수번호\"/><Cell col=\"6\" text=\"계약번호\"/><Cell col=\"7\" text=\"전표번호\"/><Cell col=\"8\" text=\"차량번호\"/><Cell col=\"9\" text=\"상품군명\"/><Cell col=\"10\" text=\"결제고객번호\"/><Cell col=\"11\" text=\"결제고객명\"/><Cell col=\"12\" text=\"청구서발송방법\"/><Cell col=\"13\" text=\"결제담당자번호\"/><Cell col=\"14\" text=\"결제담당자명\"/><Cell col=\"15\" text=\"청구금액\"/><Cell col=\"16\" text=\"공급가액\"/><Cell col=\"17\" text=\"부가세\"/><Cell col=\"18\" text=\"사고일자\"/><Cell col=\"19\" text=\"사고접수일자\"/><Cell col=\"20\" text=\"청구일자\"/><Cell col=\"21\" text=\"발행일자\"/><Cell col=\"22\" text=\"결제일자\"/><Cell col=\"23\" text=\"청구방법\"/><Cell col=\"24\" text=\"지로수신자\"/><Cell col=\"25\" text=\"우편번호\"/><Cell col=\"26\" text=\"우편주소\"/><Cell col=\"27\" text=\"우편상세주소\"/><Cell col=\"28\" text=\"이메일\"/><Cell col=\"29\" text=\"운전자명\"/><Cell col=\"30\" text=\"휴대전화번호\"/><Cell col=\"31\" text=\"은행명\"/><Cell col=\"32\" text=\"가상계좌번호\"/><Cell col=\"33\" text=\"지로번호\"/><Cell col=\"34\" text=\"계약지점\"/><Cell col=\"35\" text=\"영업매니저\"/><Cell col=\"36\" text=\"청구매니저\"/><Cell col=\"37\" text=\"청구구분\"/><Cell col=\"38\" text=\"구분\"/><Cell col=\"39\" text=\"청구회차\"/><Cell col=\"40\" text=\"청구일련번호\"/><Cell col=\"41\" text=\"청구전송일자\"/><Cell col=\"42\" text=\"메모내용\"/><Cell col=\"43\" text=\"메모등록사원\"/><Cell col=\"44\" text=\"메모등록일자\"/><Cell col=\"45\" text=\"고객유형\"/><Cell col=\"46\" text=\"결제방법\"/><Cell col=\"47\" text=\"자차율(%)\"/><Cell col=\"48\" text=\"사고유형\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:Column14\"/><Cell col=\"16\" text=\"bind:Column15\"/><Cell col=\"17\" text=\"bind:Column16\"/><Cell col=\"18\" text=\"bind:Column17\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:Column18\"/><Cell col=\"20\" text=\"bind:Column19\"/><Cell col=\"21\" text=\"bind:Column20\"/><Cell col=\"22\" text=\"bind:Column21\"/><Cell col=\"23\" text=\"bind:Column22\"/><Cell col=\"24\" text=\"bind:Column23\"/><Cell col=\"25\" text=\"bind:Column24\"/><Cell col=\"26\" text=\"bind:Column24\"/><Cell col=\"27\" text=\"bind:Column24\"/><Cell col=\"28\" text=\"bind:Column24\"/><Cell col=\"29\" text=\"bind:Column24\"/><Cell col=\"30\" text=\"bind:Column24\"/><Cell col=\"31\" text=\"bind:Column24\"/><Cell col=\"32\" text=\"bind:Column24\"/><Cell col=\"33\" text=\"bind:Column24\"/><Cell col=\"34\" text=\"bind:Column24\"/><Cell col=\"35\" text=\"bind:Column24\"/><Cell col=\"36\" text=\"bind:Column24\"/><Cell col=\"37\" text=\"bind:Column24\"/><Cell col=\"38\" text=\"bind:Column24\"/><Cell col=\"39\" text=\"bind:Column24\"/><Cell col=\"40\" text=\"bind:Column24\"/><Cell col=\"41\" text=\"bind:Column24\"/><Cell col=\"42\" text=\"bind:Column24\"/><Cell col=\"43\" text=\"bind:Column24\"/><Cell col=\"44\" text=\"bind:Column24\"/><Cell col=\"45\" text=\"bind:Column24\"/><Cell col=\"46\" text=\"bind:Column24\"/><Cell col=\"47\" text=\"bind:Column24\"/><Cell col=\"48\" text=\"bind:Column24\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","306",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","98","24","90",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("통합수납등록");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","110","24","192",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("거래명세서출력");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_01",null,"20","86","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("청구서발송");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00_00_01",null,"20","58","24","452",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("청구방법");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("cmb01_00",null,"20","90","24","354",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_cmb01_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_cmb01_00_innerdataset", obj);
            divGridWapper_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">미납</Col><Col id=\"datacolumn\">미납</Col></Row><Row><Col id=\"codecolumn\">부분수납</Col><Col id=\"datacolumn\">부분수납</Col></Row><Row><Col id=\"codecolumn\">완제</Col><Col id=\"datacolumn\">완제</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","divGridWapper:20","divSearch:0",null,null,"40","170",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","117","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("청구서전송 이력");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"청구서발행회차\"/><Cell col=\"2\" text=\"청구방법\"/><Cell col=\"3\" text=\"발행일자\"/><Cell col=\"4\" text=\"결제고객\"/><Cell col=\"5\" text=\"지로수신자\"/><Cell col=\"6\" text=\"결제담당자\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"우편주소\"/><Cell col=\"9\" text=\"운전자명\"/><Cell col=\"10\" text=\"휴대전화번호\"/><Cell col=\"11\" text=\"이메일\"/><Cell col=\"12\" text=\"청구매니저\"/><Cell col=\"13\" text=\"청구서번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:Column5\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:Column6\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:Column7\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:Column8\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:Column9\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:Column10\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:Column11\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:Column12\" displaytype=\"normal\"/><Cell col=\"13\" text=\"bind:Column13\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_01",null,"20","74","24","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_text("날짜적용");
            obj.set_cssclass("btn_Block");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","divGridWapper:-10","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("div00","divGridWapper:20",null,null,"85","40","85",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("SMS발송문구");
            obj.set_cssclass("sta_DA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("SMS발송");
            obj.set_cssclass("sta_WF_title2");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","56",null,"24","4",null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("SMS전송");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00_00","0",null,"48.04%","85",null,"0",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("청구방법");
            obj.set_cssclass("sta_DA_label_req");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","210","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("청구방법 등록");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("적용");
            obj.set_cssclass("btn_Block");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb02","134","56","80","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var div00_00_00_form_cmb02_innerdataset = new nexacro.NormalDataset("div00_00_00_form_cmb02_innerdataset", obj);
            div00_00_00_form_cmb02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">우편</Col><Col id=\"datacolumn\">우편</Col></Row><Row><Col id=\"codecolumn\">이메일</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">SMS</Col><Col id=\"datacolumn\">SMS</Col></Row><Row><Col id=\"codecolumn\">이메일, SMS</Col><Col id=\"datacolumn\">이메일, SMS</Col></Row><Row><Col id=\"codecolumn\">우편, SMS</Col><Col id=\"datacolumn\">우편, SMS</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_00_form_cmb02_innerdataset);
            obj.set_text("이메일");
            obj.set_value("이메일");
            obj.set_index("2");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb01","216","56","120","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("8");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","338","56","120","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("9");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01","458","56","20","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","483","56","120","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("11");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","605","56","120","24",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_00_00_form_Combo01_innerdataset = new nexacro.NormalDataset("div00_00_00_form_Combo01_innerdataset", obj);
            div00_00_00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">직접입력</Col><Col id=\"datacolumn\">직접입력</Col></Row><Row><Col id=\"codecolumn\">freechal.com</Col><Col id=\"datacolumn\">freechal.com</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_00_form_Combo01_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00","div00_00_00:18",null,null,"85","40","0",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("메모내용");
            obj.set_cssclass("sta_DA_label_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","96","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("메모등록");
            obj.set_cssclass("sta_WF_title2");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","56",null,"24","4",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("input_req");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("메모저장");
            obj.set_cssclass("btn_Block");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","734","241","20","60",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w20");
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
        this.registerScript("SB10040.xfdl", function() {

        this.div00_Static00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSearch.form.Static00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SB10040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
