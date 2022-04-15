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
            this.set_titletext("오토 SALES PARTNER 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/></Row><Row><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\"/><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","63",null,null,"40","542",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_group");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","18","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("SP목록");
            obj.set_cssclass("sta_WF_title1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","320","0","100","50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","50",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_Grid");
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"SP코드\"/><Cell col=\"1\" text=\"SP명\"/><Cell col=\"2\" text=\"대표자명\"/><Cell col=\"3\" text=\"SP유형\"/><Cell col=\"4\" text=\"관리부서\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"계약시작일자\"/><Cell col=\"7\" text=\"계약종료일자\"/><Cell col=\"8\" text=\"대외계ID\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/><Cell col=\"5\" text=\"bind:Column6\"/><Cell col=\"6\" text=\"bind:Column7\"/><Cell col=\"7\" text=\"bind:Column8\"/><Cell col=\"8\" text=\"bind:Column9\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","-1",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_01","1475","14","4","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,"20","50","24","14",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","Div01:0","734",null,null,"48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_01_00","129","217","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","7","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_title2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("예외h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00","0","41","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("SP명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","41","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_02_01","382","41","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00","0","70","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("법정생년월일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01","129","70","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","99","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01","129","99","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01","382","99","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00","382","70","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("성별");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_02","516","102","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_value("1234561234567");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","134","102","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("###-##-#####");
            obj.set_value("1231212345");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00","134","44","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_value("쏭카");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("쏭카");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40",null,"2","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00","516","44","132","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_value("홍길동");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_00_00_00_00_00_00","2","29","100","11",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00","0","128","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("업태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00","129","128","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","157","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00","129","157","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_01","382","157","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("이메일");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00","382","128","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("업종");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","134","160","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_format("##-###-####");
            obj.set_value("021231234");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","186","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("사업장주소");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_00","129","186","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_01","0","246","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_01","129","246","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01","0","275","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("계약시작일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_01","129","275","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_02","382","275","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("계약종료일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01","382","246","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("최초계약일자");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_01_01_00_00_00","0","304","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_00_02_01_00_00","129","304","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_01","0","333","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("수수료지급계좌");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static27_01_01_01_00_01","129","333","605","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_00_00","382","304","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("대외계ID");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_03_00_00","0","217","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("SP유형");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26_00_01_00_01_00_01_00","382","217","130","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("SP상태");
            obj.set_cssclass("sta_DA_label");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00","134","73","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_format("9999-99-99 ");
            obj.set_value("19900101");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_01","516","73","132","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_value("남자");
            obj.set_readonly("true");
            obj.set_text("남자");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01","134","131","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_value("자동차 임대업");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("자동차 임대업");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_02","516","131","132","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_value("자동차 임대업");
            obj.set_readonly("true");
            obj.set_text("자동차 임대업");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_02_00","516","160","132","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_value("test@lotte.net");
            obj.set_readonly("true");
            obj.set_text("test@lotte.net");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_00","134","189",null,"24","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_value("(12345) 서울특별시 강남구 삼성동 550 싹타워");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("(12345) 서울특별시 강남구 삼성동 550 싹타워");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01","134","220","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_value("상주");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("상주");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01_00","134","249","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_value("72 개월");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("72 개월");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00","134","278","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_format("9999-99-99 ");
            obj.set_value("20160304");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01_00_00","134","307","105","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_value("SP영업지점");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("SP영업지점");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00_00_01_01_00_00_00","134","336",null,"24","45",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_value("롯데은행 123-456-12-123456");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_text("롯데은행 123-456-12-123456");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_02_01","516","220","127","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_enable("true");
            obj.set_value("정상");
            obj.set_readonly("true");
            obj.set_text("정상");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00","516","249","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_readonly("true");
            obj.set_format("9999-99-99 ");
            obj.set_value("20160304");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("mae00_00_00_00","516","278","107","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_format("9999-99-99 ");
            obj.set_value("20160403");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00_00_02_01_00","516","307","127","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_enable("true");
            obj.set_value("G00001");
            obj.set_readonly("true");
            obj.set_text("G00001");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_01_00_01","0","374","360","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_text("계약서 스캔파일");
            obj.set_cssclass("sta_WF_title2");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","0","402","734","92",null,null,null,null,null,null,this.Div00.form);
            obj.set_initvalueid("iv_Grid_table");
            obj.set_taborder("57");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"파일유형\"/><Cell col=\"1\" text=\"파일번호\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"작성일자\"/><Cell col=\"4\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\" \"/><Cell col=\"1\" text=\" \"/><Cell col=\"2\" text=\" \"/><Cell col=\"3\" text=\" \"/><Cell col=\"4\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\" suppressalign=\"first\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","370","363","100","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("예외h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"10","44","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"10","88","24","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("정보변경");
            obj.set_cssclass("btn_Block_popup");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","216",null,"1","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_DA_topBorder");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","Div00:20","Div01:0",null,null,"40","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","7","120","30",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("SP실적 현황");
            obj.set_cssclass("sta_WF_title2");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","360","0","100","40",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("h40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","40",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_initvalueid("iv_Tab_1Depth");
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div00_00.form.Tab00);
            obj.set_text("DB배분 현황");
            this.Div00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","10",null,"63","0",null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.Div00_00.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("기간조회");
            obj.set_cssclass("sta_SA_label");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","227","76","80","18",null,null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","76","5","10","45",null,null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("7");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","300","18","125","24",null,null,null,null,null,null,this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("최근 3개월");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00_00.form.Tab00.Tabpage1.form.DivSearch.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div00_00.form.Tab00);
            obj.set_text("수주대수");
            this.Div00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div00_00.form.Tab00);
            obj.set_text("수주전환율");
            this.Div00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div00_00.form.Tab00);
            obj.set_text("기대이익");
            this.Div00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div00_00.form.Tab00);
            obj.set_text("수수료/인센티브 ");
            this.Div00_00.form.Tab00.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","0",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","352","18","53","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("SP명");
            obj.set_cssclass("sta_SA_label_select");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","227","76","80","18",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_text("18");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","645","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("SP유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","605","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","842","18","59","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("SP상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","802","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","890","0","10","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","312","5","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","702","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("전체");
            var DivSearch_form_Combo00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_innerdataset", obj);
            DivSearch_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상주</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">홈쇼핑</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">일반</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_innerdataset);
            obj.set_text("홈쇼핑");
            obj.set_index("1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_02","232","42","80","10",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_00","396","18","65","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("(SP코드)");
            obj.set_cssclass("input_select");
            obj.set_text("\\");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","463","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","490","18","115","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("홍길순");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("17");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","76","5","10","45",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","42","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("19");
            obj.set_value("4410");
            obj.set_cssclass("input_select");
            obj.set_text("4410");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","130","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","157","18","155","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("21");
            obj.set_value("SP영업1지점");
            obj.set_enable("false");
            obj.set_text("SP영업1지점");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00","386","11","10","30",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_02_00_00","692","13","10","30",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","900","18","100","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("전체");
            var DivSearch_form_Combo00_00_innerdataset = new nexacro.NormalDataset("DivSearch_form_Combo00_00_innerdataset", obj);
            DivSearch_form_Combo00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">정상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">중도해지</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">강제해지</Col></Row><Row><Col id=\"datacolumn\">만기종료</Col><Col id=\"codecolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(DivSearch_form_Combo00_00_innerdataset);
            obj.set_text("만기종료");
            obj.set_index("3");
            this.DivSearch.addChild(obj.name, obj);

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

            obj = new Button("Button00_00",null,"10","103","28","214",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","103","28","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("해지신청");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","10","34","0",null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","10","34","38",null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"10","103","28","107",null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("연장신청");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","734","392","20","65",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SD10165.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
