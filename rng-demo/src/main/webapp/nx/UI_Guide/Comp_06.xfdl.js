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
            this.set_titletext("ETC - Progressbar, ImageViewer, Menu");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,702);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리</Col><Col id=\"Caption\">인사관리</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1000</Col></Row><Row><Col id=\"UserData\">인사마스터생성</Col><Col id=\"Caption\">인사마스터생성</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1001</Col></Row><Row><Col id=\"UserData\">인적사항</Col><Col id=\"Caption\">인적사항</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+K</Col><Col id=\"idx\">1002</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1003</Col></Row><Row><Col id=\"UserData\">개인사진등록 관리(승인 )</Col><Col id=\"Caption\">개인사진등록 관리(승인 )</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1004</Col></Row><Row><Col id=\"UserData\">보훈자 관리</Col><Col id=\"Caption\">보훈자 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1005</Col></Row><Row><Col id=\"UserData\">징계 관리</Col><Col id=\"Caption\">징계 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1006</Col></Row><Row><Col id=\"UserData\">포상 등록 신청</Col><Col id=\"Caption\">포상 등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1007</Col></Row><Row><Col id=\"UserData\">포상 관리(승인 )</Col><Col id=\"Caption\">포상 관리(승인 )</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"UserData\">신원보증관리</Col><Col id=\"Caption\">신원보증관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"UserData\">증명서 관리</Col><Col id=\"Caption\">증명서 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1010</Col></Row><Row><Col id=\"UserData\">개인정보(특이사항) 관리</Col><Col id=\"Caption\">개인정보(특이사항) 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1011</Col></Row><Row><Col id=\"UserData\">인원현황</Col><Col id=\"Caption\">인원현황</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1012</Col></Row><Row><Col id=\"UserData\">인원현황 보고서</Col><Col id=\"Caption\">인원현황 보고서</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1013</Col></Row><Row><Col id=\"UserData\">재고용대상자</Col><Col id=\"Caption\">재고용대상자</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1014</Col></Row><Row><Col id=\"UserData\">연령별인원현황</Col><Col id=\"Caption\">연령별인원현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1015</Col></Row><Row><Col id=\"UserData\">인사기록카드 출력</Col><Col id=\"Caption\">인사기록카드 출력</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1016</Col></Row><Row><Col id=\"UserData\">기념일 조회</Col><Col id=\"Caption\">기념일 조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1017</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리(개인)</Col><Col id=\"Caption\">인사관리(개인)</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1100</Col></Row><Row><Col id=\"UserData\">인적사항(개인)</Col><Col id=\"Caption\">인적사항(개인)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1101</Col></Row><Row><Col id=\"UserData\">증명서인쇄</Col><Col id=\"Caption\">증명서인쇄</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1102</Col></Row><Row><Col id=\"UserData\">재고용신청서</Col><Col id=\"Caption\">재고용신청서</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1103</Col></Row><Row><Col id=\"UserData\">조직 및 사원조회</Col><Col id=\"Caption\">조직 및 사원조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1104</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1105</Col></Row><Row><Col id=\"UserData\">포상 등록 신청</Col><Col id=\"Caption\">포상 등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1106</Col></Row><Row><Col id=\"UserData\">인사정보조회</Col><Col id=\"Caption\">인사정보조회</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1200</Col></Row><Row><Col id=\"UserData\">인적사항(인사위)</Col><Col id=\"Caption\">인적사항(인사위)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1201</Col></Row><Row><Col id=\"UserData\">발령관리</Col><Col id=\"Caption\">발령관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1300</Col></Row><Row><Col id=\"UserData\">발령코드관리</Col><Col id=\"Caption\">발령코드관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1301</Col></Row><Row><Col id=\"UserData\">일괄발령 관리</Col><Col id=\"Caption\">일괄발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1302</Col></Row><Row><Col id=\"UserData\">연례호봉발령 관리</Col><Col id=\"Caption\">연례호봉발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1303</Col></Row><Row><Col id=\"UserData\">승진발령 관리</Col><Col id=\"Caption\">승진발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1304</Col></Row><Row><Col id=\"UserData\">승진자 DM주소 출력</Col><Col id=\"Caption\">승진자 DM주소 출력</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+O</Col><Col id=\"idx\">1305</Col></Row><Row><Col id=\"UserData\">특별호봉승급 관리</Col><Col id=\"Caption\">특별호봉승급 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1306</Col></Row><Row><Col id=\"UserData\">재계약 대상자 관리</Col><Col id=\"Caption\">재계약 대상자 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1307</Col></Row><Row><Col id=\"UserData\">발령 추천서 작성</Col><Col id=\"Caption\">발령 추천서 작성</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1308</Col></Row><Row><Col id=\"UserData\">발령 추천자 지정</Col><Col id=\"Caption\">발령 추천자 지정</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1309</Col></Row><Row><Col id=\"UserData\">발령 추천서 승인</Col><Col id=\"Caption\">발령 추천서 승인</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1310</Col></Row><Row><Col id=\"UserData\">재고용추천</Col><Col id=\"Caption\">재고용추천</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1311</Col></Row><Row><Col id=\"UserData\">개별발령 관리</Col><Col id=\"Caption\">개별발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1312</Col></Row><Row><Col id=\"UserData\">자매사 발령 관리</Col><Col id=\"Caption\">자매사 발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1313</Col></Row><Row><Col id=\"UserData\">발령조회(전사원)</Col><Col id=\"Caption\">발령조회(전사원)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1314</Col></Row><Row><Col id=\"UserData\">사외파견</Col><Col id=\"Caption\">사외파견</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1400</Col></Row><Row><Col id=\"UserData\">사외파견 인력관리</Col><Col id=\"Caption\">사외파견 인력관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1401</Col></Row><Row><Col id=\"UserData\">노조관리</Col><Col id=\"Caption\">노조관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1500</Col></Row><Row><Col id=\"UserData\">인적사항(노조)</Col><Col id=\"Caption\">인적사항(노조)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1501</Col></Row><Row><Col id=\"UserData\">노조원 관리</Col><Col id=\"Caption\">노조원 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1502</Col></Row><Row><Col id=\"UserData\">노조원직책 관리</Col><Col id=\"Caption\">노조원직책 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1503</Col></Row><Row><Col id=\"UserData\">노조비공제 현황</Col><Col id=\"Caption\">노조비공제 현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1504</Col></Row><Row><Col id=\"UserData\">노조원 현황</Col><Col id=\"Caption\">노조원 현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1505</Col></Row><Row><Col id=\"UserData\">사내공모</Col><Col id=\"Caption\">사내공모</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1600</Col></Row><Row><Col id=\"UserData\">사내공모 공고 관리</Col><Col id=\"Caption\">사내공모 공고 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1601</Col></Row><Row><Col id=\"UserData\">사내공모  신청</Col><Col id=\"Caption\">사내공모  신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1602</Col></Row><Row><Col id=\"UserData\">사내공모  관리</Col><Col id=\"Caption\">사내공모  관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1603</Col></Row><Row><Col id=\"UserData\">사내공모 이력 조회</Col><Col id=\"Caption\">사내공모 이력 조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1604</Col></Row><Row><Col id=\"UserData\">통계정보</Col><Col id=\"Caption\">통계정보</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1700</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00","0","6","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기타 컴포넌트");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","473","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h35");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00","0","35","130","66",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Progressbar");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00","129","35",null,"66","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","169","53","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("enabled");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","476","53","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("disabled");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","235","58","200","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00_00","535","58","200","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00","0","100","130","166",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00","129","100",null,"166","40",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","169","114","55","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("enabled");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","407","114","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("disabled");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","653","114","75","44",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("stretch = \r\n\"none\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","895","114","90","39",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("stretch =\r\n\"fit\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_03_00","1121","114","110","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("stretch = \r\n\"fixaspectratio\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","235","119","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_image("url(\'imagerc::imageViewSample.jpg\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","475","119","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_image("url(\'imagerc::imageViewSample.jpg\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","720","119","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_image("url(\'imagerc::imageViewSample.jpg\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01_00","960","119","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_image("url(\'imagerc::imageViewSample.jpg\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01_00_00","1240","119","130","125",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_image("url(\'imagerc::imageViewSample.jpg\')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00","0","265","130","191",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00","129","265",null,"191","40",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_00_00_00_00","0","455","130","166",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_00_00_00_00","129","455",null,"166","40",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_DA_data");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","167","476","300","120",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("GroupBox00");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","170","310","140","124",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_menu");
            obj.set_captioncolumn("Caption");
            obj.set_idcolumn("idx");
            obj.set_levelcolumn("lev");
            obj.set_userdatacolumn("UserData");
            obj.set_enablecolumn("enable");
            obj.set_hotkeycolumn("hotkey");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","167","285","145","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("PopupMenu Show");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"-62","40",null,"0","57",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("40");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00","0","676","130","130",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Div");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27_03_01_00_00","129","676",null,"130","40",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_DA_data");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","405","621","100","55",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("h50");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00_00","0","646","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div, PopupDiv");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_02_01_00_00_00","753","676","130","130",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("PopupDiv");
            obj.set_cssclass("sta_DA_label");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","152","692","200","100",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("클래스 div_group");
            obj.set_cssclass("div_group");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","363","690","362","39",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("컴포넌트를 그룹화하여 리사이징 또는 위치조정하는 데 사용한다.\r\n박스의 bg 컬러는 브라우저 실행 시 보이지 않음.");
            obj.set_cssclass("sta_txt_desc");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","894","691","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("호출");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","955","691","220","100",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","133","647","1002","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("※  Div, PopupDiv 는 모두 외부 Form 링크가 가능.  Div로 팝업을 호출할 경우 닫기 버튼을 누르지 않으면 팝업이 닫히지 않는 반면, PopupDiv는 focus가 빠질경우 자동으로 팝업이 닫힘.");
            obj.set_cssclass("sta_WF_colorBlue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,702,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comp_06.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	 this.PopupMenu00.trackPopupByComponent( obj, 0, obj.getOffsetHeight(), "right bottom");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Comp_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
