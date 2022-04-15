(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LayOut_01_01");
            this.set_titletext("조회영역 #02 - 영역 내 간격");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,1860);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("DivSearch00","0","225",null,"97","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("0");
            obj.set_text("신청지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01","425","18","48","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("1");
            obj.set_text("신청자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00","477","18","70","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("2");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00","549","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01","715","18","61","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("5");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","576","18","100","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("6");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","90","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("7");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","178","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","205","18","180","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("9");
            obj.set_text("P12345");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1031","18","59","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("10");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","1098","18","75","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("11");
            obj.set_text("고객불만");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1184","18","50","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("12");
            obj.set_text("기타");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("13");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo00","86","52","150","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"83","50","11","27",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("15");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","425","52","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("17");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","477","52","150","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_01","1341","1","1","93",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("20");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00","1312","54","45","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("19");
            obj.set_text("97px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01","675","0","52","19",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("21");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01","674","2","45","14",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("22");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01_00","600","76","116","19",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("23");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01_00","679","78","45","14",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("24");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01_00_00","679","39","45","14",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("25");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01_00_00","600","41","116","12",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("26");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","781","18","210","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("27");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_00","676","245","40","113",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand00","47.32%","591","42","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("btn_SA_collapse");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","35",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","336","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","403","18","90","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","495","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","559","18","39","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","600","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","790","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","850","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00","790","60","213","78",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00","560","60","191","78",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","5","187","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회영역 1줄");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_03","837","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00","19","76","278","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00","0","66","20","70",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01","336","70","184","68",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","0","109","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00","302","109","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00","524","109","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00","755","109","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","76","61","11","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01","69","88","30","19",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","394","58","11","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00","387","85","30","19",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","189","258","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("조회영역 2줄");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","125","192","679","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("18");
            obj.set_text("※ 다단레이아웃의 간격은 각 Lable, 컬럼 중 긴 값을 기준으로 한다. 조회영역 한 줄 추가 시마다 34px 씩 늘어난다.");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00","1170","36","213","62",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_01","1147","37","1","58",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00","1136","55","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("63px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00","994","36","52","19",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_00","994","78","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00","1008","38","45","14",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00","1008","79","45","14",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00_00","1008","58","45","14",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("24px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01","0","250","20","106",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02","0","329","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00","76","251","12","88",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00","71","332","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","73","353","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("긴 레이블 기준으로 여백을 맞춤");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00","386","245","40","113",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01","389","332","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","393","354","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("긴 컬럼기준으로 여백을 맞춤");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_00","679","332","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_00_00","994","333","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_00_00","992","246","40","113",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_01","1089","248","10","88",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00_00","1082","332","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_01_00","1166","248","20","88",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00_00_00","1165","332","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch00_00","0","460",null,"131","40",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("0");
            obj.set_text("신청지점");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01","425","18","48","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("1");
            obj.set_text("신청자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","491","18","70","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("2");
            obj.set_value("P12345");
            obj.set_text("P12345");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Button("Button00","563","18","24","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"54","30","60","0",null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("4");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","729","18","61","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("5");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_00","590","18","100","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("6");
            obj.set_value("홍길순");
            obj.set_text("홍길순");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_02_00","86","18","90","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("7");
            obj.set_text("P12345");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01_00","178","18","24","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_Comp_src");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00_01_01_00","205","18","180","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("9");
            obj.set_text("P12345");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1045","18","59","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("10");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","1112","18","75","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("11");
            obj.set_text("고객불만");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","1198","18","50","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("12");
            obj.set_text("기타");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","58","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("13");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","86","52","150","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"117","50","11","27",null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("15");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","425","52","58","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("17");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","491","52","150","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_01",null,"1","1","127","166",null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("20");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00",null,"39","45","24","144",null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("19");
            obj.set_text("131px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01","679","0","52","19",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("21");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01","693","2","45","14",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("22");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01_00","600","76","116","19",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("23");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01_00","693","78","45","14",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("24");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01_00_00","693","39","45","14",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("25");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01_00_00","600","41","116","12",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("26");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","20","86","58","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("27");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","86","86","150","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("28");
            obj.set_text("Combo00");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","425","86","58","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("29");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","491","86","150","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("30");
            obj.set_text("Combo00");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","795","18","210","24",null,null,null,null,null,null,this.DivSearch00_00.form);
            obj.set_taborder("31");
            this.DivSearch00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_00_01","690","480","40","148",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","424","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("조회영역 3줄");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_01","0","530","20","106",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_01","0","609","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_02","76","486","12","128",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00_01","71","612","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01","73","633","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("긴 레이블 기준으로 여백을 맞춤");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_01","386","480","40","148",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_01","392","612","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","389","634","175","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("긴 컬럼기준으로 여백을 맞춤");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_00_01","693","612","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_00_00_00","1014","613","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_00_00_00","1006","481","40","153",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_01_01","1103","483","10","133",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00_00_01","1096","612","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_01_00_00","1180","483","20","133",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00_00_00_00","1179","612","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch01","0","735",null,"164","40",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("0");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01","336","18","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","30","11",null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00","402","18","80","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("3");
            obj.set_text("10허4048");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button00","484","18","24","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","30","60","0",null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("5");
            obj.set_text("w30");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01","548","18","39","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("7");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00","589","18","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("8");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","780","18","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("9");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","846","18","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","52","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("12");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_02","336","52","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("13");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","402","52","80","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("14");
            obj.set_text("10허4048");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button00_00","484","52","24","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","548","52","39","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("16");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","589","52","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("17");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","780","52","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("18");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","846","52","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","20","86","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("20");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","336","86","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("21");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","402","86","80","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("22");
            obj.set_text("10허4048");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","484","86","24","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","548","86","39","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("24");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00","589","86","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("25");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","780","86","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("26");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","846","86","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("27");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","20","120","60","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("28");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","336","120","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("29");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","402","120","80","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("30");
            obj.set_text("10허4048");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","484","120","24","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","548","120","39","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("32");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_01_00_00","589","120","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("33");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","780","120","58","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("34");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00_00","846","120","150","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("35");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_01","1306","1","1","161",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("36");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00","1287","74","45","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("37");
            obj.set_text("164px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("38");
            obj.set_cssclass("input_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","86","52","210","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("39");
            obj.set_cssclass("input_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_01","86","86","210","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("40");
            obj.set_cssclass("input_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_02","86","120","210","24",null,null,null,null,null,null,this.DivSearch01.form);
            obj.set_taborder("41");
            obj.set_cssclass("input_req");
            this.DivSearch01.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","47.32%","899","42","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("btn_SA_collapse");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","700","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("조회영역 4줄 ");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_01_00","308","905","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_01_00","297","756","40","163",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_01_00_00","520","905","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_01_00_00","509","756","40","163",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_01_00_00_00","750","905","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_01_00_00_00","739","756","40","163",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","1050","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("첫번째 조회조건 컴포넌트 좌측 left 기준");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch01_00","0","1085","734","62",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("0");
            obj.set_text("일이");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","62","18","95","24",null,null,null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("2");
            obj.set_value("123456789");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Button("Button00","159","18","24","24",null,null,null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","0","62","25",null,null,null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("5");
            obj.set_text("left 62");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("true");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch01_00.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00.addChild(obj.name, obj);

            obj = new Div("DivSearch01_00_00","0","1165","734","62",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("일이삼");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","74","18","95","24",null,null,null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("2");
            obj.set_value("123456789");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","171","18","24","24",null,null,null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","74","25",null,null,null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("left74");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("true");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch01_00_00_00","0","1245","734","62",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("일이삼사");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","86","18","95","24",null,null,null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_value("123456789");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","183","18","24","24",null,null,null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","86","25",null,null,null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("left 86");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("true");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch01_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00_00_00.addChild(obj.name, obj);

            obj = new Div("DivSearch01_00_00_00_00","0","1325","734","62",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","77","24",null,null,null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("일이삼사오");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","98","18","95","24",null,null,null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_value("123456789");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","195","18","24","24",null,null,null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","98","25",null,null,null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("left 100");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("true");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch01_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_01_00","285","1053","545","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("75");
            obj.set_text("※ 첫번째 조회컬럼 left 위치 준수!! 한글자당 12픽셀씩 늘어남. 공백은 4px");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","605",null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","1530","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("2뎁스 조회영역");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch02_00","0","1562",null,"52","40",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("div_SA2");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","58","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("0");
            obj.set_text("매각일");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01","324","13","58","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","391","13","80","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("2");
            obj.set_text("10허4048");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Button("Button00","473","13","24","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","537","13","39","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","578","13","150","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("5");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","768","13","63","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("6");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","834","13","150","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"30","30","20","10",null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_src2");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,null,"50","11","27","0",null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","13","577","37",null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("10");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","13","577","0",null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("11");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","74","13","210","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_01_00","1","1630","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_01_00","0","1581","21","56",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_02_00","64","1581","12","56",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_00_01_00","58","1630","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_01_01","285","1633","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_01_01","285","1581","43","56",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01_01_01_00","498","1633","45","24",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_00_00_01_01_00","498","1581","43","56",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02_01_00_00",null,"1624","35","24","45",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01_01_00_00",null,"1570","21","56","40",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch02_00_00","0","1677",null,"84","40",null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("div_SA2");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","58","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("0");
            obj.set_text("매각일");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","324","13","58","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00","391","13","80","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("10허4048");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00","473","13","24","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","537","13","39","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","578","13","150","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("5");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","768","13","63","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("6");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","834","13","150","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"30","30","20","10",null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_src2");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","13","577","69",null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("9");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00",null,null,"50","13","577","0",null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("10");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","45","58","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("11");
            obj.set_text("매각일");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","324","45","58","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("12");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","391","45","80","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("13");
            obj.set_text("10허4048");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","473","45","24","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","537","45","39","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("15");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_01","578","45","150","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("16");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","768","45","63","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("17");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","834","45","150","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("18");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01",null,null,"50","8","572","37",null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","74","13","210","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("input_req");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00_00","74","45","210","24",null,null,null,null,null,null,this.DivSearch02_00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("input_req");
            this.DivSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01","980","1678","52","14",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_00_00","980","1746","52","15",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_01","994","1678","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("13px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00_01","994","1747","45","13",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("13px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00_00_00","1028","1711","45","15",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("8px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01_00","980","1715","52","9",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_01_00_00",null,"1751","52","10","71",null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00_00_00_00",null,"1746","40","15","121",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("10px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_01_00","112","427","1035","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("99");
            obj.set_text("※조회영역 접기/펼치기는 와이드형(3줄부터) 하프형(5줄부터)에 적용.  페이지 샘플 : [UI_Template/Temp05_01 - 영역확장/축소 - 조회영역] 파일 참고");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00","0","1000",null,"5","40",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none , 0px none , 0px none ");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00","0","1477",null,"5","40",null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none , 0px none , 0px none ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,1860,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LayOut_01_02.xfdl", function() {

        this.Static00_00_00_00_00_01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSearchExpand00.addEventHandler("onclick",this.Button01_onclick,this);
            this.btnSearchExpand.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("LayOut_01_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
