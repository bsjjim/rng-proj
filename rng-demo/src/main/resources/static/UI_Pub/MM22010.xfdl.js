(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_07_01");
            this.set_titletext("(대외계)신규가입신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid3", this);
            obj.set_saveinvaliddate("exclude");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"1","40",null,"0","242",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","378","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","76","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","168","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","418","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","484","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("진행");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","584","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","624","18","53","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("대리점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","822","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","86","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("입고일자");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","677","18","145","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_innerdataset);
            obj.set_text("삼성화재(일등대리점)");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","20","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","86","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","168","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","195","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","862","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","929","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("123허1234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","418","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("공문번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","484","52","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("201601011234");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"795","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1158","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","205","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1234","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1115","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","74","24","180",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("일괄등록");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","306",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","258",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02","94","20","58","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("선택건수");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","145","20","50","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            obj.set_textAlign("left");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00_01",null,"20","50","24","379",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","363",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","368","0","15","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","74","24","102",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_text("가입확인");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","98","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("16");
            obj.set_text("가입확인취소");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Tab("Tab00",null,"DivSearch:21","735",null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("보험정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,null,"0","202",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("보험사");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("자차");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("총보험료");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","295","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","117","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("대인2");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("법률특약");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("대인1");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","150","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("블랙박스요율");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","150",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","150","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("임직원특약");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","183","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("16");
            obj.set_text("보험기간");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","183",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","366","183","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("대물");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","216","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_text("특별요율");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","216",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","366","216","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00","0","249","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("에어백/보험계약");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","129","249",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","366","249","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("자손");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00","0","282","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("자명보험");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","129","282",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00","366","282","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("31");
            obj.set_text("메모");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00_00","0","315","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("32");
            obj.set_text("차량구분/연령");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","129","315",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00","366","315","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("무보험");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00_00_00","0","348","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","129","348",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","612","56","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("40");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_00_00","500","287","230","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01","134","56","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("51");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00","246","56","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00","500","56","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("51");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_00","500","89","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","612","89","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("53");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_01","134","89","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("53");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","246","89","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("54");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_00_00","500","122","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("55");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00","612","122","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00","134","122","228","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_01_00","134","155","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00","246","155","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("57");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_00_00_00","500","155","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("57");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_01","612","155","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("58");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","134","188","210","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("58");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_00_00_00_00","500","188","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("58");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_01_00","612","188","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_01_00_00","134","221","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("59");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00_00","246","221","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("60");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","500","221","105","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_01_00_00_00","134","254","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("60");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00_00_00","246","254","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("61");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_00_00_00_00_00","500","254","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("61");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_01_00_00","612","254","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("62");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_01_00_00_00_00","134","287","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("62");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00_00_00_00","246","287","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("63");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_01","134","320","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("63");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_01","246","320","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("64");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_00_00_00_00_00_00","500","320","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("64");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_01_00_00_00","612","320","118","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("65");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_01_00_00_01_00_00_00_00_00","134","353","110","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("65");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01_00_00_00_00_00","246","353","116","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("66");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("고객정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"200","0",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            obj.set_enable("false");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            obj.set_enable("false");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","295","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","110","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","500","56","230","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","80","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_text("123406789");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","216","56","24","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","243","56","119","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","134","89","228","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","500","89","230","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.div00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("대외계정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"200","0",null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("0");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("당사보험료");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("차액");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","295","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","110","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("보험증권번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("보험사보험료");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","500","56","230","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_01","134","89","228","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","500","89","230","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_02","134","56","228","24",null,null,null,null,null,null,this.Tab00.Tabpage3.form.div00.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage3.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1145","97","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MM22010.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        this.divGridWapper_Static01_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("MM22010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
