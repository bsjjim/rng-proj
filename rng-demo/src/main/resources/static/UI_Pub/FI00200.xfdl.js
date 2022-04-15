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
            this.set_titletext("고정자산 구매의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("의뢰기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","336","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("의뢰자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","296","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","643","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("의뢰번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","603","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","76","4","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00","699","6","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","194","0","100","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("h18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","191","42","100","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01_00","884","18","35","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("A06");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","921","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","948","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("전략기획팀");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","844","18","38","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","86","52","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">선택</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">신청</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">반려</Col><Col id=\"datacolumn\">반려</Col></Row><Row><Col id=\"codecolumn\">상신취소</Col><Col id=\"datacolumn\">상신취소</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("선택");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","402","18","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("1234067890");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","461","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","488","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","709","18","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","336","52","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","402","52","95","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("123456789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","804","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_02_00_00","874","6","10","50",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","97",null,null,"794","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1377","13","15","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","334","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"의뢰번호\"/><Cell col=\"4\" text=\"의뢰일자\"/><Cell col=\"5\" text=\"의뢰자\"/><Cell col=\"6\" text=\"의뢰내역\"/><Cell col=\"7\" text=\"승인여부\"/><Cell col=\"8\" text=\"승인일자\"/><Cell col=\"9\" text=\"처리결과\"/><Cell col=\"10\" text=\"처리내역\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","106",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1364","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1438","14","4","35",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1384","44","100","6",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1334","38","100","12",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("8");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","121",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"20","44","24","48",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01",null,"97","734","224","40",null,null,null,null,null,this);
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
            obj.set_text("신청번호");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("신청자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","435","0","100","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","135","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("고정자산 신청번호");
            obj.set_cssclass("sta_WF_title2");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","-4","39","145","11",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","366","117","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("승인자");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("품목");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("신청부서");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","500","89","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","134","89","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","122","105","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","57","85","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","150","130","73",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_DA_label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","150",null,"73","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","587","89","110","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_index("2");
            this.div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","135","156",null,"60","5",null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","221","57","24","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Comp_src");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","500","122","115","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","500","57","155","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_text("전략기획팀");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div01_00_00","divGridWapper:20","506",null,null,"40","48",null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","165","24",null,null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("구매의뢰 품목 상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"2","0",null,null,null,null,this.div01_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"중분류\"/><Cell col=\"2\" text=\"소분류\"/><Cell col=\"3\" text=\"품명 및 규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"추정단가\"/><Cell col=\"7\" text=\"추정금액\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","240",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","160",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","80",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","0",null,null,null,null,null,this.div01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.div01_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"10","76","28","1",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00",null,"10","64","28","81",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00_00",null,"10","112","28","217",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("그룹웨어 결재");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_01",null,"10","64","28","149",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div01_00","divGridWapper:20","321",null,"185","40",null,null,null,null,null,this);
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03","129","84",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26","0","51","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("1");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27","129","51",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","84","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("3");
            obj.set_text("의뢰부서");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","117","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("4");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","117",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","135","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("7");
            obj.set_text("구매의뢰 요청정보");
            obj.set_cssclass("sta_WF_title2");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","366","84","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("8");
            obj.set_text("의뢰번호");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_00","366","51","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("9");
            obj.set_text("의뢰자");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","500","57","115","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.div01_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","134","57","105","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_enable("false");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","500","89","85","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_text("김나나");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","150","130","34",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("13");
            obj.set_text("의뢰내역");
            obj.set_cssclass("sta_DA_label");
            this.div01_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","150",null,"34","0",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_data");
            this.div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","134","122","110","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_index("2");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01_00","134","89","155","24",null,null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            obj.set_text("전략기획팀");
            this.div01_00.addChild(obj.name, obj);

            obj = new Edit("edt00","134","155",null,"24","5",null,null,null,null,null,this.div01_00.form);
            obj.set_taborder("17");
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
            this.addEventHandler("onload",this.temp01_onload,this);
            this.DivSearch.form.Static01_00_00_00_02_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.DivSearch.form.Static01_00_00_00_02_00_00.addEventHandler("onclick",this.DivSearch_Static01_00_00_00_02_00_onclick,this);
            this.divGridWapper.form.Static02_00.addEventHandler("onclick",this.divGridWapper_Static02_00_onclick,this);
        };
        this.loadIncludeScript("FI00200.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
