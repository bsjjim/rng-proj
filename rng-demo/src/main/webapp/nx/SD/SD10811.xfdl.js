(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_07_01");
            this.set_titletext("정비비관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid3", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row><Row><Col id=\"Column1\"/><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01",null,"1","40",null,"0","242",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("계약시작기간");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","102","5","10","75",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","322","10","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","68","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("본부");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00","112","52","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","362","52","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("사업장");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","362","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("고유번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","431","11","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_00","441","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var DivSearch_form_Combo00_00_01_00_00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_01_00_00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_01_00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">고객번호</Col><Col id=\"datacolumn\">고객번호</Col></Row><Row><Col id=\"codecolumn\">차량번호</Col><Col id=\"datacolumn\">차량번호</Col></Row><Row><Col id=\"codecolumn\">계약번호</Col><Col id=\"datacolumn\">계약번호</Col></Row><Row><Col id=\"codecolumn\">견적번호</Col><Col id=\"datacolumn\">견적번호</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_01_00_00_00_innerdataset);
            obj.set_text("고객번호");
            obj.set_value("고객번호");
            obj.set_index("0");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","747","10","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","857","11","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","787","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("장기구분");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_00_00","867","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","1093","10","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00","1133","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","1202","11","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_00_00_01","1212","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","112","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","86","85","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_text("계약승인기간");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","112","86","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","523","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_value("123406789");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00","605","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","632","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("25");
            obj.set_value("김나나");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_00","441","52","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("26");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00","523","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00","550","52","197","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("28");
            obj.set_text("김나나");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_01","787","52","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("29");
            obj.set_text("계약지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","867","52","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("30");
            obj.set_value("3666");
            obj.set_text("3666");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","911","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","938","52","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("32");
            obj.set_value("서울중앙MOT 강북 Part");
            obj.set_text("서울중앙MOT 강북 Part");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00","1133","52","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("33");
            obj.set_text("영업매니저");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","1212","52","57","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("34");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1271","52","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","1298","52","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("36");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","441","86","86","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("37");
            obj.set_value("21YHOTY");
            obj.set_text("21YHOTY");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01","529","86","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_00_00","556","86","191","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("39");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","362","86","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("40");
            obj.set_text("프로모션명");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_01_00","787","86","73","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("41");
            obj.set_text("상품군코드");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","867","86","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("42");
            obj.set_text("123406789");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_01","959","86","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00_00_00_00","1133","86","78","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("44");
            obj.set_text("운전자범위");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_01_00_00_00_00_01_00","1212","86","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("45");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Div("divGridWapper","0","DivSearch:0",null,null,"40","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","150","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("0");
            obj.set_text("장기계약목록");
            obj.set_cssclass("sta_WF_title1");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","698","0","100","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"계약번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"견적번호\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객유형\"/><Cell col=\"4\" rowspan=\"2\" text=\"FLEET구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"고객번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"고객\"/><Cell col=\"7\" rowspan=\"2\" text=\"운용리스&#13;&#10;여부\"/><Cell col=\"8\" rowspan=\"2\" text=\"차량번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"차대번호\"/><Cell col=\"10\" rowspan=\"2\" text=\"차종\"/><Cell col=\"11\" rowspan=\"2\" text=\"계약기간\"/><Cell col=\"12\" rowspan=\"2\" text=\"투입일시\"/><Cell col=\"13\" rowspan=\"2\" text=\"계약시작일자\"/><Cell col=\"14\" rowspan=\"2\" text=\"반납일시\"/><Cell col=\"15\" rowspan=\"2\" text=\"종료예정일자\"/><Cell col=\"16\" rowspan=\"2\" text=\"계약종료일자\"/><Cell col=\"17\" rowspan=\"2\" text=\"차량가\"/><Cell col=\"18\" rowspan=\"2\" text=\"보증금액\"/><Cell col=\"19\" rowspan=\"2\" text=\"보증증권금액\"/><Cell col=\"20\" rowspan=\"2\" text=\"선납금\"/><Cell col=\"21\" rowspan=\"2\" text=\"월대여료&#13;&#10;(VAT포함)\"/><Cell col=\"22\" rowspan=\"2\" text=\"월대여료&#13;&#10;(VAT별도)\"/><Cell col=\"23\" rowspan=\"2\" text=\"본부\"/><Cell col=\"24\" rowspan=\"2\" text=\"사업장\"/><Cell col=\"25\" rowspan=\"2\" text=\"계약지점\"/><Cell col=\"26\" rowspan=\"2\" text=\"계약구분\"/><Cell col=\"27\" rowspan=\"2\" text=\"이전계약번호\"/><Cell col=\"28\" rowspan=\"2\" text=\"장기구분\"/><Cell col=\"29\" rowspan=\"2\" text=\"계약상태\"/><Cell col=\"30\" rowspan=\"2\" text=\"상품군명\"/><Cell col=\"31\" rowspan=\"2\" text=\"정비상품\"/><Cell col=\"32\" rowspan=\"2\" text=\"운전자범위&#13;&#10;(계약조건)\"/><Cell col=\"33\" colspan=\"6\" text=\"보험조건\"/><Cell col=\"39\" rowspan=\"2\" text=\"면책금\"/><Cell col=\"40\" rowspan=\"2\" text=\"위약금구분\"/><Cell col=\"41\" rowspan=\"2\" text=\"위약률\"/><Cell col=\"42\" text=\"실운전자\"/><Cell col=\"43\" rowspan=\"2\" text=\"영업매니저\"/><Cell col=\"44\" rowspan=\"2\" text=\"결제담당자\"/><Cell col=\"45\" rowspan=\"2\" text=\"연락처\"/><Cell col=\"46\" rowspan=\"2\" text=\"계산서&#13;&#10;발행일자\"/><Cell col=\"47\" rowspan=\"2\" text=\"결제월\"/><Cell col=\"48\" rowspan=\"2\" text=\"결제일자\"/><Cell col=\"49\" rowspan=\"2\" text=\"결제방법\"/><Cell col=\"50\" rowspan=\"2\" text=\"순회정비주소\"/><Cell col=\"51\" rowspan=\"2\" text=\"범칙금주소\"/><Cell col=\"52\" rowspan=\"2\" text=\"영업채널\"/><Cell col=\"53\" rowspan=\"2\" text=\"채널상세유형\"/><Cell col=\"54\" rowspan=\"2\" text=\"신차장멤버십&#13;&#10;최초인입일자\"/><Cell col=\"55\" rowspan=\"2\" text=\"신차장멤버십&#13;&#10;계약인증일자\"/><Cell row=\"1\" col=\"33\" text=\"임직원특약(실보험)\"/><Cell row=\"1\" col=\"34\" text=\"연령\"/><Cell row=\"1\" col=\"35\" text=\"대인/대물\"/><Cell row=\"1\" col=\"36\" text=\"자손\"/><Cell row=\"1\" col=\"37\" text=\"무보험차\"/><Cell row=\"1\" col=\"38\" text=\"보험종료일자\"/><Cell row=\"1\" col=\"42\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/><Cell col=\"54\"/><Cell col=\"55\"/></Band></Format></Formats>");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","39","50","11",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("sta00","110","20","685","24",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("4");
            obj.set_text("※ 계약번호 클릭 시, 장기계약관리(3232) 화면으로 이동하여, 상세 계약정보를 확인할 수 있습니다.");
            obj.set_cssclass("sta_txt_desc");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","99","0","10","50",null,null,null,null,null,null,this.divGridWapper.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.divGridWapper.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","300","270","301","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면접기 기능 사용하지 않음. 예외화면");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,752,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SD10811.xfdl", function() {

        this.Div01_Static00_onclick = function(obj,e)
        {

        };

        this.divGridWapper_Static01_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD10811.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
