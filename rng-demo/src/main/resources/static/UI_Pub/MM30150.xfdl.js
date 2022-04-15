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
            this.set_titletext("B/L상세등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","523",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","91","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("물건선택");
            obj.set_cssclass("sta_WF_title2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","396","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\" displaytype=\"normal\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"발주item\"/><Cell col=\"3\" text=\"구매물건번호\"/><Cell col=\"4\" text=\"물건명\"/><Cell col=\"5\" text=\"발주수량\"/><Cell col=\"6\" text=\"발주단가\"/><Cell col=\"7\" text=\"발주금액\"/><Cell col=\"8\" text=\"미내도수량\"/><Cell col=\"9\" text=\"미내도금액\"/><Cell col=\"10\" text=\"B/L수량\"/><Cell col=\"11\" text=\"B/L금액\"/><Cell col=\"12\" text=\"환산금액\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"103","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","69",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26","0","36","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static27","129","36",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","35",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","90","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("기본사항");
            obj.set_cssclass("sta_WF_title1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","24","145","11",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","377","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("L/C번호");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","749","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("개설통화");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","1121","69","130","34",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("개설금액");
            obj.set_cssclass("sta_DA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","134","41","85","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00","221","41","24","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","248","41","124","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("홍길순");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","134","74","238","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","511","74","233","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("2021012012");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","883","74","130","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div00_form_Combo00_innerdataset = new nexacro.NormalDataset("div00_form_Combo00_innerdataset", obj);
            div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","1256","74","120","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_format("#,##9");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"5","50","24","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_Block");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1376","74","20","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","0","div00:0",null,"184","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("내도일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("결재통화");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("결재내용");
            obj.set_cssclass("sta_WF_title2");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","377","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("환율");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","377","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","749","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("결재금액");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","749","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("B/L번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","1121","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00","1121","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("내도금액");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00","129","117",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01","0","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_text("이자율");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01","377","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_text("지급처");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01","749","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_text("지급계좌");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_01_00","0","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_text("지급방법");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","129","150",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00","377","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_text("G/L계정");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","749","150","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("기산일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","56","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","512","56","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","883","56","234","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_text("2021012012");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","1256","56","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_format("#,##9");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","89","95","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_form_Combo00_innerdataset = new nexacro.NormalDataset("div01_form_Combo00_innerdataset", obj);
            div01_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","512","89","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("2021012012");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","883","89","120","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_format("#,##9");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","1003","89","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","1256","89","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","134","122","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_format("#,##9.##");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","194","122","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","214","122","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_format("#,##9.##");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","274","122","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","293","122","60","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_format("#,##9.##");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","353","122","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","511","122","42","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_text("3666");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","555","122","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","582","122","163","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","883","122","42","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_text("3666");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","927","122","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","954","122","155","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","155","238","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_form_Combo00_00_innerdataset = new nexacro.NormalDataset("div01_form_Combo00_00_innerdataset", obj);
            div01_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_Combo00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","511","155","234","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div01_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("div01_form_Combo00_00_00_innerdataset", obj);
            div01_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div01_form_Combo00_00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00","883","155","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd ");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","632","89","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("46");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","1376","56","20","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("47");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","1111","122","155","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("48");
            obj.set_text("서울중앙MOT 강북 Part");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div00_01","0","div01:0",null,"85","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("0");
            obj.set_text("선급기표금액");
            obj.set_cssclass("sta_DA_label");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("3");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","90","24",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("4");
            obj.set_text("B/L결재");
            obj.set_cssclass("sta_WF_title2");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("5");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_01.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","56","120","24",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("6");
            obj.set_format("#,##9");
            this.div00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","56","20","24",null,null,null,null,null,null,this.div00_01.form);
            obj.set_taborder("7");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.div00_01.addChild(obj.name, obj);

            obj = new Div("div00_01_00","0","div00_01:0",null,"151","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","90","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("1");
            obj.set_text("제수수료");
            obj.set_cssclass("sta_WF_title2");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1341","44","100","6",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("3");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00",null,"20","115","24","217",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("4");
            obj.set_text("홍길순");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00",null,"20","85","24","130",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("5");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","50","24","78",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("6");
            obj.set_text("전표");
            obj.set_cssclass("btn_Block");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","74","24","336",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("7");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Block");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"20","74","24","0",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("8");
            obj.set_text("전표취소");
            obj.set_cssclass("btn_Block");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","51","130","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("9");
            obj.set_text("결재금액");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","129","51","226","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("10");
            obj.set_text("환가료");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","129","84",null,"34","0",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","84","130","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("12");
            obj.set_text("B/L수수료");
            obj.set_cssclass("sta_DA_label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01_00","129","117",null,"34","0",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00_00","0","117","130","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("14");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_DA_label");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00","354","51","226","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("15");
            obj.set_text("L/G보증료");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00_00","579","51","230","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("16");
            obj.set_text("T/Charge");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_01","808","51","226","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("17");
            obj.set_text("지연이자");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00_01","1033","51","226","34",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("18");
            obj.set_text("기타");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01_00_00_00","1258","51",null,"34","0",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","50",null,"2","0",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_topBorder");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","134","89","211","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("21");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","345","89","20","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("22");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","574","89","20","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("23");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01","799","89","20","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("24");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00","1024","89","20","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("25");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_unit");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_01_00_00","1249","89","20","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("26");
            obj.set_text("=");
            obj.set_cssclass("sta_WF_unit");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","364","89","208","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("27");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","592","89","208","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("28");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00","818","89","206","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("29");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00","1043","89","206","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("30");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00_00_00_00","1267","89","216","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("31");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_01","134","122",null,"24","5",null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("32");
            obj.set_text("2021012012");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","345","108","20","15",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("33");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","572","108","20","15",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("34");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_01_00.addChild(obj.name, obj);

            obj = new Static("sta00","1360","56","35","24",null,null,null,null,null,null,this.div00_01_00.form);
            obj.set_taborder("35");
            obj.set_text("합계");
            this.div00_01_00.addChild(obj.name, obj);
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
        this.registerScript("MM30150.xfdl", function() {

        this.DivSearch_Static01_00_00_00_02_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp01_onload,this);
        };
        this.loadIncludeScript("MM30150.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
