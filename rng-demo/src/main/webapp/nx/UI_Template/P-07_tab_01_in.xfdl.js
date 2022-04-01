(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("temp03");
            this.set_titletext("탭+서브탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1488,674);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"수납부서\" type=\"STRING\" size=\"256\"/><Column id=\"계약번호\" type=\"STRING\" size=\"256\"/><Column id=\"차량번호\" type=\"STRING\" size=\"256\"/><Column id=\"상품군명\" type=\"STRING\" size=\"256\"/><Column id=\"결제고객번호\" type=\"STRING\" size=\"256\"/><Column id=\"결제고객명\" type=\"STRING\" size=\"256\"/><Column id=\"수납일시\" type=\"STRING\" size=\"256\"/><Column id=\"청구금액\" type=\"STRING\" size=\"256\"/><Column id=\"포인트수납금액\" type=\"STRING\" size=\"256\"/><Column id=\"수납매니저\" type=\"STRING\" size=\"256\"/><Column id=\"정산처리여부\" type=\"STRING\" size=\"256\"/><Column id=\"정산일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"수납부서\"/><Col id=\"계약번호\"/><Col id=\"차량번호\"/><Col id=\"상품군명\"/><Col id=\"결제고객번호\"/><Col id=\"결제고객명\"/><Col id=\"수납일시\"/><Col id=\"청구금액\"/><Col id=\"포인트수납금액\"/></Row><Row><Col id=\"No\">2</Col><Col id=\"수납부서\"/><Col id=\"계약번호\"/><Col id=\"차량번호\"/><Col id=\"상품군명\"/><Col id=\"결제고객번호\"/><Col id=\"결제고객명\"/><Col id=\"수납일시\"/><Col id=\"청구금액\"/><Col id=\"포인트수납금액\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"수납부서\"/><Col id=\"계약번호\"/><Col id=\"차량번호\"/><Col id=\"상품군명\"/><Col id=\"결제고객번호\"/><Col id=\"결제고객명\"/><Col id=\"수납일시\"/><Col id=\"청구금액\"/><Col id=\"포인트수납금액\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"수납부서\"/><Col id=\"계약번호\"/><Col id=\"차량번호\"/><Col id=\"상품군명\"/><Col id=\"결제고객번호\"/><Col id=\"결제고객명\"/><Col id=\"수납일시\"/><Col id=\"청구금액\"/><Col id=\"포인트수납금액\"/></Row><Row><Col id=\"No\">5</Col></Row><Row><Col id=\"No\">6</Col></Row><Row><Col id=\"No\">7</Col></Row><Row><Col id=\"No\">8</Col></Row><Row><Col id=\"No\">9</Col></Row><Row><Col id=\"No\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","122",null,null,"0","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Tab_2Depth");
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("수납내역");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","0","100","50",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","330",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","50",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"수납부서\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"차량번호\"/><Cell col=\"4\" text=\"상품군명\"/><Cell col=\"5\" text=\"결재고객번호\"/><Cell col=\"6\" text=\"결제고객명\" cssclass=\"cell_fix\"/><Cell col=\"7\" text=\"수납일시\"/><Cell col=\"8\" text=\"청구금액\"/><Cell col=\"9\" text=\"포인트수납금액\"/><Cell col=\"10\" text=\"수납매니저\"/><Cell col=\"11\" text=\"정산처리여부\"/><Cell col=\"12\" text=\"정산일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:수납부서\"/><Cell col=\"2\" text=\"bind:계약번호\"/><Cell col=\"3\" text=\"bind:차량번호\"/><Cell col=\"4\" text=\"bind:상품군명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:결제고객번호\"/><Cell col=\"6\" text=\"bind:결제고객명\" cssclass=\"cell_fix\"/><Cell col=\"7\" text=\"bind:수납일시\"/><Cell col=\"8\" text=\"bind:청구금액\"/><Cell col=\"9\" text=\"bind:포인트수납금액\"/><Cell col=\"10\" text=\"bind:수납매니저\"/><Cell col=\"11\" text=\"bind:정산처리여부\"/><Cell col=\"12\" text=\"bind:정산일\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\" textAlign=\"center\"/><Cell col=\"7\"/><Cell col=\"8\" textAlign=\"right\" text=\"0\"/><Cell col=\"9\" textAlign=\"right\" text=\"0\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00_01_01",null,"19","58","24","523",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("정산일자");
            obj.set_cssclass("sta_SA_label");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_01",null,"20","120","24","394",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_value("20220110");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("수납내역");
            obj.set_cssclass("sta_WF_title1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("서브 탭2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("서브 탭3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","360","107","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","10",null,"97","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("수납기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
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

            obj = new Static("Static01_00_01_00_00",null,"83","50","11","32",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","360","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","452","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","544","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","571","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","686","-1","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","726","18","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("결재고객번호");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","819","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_select");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","901","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","928","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("input_select");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","1081","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("수납부서");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","86","52","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","178","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_01","205","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","360","52","88","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("수납처리사원");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_01","452","52","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_01","544","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_02","571","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","726","52","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("정산처리여부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","819","52","134","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","953","34","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_02","1033","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_text("정산방법");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","1099","52","133","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"170","50","24","343",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00","1144","164","4","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00","1156","163","10","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"170","50","24","274",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00","1123","188","100","12",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01","1211","163","15","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00","1318","164","4","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00","1274","194","100","6",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"170","88","24","78",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Block_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"170","74","24","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("블럭버튼");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_01","1003","194","100","6",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","872","188","100","12",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01","964","163","10","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_02","1094","163","50","10",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_00","0",null,null,"51","0","0",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00_00_00_00_02","129","17",null,"34","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_DA_data");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","268","0","100","15",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","17","130","34",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("정산예정금액");
            obj.set_cssclass("sta_DA_label");
            this.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","22","120","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("3");
            obj.set_format("#,###");
            obj.set_value("0");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","254","22","20","24",null,null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","15",null,"2","0",null,null,null,null,null,this.Div01_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","285","0","120","10",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","4","189","100","11",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"37","10","60","1400",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"37","10","60","1034",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,"30","10","60","667",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00",null,"48","10","60","387",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01",null,"170","44","24","218",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00",null,"170","44","24","170",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1488,674,this,function(p){});
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

        };
        this.loadIncludeScript("P-07_tab_01_in.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
