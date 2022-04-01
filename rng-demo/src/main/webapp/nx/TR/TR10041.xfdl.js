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
            this.set_titletext("거래처 계좌 확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63","734",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","160","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("계좌원장 목록");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"고객/벤더번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"예금주명\"/><Cell col=\"5\" text=\"제3자등록\"/><Cell col=\"6\" text=\"법정생년월일\"/><Cell col=\"7\" text=\"사업자등록번호\"/><Cell col=\"8\" text=\"은행유형\"/><Cell col=\"9\" text=\"금융기관\"/><Cell col=\"10\" text=\"계좌번호\"/><Cell col=\"11\" text=\"사용여부\"/><Cell col=\"12\" text=\"처리상태\"/><Cell col=\"13\" text=\"대표계좌\"/><Cell col=\"14\" text=\"계좌인증\"/><Cell col=\"15\" text=\"예산계좌\"/><Cell col=\"16\" text=\"등록일자\"/><Cell col=\"17\" text=\"변경일자\"/><Cell col=\"18\" text=\"메시지\"/><Cell col=\"19\" text=\"메시지2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","54",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("팀원확정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("반려");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","704",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","68",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("팀원확정");
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

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("반려");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","387","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","269",null,"80","18",null,"0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","593","18","64","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("변경일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("cmb00","453","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_cmb00_innerdataset = new nexacro.NormalDataset("DivSearch_form_cmb00_innerdataset", obj);
            DivSearch_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">등록요청</Col><Col id=\"datacolumn\">등록요청</Col></Row><Row><Col id=\"codecolumn\">자금팀 접수</Col><Col id=\"datacolumn\">자금팀 접수</Col></Row><Row><Col id=\"codecolumn\">자금팀 확정</Col><Col id=\"datacolumn\">자금팀 확정</Col></Row><Row><Col id=\"codecolumn\">반려</Col><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_cmb00_innerdataset);
            obj.set_text("자금팀 접수");
            obj.set_value("자금팀 접수");
            obj.set_index("2");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","659","18","105","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("고객/벤더번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","118","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","205","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","232","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","347","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","553","1","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("div01_00",null,"63","734","448","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","129","414",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00","129","315",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01","129","282",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","216",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","150",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","84",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","134","89","95","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("26");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_value("1231212345");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","117",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("고객/벤더번호");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","117","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("은행유형");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","150","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("금융기관");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_title1");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","352","117","159","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_text("제 3자 계좌여부");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","352","51","159","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_text("법정생년월일");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","352","150","159","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_text("제3자 생년/사업자번호");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","84","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","216","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_text("예금주명");
            obj.set_cssclass("sta_DA_label_req");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","249",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","315","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
            obj.set_text("등록요청자");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","0","348","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("18");
            obj.set_text("등록사유");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","352","282","159","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("19");
            obj.set_text("대표계좌");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","348",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","352","315","159","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("21");
            obj.set_text("등록요청일자");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","282","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("23");
            obj.set_text("예산계좌");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01_00","0","414","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("24");
            obj.set_text("첨부문서");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","515","56","65","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("25");
            obj.set_format("##-##-##");
            obj.set_value("901212");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","515","320","120","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_value("20221001");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","135","320","105","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("27");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00","515","122","155","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_form_rad00_innerdataset = new nexacro.NormalDataset("div01_00_form_rad00_innerdataset", obj);
            div01_00_form_rad00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rad00_innerdataset);
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00_00","515","287","155","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_form_rad00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rad00_00_00_innerdataset", obj);
            div01_00_form_rad00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rad00_00_00_innerdataset);
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00_00_00","134","287","155","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_form_rad00_00_00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rad00_00_00_00_innerdataset", obj);
            div01_00_form_rad00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rad00_00_00_00_innerdataset);
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","134","155","180","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("32");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_01","134","122","214","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("33");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_00","287","353","120","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("34");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","135","353","150","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("35");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01","134","221","105","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_01","515","155","105","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("38");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","259","155","8","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("39");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","134","419","145","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("40");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_02","242","320","106","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("41");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","183",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","183","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("45");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_DA_label_req");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_03","134","188","144","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("46");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","293","187","75","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("47");
            obj.set_text("가상계좌");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","278","187","15","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_02_00","367","188","140","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("49");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","357","189","10","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","381",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","0","381","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("22");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_00_00_00","134","387","272","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("36");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static02","492","161","14","14",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("56");
            obj.set_tooltiptext("상기 고객/벤더와 등록계좌 명의인의 주민/사업자번호가 일치하지 않을 경우 반드시 입력");
            obj.set_cssclass("sta_WF_help");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01_00","241","221","105","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("57");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","352","249","159","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Radio("rad00_00","515","253","155","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_00_form_rad00_00_innerdataset = new nexacro.NormalDataset("div01_00_form_rad00_00_innerdataset", obj);
            div01_00_form_rad00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">예</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">아니오</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(div01_00_form_rad00_00_innerdataset);
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","249","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("58");
            obj.set_text("계좌인증");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00_01_00_00","134","254","138","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("59");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","85","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("60");
            obj.set_value("1234067890");
            obj.set_text("1234067890");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01","221","56","117","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("61");
            obj.set_text("P12345");
            this.div01_00.addChild(obj.name, obj);
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
        this.loadIncludeScript("TR10041.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
