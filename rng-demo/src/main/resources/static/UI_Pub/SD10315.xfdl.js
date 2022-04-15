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
            this.set_titletext("자산일괄 매각");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00_00","0","0",null,"105","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","36","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("처분형테");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","36",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","496","36","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("처분일자/전표일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","69","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("영업지점");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","69",null,"34","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","74","90","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_00","990","36","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("매각업체");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","226","74","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","253","74","180","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","134","41","105","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("input_req");
            var Div00_00_form_Combo00_00_01_innerdataset = new nexacro.NormalDataset("Div00_00_form_Combo00_00_01_innerdataset", obj);
            Div00_00_form_Combo00_00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col><Col id=\"codecolumn\">0</Col></Row><Row><Col id=\"datacolumn\">매각</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">양도</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(Div00_00_form_Combo00_00_01_innerdataset);
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01_01","496","69","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","630","41","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_value("20221001");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","630","74","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("13");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","697","74","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","724","74","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_required");
            obj.set_taborder("15");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","80","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_title1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","67","5","1200","25",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("17");
            obj.set_text("※ 설비정보 조회시 입력된 처분/전표일 기준으로 조회되고, 해당 조회기준 일자로 처분/판매 등록이 가능합니다.  입력도중 처분/전표일자를 수정하는 경우 설비정보를 재입력하여야합니다.");
            obj.set_cssclass("sta_txt_desc");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","708","0","100","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","1125","41","90","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","1217","41","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","1244","41","180","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","57","6","10","35",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","Div00_00:-2",null,null,"40","131",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","98","24","422",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"21","17","24","629",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","857","14","15","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","849","39","100","12",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"21","50","24","644",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("6");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"theme://images/flag.png\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"Column1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비번호\"/><Cell col=\"3\" text=\"구자산번호(1)\"/><Cell col=\"4\" text=\"구자산번호(2)\"/><Cell col=\"5\" text=\"저장위치\"/><Cell col=\"6\" text=\"상품코드\"/><Cell col=\"7\" text=\"품명\"/><Cell col=\"8\" text=\"모델명\"/><Cell col=\"9\" text=\"취득가\"/><Cell col=\"10\" text=\"처분(판매)금액\"/><Cell col=\"11\" text=\"부가세\"/><Cell col=\"12\" text=\"감가상각누계액\"/><Cell col=\"13\" text=\"미상각잔액\"/><Cell col=\"14\" text=\"처분손익\"/><Cell col=\"15\" text=\"취득일자\"/><Cell col=\"16\" text=\"업그레이드유무\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","342",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","102",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","262",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","182",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","572",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","524",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","98","24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("설비오류수정");
            obj.set_cssclass("btn_Block");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1284","188","183","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("<fc v=\"red\">P-01</fc>");
            obj.set_cssclass("sta_Guide_info");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div01:0",null,"83","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00","0","16","132","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_01","131","16","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("취득금액");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00","357","16","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("처분금액");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_01","131","49","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00","357","49","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_01_00_00","0","49","132","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("합계");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00","583","49","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00","809","49","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00_00","809","16","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("감가상각누계액");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00_00_00","1035","16","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("미상각잔액");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00","1035","49","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00_00_00_00","1261","16",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00_00_00_00_00_00","1261","49",null,"34","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_00_00_01_00_00_00","583","16","227","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("부가세");
            obj.set_cssclass("sta_DA_labelTop");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","15",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","136","54","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","362","54","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","588","54","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","813","54","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00","1040","54","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00_00_00","1266","54","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_format("#,###");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","256","54","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","482","54","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","708","54","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","933","54","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_01","1160","54","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_01_00","1386","54","20","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","320","0","100","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta00","1351","21","55","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("처분손익");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","-5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","Div00:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","88","28","92",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("처분등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","73",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"10","88","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("판매등록");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.Static01_00_00_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_onclick,this);
        };
        this.loadIncludeScript("SD10315.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
