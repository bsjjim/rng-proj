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
            this.set_titletext("고객만족도 조사 제외요청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97",null,null,"794","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("제외내역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","290","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"접수번호\"/><Cell col=\"3\" text=\"접수일시\"/><Cell col=\"4\" text=\"제외구분\"/><Cell col=\"5\" text=\"고객유형\"/><Cell col=\"6\" text=\"고객번호\"/><Cell col=\"7\" text=\"고객명\"/><Cell col=\"8\" text=\"계약번호\"/><Cell col=\"9\" text=\"요청상태\"/><Cell col=\"10\" text=\"제외기간\"/><Cell col=\"11\" text=\"제외요청사유\"/><Cell col=\"12\" text=\"CS혁신팀의견\"/><Cell col=\"13\" text=\"접수자\"/><Cell col=\"14\" text=\"접수부서\"/><Cell col=\"15\" text=\"승인자\"/><Cell col=\"16\" text=\"승인일시\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column3\"/><Cell col=\"6\" text=\"bind:Column3\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column3\"/><Cell col=\"9\" text=\"bind:Column3\"/><Cell col=\"10\" text=\"bind:Column3\"/><Cell col=\"11\" text=\"bind:Column3\"/><Cell col=\"12\" text=\"bind:Column3\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column3\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column3\"/></Band></Format></Formats>");
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

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("제외해제");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","170","24","78",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("고객만족도 조사 제외등록");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","319",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1136","38","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","17","24","299",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridUnit");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1180","13","10","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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

            obj = new Static("Static01_00_00_01","704","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","744","18","49","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("요청자");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","998","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","1038","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","86","18","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_select");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">요청일</Col><Col id=\"datacolumn\">요청일</Col></Row><Row><Col id=\"codecolumn\">승인일</Col><Col id=\"datacolumn\">승인일</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("접수일");
            obj.set_value("접수일");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00_00","797","18","57","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("0123456789");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_00","856","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","883","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","86","52","100","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb01_innerdataset = new nexacro.NormalDataset("div00_form_cmb01_innerdataset", obj);
            div00_form_cmb01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">법인</Col><Col id=\"datacolumn\">법인</Col></Row><Row><Col id=\"codecolumn\">개인</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">개인사업자</Col><Col id=\"datacolumn\">개인사업자</Col></Row><Row><Col id=\"codecolumn\">해외법인</Col><Col id=\"datacolumn\">해외법인</Col></Row><Row><Col id=\"codecolumn\">해외개인</Col><Col id=\"datacolumn\">해외개인</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb01_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","155","42","80","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","475","18","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","562","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","589","18","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","408","18","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","20","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","408","52","59","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb02","475","52","110","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_cmb02_innerdataset = new nexacro.NormalDataset("div00_form_cmb02_innerdataset", obj);
            div00_form_cmb02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">임시저장</Col><Col id=\"datacolumn\">임시저장</Col></Row><Row><Col id=\"codecolumn\">승인요청</Col><Col id=\"datacolumn\">승인요청</Col></Row><Row><Col id=\"codecolumn\">승인자반려</Col><Col id=\"datacolumn\">승인자반려</Col></Row><Row><Col id=\"codecolumn\">최종승인완료</Col><Col id=\"datacolumn\">최종승인완료</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb02_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1107","18","35","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1144","18","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1171","18","155","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chk00","1341","18","95","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("하위부서검색");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","368","4","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","158","18","210","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("input_select");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div00",null,"97","734",null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("제외구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","159","51",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","367","51","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","117","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","159","117",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","183","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("고객만족도 조사 연락처");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01","0","249","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("접수일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01","0","315","160","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("제외요청사유");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","159","249",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00","159","315",null,"60","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00","159","374",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","367","249","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("접수부서");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","367","374","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("승인자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_00_00_00_00","159","407",null,"60","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00_00","0","407","160","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("CS혁신팀의견");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_00_00_01_00","0","374","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("승인일시");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","159","183",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","367","183","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("요청상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00","164","320",null,"50","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("txt00_00","164","412",null,"50","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","84","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","159","84",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00","367","84","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("고객명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00_00_00","367","117","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("차량(설비)번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","150","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","159","150",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","216","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("제외기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","159","216",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_00_01_01_00","0","282","160","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("접수사원");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","159","282",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_01_00_00","501","56","85","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_format("#########");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","164","89","199","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","501","254","229","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","164","122","199","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","501","89","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","164","56","199","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_innerdataset", obj);
            Div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">고객번호</Col><Col id=\"datacolumn\">고객번호</Col></Row><Row><Col id=\"codecolumn\">계약번호</Col><Col id=\"datacolumn\">계약번호</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","501","122","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("10허4048");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00","164","155","130","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("상품");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00","296","155","100","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","398","155","331","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","164","254","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00","164","379","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb01","164","221","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00_00","286","221","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_type("string");
            obj.set_format("####-##-## ##:##");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","164","287","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00","501","379","155","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt00_00_01","165","188","104","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_value("010-1234-1234");
            obj.set_text("010-1234-1234");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","502","188","140","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("Div00_form_cmb00_00_innerdataset", obj);
            Div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">고객번호</Col><Col id=\"datacolumn\">고객번호</Col></Row><Row><Col id=\"codecolumn\">계약번호</Col><Col id=\"datacolumn\">계약번호</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cmb00_00_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","734","105","20","180",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
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
        this.loadIncludeScript("CS10360.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
