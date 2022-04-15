(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_05");
            this.set_titletext("일반구매의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row><Row><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","794",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","91","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("의뢰기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","296","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","336","18","61","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("의뢰유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","76","2","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01",null,"0","10","80","1030",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","211","52","61","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("의뢰번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","402","18","177","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","277","52","86","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("21YHOTY");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","364","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00",null,"0","10","60","775",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","86","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("전체");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1035","1","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","428","52","66","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","494","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_value("선택");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","791","-2","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_01",null,"0","10","60","589",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","DivSearch:0",null,null,"794","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("구매의뢰 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"No\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"진행상태\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"구매의뢰번호\"/><Cell col=\"4\" text=\"품목번호\"/><Cell col=\"5\" text=\"계약지점\"/><Cell col=\"6\" text=\"의뢰일자\"/><Cell col=\"7\" text=\"상품구분\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"품목내욕\"/><Cell col=\"10\" text=\"구매금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","48",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"105","20","60","774",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","734","559","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01_00","129","471",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00_00","129","500",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","529",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","297",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","2","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("구매의뢰 상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","36","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("구매의뢰유형");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","36",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","364","36","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("구매의뢰번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","65","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","65",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","94","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","94",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","364","94","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","498","39","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","24","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","123","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","123",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","152","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("관리지점");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","152",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","364","152","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("관리매니저");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","364","123","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("의뢰매니저");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01","0","181","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_01","129","181",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","210","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","129","210",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","239","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("대표모델");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00","129","239",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","268","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("보관위치");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","268",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","364","239","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("보험가입여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","134","39","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02","498","68","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("수익관리팀(일반)");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_02","0","326","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("중고구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_02","0","355","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("교정여부");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_02","129","355",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","364","355","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("렌탈취급구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_01","0","384","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("양도구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_01","129","384",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","413","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_text("유지보수기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","129","413",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","364","413","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("통화");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_01","364","384","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("국산/외산 구분");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01_00","0","442","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_01_00","129","442",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00","0","471","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("구매단가");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02_00","364","471","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("구매금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00_00","0","500","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","529","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("비고");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_00","364","442","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("구매수량");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_01","134","416","60","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_format("#,##9.##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","194","416","40","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("개월");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_02","134","532",null,"24","205",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_01","498","387","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("국산");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_00_01","498","416","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("input_req");
            obj.set_text("대한민국 원");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_00_00_00","498","358","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("단기일반");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","134","474","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_format("#,##9");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","254","474","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","297","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("제조회사");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01","364","65","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_text("구매그룹");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_01","364","181","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("납품예정일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_01","364","268","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_text("기능위치");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00_01_00","364","297","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_text("제조번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01","134","97","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_cssclass("input_req");
            obj.set_text("관리단기");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01","134","126","42","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_01","178","126","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01","205","126","154","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            obj.set_cssclass("input_req");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","134","155","42","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_01_00","178","155","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","205","155","154","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("69");
            obj.set_cssclass("input_req");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_01","134","184","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01","134","213","50","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("71");
            obj.set_cssclass("input_req");
            obj.set_text("CL010");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","186","213","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("72");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","213","213","146","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("73");
            obj.set_cssclass("input_req");
            obj.set_text("크라이슬러 크로스파이어");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00","134","242","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("74");
            obj.set_cssclass("input_req");
            obj.set_text("크라이슬러 크로스파이어");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01_00","134","271","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("75");
            obj.set_cssclass("input_req");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_00","134","300","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("76");
            obj.set_text("크라이슬러 크로스파이어");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_02","129","326",null,"30","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01_00_00","134","329","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("79");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01_00_00_00","134","358","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("80");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_01_00_00_00_00","134","387","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("81");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","134","445","42","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("82");
            obj.set_cssclass("input_req");
            obj.set_text("3666");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","178","445","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("83");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","205","445","154","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("84");
            obj.set_cssclass("input_req");
            obj.set_text("서울중앙MOT 강북 Part");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","134","503","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("85");
            obj.set_format("#,##9");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","254","503","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("86");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_01","134","68","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("87");
            obj.set_text("크라이슬러 크로스파이어");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","531","532","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("88");
            obj.set_text("구설비번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","622","532","87","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("89");
            obj.set_text("구설비조회");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","498","97","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("90");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","498","126","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("91");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","557","126","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("92");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","584","126","145","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("93");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","498","155","57","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("94");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","557","155","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("95");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","584","155","145","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("96");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_01_00","498","184","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("97");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_00","498","242","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("98");
            obj.set_text("예");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_02_00_00","498","271","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("99");
            obj.set_cssclass("input_req");
            obj.set_text("예");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_00_00","498","300","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_text("크라이슬러 크로스파이어");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_01","498","445","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("101");
            obj.set_format("#,##9");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_01","618","445","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("102");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_01_00","498","474","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("103");
            obj.set_format("#,##9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_01_00","618","474","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("104");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"5","74","24","120",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("105");
            obj.set_text("요청등록");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"5","50","24","66",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("106");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"5","62","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("107");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_01",null,"5","50","24","198",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("108");
            obj.set_text("복사");
            obj.set_cssclass("btn_Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00",null,"Div00:0","734",null,"40","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("관련파일");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","130","0","100","50",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"No\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"파일명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","74","24","78",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"20","74","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);
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
        this.registerScript("MM30010.xfdl", function() {

        this.Div01_Static02_02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM30010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
