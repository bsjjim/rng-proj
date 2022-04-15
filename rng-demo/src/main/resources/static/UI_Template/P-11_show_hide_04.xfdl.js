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
            this.set_titletext("영역확장/축소 - 테이블접기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">LOTZE (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">K5 (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">입찰매각</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">STAREX (D) 2.6 12인승</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">R2B</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">NEW SM5 (L) 2.0</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">경매</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col><Col id=\"Column3\">YF SONATA (L) 2.0 렌터카 DELUXE</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">인수형매각</Col></Row><Row><Col id=\"Column3\">PRIDE (G) 1.4 5DOOR 디럭스</Col><Col id=\"Column4\">2021-12-01</Col><Col id=\"Column5\">2021-12-01</Col><Col id=\"Column7\">2021-12-01</Col><Col id=\"Column6\">명의이전완료</Col><Col id=\"Column8\">인수형매각</Col><Col id=\"Column0\">7</Col><Col id=\"Column1\">10045537</Col><Col id=\"Column2\">10오1234</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63",null,null,"450","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("매각 목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column4\"/><Cell col=\"6\" text=\"Column5\"/><Cell col=\"7\" text=\"Column6\"/><Cell col=\"8\" text=\"Column7\"/><Cell col=\"9\" text=\"Column8\"/><Cell col=\"10\" text=\"Column9\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,"11","38","38","20",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02","86","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","178","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","205","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","305","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","345","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","411","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"60","20","60","430",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFirst",null,"63","400","415","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("0");
            obj.set_text("매각 상세정보");
            obj.set_cssclass("sta_WF_title2");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("3");
            obj.set_text("설비번호");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("5");
            obj.set_text("매각방식");
            obj.set_cssclass("sta_DA_label_req");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02","134","56","90","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("7");
            obj.set_text("P12345");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","150","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("8");
            obj.set_text("매각일");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","150",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","183","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("10");
            obj.set_text("고객번호");
            obj.set_cssclass("sta_DA_label_req");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","183",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","216","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("12");
            obj.set_text("결제통화");
            obj.set_cssclass("sta_DA_label_req");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","129","216",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00","0","249","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("14");
            obj.set_text("환율");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","249",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_02","0","282","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("16");
            obj.set_text("매각금액");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_02","129","282",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_01","0","315","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("18");
            obj.set_text("회계유형");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_01","129","315",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01_00","0","348","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("20");
            obj.set_text("수출금액");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01_00","129","348",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","381","130","34",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("22");
            obj.set_text("과세유형");
            obj.set_cssclass("sta_DA_label");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00","129","381",null,"34","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","163","0","100","50",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("24");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01",null,"18","15","47","416",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("25");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("26");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divFirst.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03","134","89","75","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("27");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("########");
            this.divFirst.addChild(obj.name, obj);

            obj = new Combo("Combo00","134","122","150","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            this.divFirst.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","134","155","120","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("29");
            this.divFirst.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","134","188","90","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("30");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.divFirst.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01","226","188","24","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.divFirst.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01","253","188","100","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.set_text("P12345");
            this.divFirst.addChild(obj.name, obj);

            obj = new Radio("Radio00","134","221","165","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("33");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_cssclass("input_req");
            this.divFirst.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00","134","254","120","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("34");
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("1180.2");
            this.divFirst.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00","134","287","120","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("30000000");
            this.divFirst.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_01","134","320","224","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("53");
            obj.set_text("P12345");
            this.divFirst.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00","134","353","120","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("30000000");
            obj.set_taborder("54");
            this.divFirst.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","386","150","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("55");
            obj.set_cssclass("input_req");
            this.divFirst.addChild(obj.name, obj);

            obj = new Button("Button00",null,"20","60","24","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("40");
            obj.set_text("축소");
            obj.set_cssclass("btn_Block_collapse");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00_01","254","353","20","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("40");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_02","254","287","20","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("41");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static02_02_02","254","254","20","24",null,null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("42");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divFirst.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.divFirst.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_DA_topBorder");
            this.divFirst.addChild(obj.name, obj);

            obj = new Div("divSecond",null,"divFirst:0","400","250","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"458","50","11","-1058",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("0");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","20","120","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("1");
            obj.set_text("매각매출이익");
            obj.set_cssclass("sta_WF_title2");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","51","130","34",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("2");
            obj.set_text("공급가");
            obj.set_cssclass("sta_DA_label");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","51",null,"34","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","84","130","34",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("4");
            obj.set_text("부가세");
            obj.set_cssclass("sta_DA_label");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","84",null,"34","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","117","130","34",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("6");
            obj.set_text("소비자가");
            obj.set_cssclass("sta_DA_label");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","129","117",null,"34","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_03","0","150","130","34",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("8");
            obj.set_text("취득세");
            obj.set_cssclass("sta_DA_label");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_03","129","150",null,"34","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_02","0","183","130","34",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("10");
            obj.set_text("매각원가");
            obj.set_cssclass("sta_DA_label");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_02","129","183",null,"34","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","163","0","100","50",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("12");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_01_00",null,"18","15","47","416",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("13");
            obj.set_text("w15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_02_00","0","216","130","34",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("14");
            obj.set_text("매출이익");
            obj.set_cssclass("sta_DA_label");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_02_00","129","216",null,"34","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.divSecond.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00","134","56","239","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("100000000");
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.divSecond.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00","134","89","239","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("10000000");
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.divSecond.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00","134","122","239","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("30000");
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divSecond.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_00_00","134","221","239","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("0");
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divSecond.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_00_01","134","188","239","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("0");
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divSecond.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_03_00_00_00_01","134","155","239","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_type("number");
            obj.set_format("#,###.#");
            obj.set_value("0");
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00","373","122","20","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("22");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","373","89","20","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("23");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static02_02","373","56","20","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("24");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_00_00","373","222","20","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("25");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static02_02_00_01","373","189","20","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("26");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static02_02_01","373","156","20","24",null,null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("27");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.divSecond.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_topBorder");
            this.divSecond.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"591","10","60","31",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
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
        this.registerScript("P-11_show_hide_04.xfdl", function() {

        this.temp_onload = function(obj,e)
        {

        };



        this.divFirst_Button00_onclick = function(obj,e)
        {

        	this.gfnDivEctExpand(obj);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.temp_onload,this);
            this.divFirst.addEventHandler("onclick",this.divFirst_Button00_onclick,this);
            this.divFirst.form.Button00.addEventHandler("onclick",this.divFirst_Button00_onclick,this);
        };
        this.loadIncludeScript("P-11_show_hide_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
