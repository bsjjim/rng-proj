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
            this.set_titletext("MC고객내역조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97",null,null,"40","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("MC 고객 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","95","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"MC고객접수번호\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"MC고객등급\"/><Cell col=\"5\" text=\"접수일\"/><Cell col=\"6\" text=\"진행상태\"/><Cell col=\"7\" text=\"등록구분\"/><Cell col=\"8\" text=\"MC고객유형\"/><Cell col=\"9\" text=\"MC고객세부유형\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","252",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00",null,"20","60","24","446",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00",null,"20","42","24","505",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("MC(Y)");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00",null,"20","20","24","426",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_01",null,"20","42","24","645",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("MC(R)");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00",null,"20","60","24","582",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00",null,"20","20","24","562",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02",null,"20","20","24","391",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_01",null,"20","60","24","331",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_01",null,"20","20","24","311",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_unit");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","122","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("MC고객 해지등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","122","24","126",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("MC고객 접수등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label_select");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","408","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","448","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","746","15","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","786","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("MC고객사유");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_select");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">접수일</Col><Col id=\"datacolumn\">접수일</Col></Row><Row><Col id=\"codecolumn\">책임자승인일</Col><Col id=\"datacolumn\">책임자승인일</Col></Row><Row><Col id=\"codecolumn\">최종승인일</Col><Col id=\"datacolumn\">최종승인일</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("접수일");
            obj.set_value("접수일");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","517","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_select");
            obj.set_text("0123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","604","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","631","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","875","18","130","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_innerdataset", obj);
            div00_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">난폭형</Col><Col id=\"datacolumn\">난폭형</Col></Row><Row><Col id=\"codecolumn\">협박/지능형</Col><Col id=\"datacolumn\">협박/지능형</Col></Row><Row><Col id=\"codecolumn\">사실왜곡/우격형</Col><Col id=\"datacolumn\">사실왜곡/우격형</Col></Row><Row><Col id=\"codecolumn\">무시형</Col><Col id=\"datacolumn\">무시형</Col></Row><Row><Col id=\"codecolumn\">신용불량형</Col><Col id=\"datacolumn\">신용불량형</Col></Row><Row><Col id=\"codecolumn\">보험사기형</Col><Col id=\"datacolumn\">보험사기형</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1005","15","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","1045","18","80","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("MC고객등급");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01_00","1134","18","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_00_innerdataset", obj);
            div00_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">정상</Col><Col id=\"datacolumn\">정상</Col></Row><Row><Col id=\"codecolumn\">MC고객(R)</Col><Col id=\"datacolumn\">MC고객(R)</Col></Row><Row><Col id=\"codecolumn\">MC고객(Y)</Col><Col id=\"datacolumn\">MC고객(Y)</Col></Row><Row><Col id=\"codecolumn\">휴면회원</Col><Col id=\"datacolumn\">휴면회원</Col></Row><Row><Col id=\"codecolumn\">미사용</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"codecolumn\">탈퇴</Col><Col id=\"datacolumn\">탈퇴</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","155","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","86","52","35","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","123","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","150","52","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_text("접수부서");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","448","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("접수사원");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","517","52","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","576","52","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","603","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","786","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","1045","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb02","875","52","60","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb02_innerdataset = new nexacro.NormalDataset("div00_form_cmb02_innerdataset", obj);
            div00_form_cmb02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">등록</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">해지</Col><Col id=\"datacolumn\">해지</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb02_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb03","1134","52","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb03_innerdataset = new nexacro.NormalDataset("div00_form_cmb03_innerdataset", obj);
            div00_form_cmb03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">임시저장</Col><Col id=\"datacolumn\">임시저장</Col></Row><Row><Col id=\"codecolumn\">승인자반려</Col><Col id=\"datacolumn\">승인자반려</Col></Row><Row><Col id=\"codecolumn\">최종승인완료</Col><Col id=\"datacolumn\">최종승인완료</Col></Row><Row><Col id=\"codecolumn\">접수완료</Col><Col id=\"datacolumn\">접수완료</Col></Row><Row><Col id=\"codecolumn\">책임자승인</Col><Col id=\"datacolumn\">책임자승인</Col></Row><Row><Col id=\"codecolumn\">책임자반려</Col><Col id=\"datacolumn\">책임자반려</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb03_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","198","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("input_select");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","0",null,null,"50","40","0",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","129","16",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","16","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_text("MC(R)");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","15",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","245","16","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("MC(Y)");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","499","16","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("합계");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","15",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00","134","21","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00","194","21","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00_00","379","21","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00","439","21","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00_00_00_00","634","21","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_00_00_00_00_00","694","21","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_unit");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CS10010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
