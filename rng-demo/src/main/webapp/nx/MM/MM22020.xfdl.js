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
            this.set_titletext("(대외계)견적의뢰");
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

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
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

            obj = new Static("Static01_00_00","296","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("의뢰기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","76","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","86","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","336","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","402","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","492","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","532","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("보험견적번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","624","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("Lotte Rental");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","709","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","749","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","816","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","898","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","925","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","63",null,null,"794","0",null,null,null,null,this);
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

            obj = new Static("Static01_00_00","269","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
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

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","102",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","54",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Tab("Tab00",null,"DivSearch:21","734",null,"40","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("상세정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,null,"0","223",null,null,null,null,this.Tab00.Tabpage1.form);
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
            obj.set_text("고객번호/구분");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("자손조건");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("특별요율코드");
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

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","629","44","100","6",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("10");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","117","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("11");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("12");
            obj.set_text("대물");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("차종명");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","500","89","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"20","58","24","116",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("보험료");
            obj.set_cssclass("sta_SA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00",null,"20","120","24","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("16");
            obj.set_format("#,##9");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","56","80","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_text("123406789");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","216","56","24","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_Comp_src");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","243","56","115","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","150","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","150",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","366","150","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("22");
            obj.set_text("자차조건");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","183","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("23");
            obj.set_text("지명보험코드");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","183",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","366","183","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("25");
            obj.set_text("렌터카특약");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00","0","216","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("26");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","216",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","366","216","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("28");
            obj.set_text("옵션금액");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00","0","249","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("29");
            obj.set_text("물적사고할증기준");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","129","249",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","366","249","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("31");
            obj.set_text("현장출동");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00","0","282","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("32");
            obj.set_text("무보험차상해");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","129","282",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00","366","282","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("34");
            obj.set_text("기타");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00_00","0","315","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("35");
            obj.set_text("보험연령");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","129","315",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00","366","315","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("37");
            obj.set_text("법률특약");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00_00_00","0","348","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("38");
            obj.set_text("신가보상여부");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","129","348",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00_00_00_00","366","348","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("40");
            obj.set_text("운전자범위");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00_00_00_00_00_00_00","0","381","130","34",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("41");
            obj.set_text("옵션");
            obj.set_cssclass("sta_DA_label");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00_00","129","381",null,"34","0",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","500","56","115","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","134","89","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","134","122","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("45");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_00_00","500","287","115","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00_00_00_00_00_00","134","386",null,"24","5",null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","500","155","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("48");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00","134","188","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00","500","188","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00","134","254","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("51");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00_00","134","320","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("52");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00_00_00","134","353","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("53");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00_00_01","134","287","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("54");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00_00_02","500","320","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("55");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00_00_02_00","500","353","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("56");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01_00_00_00_00_02_01","500","254","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("57");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","155","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("58");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","500","221","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("59");
            obj.set_format("#,##9");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01","500","122","95","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("60");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_01_00","134","221","112","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form.div00.form);
            obj.set_taborder("61");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_maskchar(" ");
            obj.set_enable("false");
            this.Tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("관련파일");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","95","24",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title2");
            this.Tab00.Tabpage2.form.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","269","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divGridWapper00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.divGridWapper00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form.divGridWapper00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.form.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.Tab00.Tabpage2.form.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage2.form.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","48",null,null,null,null,null,this.Tab00.Tabpage2.form.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.Tab00.Tabpage2.form.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Tab00.Tabpage2.form.divGridWapper00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Tab00.Tabpage2.form.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1180","63","100","50",null,null,null,null,null,null,this);
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
        this.registerScript("MM22020.xfdl", function() {

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
        this.loadIncludeScript("MM22020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
