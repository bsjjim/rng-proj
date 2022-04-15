(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp01");
            this.set_titletext("L/C AMEND 상세등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("변경일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","86","18","105","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","191","10","40","40",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","231","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","298","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("2021012012");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","385","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","412","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0","734",null,null,"48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("L/C 변경 내역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","159","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"20","85","24","130",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("2021012012");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00",null,"20","115","24","217",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("홍길순");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","336",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","78",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("전표");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","74","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("전표취소");
            obj.set_cssclass("btn_Block");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","51","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","129","51","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("변경 전");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","431","51",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("변경 후");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","129","84","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","431","84",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","84","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("13");
            obj.set_text("선적일자");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","129","117","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","431","117",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","117","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("16");
            obj.set_text("유효일자");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00","129","150","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","431","150",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00","0","150","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("19");
            obj.set_text("가격조건");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","50",null,"2","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_topBorder");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01","129","183","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01","431","183",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01","0","183","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("23");
            obj.set_text("운송수단");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01","129","216","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01","431","216",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01","0","216","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("26");
            obj.set_text("개설금액");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00","129","249","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","431","249",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00","0","249","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("29");
            obj.set_text("결재통화");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02","129","282","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_02","431","282",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02","0","282","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("32");
            obj.set_text("선적항");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_02","129","315","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_02","431","315",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_02","0","315","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("35");
            obj.set_text("도착항");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_01","129","348","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_01","431","348",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_01","0","348","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("38");
            obj.set_text("환적여부");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00","129","381","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_01_00","431","381",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00","0","381","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("41");
            obj.set_text("분할선적");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_01_00","129","414","303","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_01_00","431","414",null,"34","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_01_00","0","414","130","34",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("44");
            obj.set_text("적하보험");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","89","105","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","436","89","105","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01","134","122","105","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_02","436","122","105","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("48");
            obj.set_dateformat("yyyy-MM-dd");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","155","210","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_innerdataset", obj);
            divGridWapper_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","436","155","210","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_00_innerdataset", obj);
            divGridWapper_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","134","188","210","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_01_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_01_innerdataset", obj);
            divGridWapper_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","436","188","210","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_01_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_01_00_innerdataset", obj);
            divGridWapper_form_Combo00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01","134","221","90","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("53");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_01_01_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_01_01_innerdataset", obj);
            divGridWapper_form_Combo00_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_01_01_innerdataset);
            obj.set_text("대한민국 원");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","226","221","118","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("54");
            obj.set_format("#,##9");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01_00","436","221","90","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_01_01_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_01_01_00_innerdataset", obj);
            divGridWapper_form_Combo00_01_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_01_01_00_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","528","221","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("56");
            obj.set_format("#,##9");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01_01","134","254","90","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_01_01_01_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_01_01_01_innerdataset", obj);
            divGridWapper_form_Combo00_01_01_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_01_01_01_innerdataset);
            obj.set_text("대한민국 원");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_01_00_00","436","254","90","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Combo00_01_01_00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Combo00_01_01_00_00_innerdataset", obj);
            divGridWapper_form_Combo00_01_01_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper_form_Combo00_01_01_00_00_innerdataset);
            obj.set_text("선택");
            obj.set_index("0");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Radio("Radio00","134","353","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("59");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Radio00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Radio00_innerdataset", obj);
            divGridWapper_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","436","353","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("60");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Radio00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Radio00_00_innerdataset", obj);
            divGridWapper_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_Radio00_00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","134","386","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("61");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Radio00_01_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Radio00_01_innerdataset", obj);
            divGridWapper_form_Radio00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_Radio00_01_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","436","386","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Radio00_00_00_innerdataset", obj);
            divGridWapper_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_Radio00_00_00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Radio("Radio00_01_00","134","419","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("63");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Radio00_01_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Radio00_01_00_innerdataset", obj);
            divGridWapper_form_Radio00_01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_Radio00_01_00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00_00","436","419","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper_form_Radio00_00_00_00_innerdataset = new nexacro.NormalDataset("divGridWapper_form_Radio00_00_00_00_innerdataset", obj);
            divGridWapper_form_Radio00_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">가능</Col><Col id=\"datacolumn\">가능</Col></Row><Row><Col id=\"codecolumn\">불가능</Col><Col id=\"datacolumn\">불가능</Col></Row></Rows>");
            obj.set_innerdataset(divGridWapper_form_Radio00_00_00_00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("edt00","134","287","293","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("65");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("edt00_00","134","320","293","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("66");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("edt00_00_00","436","320","293","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("67");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Edit("edt00_01","436","287","293","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("68");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divGridWapper00","divGridWapper:20","DivSearch:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("0");
            obj.set_text("기타정보");
            obj.set_cssclass("sta_WF_title2");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","159","0","100","50",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00","129","50",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00","0","50","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("4");
            obj.set_text("AMEND 사유");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_02_00","129","83",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_02_00","0","83","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("6");
            obj.set_text("AMEND 수수료");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_02_00","129","116",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_02_00","0","116","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("8");
            obj.set_text("이자율");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_01_00","129","149",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_01_00","0","149","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("10");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_01_00_00","129","182",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00_00","0","182","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("12");
            obj.set_text("G/L계정");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_02","134","88","120","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("13");
            obj.set_format("#,##9");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","88","20","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("14");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","134","121","60","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("15");
            obj.set_format("#,##9.##");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","194","121","20","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("16");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","214","121","60","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("17");
            obj.set_format("#,##9.##");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","274","121","20","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("18");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","293","121","60","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("19");
            obj.set_format("#,##9.##");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","353","121","20","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("20");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_01_00_00","366","149","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("21");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_01_00_00_00","366","182","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("22");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_03","134","154","105","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_03_00","501","154","105","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Combo("Combo00_02","134","187","228","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper00_form_Combo00_02_innerdataset = new nexacro.NormalDataset("divGridWapper00_form_Combo00_02_innerdataset", obj);
            divGridWapper00_form_Combo00_02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper00_form_Combo00_02_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Combo("Combo00_02_00","501","187","228","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divGridWapper00_form_Combo00_02_00_innerdataset = new nexacro.NormalDataset("divGridWapper00_form_Combo00_02_00_innerdataset", obj);
            divGridWapper00_form_Combo00_02_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(divGridWapper00_form_Combo00_02_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00_00","129","215",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00_00","0","215","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("28");
            obj.set_text("지급처");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","134","220","42","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("29");
            obj.set_text("3666");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","178","220","24","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_Comp_src");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","205","220","157","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("31");
            obj.set_text("서울중앙MOT 강북 Part");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00_00_00","129","248",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00_00_00","0","248","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("33");
            obj.set_text("지급계좌");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00_00_00_00_00_00_00","129","281",null,"34","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00_00_00_00_00_00_00","0","281","130","34",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("35");
            obj.set_text("코멘트");
            obj.set_cssclass("sta_DA_label");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00_00_01","134","253","120","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("36");
            obj.set_format("##############");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00_01","256","253","24","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_Comp_src");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","283","253","250","24",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("38");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","535","253",null,"24","5",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("39");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","50",null,"2","0",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_DA_topBorder");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","194","113","20","15",null,null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("41");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","134","55",null,"24","5",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("42");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","286",null,"24","5",null,null,null,null,null,this.divGridWapper00.form);
            obj.set_taborder("43");
            obj.set_text("농협은행 79005691157411 가상계좌");
            this.divGridWapper00.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_Comm_func");
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
        this.registerScript("MM30090.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
        };
        this.loadIncludeScript("MM30090.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
