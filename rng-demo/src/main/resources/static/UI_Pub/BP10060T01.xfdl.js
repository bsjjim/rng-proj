(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO00050T01");
            this.set_titletext("신규장기_투입대수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,558);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/><Column id=\"Column36\" type=\"STRING\" size=\"256\"/><Column id=\"Column37\" type=\"STRING\" size=\"256\"/><Column id=\"Column38\" type=\"STRING\" size=\"256\"/><Column id=\"Column39\" type=\"STRING\" size=\"256\"/><Column id=\"Column40\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid4", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/><Column id=\"Column36\" type=\"STRING\" size=\"256\"/><Column id=\"Column37\" type=\"STRING\" size=\"256\"/><Column id=\"Column38\" type=\"STRING\" size=\"256\"/><Column id=\"Column39\" type=\"STRING\" size=\"256\"/><Column id=\"Column40\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid5", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/><Column id=\"Column36\" type=\"STRING\" size=\"256\"/><Column id=\"Column37\" type=\"STRING\" size=\"256\"/><Column id=\"Column38\" type=\"STRING\" size=\"256\"/><Column id=\"Column39\" type=\"STRING\" size=\"256\"/><Column id=\"Column40\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","0",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\"/><Cell col=\"2\" text=\"년\"/><Cell col=\"3\" text=\"년\" cssclass=\"cell_fix\"/><Cell col=\"4\" colspan=\"12\" text=\"년\"/><Cell col=\"16\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"3\" text=\"합계\" cssclass=\"cell_fix\"/><Cell row=\"1\" col=\"4\" text=\"1월\"/><Cell row=\"1\" col=\"5\" text=\"2월\"/><Cell row=\"1\" col=\"6\" text=\"3월\"/><Cell row=\"1\" col=\"7\" text=\"4월\"/><Cell row=\"1\" col=\"8\" text=\"5월\"/><Cell row=\"1\" col=\"9\" text=\"6월\"/><Cell row=\"1\" col=\"10\" text=\"7월\"/><Cell row=\"1\" col=\"11\" text=\"8월\"/><Cell row=\"1\" col=\"12\" text=\"9월\"/><Cell row=\"1\" col=\"13\" text=\"10월\"/><Cell row=\"1\" col=\"14\" text=\"11월\"/><Cell row=\"1\" col=\"15\" text=\"12월\"/><Cell row=\"1\" col=\"16\" text=\"1월\"/><Cell row=\"1\" col=\"17\" text=\"2월\"/><Cell row=\"1\" col=\"18\" text=\"3월\"/><Cell row=\"1\" col=\"19\" text=\"4월\"/><Cell row=\"1\" col=\"20\" text=\"5월\"/><Cell row=\"1\" col=\"21\" text=\"6월\"/><Cell row=\"1\" col=\"22\" text=\"7월\"/><Cell row=\"1\" col=\"23\" text=\"8월\"/><Cell row=\"1\" col=\"24\" text=\"9월\"/><Cell row=\"1\" col=\"25\" text=\"10월\"/><Cell row=\"1\" col=\"26\" text=\"11월\"/><Cell row=\"1\" col=\"27\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"bind:Column0\"/><Cell col=\"5\" text=\"bind:Column1\"/><Cell col=\"6\" text=\"bind:Column2\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column4\"/><Cell col=\"9\" text=\"bind:Column5\"/><Cell col=\"10\" text=\"bind:Column6\"/><Cell col=\"11\" text=\"bind:Column7\"/><Cell col=\"12\" text=\"bind:Column8\"/><Cell col=\"13\" text=\"bind:Column9\"/><Cell col=\"14\" text=\"bind:Column10\"/><Cell col=\"15\" text=\"bind:Column11\"/><Cell col=\"16\" text=\"bind:Column12\"/><Cell col=\"17\" text=\"bind:Column13\"/><Cell col=\"18\" text=\"bind:Column14\"/><Cell col=\"19\" text=\"bind:Column15\"/><Cell col=\"20\" text=\"bind:Column16\"/><Cell col=\"21\" text=\"bind:Column17\"/><Cell col=\"22\" text=\"bind:Column18\"/><Cell col=\"23\" text=\"bind:Column19\"/><Cell col=\"24\" text=\"bind:Column20\"/><Cell col=\"25\" text=\"bind:Column21\"/><Cell col=\"26\" text=\"bind:Column22\"/><Cell col=\"27\" text=\"bind:Column23\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","96","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","248",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","296",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00",null,"20","126","24","118",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("투입대수 다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","114","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("투입대수 업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","94","20","427","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("7");
            obj.set_text("※ 투입대수 업로드전 산출 버튼을 클릭해서 실적 투입 비중을 먼저 생성하세요.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","84","3","10","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"18","20","25","340",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00",null,"20","230","24","320",null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Radio");
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">당해연도 추정</Col><Col id=\"datacolumn\">당해연도 추정</Col></Row><Row><Col id=\"codecolumn\">차연도 계획</Col><Col id=\"datacolumn\">차연도 계획</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            obj.set_text("");
            obj.set_value("선택1");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div01_01","0","Div01:0",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\"/><Cell col=\"2\" text=\"년\"/><Cell col=\"3\" text=\"년\" cssclass=\"cell_fix\"/><Cell col=\"4\" colspan=\"12\" text=\"년\"/><Cell col=\"16\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"3\" text=\"합계\" cssclass=\"cell_fix\"/><Cell row=\"1\" col=\"4\" text=\"1월\"/><Cell row=\"1\" col=\"5\" text=\"2월\"/><Cell row=\"1\" col=\"6\" text=\"3월\"/><Cell row=\"1\" col=\"7\" text=\"4월\"/><Cell row=\"1\" col=\"8\" text=\"5월\"/><Cell row=\"1\" col=\"9\" text=\"6월\"/><Cell row=\"1\" col=\"10\" text=\"7월\"/><Cell row=\"1\" col=\"11\" text=\"8월\"/><Cell row=\"1\" col=\"12\" text=\"9월\"/><Cell row=\"1\" col=\"13\" text=\"10월\"/><Cell row=\"1\" col=\"14\" text=\"11월\"/><Cell row=\"1\" col=\"15\" text=\"12월\"/><Cell row=\"1\" col=\"16\" text=\"1월\"/><Cell row=\"1\" col=\"17\" text=\"2월\"/><Cell row=\"1\" col=\"18\" text=\"3월\"/><Cell row=\"1\" col=\"19\" text=\"4월\"/><Cell row=\"1\" col=\"20\" text=\"5월\"/><Cell row=\"1\" col=\"21\" text=\"6월\"/><Cell row=\"1\" col=\"22\" text=\"7월\"/><Cell row=\"1\" col=\"23\" text=\"8월\"/><Cell row=\"1\" col=\"24\" text=\"9월\"/><Cell row=\"1\" col=\"25\" text=\"10월\"/><Cell row=\"1\" col=\"26\" text=\"11월\"/><Cell row=\"1\" col=\"27\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"bind:Column0\"/><Cell col=\"5\" text=\"bind:Column1\"/><Cell col=\"6\" text=\"bind:Column2\"/><Cell col=\"7\" text=\"bind:Column3\"/><Cell col=\"8\" text=\"bind:Column4\"/><Cell col=\"9\" text=\"bind:Column5\"/><Cell col=\"10\" text=\"bind:Column6\"/><Cell col=\"11\" text=\"bind:Column7\"/><Cell col=\"12\" text=\"bind:Column8\"/><Cell col=\"13\" text=\"bind:Column9\"/><Cell col=\"14\" text=\"bind:Column10\"/><Cell col=\"15\" text=\"bind:Column11\"/><Cell col=\"16\" text=\"bind:Column12\"/><Cell col=\"17\" text=\"bind:Column13\"/><Cell col=\"18\" text=\"bind:Column14\"/><Cell col=\"19\" text=\"bind:Column15\"/><Cell col=\"20\" text=\"bind:Column16\"/><Cell col=\"21\" text=\"bind:Column17\"/><Cell col=\"22\" text=\"bind:Column18\"/><Cell col=\"23\" text=\"bind:Column19\"/><Cell col=\"24\" text=\"bind:Column20\"/><Cell col=\"25\" text=\"bind:Column21\"/><Cell col=\"26\" text=\"bind:Column22\"/><Cell col=\"27\" text=\"bind:Column23\"/></Band></Format></Formats>");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","101","24",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("2");
            obj.set_text("중고차투입률");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","296",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","344",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00",null,"20","150","24","142",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("중고차투입률 다운로드");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","138","24","0",null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("중고차투입률 업로드");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","108","20","427","24",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("7");
            obj.set_text("※ 투입대수 업로드전 산출 버튼을 클릭해서 실적 투입 비중을 먼저 생성하세요.");
            obj.set_cssclass("sta_txt_desc");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","98","3","10","50",null,null,null,null,null,null,this.Div01_01.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_01.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","Div01_01:0",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"영업부문\"/><Cell col=\"2\" rowspan=\"2\" text=\"채널Lv1\"/><Cell col=\"3\" rowspan=\"2\" text=\"채널Lv2\"/><Cell col=\"4\" rowspan=\"2\" text=\"고객Lv1\"/><Cell col=\"5\" rowspan=\"2\" text=\"고객Lv2\"/><Cell col=\"6\" rowspan=\"2\" text=\"고객Lv3\"/><Cell col=\"7\" rowspan=\"2\" text=\"상품Lv1\"/><Cell col=\"8\" rowspan=\"2\" text=\"상품Lv2\"/><Cell col=\"9\" rowspan=\"2\" text=\"상품Lv3\"/><Cell col=\"10\" rowspan=\"2\" text=\"상품Lv4\"/><Cell col=\"11\" rowspan=\"2\" text=\"지표\" cssclass=\"cell_fix\"/><Cell col=\"12\" colspan=\"12\" text=\"년\"/><Cell col=\"24\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"12\" text=\"1월\"/><Cell row=\"1\" col=\"13\" text=\"2월\"/><Cell row=\"1\" col=\"14\" text=\"3월\"/><Cell row=\"1\" col=\"15\" text=\"4월\"/><Cell row=\"1\" col=\"16\" text=\"5월\"/><Cell row=\"1\" col=\"17\" text=\"6월\"/><Cell row=\"1\" col=\"18\" text=\"7월\"/><Cell row=\"1\" col=\"19\" text=\"8월\"/><Cell row=\"1\" col=\"20\" text=\"9월\"/><Cell row=\"1\" col=\"21\" text=\"10월\"/><Cell row=\"1\" col=\"22\" text=\"11월\"/><Cell row=\"1\" col=\"23\" text=\"12월\"/><Cell row=\"1\" col=\"24\" text=\"1월\"/><Cell row=\"1\" col=\"25\" text=\"2월\"/><Cell row=\"1\" col=\"26\" text=\"3월\"/><Cell row=\"1\" col=\"27\" text=\"4월\"/><Cell row=\"1\" col=\"28\" text=\"5월\"/><Cell row=\"1\" col=\"29\" text=\"6월\"/><Cell row=\"1\" col=\"30\" text=\"7월\"/><Cell row=\"1\" col=\"31\" text=\"8월\"/><Cell row=\"1\" col=\"32\" text=\"9월\"/><Cell row=\"1\" col=\"33\" text=\"10월\"/><Cell row=\"1\" col=\"34\" text=\"11월\"/><Cell row=\"1\" col=\"35\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"bind:Column0\"/><Cell col=\"13\" text=\"bind:Column1\"/><Cell col=\"14\" text=\"bind:Column2\"/><Cell col=\"15\" text=\"bind:Column3\"/><Cell col=\"16\" text=\"bind:Column4\"/><Cell col=\"17\" text=\"bind:Column5\"/><Cell col=\"18\" text=\"bind:Column6\"/><Cell col=\"19\" text=\"bind:Column7\"/><Cell col=\"20\" text=\"bind:Column8\"/><Cell col=\"21\" text=\"bind:Column9\"/><Cell col=\"22\" text=\"bind:Column10\"/><Cell col=\"23\" text=\"bind:Column11\"/><Cell col=\"24\" text=\"bind:Column12\"/><Cell col=\"25\" text=\"bind:Column13\"/><Cell col=\"26\" text=\"bind:Column14\"/><Cell col=\"27\" text=\"bind:Column15\"/><Cell col=\"28\" text=\"bind:Column16\"/><Cell col=\"29\" text=\"bind:Column17\"/><Cell col=\"30\" text=\"bind:Column18\"/><Cell col=\"31\" text=\"bind:Column19\"/><Cell col=\"32\" text=\"bind:Column20\"/><Cell col=\"33\" text=\"bind:Column21\"/><Cell col=\"34\" text=\"bind:Column22\"/><Cell col=\"35\" text=\"bind:Column23\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","221","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("신규장기계약 투입대수 산출 상세");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","296",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","344",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00",null,"20","150","24","142",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("투입대수상세 다운로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","138","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("투입대수상세 업로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","38","24","481",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("지표");
            obj.set_cssclass("sta_SA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","80","24","398",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("Div01_00_form_cmb00_00_innerdataset", obj);
            Div01_00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(Div01_00_form_cmb00_00_innerdataset);
            obj.set_text("투입대수");
            obj.set_index("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00",null,"17","10","30","388",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","0","Div01_00:0",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"3\" text=\"계획정보\"/><Cell col=\"4\" colspan=\"6\" text=\"계획수립단위\"/><Cell col=\"10\" colspan=\"12\" text=\"년\"/><Cell col=\"22\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"1\" text=\"수립년도\"/><Cell row=\"1\" col=\"2\" text=\"수립월\"/><Cell row=\"1\" col=\"3\" text=\"버전\"/><Cell row=\"1\" col=\"4\" text=\"영업본부\"/><Cell row=\"1\" col=\"5\" text=\"영업본부명\"/><Cell row=\"1\" col=\"6\" text=\"사업장\"/><Cell row=\"1\" col=\"7\" text=\"사업장명\"/><Cell row=\"1\" col=\"8\" text=\"계획요약\"/><Cell row=\"1\" col=\"9\" text=\"계획요약명\"/><Cell row=\"1\" col=\"10\" text=\"1월\"/><Cell row=\"1\" col=\"11\" text=\"2월\"/><Cell row=\"1\" col=\"12\" text=\"3월\"/><Cell row=\"1\" col=\"13\" text=\"4월\"/><Cell row=\"1\" col=\"14\" text=\"5월\"/><Cell row=\"1\" col=\"15\" text=\"6월\"/><Cell row=\"1\" col=\"16\" text=\"7월\"/><Cell row=\"1\" col=\"17\" text=\"8월\"/><Cell row=\"1\" col=\"18\" text=\"9월\"/><Cell row=\"1\" col=\"19\" text=\"10월\"/><Cell row=\"1\" col=\"20\" text=\"11월\"/><Cell row=\"1\" col=\"21\" text=\"12월\"/><Cell row=\"1\" col=\"22\" text=\"1월\"/><Cell row=\"1\" col=\"23\" text=\"2월\"/><Cell row=\"1\" col=\"24\" text=\"3월\"/><Cell row=\"1\" col=\"25\" text=\"4월\"/><Cell row=\"1\" col=\"26\" text=\"5월\"/><Cell row=\"1\" col=\"27\" text=\"6월\"/><Cell row=\"1\" col=\"28\" text=\"7월\"/><Cell row=\"1\" col=\"29\" text=\"8월\"/><Cell row=\"1\" col=\"30\" text=\"9월\"/><Cell row=\"1\" col=\"31\" text=\"10월\"/><Cell row=\"1\" col=\"32\" text=\"11월\"/><Cell row=\"1\" col=\"33\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column20\"/><Cell col=\"11\" text=\"bind:Column21\"/><Cell col=\"12\" text=\"bind:Column22\"/><Cell col=\"13\" text=\"bind:Column23\"/><Cell col=\"14\" text=\"bind:Column24\"/><Cell col=\"15\" text=\"bind:Column25\"/><Cell col=\"16\" text=\"bind:Column26\"/><Cell col=\"17\" text=\"bind:Column27\"/><Cell col=\"18\" text=\"bind:Column28\"/><Cell col=\"19\" text=\"bind:Column29\"/><Cell col=\"20\" text=\"bind:Column30\"/><Cell col=\"21\" text=\"bind:Column31\"/><Cell col=\"22\" text=\"bind:Column32\"/><Cell col=\"23\" text=\"bind:Column33\"/><Cell col=\"24\" text=\"bind:Column34\"/><Cell col=\"25\" text=\"bind:Column35\"/><Cell col=\"26\" text=\"bind:Column36\"/><Cell col=\"27\" text=\"bind:Column37\"/><Cell col=\"28\" text=\"bind:Column38\"/><Cell col=\"29\" text=\"bind:Column39\"/><Cell col=\"30\" text=\"bind:Column40\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/></Band></Format></Formats>");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","81","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("투입대수");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","106",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","154",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","102","24","0",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("투입대수 저장");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00_00","0","Div01_00_00:0","48%","300",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"3\" text=\"계획정보\"/><Cell col=\"4\" colspan=\"6\" text=\"계획수립단위\"/><Cell col=\"10\" colspan=\"12\" text=\"년\"/><Cell col=\"22\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"1\" text=\"수립년도\"/><Cell row=\"1\" col=\"2\" text=\"수립월\"/><Cell row=\"1\" col=\"3\" text=\"버전\"/><Cell row=\"1\" col=\"4\" text=\"영업본부\"/><Cell row=\"1\" col=\"5\" text=\"영업본부명\"/><Cell row=\"1\" col=\"6\" text=\"사업장\"/><Cell row=\"1\" col=\"7\" text=\"사업장명\"/><Cell row=\"1\" col=\"8\" text=\"지표\"/><Cell row=\"1\" col=\"9\" text=\"지표명\"/><Cell row=\"1\" col=\"10\" text=\"1월\"/><Cell row=\"1\" col=\"11\" text=\"2월\"/><Cell row=\"1\" col=\"12\" text=\"3월\"/><Cell row=\"1\" col=\"13\" text=\"4월\"/><Cell row=\"1\" col=\"14\" text=\"5월\"/><Cell row=\"1\" col=\"15\" text=\"6월\"/><Cell row=\"1\" col=\"16\" text=\"7월\"/><Cell row=\"1\" col=\"17\" text=\"8월\"/><Cell row=\"1\" col=\"18\" text=\"9월\"/><Cell row=\"1\" col=\"19\" text=\"10월\"/><Cell row=\"1\" col=\"20\" text=\"11월\"/><Cell row=\"1\" col=\"21\" text=\"12월\"/><Cell row=\"1\" col=\"22\" text=\"1월\"/><Cell row=\"1\" col=\"23\" text=\"2월\"/><Cell row=\"1\" col=\"24\" text=\"3월\"/><Cell row=\"1\" col=\"25\" text=\"4월\"/><Cell row=\"1\" col=\"26\" text=\"5월\"/><Cell row=\"1\" col=\"27\" text=\"6월\"/><Cell row=\"1\" col=\"28\" text=\"7월\"/><Cell row=\"1\" col=\"29\" text=\"8월\"/><Cell row=\"1\" col=\"30\" text=\"9월\"/><Cell row=\"1\" col=\"31\" text=\"10월\"/><Cell row=\"1\" col=\"32\" text=\"11월\"/><Cell row=\"1\" col=\"33\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column20\"/><Cell col=\"11\" text=\"bind:Column21\"/><Cell col=\"12\" text=\"bind:Column22\"/><Cell col=\"13\" text=\"bind:Column23\"/><Cell col=\"14\" text=\"bind:Column24\"/><Cell col=\"15\" text=\"bind:Column25\"/><Cell col=\"16\" text=\"bind:Column26\"/><Cell col=\"17\" text=\"bind:Column27\"/><Cell col=\"18\" text=\"bind:Column28\"/><Cell col=\"19\" text=\"bind:Column29\"/><Cell col=\"20\" text=\"bind:Column30\"/><Cell col=\"21\" text=\"bind:Column31\"/><Cell col=\"22\" text=\"bind:Column32\"/><Cell col=\"23\" text=\"bind:Column33\"/><Cell col=\"24\" text=\"bind:Column34\"/><Cell col=\"25\" text=\"bind:Column35\"/><Cell col=\"26\" text=\"bind:Column36\"/><Cell col=\"27\" text=\"bind:Column37\"/><Cell col=\"28\" text=\"bind:Column38\"/><Cell col=\"29\" text=\"bind:Column39\"/><Cell col=\"30\" text=\"bind:Column40\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/></Band></Format></Formats>");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","161","24",null,null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("중고차투입률 엑셀");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","130",null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","178",null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","126","24","0",null,null,null,null,null,this.Div01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("중고차투입률 저장");
            this.Div01_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00_00_00","Div01_00_00_00:20","Div01_00_00:0",null,"300","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("0");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"3\" text=\"계획정보\"/><Cell col=\"4\" colspan=\"18\" text=\"계획수립단위\"/><Cell col=\"22\" colspan=\"12\" text=\"년\"/><Cell col=\"34\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"1\" text=\"수립년도\"/><Cell row=\"1\" col=\"2\" text=\"수립월\"/><Cell row=\"1\" col=\"3\" text=\"버전\"/><Cell row=\"1\" col=\"4\" text=\"영업본부\"/><Cell row=\"1\" col=\"5\" text=\"영업본부명\"/><Cell row=\"1\" col=\"6\" text=\"사업장\"/><Cell row=\"1\" col=\"7\" text=\"사업장명\"/><Cell row=\"1\" col=\"8\" text=\"채널코드\"/><Cell row=\"1\" col=\"9\" text=\"고객코드\"/><Cell row=\"1\" col=\"10\" text=\"상품코드\"/><Cell row=\"1\" col=\"11\" text=\"채널Lv1명\"/><Cell row=\"1\" col=\"12\" text=\"채널Lv2명\"/><Cell row=\"1\" col=\"13\" text=\"고객Lv1명\"/><Cell row=\"1\" col=\"14\" text=\"고객Lv2명\"/><Cell row=\"1\" col=\"15\" text=\"고객Lv3명\"/><Cell row=\"1\" col=\"16\" text=\"상품Lv1명\"/><Cell row=\"1\" col=\"17\" text=\"상품Lv2명\"/><Cell row=\"1\" col=\"18\" text=\"상품Lv3명\"/><Cell row=\"1\" col=\"19\" text=\"상품Lv4명\"/><Cell row=\"1\" col=\"20\" text=\"지표\"/><Cell row=\"1\" col=\"21\" text=\"지표명\"/><Cell row=\"1\" col=\"22\" text=\"1월\"/><Cell row=\"1\" col=\"23\" text=\"2월\"/><Cell row=\"1\" col=\"24\" text=\"3월\"/><Cell row=\"1\" col=\"25\" text=\"4월\"/><Cell row=\"1\" col=\"26\" text=\"5월\"/><Cell row=\"1\" col=\"27\" text=\"6월\"/><Cell row=\"1\" col=\"28\" text=\"7월\"/><Cell row=\"1\" col=\"29\" text=\"8월\"/><Cell row=\"1\" col=\"30\" text=\"9월\"/><Cell row=\"1\" col=\"31\" text=\"10월\"/><Cell row=\"1\" col=\"32\" text=\"11월\"/><Cell row=\"1\" col=\"33\" text=\"12월\"/><Cell row=\"1\" col=\"34\" text=\"1월\"/><Cell row=\"1\" col=\"35\" text=\"2월\"/><Cell row=\"1\" col=\"36\" text=\"3월\"/><Cell row=\"1\" col=\"37\" text=\"4월\"/><Cell row=\"1\" col=\"38\" text=\"5월\"/><Cell row=\"1\" col=\"39\" text=\"6월\"/><Cell row=\"1\" col=\"40\" text=\"7월\"/><Cell row=\"1\" col=\"41\" text=\"8월\"/><Cell row=\"1\" col=\"42\" text=\"9월\"/><Cell row=\"1\" col=\"43\" text=\"10월\"/><Cell row=\"1\" col=\"44\" text=\"11월\"/><Cell row=\"1\" col=\"45\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"bind:Column8\"/><Cell col=\"12\" text=\"bind:Column9\"/><Cell col=\"13\" text=\"bind:Column10\"/><Cell col=\"14\" text=\"bind:Column11\"/><Cell col=\"15\" text=\"bind:Column12\"/><Cell col=\"16\" text=\"bind:Column13\"/><Cell col=\"17\" text=\"bind:Column14\"/><Cell col=\"18\" text=\"bind:Column15\"/><Cell col=\"19\" text=\"bind:Column16\"/><Cell col=\"20\" text=\"bind:Column17\"/><Cell col=\"21\" text=\"bind:Column18\"/><Cell col=\"22\" text=\"bind:Column20\"/><Cell col=\"23\" text=\"bind:Column21\"/><Cell col=\"24\" text=\"bind:Column22\"/><Cell col=\"25\" text=\"bind:Column23\"/><Cell col=\"26\" text=\"bind:Column24\"/><Cell col=\"27\" text=\"bind:Column25\"/><Cell col=\"28\" text=\"bind:Column26\"/><Cell col=\"29\" text=\"bind:Column27\"/><Cell col=\"30\" text=\"bind:Column28\"/><Cell col=\"31\" text=\"bind:Column29\"/><Cell col=\"32\" text=\"bind:Column30\"/><Cell col=\"33\" text=\"bind:Column31\"/><Cell col=\"34\" text=\"bind:Column32\"/><Cell col=\"35\" text=\"bind:Column33\"/><Cell col=\"36\" text=\"bind:Column34\"/><Cell col=\"37\" text=\"bind:Column35\"/><Cell col=\"38\" text=\"bind:Column36\"/><Cell col=\"39\" text=\"bind:Column37\"/><Cell col=\"40\" text=\"bind:Column38\"/><Cell col=\"41\" text=\"bind:Column39\"/><Cell col=\"42\" text=\"bind:Column40\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/></Band></Format></Formats>");
            this.Div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","39","100","11",null,null,null,null,null,null,this.Div01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","146","24",null,null,null,null,null,null,this.Div01_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("투입대수 상세 엑셀");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","130",null,null,null,null,null,this.Div01_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","178",null,null,null,null,null,this.Div01_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00_00_00",null,"20","126","24","0",null,null,null,null,null,this.Div01_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("투입대수상세 저장");
            this.Div01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"8","10","392","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,558,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BP10060T01.xfdl", function() {

        this.Button_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01_00_00.form.Button00_00_01_00_02_02_00_00_00_00_00.addEventHandler("onclick",this.Button_onclick,this);
            this.Div01_00_00.form.Button00_00_01_00_02_02_00_00_01_00.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("BP10060T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
