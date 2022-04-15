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
            this.set_titletext("조회영역 #01 - 클래스, 유형 ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static58_00_00_00","1","776","424","1",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch","0","85",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","58","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("0");
            obj.set_text("매각일");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01","324","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","391","18","80","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("2");
            obj.set_text("10허4048");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button00","473","18","24","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","284","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("6");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("7");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","537","18","39","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("8");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","497","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("9");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","578","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","728","0","40","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("11");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","768","18","63","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("12");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","834","18","150","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("13");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","60",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("14");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","74","18","210","24",null,null,null,null,null,null,this.DivSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("input_req");
            this.DivSearch.addChild(obj.name, obj);

            obj = new Static("Static21","353","60","13","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid red, 0px none rgba(128,128,128,1), 0px none #808080, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","373","53","231","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(" label 클래스 : sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","44","60","13","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid red, 0px none rgba(128,128,128,1), 0px none #808080, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00","64","53","266","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("필수입력 label 클래스 : sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static25_00",null,"132","23","47","85",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("0px none , 1px solid red, 1px solid red, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01",null,"169","181","15","99",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회버튼 클래스 : btn_SA_src");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand","48.00%","147","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_collapse");
            this.addChild(obj.name, obj);

            obj = new Static("Static25_01","btnSearchExpand:-21","btnSearchExpand:1","23","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand00","btnSearchExpand:40.48%","191","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_collapse");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchExpand00_00","btnSearchExpand:40.48%","223","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00","btnSearchExpand00:10","195","216","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회영역 축소 : btn_SA_collapse");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_00_00","btnSearchExpand00_00:10","226","216","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회영역 확장 : btn_SA_expand");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","btnSearchExpand:19","161","421","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("조회영역이 3줄 이상일 경우에만 사용한다.(하프형 5줄 이상)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","15","390","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("1뎁스 조회영역 클래스(.div_SA)");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","0","266","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("2뎁스 조회영역 클래스(.div_SA2)-  팝업/서브탭에서 사용");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch02_00","0","302",null,"52","40",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("div_SA2");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","13","58","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("0");
            obj.set_text("매각일");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01","324","13","63","24",null,null,null,null,null,null,this.DivSearch02_00.form);
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

            obj = new Static("Static01_00_00","284","0","40","49",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("4");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("5");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","537","13","39","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","578","13","150","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","768","13","63","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("8");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","834","13","150","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("9");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","20","49",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("10");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"30","30","20","10",null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_src2");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","497","0","40","49",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("12");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","728","0","40","49",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("13");
            obj.set_text("w40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","74","13","210","24",null,null,null,null,null,null,this.DivSearch02_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("input_req");
            this.DivSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static22_01_00",null,"370","181","15","99",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회버튼 클래스 : btn_SA_src2");
            this.addChild(obj.name, obj);

            obj = new Static("Static25_00_00",null,"343","23","37","75",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("0px none , 1px solid red, 1px solid red, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static25_02","74","352","23","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_border("0px none rgba(128,128,128,1), 0px none rgba(128,128,128,1), 1px solid red, 1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_01","106","370","216","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("조회영역 박스  클래스 : div_SA2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","398","270","682","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("22");
            obj.set_text("※ 조회영역 박스와, 조회버튼을 제외한 나머지 클래스는 동일. ");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00","0","429",null,"5","40",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none , 0px none , 0px none ");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch00","0","498",null,"63","40",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("div_SA");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","63","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("0");
            obj.set_text("매각일자");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01","337","18","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("1");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00","404","18","90","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("2");
            obj.set_text("10허4048");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button00","496","18","24","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00",null,"0","50","11","27",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,null,"50","11","32","0",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("5");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01","560","18","39","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo00","601","18","150","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","791","18","58","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("8");
            obj.set_text("매각유형");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","851","18","150","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("9");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("11");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new CalPeriod("CalPeriod00","86","18","210","24",null,null,null,null,null,null,this.DivSearch00.form);
            obj.set_taborder("12");
            obj.set_cssclass("input_req");
            this.DivSearch00.addChild(obj.name, obj);

            obj = new Static("Static58_00_00","0","584","1002","1",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00","791","523","213","78",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00","561","523","191","78",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","468","187","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("조회영역(와이드형)");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00","20","529","278","70",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","148","577","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("1단");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","152","471","958","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("31");
            obj.set_text("※  4단 컬럼을 기준으로 한다.  bg 영역을 리사이징 한다, 내부 컴포넌트는 리사이징 하지 않으며, 조회버튼은 우측으로 Anchor");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00","0","529","21","70",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01","337","533","184","68",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","401","573","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("2단");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","635","573","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("3단");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","880","573","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("4단");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","0","572","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00","301","572","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00","524","572","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00","755","572","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00","76","524","11","35",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01","69","551","30","19",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00","395","521","11","35",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00","388","548","30","19",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00","995","499","52","19",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_00_00_00_00_00","995","541","52","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_border(" 1px dotted rgba(177,192,203,1), 0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00","1009","501","45","14",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00","1009","542","45","14",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("18px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_00_00_00_00_00_00","1009","521","45","14",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("24px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("DivSearch01_01","0","682","734","63",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("div_SA");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","18","62","24",null,null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("0");
            obj.set_text("계약번호");
            obj.set_cssclass("sta_SA_label_req");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Button("Button02",null,null,"38","38","20","11",null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_src");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Edit("Edit00","86","18","90","24",null,null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("2");
            obj.set_value("123456789");
            obj.set_cssclass("input_req");
            obj.set_text("123456789");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Button("Button00","178","18","24","24",null,null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00",null,"49","50","11","32",null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("4");
            obj.set_text("h11");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Static("Static01","242","18","58","24",null,null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("5");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_SA_label");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","309","18","90","24",null,null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("6");
            obj.set_text("10허4048");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Button("Button00_00","401","18","24","24",null,null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_Comp_src");
            obj.set_text("");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_01",null,"-6","20","60","0",null,null,null,null,null,this.DivSearch01_01.form);
            obj.set_taborder("8");
            obj.set_text("w20");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.DivSearch01_01.addChild(obj.name, obj);

            obj = new Static("Static00","0","647","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("조회영역 (하프형)");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","765","688","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("하프 너비 w734");
            obj.set_cssclass("sta_Guide_info");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","142","650","633","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("53");
            obj.set_text("※ 2단 컬럼을 기준으로 한다. 하프 형태 레이아웃에서는 리사이징 하지 않음. ");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_02","91","767","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("1단");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","321","763","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("2단");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_02","0","762","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("20px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_00_01","210","762","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("40px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_01","0","719","21","70",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_01","70","741","30","19",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_01","77","714","11","35",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_02","20","719","183","70",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_01_01","245","723","181","68",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01_01_00_00","293","738","30","19",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("10px");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00_00_00_00_00_00_00_00","300","711","11","35",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,910,this,function(p){});
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
            this.btnSearchExpand.addEventHandler("onclick",this.Button01_onclick,this);
            this.btnSearchExpand00.addEventHandler("onclick",this.Button01_onclick,this);
            this.btnSearchExpand00_00.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("LayOut_01_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
