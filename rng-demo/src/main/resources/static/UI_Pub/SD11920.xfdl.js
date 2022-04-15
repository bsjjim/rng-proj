(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_06");
            this.set_titletext("고객별단기렌탈료현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">KRW</Col></Row><Row><Col id=\"Column0\">USD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column6\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column3\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch00","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","366","18","90","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_text("청구고객번호");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","668","0","40","60",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00","708","18","75","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_text("결재담당자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","18","88","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_text("청구년월");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","326","0","40","60",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","52","88","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_SA_label_req");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_01","366","52","90","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","708","52","75","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_text("관리담당자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","126","18","90","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_req");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","449","11","10","70",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","459","52","57","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_text("P12345");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","518","52","24","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","545","52","123","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("14");
            obj.set_text("홍길순");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","459","18","85","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_req");
            obj.set_text("1234067890");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","546","18","24","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","573","18","95","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("17");
            obj.set_cssclass("input_req");
            obj.set_text("김나나");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","778","11","10","70",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01","788","18","57","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01","847","18","24","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01","874","18","123","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_01_00","788","52","57","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("22");
            obj.set_text("P12345");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01_00","847","52","24","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_01_00","874","52","123","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("24");
            obj.set_text("홍길순");
            this.divSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","1150","18","60","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("25");
            obj.set_text("등록");
            this.divSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00","1211","18","60","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("26");
            obj.set_text("확정");
            this.divSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00_00","1271","18","60","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("27");
            obj.set_text("진행");
            this.divSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_00_00_00","1331","18","60","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("28");
            obj.set_text("완료");
            this.divSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01_01","1152","52","20","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("29");
            obj.set_text("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","997","3","40","60",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("30");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","20","86","105","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("31");
            obj.set_text("청구서발행일자");
            obj.set_cssclass("sta_SA_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00_00","116","45","10","70",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","126","86","105","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20221001");
            this.divSearch00.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","126","52","200","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("34");
            obj.set_cssclass("input_req");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","1037","18","75","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("35");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_SA_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","1037","52","90","24",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("36");
            obj.set_text("0원 품목 포함");
            obj.set_cssclass("sta_SA_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00_01","1142","9","10","70",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("38");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static02","1128","57","14","14",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("39");
            obj.set_tooltiptext("진행만 조회 가능");
            obj.set_cssclass("sta_WF_help");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Div("Div00","0","divSearch00:0",null,"70","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","35","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("렌탈료합계");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","35",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","297","35","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("부가세");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","595","35","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("청구금액");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","892","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("총 미납 금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","1190","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("연체 미납금액");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","163","0","100","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01","134","40","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_format("#,###");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02","254","40","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00","431","40","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_format("#,###");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00","551","40","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00","729","40","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_format("#,###");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00","849","40","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00","1026","41","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00","1146","41","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_01_00_00_00_00","1324","41","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_02_00_00_00_00","1444","41","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Column6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"계약번호\"/><Cell col=\"4\" text=\"청구번호\"/><Cell col=\"5\" text=\"서비스상품코드\"/><Cell col=\"6\" text=\"품명\"/><Cell col=\"7\" text=\"모델명\"/><Cell col=\"8\" text=\"자산번호\"/><Cell col=\"9\" text=\"(구)자산번호\"/><Cell col=\"10\" text=\"제조번호\"/><Cell col=\"11\" text=\"최조개시일자\"/><Cell col=\"12\" text=\"계약시작일자\"/><Cell col=\"13\" text=\"계약종료일자\"/><Cell col=\"14\" text=\"당월청구개시일자\"/><Cell col=\"15\" text=\"당월청구만료일자\"/><Cell col=\"16\" text=\"출고일자\"/><Cell col=\"17\" text=\"입고일자\"/><Cell col=\"18\" text=\"렌탈기간\"/><Cell col=\"19\" text=\"기준렌탈료\"/><Cell col=\"20\" text=\"청구금액\"/><Cell col=\"21\" text=\"차기교정일자\"/><Cell col=\"22\" text=\"관리담당자\"/><Cell col=\"23\" text=\"결제담당자\"/><Cell col=\"24\" text=\"영업담당자\"/><Cell col=\"25\" text=\"비고\"/><Cell col=\"26\" text=\"계약서비고\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","39","50","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div01:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","112","28","104",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("렌탈청구내역");
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

            obj = new Button("Button00_00_01",null,"10","100","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("청구서생성");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","divSearch00:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
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
        this.registerScript("SD11920.xfdl", function() {

        this.divSearch00_CheckBox00_01_01_onclick = function(obj,e)
        {

        };

        this.Div00_Static26_02_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSearch00.form.CheckBox00_01_01.addEventHandler("onclick",this.divSearch00_CheckBox00_01_01_onclick,this);
            this.Div00.form.Static26_02_00_00_00.addEventHandler("onclick",this.Div00_Static26_02_00_00_00_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.btnSearchExpand_onclick,this);
        };
        this.loadIncludeScript("SD11920.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
