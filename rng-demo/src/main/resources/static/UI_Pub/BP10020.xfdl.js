(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01_04");
            this.set_titletext("지표값 산출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"Column31\" type=\"STRING\" size=\"256\"/><Column id=\"Column32\" type=\"STRING\" size=\"256\"/><Column id=\"Column33\" type=\"STRING\" size=\"256\"/><Column id=\"Column34\" type=\"STRING\" size=\"256\"/><Column id=\"Column35\" type=\"STRING\" size=\"256\"/><Column id=\"Column36\" type=\"STRING\" size=\"256\"/><Column id=\"Column37\" type=\"STRING\" size=\"256\"/><Column id=\"Column38\" type=\"STRING\" size=\"256\"/><Column id=\"Column39\" type=\"STRING\" size=\"256\"/><Column id=\"Column40\" type=\"STRING\" size=\"256\"/><Column id=\"Column41\" type=\"STRING\" size=\"256\"/><Column id=\"Column42\" type=\"STRING\" size=\"256\"/><Column id=\"Column43\" type=\"STRING\" size=\"256\"/><Column id=\"Column44\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","97",null,"407","560",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","131","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","105","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"영업부문\"/><Cell col=\"2\" rowspan=\"2\" text=\"지점\"/><Cell col=\"3\" rowspan=\"2\" text=\"채널Lv1\"/><Cell col=\"4\" rowspan=\"2\" text=\"채널Lv2\"/><Cell col=\"5\" rowspan=\"2\" text=\"고객Lv1\"/><Cell col=\"6\" rowspan=\"2\" text=\"고객Lv2\"/><Cell col=\"7\" rowspan=\"2\" text=\"고객Lv3\"/><Cell col=\"8\" rowspan=\"2\" text=\"상품Lv1\"/><Cell col=\"9\" rowspan=\"2\" text=\"상품Lv2\"/><Cell col=\"10\" rowspan=\"2\" text=\"상품Lv3\"/><Cell col=\"11\" rowspan=\"2\" text=\"상품Lv4\"/><Cell col=\"12\" rowspan=\"2\" text=\"지표명\" cssclass=\"cell_fix\"/><Cell col=\"13\" colspan=\"12\" text=\"년\"/><Cell col=\"25\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"13\" text=\"1월\"/><Cell row=\"1\" col=\"14\" text=\"2월\"/><Cell row=\"1\" col=\"15\" text=\"3월\"/><Cell row=\"1\" col=\"16\" text=\"4월\"/><Cell row=\"1\" col=\"17\" text=\"5월\"/><Cell row=\"1\" col=\"18\" text=\"6월\"/><Cell row=\"1\" col=\"19\" text=\"7월\"/><Cell row=\"1\" col=\"20\" text=\"8월\"/><Cell row=\"1\" col=\"21\" text=\"9월\"/><Cell row=\"1\" col=\"22\" text=\"10월\"/><Cell row=\"1\" col=\"23\" text=\"11월\"/><Cell row=\"1\" col=\"24\" text=\"12월\"/><Cell row=\"1\" col=\"25\" text=\"1월\"/><Cell row=\"1\" col=\"26\" text=\"2월\"/><Cell row=\"1\" col=\"27\" text=\"3월\"/><Cell row=\"1\" col=\"28\" text=\"4월\"/><Cell row=\"1\" col=\"29\" text=\"5월\"/><Cell row=\"1\" col=\"30\" text=\"6월\"/><Cell row=\"1\" col=\"31\" text=\"7월\"/><Cell row=\"1\" col=\"32\" text=\"8월\"/><Cell row=\"1\" col=\"33\" text=\"9월\"/><Cell row=\"1\" col=\"34\" text=\"10월\"/><Cell row=\"1\" col=\"35\" text=\"11월\"/><Cell row=\"1\" col=\"36\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\"/><Cell col=\"15\" text=\"bind:Column14\"/><Cell col=\"16\" text=\"bind:Column15\"/><Cell col=\"17\" text=\"bind:Column16\"/><Cell col=\"18\" text=\"bind:Column17\"/><Cell col=\"19\" text=\"bind:Column18\"/><Cell col=\"20\" text=\"bind:Column19\"/><Cell col=\"21\" text=\"bind:Column20\"/><Cell col=\"22\" text=\"bind:Column21\"/><Cell col=\"23\" text=\"bind:Column22\"/><Cell col=\"24\" text=\"bind:Column23\"/><Cell col=\"25\" text=\"bind:Column24\"/><Cell col=\"26\" text=\"bind:Column25\"/><Cell col=\"27\" text=\"bind:Column26\"/><Cell col=\"28\" text=\"bind:Column27\"/><Cell col=\"29\" text=\"bind:Column28\"/><Cell col=\"30\" text=\"bind:Column29\"/><Cell col=\"31\" text=\"bind:Column30\"/><Cell col=\"32\" text=\"bind:Column31\"/><Cell col=\"33\" text=\"bind:Column32\"/><Cell col=\"34\" text=\"bind:Column33\"/><Cell col=\"35\" text=\"bind:Column34\"/><Cell col=\"36\" text=\"bind:Column35\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","272",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","320",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","138","24","130",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("지표값조정 다운로드");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","126","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("지표값조정 업로드");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00_02_00_00",null,"20","38","24","557",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("지표");
            obj.set_cssclass("sta_SA_label");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb00_00",null,"20","180","24","374",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div01_form_cmb00_00_innerdataset = new nexacro.NormalDataset("Div01_form_cmb00_00_innerdataset", obj);
            Div01_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">위약금수납율</Col><Col id=\"datacolumn\">위약금수납율</Col></Row><Row><Col id=\"codecolumn\">타이어옵션계약당 정비건수</Col><Col id=\"datacolumn\">타이어옵션계약당 정비건수</Col></Row><Row><Col id=\"codecolumn\">사고율</Col><Col id=\"datacolumn\">사고율</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_cmb00_00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","512","15","10","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00",null,"97","500","407","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","136","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("지표별 조정률");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"영업부문\"/><Cell col=\"2\" text=\"지표\"/><Cell col=\"3\" text=\"지표명\"/><Cell col=\"4\" text=\"지표조정 유형명\"/><Cell col=\"5\" text=\"지표값 조정률\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","236",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","284",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","114","24","118",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("지표조정률 조회");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","114","24","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("지표조정률 저장");
            obj.set_cssclass("btn_Block");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","0","504",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","136","24",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("지표값 조정");
            obj.set_cssclass("sta_WF_title2");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","335","0","100","50",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01_00_00.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"3\" text=\"계획정보\"/><Cell col=\"4\" colspan=\"16\" text=\"계획수립단위\"/><Cell col=\"20\" rowspan=\"2\" text=\"지표코드\"/><Cell col=\"21\" rowspan=\"2\" text=\"지표명\"/><Cell col=\"22\" colspan=\"12\" text=\"년\"/><Cell col=\"34\" colspan=\"12\" text=\"년\"/><Cell row=\"1\" col=\"1\" text=\"수립년도\"/><Cell row=\"1\" col=\"2\" text=\"수립월\"/><Cell row=\"1\" col=\"3\" text=\"버전\"/><Cell row=\"1\" col=\"4\" text=\"영업본부\"/><Cell row=\"1\" col=\"5\" text=\"지점\"/><Cell row=\"1\" col=\"6\" text=\"채널코드\"/><Cell row=\"1\" col=\"7\" text=\"고객코드\"/><Cell row=\"1\" col=\"8\" text=\"상품코드\"/><Cell row=\"1\" col=\"9\" text=\"영업본부명\"/><Cell row=\"1\" col=\"10\" text=\"지점명\"/><Cell row=\"1\" col=\"11\" text=\"채널Lv1\"/><Cell row=\"1\" col=\"12\" text=\"채널Lv2\"/><Cell row=\"1\" col=\"13\" text=\"고객Lv1\"/><Cell row=\"1\" col=\"14\" text=\"고객Lv2\"/><Cell row=\"1\" col=\"15\" text=\"고객Lv3\"/><Cell row=\"1\" col=\"16\" text=\"상품Lv1\"/><Cell row=\"1\" col=\"17\" text=\"상품Lv2\"/><Cell row=\"1\" col=\"18\" text=\"상품Lv3\"/><Cell row=\"1\" col=\"19\" text=\"상품Lv4\"/><Cell row=\"1\" col=\"22\" text=\"1월\"/><Cell row=\"1\" col=\"23\" text=\"2월\"/><Cell row=\"1\" col=\"24\" text=\"3월\"/><Cell row=\"1\" col=\"25\" text=\"4월\"/><Cell row=\"1\" col=\"26\" text=\"5월\"/><Cell row=\"1\" col=\"27\" text=\"6월\"/><Cell row=\"1\" col=\"28\" text=\"7월\"/><Cell row=\"1\" col=\"29\" text=\"8월\"/><Cell row=\"1\" col=\"30\" text=\"9월\"/><Cell row=\"1\" col=\"31\" text=\"10월\"/><Cell row=\"1\" col=\"32\" text=\"11월\"/><Cell row=\"1\" col=\"33\" text=\"12월\"/><Cell row=\"1\" col=\"34\" text=\"1월\"/><Cell row=\"1\" col=\"35\" text=\"2월\"/><Cell row=\"1\" col=\"36\" text=\"3월\"/><Cell row=\"1\" col=\"37\" text=\"4월\"/><Cell row=\"1\" col=\"38\" text=\"5월\"/><Cell row=\"1\" col=\"39\" text=\"6월\"/><Cell row=\"1\" col=\"40\" text=\"7월\"/><Cell row=\"1\" col=\"41\" text=\"8월\"/><Cell row=\"1\" col=\"42\" text=\"9월\"/><Cell row=\"1\" col=\"43\" text=\"10월\"/><Cell row=\"1\" col=\"44\" text=\"11월\"/><Cell row=\"1\" col=\"45\" text=\"12월\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/><Cell col=\"9\" text=\"bind:Column8\"/><Cell col=\"10\" text=\"bind:Column9\"/><Cell col=\"11\" text=\"bind:Column10\"/><Cell col=\"12\" text=\"bind:Column11\"/><Cell col=\"13\" text=\"bind:Column12\"/><Cell col=\"14\" text=\"bind:Column13\"/><Cell col=\"15\" text=\"bind:Column14\"/><Cell col=\"16\" text=\"bind:Column15\"/><Cell col=\"17\" text=\"bind:Column16\"/><Cell col=\"18\" text=\"bind:Column17\"/><Cell col=\"19\" text=\"bind:Column18\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\" text=\"bind:Column19\"/><Cell col=\"23\" text=\"bind:Column20\"/><Cell col=\"24\" text=\"bind:Column21\"/><Cell col=\"25\" text=\"bind:Column22\"/><Cell col=\"26\" text=\"bind:Column23\"/><Cell col=\"27\" text=\"bind:Column24\"/><Cell col=\"28\" text=\"bind:Column25\"/><Cell col=\"29\" text=\"bind:Column26\"/><Cell col=\"30\" text=\"bind:Column27\"/><Cell col=\"31\" text=\"bind:Column28\"/><Cell col=\"32\" text=\"bind:Column29\"/><Cell col=\"33\" text=\"bind:Column30\"/><Cell col=\"34\" text=\"bind:Column31\"/><Cell col=\"35\" text=\"bind:Column32\"/><Cell col=\"36\" text=\"bind:Column33\"/><Cell col=\"37\" text=\"bind:Column34\"/><Cell col=\"38\" text=\"bind:Column35\"/><Cell col=\"39\" text=\"bind:Column36\"/><Cell col=\"40\" text=\"bind:Column37\"/><Cell col=\"41\" text=\"bind:Column38\"/><Cell col=\"42\" text=\"bind:Column39\"/><Cell col=\"43\" text=\"bind:Column40\"/><Cell col=\"44\" text=\"bind:Column41\"/><Cell col=\"45\" text=\"bind:Column42\"/></Band></Format></Formats>");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","0","39","80","11",null,null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","118",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","166",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00_00",null,"20","114","24","0",null,null,null,null,null,this.Div01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("지표값조정 저장");
            obj.set_cssclass("btn_Block");
            this.Div01_00_00.addChild(obj.name, obj);

            obj = new Div("div00_00","0","Div01_00_00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","1394","0","50","10",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"10","64","28","68",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("산출");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"97","40",null,null,null,null,null,this);
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("계획구분");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","212","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00","87","18","125","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_innerdataset", obj);
            div00_form_cmb00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">속보</Col><Col id=\"datacolumn\">속보</Col></Row><Row><Col id=\"codecolumn\">경영계획</Col><Col id=\"datacolumn\">경영계획</Col></Row><Row><Col id=\"codecolumn\">ROLLING PLAN</Col><Col id=\"datacolumn\">ROLLING PLAN</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_innerdataset);
            obj.set_text("");
            obj.set_value("경영계획");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","447","18","63","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("수립년도");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","252","18","38","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("버전");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00","292","18","70","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_innerdataset", obj);
            div00_form_cmb00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">최종</Col><Col id=\"datacolumn\">최종</Col></Row><Row><Col id=\"codecolumn\">현업용</Col><Col id=\"datacolumn\">현업용</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_innerdataset);
            obj.set_text("최종");
            obj.set_value("최종");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","514","18","43","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","407","0","40","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","504","4","10","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","679","18","53","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_text("수립월");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","732","18","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","639","35","40","44",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","722","4","10","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_02","20","52","68","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","87","52","43","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_textAlign("left");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","77","19","10","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","252","52","38","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_text("사업");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","292","52","115","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_value("오토렌탈");
            obj.set_enable("true");
            obj.set_text("오토렌탈");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","447","52","58","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("영업부문");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_01","514","52","125","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_01_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_01_innerdataset", obj);
            div00_form_cmb00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo>");
            obj.set_innerdataset(div00_form_cmb00_01_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","282","45","10","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","679","52","43","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_text("지점");
            obj.set_cssclass("sta_SA_label");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cmb00_00_00","732","52","196","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            var div00_form_cmb00_00_00_innerdataset = new nexacro.NormalDataset("div00_form_cmb00_00_00_innerdataset", obj);
            div00_form_cmb00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_cmb00_00_00_innerdataset);
            obj.set_text("최종");
            obj.set_value("전체");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03","557","18","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","130","52","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_text("년");
            obj.set_cssclass("sta_WF_unit");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_03_01","760","18","28","24",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("29");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_unit");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01_00.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.Div01_00_00.form.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
            this.div00_00.form.Button00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
            this.div00_00.form.Button00_00_00_00.addEventHandler("onclick",this.div00_00_Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("BP10020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
