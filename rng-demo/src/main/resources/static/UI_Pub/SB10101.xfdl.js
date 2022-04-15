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
            this.set_titletext("거래명세서조회(관리자)");
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

            obj = new Static("Static00","481","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","442","38","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1024","38","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1064","52","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","116","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","111","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("input_select");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","198","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","225","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("input_select");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","115","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","111","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("input_select");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","193","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","220","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","342","52","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","111","86","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","155","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","182","86","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","481","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("통합청구번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","481","86","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","573","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","655","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","573","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","655","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","682","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1064","18","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","1064","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("청구구분");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1143","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1202","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1229","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","1143","18","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","1202","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","1229","18","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","115","110","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01","837","52","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("청구서번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","944","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01_00","837","86","97","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("세금계산서번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","944","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","797","55","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","573","18","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var divSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb00_innerdataset", obj);
            divSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">청구서전송일자</Col><Col id=\"datacolumn\">청구서전송일자</Col></Row><Row><Col id=\"codecolumn\">청구일자</Col><Col id=\"datacolumn\">청구일자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb00_innerdataset);
            obj.set_text("청구서전송일자");
            obj.set_value("청구서전송일자");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","1143","86","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_viewtype("B");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_MultiCombo00_innerdataset = new nexacro.NormalDataset("divSearch_form_MultiCombo00_innerdataset", obj);
            divSearch_form_MultiCombo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">대여료</Col><Col id=\"datacolumn\">대여료</Col></Row><Row><Col id=\"codecolumn\">고객수리(옵션반납)</Col><Col id=\"datacolumn\">고객수리(옵션반납)</Col></Row><Row><Col id=\"codecolumn\">손해배상금</Col><Col id=\"datacolumn\">손해배상금</Col></Row><Row><Col id=\"codecolumn\">기타비용</Col><Col id=\"datacolumn\">기타비용</Col></Row><Row><Col id=\"codecolumn\">법무비용</Col><Col id=\"datacolumn\">법무비용</Col></Row><Row><Col id=\"codecolumn\">과태료</Col><Col id=\"datacolumn\">과태료</Col></Row><Row><Col id=\"codecolumn\">고객부담급(반납)</Col><Col id=\"datacolumn\">고객부담급(반납)</Col></Row><Row><Col id=\"codecolumn\">위약금</Col><Col id=\"datacolumn\">위약금</Col></Row><Row><Col id=\"codecolumn\">휴차료</Col><Col id=\"datacolumn\">휴차료</Col></Row><Row><Col id=\"codecolumn\">고객수리(반납)</Col><Col id=\"datacolumn\">고객수리(반납)</Col></Row><Row><Col id=\"codecolumn\">유류비</Col><Col id=\"datacolumn\">유류비</Col></Row><Row><Col id=\"codecolumn\">고객부담금(사고)</Col><Col id=\"datacolumn\">고객부담금(사고)</Col></Row><Row><Col id=\"codecolumn\">고객수리(사고)</Col><Col id=\"datacolumn\">고객수리(사고)</Col></Row><Row><Col id=\"codecolumn\">초과운행 부담금</Col><Col id=\"datacolumn\">초과운행 부담금</Col></Row><Row><Col id=\"codecolumn\">반환지연금</Col><Col id=\"datacolumn\">반환지연금</Col></Row><Row><Col id=\"codecolumn\">해지채권</Col><Col id=\"datacolumn\">해지채권</Col></Row><Row><Col id=\"codecolumn\">보험료</Col><Col id=\"datacolumn\">보험료</Col></Row><Row><Col id=\"codecolumn\">밸류팩</Col><Col id=\"datacolumn\">밸류팩</Col></Row><Row><Col id=\"codecolumn\">카드재발급</Col><Col id=\"datacolumn\">카드재발급</Col></Row><Row><Col id=\"codecolumn\">기타수익-IOT서비스</Col><Col id=\"datacolumn\">기타수익-IOT서비스</Col></Row><Row><Col id=\"codecolumn\">승계수수료</Col><Col id=\"datacolumn\">승계수수료</Col></Row><Row><Col id=\"codecolumn\">기타수익-IOT서비스(상품권)</Col><Col id=\"datacolumn\">기타수익-IOT서비스(상품권)</Col></Row><Row><Col id=\"codecolumn\">마이플랜</Col><Col id=\"datacolumn\">마이플랜</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_MultiCombo00_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","695","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_cssclass("input_req");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","73","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","457","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"통합청구번호\"/><Cell col=\"4\" text=\"결제담당자\"/><Cell col=\"5\" text=\"결제고객번호\"/><Cell col=\"6\" text=\"결제고객명\"/><Cell col=\"7\" text=\"청구구분\"/><Cell col=\"8\" text=\"상세내역\"/><Cell col=\"9\" text=\"회차\"/><Cell col=\"10\" text=\"사용기간\"/><Cell col=\"11\" text=\"계약기간\"/><Cell col=\"12\" text=\"공급가액\"/><Cell col=\"13\" text=\"부가세\"/><Cell col=\"14\" text=\"합계\"/><Cell col=\"15\" text=\"임의사용기간\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\" displaytype=\"number\" textAlign=\"right\" cssclass=\"cell_summ\"/><Cell col=\"15\" text=\"bind:Column14\"/></Band><Band id=\"summary\"><Cell textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"총계\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","54",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","72","0","15","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","87","20","58","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("선택건수");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","138","20","50","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","128",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","112",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","98",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","139","0","50","30",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00","189","20","72","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_text("선택합계금액");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","264","20","85","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00","260","0","5","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00",null,"20","105","24","669",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","84","24","565",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("16");
            obj.set_text("임의사용기간");
            obj.set_cssclass("sta_SA_label_req");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new CheckBox("chk00",null,"20","92","24","241",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("17");
            obj.set_text("이후회차적용");
            obj.set_value("true");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00",null,"0","15","50","228",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("18");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00",null,"0","15","50","333",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00_00",null,"0","20","50","649",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("20");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01",null,"10","50","20","128",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("21");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00_00",null,"20","84","24","782",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("22");
            obj.set_text("임의거래일자");
            obj.set_cssclass("sta_SA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","50","24","178",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("23");
            obj.set_text("변경");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("24");
            obj.set_text("출력");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00",null,"20","210","24","348",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("25");
            obj.set_cssclass("input_req");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.38%","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("출력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00",null,"0","15","50","64",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00",null,"12","92","24","75",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("영문으로출력");
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
        this.registerScript("SB10101.xfdl", function() {

        this.div00_Static00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSearch.form.Static00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SB10101.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
