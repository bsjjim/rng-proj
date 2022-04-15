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
            this.set_titletext("Static, Information");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,752);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static27_03","129","318",null,"195","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","752","346","660","155",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","27","54","460","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("불릿이 없는 안내문구가 필요할 때 는 클래스가 없는 기본 Static 사용");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","18","32","320","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("불릿이 있는 안내문구 입니다.(기본 사용)");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","18","9","320","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("지시문 타이틀");
            obj.set_cssclass("sta_txt_descTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","18","76","460","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("2");
            obj.set_text("강조하고 싶은 내용 - initvalueid > iv_fc_blue");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","61","28","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","61","50","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00_00","83","138","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","18","98","460","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("7");
            obj.set_text("※ 주의 -  initvalueid > iv_fc_orange");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","61","94","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","18","120","460","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("9");
            obj.set_text("※ 경고, 에러 -  initvalueid > iv_fc_red");
            obj.set_cssclass("sta_txt_descDot");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00","61","116","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00","61","72","100","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static58","756","347","683","13",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","35",null,"100","40",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","35","130","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static 기본폰트");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02","0","318","130","195",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("지시문\r\n폰트컬러 클래스");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","145","461","250","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("2");
            obj.set_text("※ 경고, 에러 -  initvalueid > iv_fc_red");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","145","432","250","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_orange");
            obj.set_taborder("3");
            obj.set_text("※ 주의 -  initvalueid > iv_fc_orange");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","145","403","390","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_fc_blue");
            obj.set_taborder("4");
            obj.set_text("※ 강조하고 싶은 내용 - initvalueid > iv_fc_blue");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","145","374","375","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본형 지시문 (개별 컴포넌트 지시문 - Edit 옆 등 테이블 내부)");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","145","51","307","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("본 시스템은  NotoSans-Regular 13px 기준으로 합니다.");
            obj.set_cssclass("a123");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","448","42","435","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("폰트가 정상적으로 적용시 텍스트 끝 라인이 이 박스의 왼쪽 라인과 맞아야 합니다.");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","937","51","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Static의 기본 높이는 24px, Static의 기본 스타일은 좌측 정렬");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","1198","50","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","1280","56","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("24");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","1270","50","3","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("0px none, 1px dotted rgba(177,192,203,1), 0px none, 0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01","0","512","130","155",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("decorate 적용");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_01","129","512",null,"155","40",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","143","527","255","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("* usedecorate =\"<b v=\'true\'>true</b>\" 샘플");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Info_Orange");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","148","566","270","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("<fs v=\'12\'>폰트사이즈</fs><fontsize>를 변경합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","148","599","199","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("<fc v=\'#f48a06\'>폰트컬러 </fc><fontcolor>를 변경합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","148","623","306","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("<ff v=\'Malgun Gothic\'>글자체</ff> <fontface>를 변경합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","445","623","226","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("<u v=\'true\'>언더라인</u> <underline> 밑줄을 칩니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","445","599","226","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("<i v=\'true\'>이탤릭체</i> <italic>로 변경합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","445","566","226","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("<b v=\'true\'>굵은글씨</b> <bold>로 변경합니다.");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01_00","145","96","1115","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("넥사크로 툴에서 해당폰트를 올바르게 적용하려면, NotoSans 글꼴을 윈도우에 별도 설치하여야 합니다. (_resource_/_font_/) 폴더 안의 notokr 폰트 중 ttf 확장자 가진 파일 모두 설치(더블클릭하면 설치됨)");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00","0","134","130","150",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00","129","134",null,"150","40",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","142","209","428","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("타이틀 3Depth(14px \"NotoKR-Bold\")-  sta_WF_title3");
            obj.set_cssclass("sta_WF_title3");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","142","179","428","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("타이틀 2Depth(15px \"NotoKR-Bold\") -  sta_WF_title2");
            obj.set_cssclass("sta_WF_title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","142","149","428","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("타이틀 1Depth(15px \"NotoKR-Bold\") - sta_WF_title1");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","752","214","513","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("조회영역 필수입력 클래스 -  sta_SA_label_req");
            obj.set_cssclass("sta_SA_label_req");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00","752","184","285","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("조회영역 일반 Label ");
            obj.set_cssclass("sta_SA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00","0","6","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_02","601","318","130","195",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("지시문 박스 - \r\n안내해야 할 내용이\r\n많은 경우, \r\n박스안에 작성");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","752","334","20","58",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","755","327","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("20");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_01","756","486","683","15",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00","1421","347","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("15");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_00_00","1421","487","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("15");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01",null,"-62","40",null,"0","62",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","142","239","428","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("타이틀 4Depth(14px \"NotoKR-Bold\")-  sta_WF_title4");
            obj.set_cssclass("sta_WF_title4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","752","244","543","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("조회영역 선택필수 Label - 조회영역 필수입력 Label -  initvalueid > iv_src_label_select");
            obj.set_cssclass("sta_SA_label_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","-552","125","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","138","522","632","132",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("사용여부 미정");
            obj.set_cssclass("sta_Guide_info");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("rgba(255,0,0,0.60)");
            obj.set_color("#ffffff");
            obj.set_font("20px \"NotoKr-Regular\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","103","416","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_tooltiptext("지시문의 위치와 관련된 샘플은 UI템플릿중 [조회+그리드] 샘플 참고 ");
            obj.set_cssclass("sta_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","145","327","375","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("지시문 클래스 : sta_txt_desc / initvalueid에서 폰트컬러 선택");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00","142","357","373","1",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none , 0px none , 0px none ");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_01","0","283","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("도움말 툴팁");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_01","129","283",null,"36","40",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","79","294","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_tooltiptext("도움말 툴팁입니다.");
            obj.set_cssclass("sta_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","142","289","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("클래스 : sta_WF_help / tooltiptext 속성에 툴팁 텍스트를 넣을 수 있다.");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Static("Static74_00","74","280","5","27",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_border("0px none rgba(128,128,128,1), 1px dotted rgba(177,192,203,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static75_01","71","263","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("5");
            obj.set_color("rgba(177,192,203,1)");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","601","134","130","150",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("조회영역 Label");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","760","146","405","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("label 클래스 : sta_SA_label / initvalueid에서 필수입력/선택필수 지정");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00","756","176","413","1",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_border("1px dotted rgba(177,192,203,1), 0px none , 0px none , 0px none ");
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
        this.registerScript("Comp_01.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopupByComponent(obj, obj.getOffsetWidth(), obj.getOffsetHeight(), 160, 240);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Comp_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
