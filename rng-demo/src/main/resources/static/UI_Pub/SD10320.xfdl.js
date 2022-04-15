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
            this.set_titletext("차량이동등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivSearch","0","0",null,"198","794",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","112","86","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            this.DivSearch.addChild(obj.name, obj);

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

            obj = new Static("Static01_00_01_00",null,null,"50","11","14","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","346","5","40","163",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","385","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("이동유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","451","18","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중고차배송</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">반납이동</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","20","52","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("이동요청번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","112","52","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","385","86","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("운송업체");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","451","86","170","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">롯데글로벌로지스(주)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">방문출고</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00","385","120","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","451","120","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_01_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_01_innerdataset", obj);
            DivSearch_form_Combo00_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"datacolumn\">출발대상</Col></Row><Row><Col id=\"datacolumn\">도착대상</Col></Row><Row><Col id=\"datacolumn\">이동완료</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_00","20","154","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("차대번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","112","154","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","120","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("운전기사");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","120","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","179","120","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","206","120","140","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","112","18","50","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_text("1234067890");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","191","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","164","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","451","52","120","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","385","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01_01","20","86","93","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_text("이동요청기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"70","10","487","109",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"794","-47",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","120","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("타이틀영역");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","360","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"이동유형\"/><Cell col=\"3\" text=\"이동요청번호\"/><Cell col=\"4\" text=\"희망일자\"/><Cell col=\"5\" text=\"진행상태\"/><Cell col=\"6\" text=\"보유지점\"/><Cell col=\"7\" text=\"계약지점\"/><Cell col=\"8\" text=\"차량번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column4\"/><Cell col=\"6\" text=\"bind:Column5\"/><Cell col=\"7\" text=\"bind:Column6\"/><Cell col=\"8\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","39","100","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00",null,"0","734","151","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","69","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","597","74","86","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("운전자변경");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","5","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("운전자정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("운송방법");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","36","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","352","36","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("운전자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("운임지불");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","102","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("요청등록일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","102","605","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","352","69","130","34",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","134","74","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","35",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","24","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00_00_00_00_00","134","107","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("input_req");
            obj.set_value("20220110");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00_00","486","41","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","578","41","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_Comp_src");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","134","41","165","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01_00","485","74","110","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("input_req");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00",null,"Div00:-15","734","250","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("출발정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("출발지구분");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","352","51","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("출발지");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("출발지주소");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("출발 Km");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","352","117","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("출발 OIL");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","39","100","11",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("출발지담당자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","150","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","352","150","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","183","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("출발일시");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","183","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","352","183","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("경유지 도착일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00","129","216","605","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00","0","216","130","34",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("제출발일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"20","62","24","168",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"20","74","24","90",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("출발등록");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01",null,"20","86","24","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("경유지등록");
            obj.set_cssclass("btn_Block");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","600","44","100","6",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("h6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","486","56","233","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","89","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","201","89","24","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","228","89","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","350","89","200","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","619","89","100","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","552","89","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("input_req");
            obj.set_value("주차장");
            obj.set_text("주차장");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00","134","122","60","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00","194","122","35","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("32");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","155","115","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("33");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00","486","188","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("34");
            obj.set_value("20221001");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00_00_00","134","221","120","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("35");
            obj.set_value("20221001");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01","486","155","110","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("36");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00","486","122","65","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("input_req");
            obj.set_text("주차장");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","553","122","90","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_01_00","645","122","60","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("39");
            obj.set_value("16");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_01","702","122","25","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("40");
            obj.set_text("ℓ");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01","134","56","165","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("41");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01","134","188","155","24",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("42");
            obj.set_cssclass("input_req");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00",null,"386","734","250","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","183","605","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("도착정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","315","0","100","50",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("도착지구분");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51","605","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","352","51","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("도착지");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("도착지주소");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84","605","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","117","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("도착 Km");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","117","605","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","352","117","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("도착 OIL");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","39","100","11",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","150","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("도착지담당자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","150","605","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","352","150","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("14");
            obj.set_text("연락처");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","183","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("도착일자");
            obj.set_cssclass("sta_DA_label_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00","352","183","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("도착희망일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00_00_00","0","216","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("운행시간");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00_00_00","129","216","605","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01_00_00_00","352","216","130","34",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("20");
            obj.set_text("운행거리");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","134","56","165","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","486","56","233","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00_00","134","89","65","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("23");
            obj.set_textAlign("left");
            obj.set_type("number");
            obj.set_format("######");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00_00","201","89","24","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","228","89","120","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00","350","89","200","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("input_req");
            obj.set_text("P12345");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00","552","89","65","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("input_req");
            obj.set_value("주차장");
            obj.set_text("주차장");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","619","89","100","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00","134","122","60","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00","194","122","35","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("30");
            obj.set_text("km");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00_00_00_00","486","122","65","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("31");
            obj.set_cssclass("input_req");
            obj.set_text("주차장");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","553","122","90","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00_00_02_01_00_01_00","645","122","60","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("33");
            obj.set_value("16");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00_00_02_00_01_01","702","122","25","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("34");
            obj.set_text("ℓ");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01","486","155","110","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("35");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","134","155","115","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("36");
            obj.set_cssclass("input_req");
            obj.set_text("홍길순");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_01","134","221","60","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("37");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_01","194","221","35","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("38");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01_00_00_00_00","237","221","60","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("39");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00","297","221","35","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("40");
            obj.set_text("분");
            obj.set_cssclass("sta_WF_unit");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00_00_00","222","218","15","25",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("41");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","486","221","203","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"20","62","24","180",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("43");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"20","74","24","102",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("44");
            obj.set_text("도착등록");
            obj.set_cssclass("btn_Block");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01",null,"20","98","24","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("45");
            obj.set_text("운행비용등록");
            obj.set_cssclass("btn_Block");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_02",null,"20","67","24","246",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("46");
            obj.set_text("KM상동");
            obj.set_cssclass("btn_Block");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01","134","188","155","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new CalTime("CalTime00_01_00","486","188","155","24",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("48");
            obj.set_cssclass("input_req");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00",null,"Div00_00_00:0","734","118","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","20","120","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","50",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","51","130","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("당사→탁송사");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","51","605","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","84","130","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("탁송사→당사");
            obj.set_cssclass("sta_DA_label");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","84","605","34",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","50",null,"2","0",null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","0","39","100","11",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","134","56","585","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02_00","134","89","585","24",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","DivSearch:-52.72%","DivSearch:0","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("-");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","divGridWapper:0",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","160","1121","88","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00",null,"10","76","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","849",null,"100","48",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("h48");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
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
            this.addEventHandler("onload",this.temp01_onload,this);
            this.btnSearchExpand.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("SD10320.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
