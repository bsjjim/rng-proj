(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Button");
            this.set_titletext("Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static27_03_00_00","120","312",null,"491","49",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div02","158","433","1245","50",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_text("div02");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01_02",null,"20","60","24","0",null,null,null,null,null,this.div02.form);
            obj.set_taborder("15");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","1193",null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","1179",null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","1122",null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","1066",null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","1018",null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_02_00",null,"20","44","24","970",null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_Block_fileUp");
            obj.set_tooltiptext("파일업로드");
            obj.set_padding("0px 0px 0px 1px");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_01_00_00",null,"20","44","24","922",null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_Block_fileDown");
            obj.set_tooltiptext("파일다운로드");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","100","24","716",null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_text("커스텀팝업");
            obj.set_cssclass("btn_Block_popup");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","62","24","650",null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_text("커스텀");
            obj.set_cssclass("btn_Block");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","422",null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","342",null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","262",null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","182",null,null,null,null,null,this.div02.form);
            obj.set_taborder("12");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","128",null,null,null,null,null,this.div02.form);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"20","60","24","64",null,null,null,null,null,this.div02.form);
            obj.set_taborder("14");
            obj.set_text("접기");
            obj.set_cssclass("btn_Block_collapse");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","1145","44","70","6",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("16");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"20","98","24","820",null,null,null,null,null,this.div02.form);
            obj.set_taborder("17");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_Block");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00",null,"20","64","24","582",null,null,null,null,null,this.div02.form);
            obj.set_taborder("18");
            obj.set_text("위로");
            obj.set_cssclass("btn_Block_rowUp");
            obj.set_textPadding("0px 0px 0px 5px");
            this.div02.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_00",null,"20","76","24","502",null,null,null,null,null,this.div02.form);
            obj.set_taborder("19");
            obj.set_text("아래로");
            obj.set_cssclass("btn_Block_rowDown");
            obj.set_textPadding("0px 0px 0px 5px");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00","129","1511",null,"395","40",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","158","1575","1204","48",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00",null,"0","100","10","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00",null,null,"100","10","0","0",null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"10","88","28","646",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_text("OO정산");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00",null,"10","88","28","554",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("OO등록");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","88","28","462",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_text("신규입력");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","64","28","394",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"10","64","28","326",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("처리");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_04",null,"10","64","28","258",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01",null,"10","64","28","190",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02",null,"10","103","28","83",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("9");
            obj.set_text("결재요청");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00",null,"10","79","28","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("10");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01","129","1122",null,"390","40",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div00","159","1167","1204","48",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_text("div00");
            obj.set_cssclass("div_footer");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00","0","0","100","10",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","0",null,"100","10",null,"0",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_02","0","10","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("연계팝업");
            obj.set_cssclass("btn_Comm_popup");
            obj.set_iconPosition("left");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_01","106","10","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("연계팝업");
            obj.set_cssclass("btn_Comm_popup");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","212","10","102","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("연계팝업");
            obj.set_cssclass("btn_Comm_popup");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_02_00","318","10","92","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            obj.set_iconPosition("left");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_01_00","414","10","92","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00","510","10","92","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("연계화면");
            obj.set_cssclass("btn_Comm_link");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","606","10","200","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("cmb_Comm_link");
            obj.set_text("연계화면 바로가기");
            obj.set_value("");
            obj.set_index("-1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00","814","1554","548","23",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","35",null,"279","40",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00_00","181","121","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("Lable");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00_00","310","121","325","34",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01","0","314","130","490",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("블록버튼");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","35","130","279",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("컴포넌트 버튼");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","950","84","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일이");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02","950","113","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일이삼");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00","950","142","74","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일이삼사");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00","950","171","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일이삼사오");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00","950","200","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일이삼사오육");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","914","84","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W50");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","914","113","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W62");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","914","142","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W74");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","914","171","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("W86");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","914","200","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("W98");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00","0","6","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업무화면 내 버튼의 종류 및 사이즈");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00","181","170","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("커스텀");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","150","51","545","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("14");
            obj.set_text("※ 테이블 레이아웃 내부에서 Edit, MaskEdit 등 인풋요소와 함께 사용");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","153","93","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("ex)");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_01_00_00","181","88","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Lable");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_01_00_00","310","88","325","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","315","93","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01","457","93","49","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02","247","170","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("팝업버튼");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","182","202","535","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("클래스(순서대로) : 없음 / btn_Comp_popup / btn_Comp_src / btn_Comp_reset");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","338","170","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","366","170","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_reset");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","762","35","130","279",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("사이즈\r\n높이");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01","1144","84","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("일이");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00","1144","113","76","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00_00","1144","142","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00_00_00","1144","171","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00_00_00_00","1144","200","112","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","1100","84","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("W64");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","1100","113","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("W76");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","1100","142","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("W88");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","1100","171","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("W100");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","1100","200","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("W112");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","1368","84","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("24*24");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","772","192","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("(24)");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","150","326","205","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("39");
            obj.set_text("※ 특정 블록 단위로 적용되는 버튼");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","345","326","340","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("ex) 입출력 테이블의 우측상단, 또는 그리드의 우측 상단");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00","186","480","101","38",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00","161","356","699","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("42");
            obj.set_text("다수의 버튼이 존재할 경우, 다음 버튼의 순서대로 배치한다. 커스텀, 커스텀팝업 버튼의 경우 위 컴포넌트 버튼 사이즈와 동일");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","1423","453","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("24");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","1395","453","48","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00","270","490","937","1",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","613","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("100");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","702","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("62");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00","929","418","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("76");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00","1155","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("76");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00","1229","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("50");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","191","493","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("그리드 부가정보");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00","293","475","290","43",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","379","498","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("파일 업로드/다운로드");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00","587","475","166","43",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","757","475","463","43",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","616","503","125","19",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("블록단위 커스텀버튼");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","161","380","850","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("57");
            obj.set_text("블록단위 커스텀, 기능버튼 :  업무화면에 여러개의 블럭요소가 있을 경우,  특별히 해당 블럭 영역에만 관련이 있는 링크 또는 기능을 추가할 때 사용한다.");
            obj.set_textAlign("left");
            obj.set_background("#ffffff");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","834","503","301","34",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("그리드 헹위로, 행아래로, 행추가, 행복사, 행삭제, 행취소\r\n그리드 편집버튼");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","1224","475","52","43",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_02","1224","503","52","34",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("블록단위\r\n기능버튼");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_01_00","0","803","130","269",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("셔틀버튼");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01","686","425","6","38",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00","685","416","15","19",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01_00","280","434","16","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00","282","422","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("15");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_00","222","422","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("10");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01_00_00","225","436","9","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_00_00_00","210","422","15","14",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01_00_00_00","212","434","3","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","803",null,"269","40",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","167","846","20","225",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","10","20","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","115","20","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleL");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","510","865","225","20",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","0","100","20",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleUp");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","115","0","100","20",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleDn");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01","150","818","250","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("73");
            obj.set_text("※ 그리드 간 데이터 Row를 이동할 때 사용");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00_00","384","819","381","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("화면 리사이징 + 앵커를 걸기 위해 div 로 감싸서 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00","1","1093","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("공통영역 버튼의 종류 및 사이즈");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02","0","1122","130","390",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("연계화면 버튼");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00","474","1072","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00","0","1511","130","395",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("기능버튼");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00","151","1135","250","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("82");
            obj.set_text("※ 업무화면 좌측 하단");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00_00","150","1534","250","23",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("83");
            obj.set_text("※ 업무화면 우측 하단");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01","1306","84","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00","1334","84","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("btn_Comp_reset");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","164","1230","436","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("연계팝업 클래스: btn_Comm_popup / 연계팝업 링크: btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01_01","454","84","4","33",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_01","453","69","15","19",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("2");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","395","418","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("44");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_04","595","523","170","19",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("사이즈 - 컴포넌트 버튼과 동일");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_01","163","728","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("btn_Block_addRow");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_00","265","728","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("btn_Block_reset");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("향취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_02","150","694","660","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("94");
            obj.set_text("※ 버튼이 많아, 배치 공간이 좁을 경우 예외적으로 아이콘 형태 사용가능.(아이콘으로 표시 할 경우, 버튼에 툴팁 제공)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01_00","1180","375","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("열기");
            obj.set_cssclass("btn_Block_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00_00","1289","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("60");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_00","1279","477","124","43",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01_01","1180","346","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("접기");
            obj.set_cssclass("btn_Block_collapse");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_02_00","1285","493","142","51",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("블록영역\r\n열기/접기(상하영역 축소)\r\n확장/축소 (좌우확장)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_04_00","1108","345","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("버튼 토글");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_02_00_00","1253","346","188","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("클래스 : btn_Block_collapse");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_02_00_00_00","1253","375","188","24",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("클래스 : btn_Block_expand");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","190","958","31","1",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_border("1px solid red, 0px none rgba(128,128,128,1), 0px none #808080, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00","225","946","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("Div 클래스 : div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","225","891","266","24",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("버튼 클래스 : btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00","190","903","31","1",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_border("1px solid red, 0px none rgba(128,128,128,1), 0px none #808080, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_00","190","1014","31","1",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_border("1px solid red, 0px none rgba(128,128,128,1), 0px none #808080, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_00","225","1002","266","24",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("버튼 클래스 : btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01","544","884","165","76",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_border("0px none, 0px none, 1px solid red, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01","717","949","266","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("버튼 클래스 : btn_WF_shuttleUp");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00_00_01_00","717","918","266","24",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("버튼 클래스 : btn_WF_shuttleDn");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00_00_01_00","673","884","36","46",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_border("0px none, 0px none, 1px solid red, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","1069","846","20","125",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","10","20","50",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","65","20","50",null,null,null,null,null,null,this.Div00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleL");
            this.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","1123","865","125","20",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("Div00");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","0","50","20",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleUp");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","65","0","50","20",null,null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleDn");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_01","1070","818","385","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("※ 그리드 영역이 좁아 버튼 공간이 확보되지 않을 경우 사이즈 조절 가능");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01_00","1270","862","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("50*20");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01_00_00","200","853","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("20*100");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01_00_00_00","751","863","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("100*20");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01_00_01","1065","976","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("20*50");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_01_00","197","728","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_cssclass("btn_Block_copyRow");
            obj.set_tooltiptext("행복사");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_01","920","45","288","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("121");
            obj.set_text("※ 한 글자 추가 시 마다 12px씩 늘어남. (공백 4px)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_01","1007","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("76");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00","163","765","132","1",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_02_00","163","755","132","28",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01_00","208","755","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("30*24");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01_00_00","1180","745","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("축소");
            obj.set_cssclass("btn_Block_expand2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01_01_00","1180","716","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_04_00_00","1108","715","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("버튼 토글");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_02_00_00_01","1253","716","188","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("클래스 : btn_Block_collapse2");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_02_00_00_00_00","1253","745","188","24",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("클래스 : btn_Block_expand2");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_01_00","1081","417","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("76");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00","231","728","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("btn_Block_delRow");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_00_00_00_00","1354","418","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("60");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","315","126","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_value("123허1234");
            obj.set_text("123허1234");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01","402","126","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("btn_Comp_src");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00_00","429","126","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("P12345");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01_01_00","399","128","4","33",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_01_00","397","158","15","19",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("2");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_01_01_00_00","425","128","4","33",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_00_01_00_00","424","158","15","19",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("11px \'NotoKR-Regular\'");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01","914","230","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("W110");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00_00","950","229","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("일이삼사오육칠");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_00","914","260","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("W122");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_00_00_00_00","950","258","122","24",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("일이삼사오육칠팔");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1100","230","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("W124");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00_00_00_00_00","1144","228","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","1100","260","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("W124");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00_00_00_00_00_00","1144","256","136","24",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_00","1","1912","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("팝업화면 처리버튼");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00","474","1891","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00_00","129","1941",null,"125","40",null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00_00","0","1941","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("팝업버튼");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_03","172","1991","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("선택");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_03","240","1991","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("닫기");
            obj.set_cssclass("btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00_00","327","1993","319","24",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("클래스: .btn_Pop_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01","630","1554","179","23",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_01","634","1564","727","6",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none, 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_04_01","669","1557","90","19",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("커스텀버튼");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_04_01_00","1025","1557","115","19",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("업무공통 기능버튼");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_02","171","1654","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("W64");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02","207","1652","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("일이");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01","171","1687","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("W76");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_01","207","1685","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_01","171","1722","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("W88");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_01","207","1718","88","28",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_01","171","1755","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("W100");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_01","207","1751","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_00_01","171","1785","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("W112");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_01","207","1784","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_00_00_01","171","1818","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("W124");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00_01","207","1817","124","28",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_00_00_00_00","171","1852","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("W136");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00_00_00","207","1850","136","28",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_01","361","1654","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("W79");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_01","397","1652","79","28",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("일이");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_01","361","1687","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("W91");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_01","397","1685","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_01","361","1722","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("W103");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_01","397","1718","103","28",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_01","361","1755","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("W115");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_01","397","1751","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_00_01","361","1785","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("W127");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_01","397","1784","127","28",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_00_00_01","361","1818","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("W139");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_00_01","397","1817","139","28",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_00_00_00_00","361","1852","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("W151");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_00_00_00","397","1850","151","28",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","295","420","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("44");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00","345","420","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("44");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_01","444","418","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("44");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00_00_00","1","2087","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("그리드 Pagination");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_00_00","474","2066","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_01_00_00_00","129","2116",null,"125","40",null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_02_00_00_00","0","2116","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text("페이징");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00_00","545","1652","319","24",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_text("클래스: .btn_Comm_func / .btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Div("div01","165","2163","476","26",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("div01");
            obj.set_url("Comm::Paging.xfdl");
            obj.set_cssclass("div_paging");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","509","422","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("98");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div02_00","158","553","1110","50",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_text("div02");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"20","100","24","445",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("0");
            obj.set_text("커스텀팝업");
            obj.set_cssclass("btn_Block_popup");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"20","67","24","374",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("1");
            obj.set_text("커스텀");
            obj.set_cssclass("btn_Block");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"20","76","24","294",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"20","76","24","214",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("3");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"20","76","24","134",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"20","76","24","54",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("5");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"20","50","24","0",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.div02_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01",null,"20","58","24","705",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("7");
            obj.set_text("청구방법");
            obj.set_cssclass("sta_SA_label");
            this.div02_00.addChild(obj.name, obj);

            obj = new Combo("cmb01_00",null,"20","90","24","607",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div02_00_form_cmb01_00_innerdataset = new nexacro.NormalDataset("div02_00_form_cmb01_00_innerdataset", obj);
            div02_00_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">미납</Col><Col id=\"datacolumn\">미납</Col></Row><Row><Col id=\"codecolumn\">부분수납</Col><Col id=\"datacolumn\">부분수납</Col></Row><Row><Col id=\"codecolumn\">완제</Col><Col id=\"datacolumn\">완제</Col></Row></Rows>");
            obj.set_innerdataset(div02_00_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01_00",null,"20","50","24","555",null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.set_cssclass("btn_Custom");
            this.div02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","555","19","10","27",null,null,null,null,null,null,this.div02_00.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div02_00.addChild(obj.name, obj);

            obj = new Div("div02_00_00","158","617","1110","50",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_text("div02");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"20","50","24","175",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"20","15","24","161",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"20","50","24","104",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("[단위:원]");
            obj.set_cssclass("sta_WF_gridUnit");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"20","44","24","48",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"20","44","24","0",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1003","14","15","27",null,null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","947","19","10","27",null,null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01",null,"20","58","24","324",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("7");
            obj.set_text("청구방법");
            obj.set_cssclass("sta_SA_label");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb01_00",null,"20","90","24","226",null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div02_00_00_form_cmb01_00_innerdataset = new nexacro.NormalDataset("div02_00_00_form_cmb01_00_innerdataset", obj);
            div02_00_00_form_cmb01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">전체</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">미납</Col><Col id=\"datacolumn\">미납</Col></Row><Row><Col id=\"codecolumn\">부분수납</Col><Col id=\"datacolumn\">부분수납</Col></Row><Row><Col id=\"codecolumn\">완제</Col><Col id=\"datacolumn\">완제</Col></Row></Rows>");
            obj.set_innerdataset(div02_00_00_form_cmb01_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","884","9","50","22",null,null,null,null,null,null,this.div02_00_00.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_01","772","416","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("64");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01_00_01","850","416","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_text("76");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00_00_00","153","2130","484","23",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("208");
            obj.set_text("※ 페이징 컴포짓으로 페이징 영역 사용방법은 개발 샘플 참고");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02_00_01","1309","141","113","24",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_text("버튼명 영어 ABC");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_01_00_00_00_01","1309","194","135","24",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("버튼명 영어 ABC");
            obj.set_cssclass("btn_Comp_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00",null,"123","14","50","206",null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00_00",null,"197","11","70","208",null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_02_00","161","1272","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_text("W64");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00","197","1270","64","28",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("일이");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_01_00","161","1305","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("W76");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_01_00","197","1303","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_01_00","161","1340","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("W88");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_01_00","197","1336","88","28",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_01_00","161","1373","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("W100");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_01_00","197","1369","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_00_01_00","161","1403","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("W112");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_01_00","197","1402","112","28",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_00_00_01_00","161","1436","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_text("W124");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00_01_00","197","1435","124","28",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_00_00_00_00_00_00_00_00","161","1470","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_text("W136");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00_00_00_00","197","1468","136","28",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_01_00","351","1272","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_text("W79");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_01_00","387","1270","79","28",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_text("일이");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_01_00","351","1305","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_text("W91");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_01_00","387","1303","91","28",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_text("일이삼");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_01_00","351","1340","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_text("W103");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_01_00","387","1336","103","28",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("일이삼사");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_01_00","351","1373","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_text("W115");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_01_00","387","1369","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_text("일이삼사오");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_00_01_00","351","1403","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_text("W127");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_01_00","387","1402","127","28",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_text("일이삼사오육");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_00_00_01_00","351","1436","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_text("W139");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_00_01_00","387","1435","139","28",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_text("일이삼사오육칠");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04_01_00_00_00_00_00_00_00_00","351","1470","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_text("W151");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_00_00_00_00_00_00_00_00","387","1468","151","28",null,null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_text("일이삼사오육칠팔");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00_00","605","1268","129","28",null,null,null,null,null,null,this);
            obj.set_taborder("241");
            obj.set_text("버튼명 영어 ABC");
            obj.set_cssclass("btn_Comm_link");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_01_01_00_00","605","1303","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_text("버튼명 영어 ABC");
            obj.set_cssclass("btn_Comm_popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_01","197","1273","21","65",null,null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_text("21");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_01_00","605","1264","21","35",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_text("21");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_01_01","387","1264","19","40",null,null,null,null,null,null,this);
            obj.set_taborder("245");
            obj.set_text("19");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_01_01_00","605","1303","19","40",null,null,null,null,null,null,this);
            obj.set_taborder("246");
            obj.set_text("19");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_01_01_00_01",null,"76","14","50","564",null,null,null,null,null,this);
            obj.set_taborder("247");
            obj.set_text("14");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03_00_02","384","446","100","34",null,null,null,null,null,null,this);
            obj.set_taborder("248");
            obj.set_text("사용보류");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"728","50","24","1038",null,null,null,null,null,this);
            obj.set_taborder("249");
            obj.set_text("0/0");
            obj.set_cssclass("sta_WF_gridCountNum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02_00",null,"728","15","24","1024",null,null,null,null,null,this);
            obj.set_taborder("250");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_gridCount");
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
            this._addPreloadList("fdl","Comm::Paging.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
