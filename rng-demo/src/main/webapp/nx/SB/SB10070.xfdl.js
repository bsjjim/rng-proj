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
            this.set_titletext("청구서전송관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column19\"/><Col id=\"Column20\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column17\"/><Col id=\"Column16\"/><Col id=\"Column18\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column17\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"165","40",null,null,null,null,null,this);
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

            obj = new Static("Static00","509","18","94","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("청구전송기간");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1130","43","40","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1170","52","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("청구매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","128","42","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("결제고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","123","52","85","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_select");
            obj.set_text("1234067890");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","210","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","237","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_select");
            obj.set_text("김나나");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00","127","76","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","123","18","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_select");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","205","18","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","232","18","117","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb03","354","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_cssclass("input_select");
            var divSearch_form_cmb03_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb03_innerdataset", obj);
            divSearch_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">홍길동(1)</Col><Col id=\"datacolumn\">홍길동(1)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb03_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","123","86","42","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("3666");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","167","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","194","86","155","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01","509","52","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("통합청구번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_00","1170","86","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","600","52","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00","682","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","1246","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1328","86","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","1355","86","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","850","52","71","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","850","86","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("청구방법");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1246","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1305","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1332","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","929","52","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("P12345");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","988","52","24","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","1015","52","115","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("홍길순");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01","929","86","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_innerdataset", obj);
            divSearch_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">우편</Col><Col id=\"datacolumn\">우편</Col></Row><Row><Col id=\"codecolumn\">이메일</Col><Col id=\"datacolumn\">이메일</Col></Row><Row><Col id=\"codecolumn\">SMS</Col><Col id=\"datacolumn\">SMS</Col></Row><Row><Col id=\"codecolumn\">이메일, SMS</Col><Col id=\"datacolumn\">이메일, SMS</Col></Row><Row><Col id=\"codecolumn\">우편, SMS</Col><Col id=\"datacolumn\">우편, SMS</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02_00_00","127","110","80","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01","509","86","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("청구서번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","601","86","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_01_01_00","20","120","97","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("세금계산서번호");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","123","120","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("123456789");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","469","17","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","509","120","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("결제방법");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_00","601","120","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_00_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_00_innerdataset", obj);
            divSearch_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">CMS</Col><Col id=\"datacolumn\">CMS</Col></Row><Row><Col id=\"codecolumn\">가상계좌</Col><Col id=\"datacolumn\">가상계좌</Col></Row><Row><Col id=\"codecolumn\">카드자동이체</Col><Col id=\"datacolumn\">카드자동이체</Col></Row><Row><Col id=\"codecolumn\">지로</Col><Col id=\"datacolumn\">지로</Col></Row><Row><Col id=\"codecolumn\">카드</Col><Col id=\"datacolumn\">카드</Col></Row><Row><Col id=\"codecolumn\">무통장입금(본사)</Col><Col id=\"datacolumn\">무통장입금(본사)</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","850","18","58","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("전송결과");
            obj.set_cssclass("sta_SA_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb01_01","929","18","260","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cmb01_01_innerdataset = new nexacro.NormalDataset("divSearch_form_cmb01_01_innerdataset", obj);
            divSearch_form_cmb01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">발송성공</Col><Col id=\"datacolumn\">발송성공</Col></Row><Row><Col id=\"codecolumn\">메일형식 오류/생성오류</Col><Col id=\"datacolumn\">메일형식 오류/생성오류</Col></Row><Row><Col id=\"codecolumn\">호스트 UNKNOWN/이메일주소오류</Col><Col id=\"datacolumn\">호스트 UNKNOWN/이메일주소오류</Col></Row><Row><Col id=\"codecolumn\">발송오류/발송제외</Col><Col id=\"datacolumn\">발송오류/발송제외</Col></Row><Row><Col id=\"codecolumn\">USER UNKNOWN/존재하지 않는 도메인</Col><Col id=\"datacolumn\">USER UNKNOWN/존재하지 않는 도메인</Col></Row><Row><Col id=\"codecolumn\">수신거부</Col><Col id=\"datacolumn\">수신거부</Col></Row><Row><Col id=\"codecolumn\">MAILBOX FULL</Col><Col id=\"datacolumn\">MAILBOX FULL</Col></Row><Row><Col id=\"codecolumn\">CONNECTION FAIL</Col><Col id=\"datacolumn\">CONNECTION FAIL</Col></Row><Row><Col id=\"codecolumn\">CONNECTION ERROR</Col><Col id=\"datacolumn\">CONNECTION ERROR</Col></Row><Row><Col id=\"codecolumn\">TIME OUT</Col><Col id=\"datacolumn\">TIME OUT</Col></Row><Row><Col id=\"codecolumn\">UNKNOWN RESPONSE</Col><Col id=\"datacolumn\">UNKNOWN RESPONSE</Col></Row><Row><Col id=\"codecolumn\">시스템 에러</Col><Col id=\"datacolumn\">시스템 에러</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cmb01_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1189","0","15","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","1204","18","55","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_text("오류");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","811","17","40","93",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","601","18","210","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_cssclass("input_select");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","divSearch:0","48.04%",null,null,"85",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","114","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("청구서발행내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","352","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"2\" text=\"청구서번호\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"계약번호\"/><Cell col=\"4\" text=\"결제고객번호\"/><Cell col=\"5\" text=\"결제고객명\"/><Cell col=\"6\" text=\"전송일시\"/><Cell col=\"7\" text=\"이메일확인일시\"/><Cell col=\"8\" text=\"차량번호\"/><Cell col=\"9\" text=\"상품군명\"/><Cell col=\"10\" text=\"세금계산서번호\"/><Cell col=\"11\" text=\"청구일자\"/><Cell col=\"12\" text=\"결제담당자\"/><Cell col=\"13\" text=\"통합청구번호\"/><Cell col=\"14\" text=\"청구금액\"/><Cell col=\"15\" text=\"수납방법\"/><Cell col=\"16\" text=\"청구방법\"/><Cell col=\"17\" text=\"이메일\"/><Cell col=\"18\" text=\"전송결과\"/><Cell col=\"19\" text=\"청구서전송일자\"/><Cell col=\"20\" text=\"이메일확인횟수\"/><Cell col=\"21\" text=\"계약지점\"/><Cell col=\"22\" text=\"영업매니저\"/><Cell col=\"23\" text=\"청구매니저\"/><Cell col=\"24\" text=\"청구서발송ID\"/><Cell col=\"25\" text=\"반송사유\"/><Cell col=\"26\" text=\"반송일자\"/><Cell col=\"27\" text=\"청구서취소여부\"/><Cell col=\"28\" text=\"청구서취소일시\"/><Cell col=\"29\" text=\"청구서취소ID\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:Column14\"/><Cell col=\"16\" text=\"bind:Column15\"/><Cell col=\"17\" text=\"bind:Column16\"/><Cell col=\"18\" text=\"bind:Column17\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:Column18\"/><Cell col=\"20\" text=\"bind:Column19\"/><Cell col=\"21\" text=\"bind:Column20\"/><Cell col=\"22\" text=\"bind:Column21\"/><Cell col=\"23\" text=\"bind:Column22\"/><Cell col=\"24\" text=\"bind:Column23\"/><Cell col=\"25\" text=\"bind:Column24\"/><Cell col=\"26\" text=\"bind:Column24\"/><Cell col=\"27\" text=\"bind:Column24\"/><Cell col=\"28\" text=\"bind:Column24\"/><Cell col=\"29\" text=\"bind:Column24\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"총계\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" text=\"0\" textAlign=\"right\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","204",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","98","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("청구서재전송");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","98","24","102",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("청구서재출력");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01",null,"10","50","20","248",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","divGridWapper:20","divSearch:0",null,null,"40","85",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","159","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("청구서번호별 발행내역");
            obj.set_cssclass("sta_WF_title2");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"청구서번호\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"계약번호\"/><Cell col=\"4\" text=\"결제고객번호\"/><Cell col=\"5\" text=\"결제고객명\"/><Cell col=\"6\" text=\"전송일시\"/><Cell col=\"7\" text=\"청구서발송ID\"/><Cell col=\"8\" text=\"이메일확인일시\"/><Cell col=\"9\" text=\"차량번호\"/><Cell col=\"10\" text=\"상품군명\"/><Cell col=\"11\" text=\"세금계산서번호\"/><Cell col=\"12\" text=\"청구일자\"/><Cell col=\"13\" text=\"결제담당자\"/><Cell col=\"14\" text=\"통합청구번호\"/><Cell col=\"15\" text=\"청구금액\"/><Cell col=\"16\" text=\"청구서전송일자\"/><Cell col=\"17\" text=\"수납방법\"/><Cell col=\"18\" text=\"청구방법\"/><Cell col=\"19\" text=\"이메일\"/><Cell col=\"20\" text=\"우편주소\"/><Cell col=\"21\" text=\"전송결과\"/><Cell col=\"22\" text=\"이메일확인횟수\"/><Cell col=\"23\" text=\"청구서취소여부\"/><Cell col=\"24\" text=\"청구서취소일시\"/><Cell col=\"25\" text=\"청구서취소ID\"/><Cell col=\"26\" text=\"반송일자\"/><Cell col=\"27\" text=\"반송사유\"/><Cell col=\"28\" text=\"이메일전송코드\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\" displaytype=\"normal\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column2\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:Column4\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:Column5\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:Column6\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:Column7\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:Column8\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:Column9\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:Column10\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:Column11\" displaytype=\"normal\"/><Cell col=\"13\" text=\"bind:Column12\" displaytype=\"normal\"/><Cell col=\"14\" text=\"bind:Column13\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:Column14\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:Column15\" displaytype=\"normal\"/><Cell col=\"17\" text=\"bind:Column16\" displaytype=\"normal\"/><Cell col=\"18\" text=\"bind:Column17\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:Column18\" displaytype=\"normal\"/><Cell col=\"20\" text=\"bind:Column19\" displaytype=\"normal\"/><Cell col=\"21\" text=\"bind:Column20\" displaytype=\"normal\"/><Cell col=\"22\" text=\"bind:Column21\" displaytype=\"normal\"/><Cell col=\"23\" text=\"bind:Column22\" displaytype=\"normal\"/><Cell col=\"24\" text=\"bind:Column23\" displaytype=\"normal\"/><Cell col=\"25\" text=\"bind:Column24\" displaytype=\"normal\"/><Cell col=\"26\" text=\"bind:Column24\" displaytype=\"normal\"/><Cell col=\"27\" text=\"bind:Column24\" displaytype=\"normal\"/><Cell col=\"28\" text=\"bind:Column24\" displaytype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"총계\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" text=\"0\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/></Band></Format></Formats>");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","divGridWapper:-10","divSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","0","divGridWapper:0","48.04%","85",null,null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("재전송 주소");
            obj.set_cssclass("sta_DA_label");
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

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("재전송 정보");
            obj.set_cssclass("sta_WF_title3");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("적용");
            obj.set_cssclass("btn_Block");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","56","130","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_00_form_cmb00_innerdataset", obj);
            div00_00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">재 전송 메일주소</Col><Col id=\"datacolumn\">재 전송 메일주소</Col></Row><Row><Col id=\"codecolumn\">재 전송 우편주소</Col><Col id=\"datacolumn\">재 전송 우편주소</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_cmb00_innerdataset);
            obj.set_text("재 전송 메일주소");
            obj.set_value("재 전송 메일주소");
            obj.set_index("0");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("cmb01","266","56","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","388","56","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            this.div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo01","528","57","120","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_00_form_Combo01_innerdataset = new nexacro.NormalDataset("div00_00_form_Combo01_innerdataset", obj);
            div00_00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">직접입력</Col><Col id=\"datacolumn\">직접입력</Col></Row><Row><Col id=\"codecolumn\">freechal.com</Col><Col id=\"datacolumn\">freechal.com</Col></Row></Rows>");
            obj.set_innerdataset(div00_00_form_Combo01_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_01","508","56","20","24",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("12");
            obj.set_text("@");
            obj.set_textAlign("center");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div00","div00_00:20","divGridWapper00:0",null,"85","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("반송사유");
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

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("DM반송정보");
            obj.set_cssclass("sta_WF_title3");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","476","51","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("반송일");
            obj.set_cssclass("sta_DA_label_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","610","56","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","56","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">미발송</Col><Col id=\"datacolumn\">미발송</Col></Row><Row><Col id=\"codecolumn\">수취거절</Col><Col id=\"datacolumn\">수취거절</Col></Row><Row><Col id=\"codecolumn\">수취인부재</Col><Col id=\"datacolumn\">수취인부재</Col></Row><Row><Col id=\"codecolumn\">수취인불명</Col><Col id=\"datacolumn\">수취인불명</Col></Row><Row><Col id=\"codecolumn\">주소불명</Col><Col id=\"datacolumn\">주소불명</Col></Row><Row><Col id=\"codecolumn\">폐문부재</Col><Col id=\"datacolumn\">폐문부재</Col></Row><Row><Col id=\"codecolumn\">이사불명</Col><Col id=\"datacolumn\">이사불명</Col></Row><Row><Col id=\"codecolumn\">확인불가</Col><Col id=\"datacolumn\">확인불가</Col></Row><Row><Col id=\"codecolumn\">송달완료</Col><Col id=\"datacolumn\">송달완료</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edt00","236","56","236","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_req");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","98","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("DM반송저장");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
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
        this.registerScript("SB10070.xfdl", function() {

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
            this.divSearch.form.Static00_00_00_00_00_00.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.divSearch.form.Static00_00_00_00_00_01.addEventHandler("onclick",this.div00_Static00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SB10070.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
