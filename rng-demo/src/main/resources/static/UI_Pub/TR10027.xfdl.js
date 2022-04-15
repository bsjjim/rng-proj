(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TR10030");
            this.set_titletext("법인카드 원장 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","96",null,null,"40","250",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","277","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("법인카드 원장 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"카드회사\"/><Cell col=\"3\" text=\"카드종류\"/><Cell col=\"4\" text=\"카드번호\"/><Cell col=\"5\" text=\"영업조직코드\"/><Cell col=\"6\" text=\"영어조직명\"/><Cell col=\"7\" text=\"사원번호\"/><Cell col=\"8\" text=\"성명\"/><Cell col=\"9\" text=\"결재상태\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"한도\"/><Cell col=\"12\" text=\"결제은행\"/><Cell col=\"13\" text=\"결제계좌\"/><Cell col=\"14\" text=\"유효기간\"/><Cell col=\"15\" text=\"결제일\"/><Cell col=\"16\" text=\"메시지\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"bind:Column6\"/><Cell col=\"9\" text=\"bind:Column7\"/><Cell col=\"10\" text=\"bind:Column8\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","374",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","422",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","294",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","214",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","134",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("수정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"96","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_requred");
            obj.set_taborder("0");
            obj.set_text("카드회사");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","693","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","284",null,"80","18",null,"0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","909","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","653","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_innerdataset", obj);
            DivSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">KB국민카드</Col><Col id=\"datacolumn\">KB국민카드</Col></Row><Row><Col id=\"codecolumn\">현대카드</Col><Col id=\"datacolumn\">현대카드</Col></Row><Row><Col id=\"codecolumn\">삼성카드</Col><Col id=\"datacolumn\">삼성카드</Col></Row><Row><Col id=\"codecolumn\">하나(외환)카드</Col><Col id=\"datacolumn\">하나(외환)카드</Col></Row><Row><Col id=\"codecolumn\">신한카드</Col><Col id=\"datacolumn\">신한카드</Col></Row><Row><Col id=\"codecolumn\">비씨카드</Col><Col id=\"datacolumn\">비씨카드</Col></Row><Row><Col id=\"codecolumn\">롯데카드</Col><Col id=\"datacolumn\">롯데카드</Col></Row><Row><Col id=\"codecolumn\">씨티카드</Col><Col id=\"datacolumn\">씨티카드</Col></Row><Row><Col id=\"codecolumn\">NH카드</Col><Col id=\"datacolumn\">NH카드</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","1015","18","125","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_00_00_innerdataset", obj);
            DivSearch_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">G/W 결재완료</Col><Col id=\"datacolumn\">G/W 결재완료</Col></Row><Row><Col id=\"codecolumn\">일반회계팀 확정</Col><Col id=\"datacolumn\">일반회계팀 확정</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_requred");
            obj.set_taborder("9");
            obj.set_text("영업조직");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","86","52","70","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","158","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","185","52","162","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","693","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("카드번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","759","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_value("1234-1234-1234-1234");
            obj.set_text("1234-1234-1234-1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","949","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_SA_label");
            obj.getSetter("onitemchanged").set("Common_onitemchanged");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00_01","759","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_00_00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_00_00_01_innerdataset", obj);
            DivSearch_form_cmb00_00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">정상</Col><Col id=\"datacolumn\">정상</Col></Row><Row><Col id=\"codecolumn\">해지</Col><Col id=\"datacolumn\">해지</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_00_00_01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","346","31","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","386","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_requred");
            obj.set_taborder("20");
            obj.set_text("카드종류");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","452","18","165","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_00_innerdataset", obj);
            DivSearch_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">개인형 법인</Col><Col id=\"datacolumn\">개인형 법인</Col></Row><Row><Col id=\"codecolumn\">공용_카셰어링하이패스</Col><Col id=\"datacolumn\">공용_카셰어링하이패스</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","452","52","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","511","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","538","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","386","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_initvalueid("iv_requred");
            obj.set_taborder("25");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0",null,null,"250","40","0",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","175","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("법인카드 - 사용내역");
            obj.set_cssclass("sta_WF_title2");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Div("DivSearch02_00","0","50",null,"52","588",null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA2");
            obj.set_formscrolltype("none");
            this.div01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","13","210","24",null,null,null,null,null,null,this.div01.form.DivSearch02_00.form);
            obj.set_taborder("3");
            this.div01.form.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","63","24",null,null,null,null,null,null,this.div01.form.DivSearch02_00.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.div01.form.DivSearch02_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"30","30","20","10",null,null,null,null,this.div01.form.DivSearch02_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src2");
            this.div01.form.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.div01.form.DivSearch02_00.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.form.DivSearch02_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","117",null,"133","588",null,null,null,null,null,this.div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"카드회사\"/><Cell col=\"2\" text=\"카드번호\"/><Cell col=\"3\" text=\"승인일자\"/><Cell col=\"4\" text=\"이용금액\"/><Cell col=\"5\" text=\"가맹점명\"/><Cell col=\"6\" text=\"매입일자\"/><Cell col=\"7\" text=\"승인번호\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"20","175","24","393",null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("법인카드 - 회계처리권한");
            obj.set_cssclass("sta_WF_title2");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("Grid00_00",null,"50","568","200","0",null,null,null,null,null,this.div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("6");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"사원번호\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column0\"/><Cell col=\"3\" text=\"bind:Column1\"/><Cell col=\"4\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);
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
        this.registerScript("TR10027.xfdl", function() {

        this.Common_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("TR10027.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
