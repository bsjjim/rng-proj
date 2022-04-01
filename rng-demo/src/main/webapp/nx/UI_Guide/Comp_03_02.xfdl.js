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
            this.set_titletext("버튼 유형 모음. (정리필요)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,1685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00_00_01_00_03_00_00_01_02",null,"79","60","24","620",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확장");
            obj.set_cssclass("btn_Block_collapse2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_01_00",null,"79","44","24","1436",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_Block_excelUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00",null,"79","44","24","1388",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_Block_excelDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_02_00",null,"79","44","24","1340",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_Block_fileUp");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_01_00_00",null,"79","44","24","1292",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_Block_fileDown");
            obj.set_textPadding("0px");
            obj.set_tooltiptext("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01",null,"79","100","24","1188",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("커스텀팝업");
            obj.set_cssclass("btn_Block_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02",null,"79","62","24","1122",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("커스텀");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00",null,"79","76","24","1042",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.set_cssclass("btn_Block_addRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02",null,"79","76","24","962",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("행복사");
            obj.set_cssclass("btn_Block_copyRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00",null,"79","76","24","882",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_Block_delRow");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00",null,"79","76","24","802",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("행취소");
            obj.set_cssclass("btn_Block_reset");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_01",null,"79","50","24","748",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_00_01",null,"79","60","24","684",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("접기");
            obj.set_cssclass("btn_Block_collapse");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","782","103","70","6",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("6");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_00",null,"245","76","24","1267",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00",null,"45","76","24","974",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("아래로");
            obj.set_cssclass("btn_Block_rowDown");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_01",null,"45","64","24","1054",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("위로");
            obj.set_cssclass("btn_Block_rowUp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_01_00",null,"245","76","24","1347",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00",null,"398","84","24","1344",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("계약서출력");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_00_00",null,"290","98","24","1326",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("양식다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00",null,"319","194","24","1230",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("일괄번호등록 엑셀양식다운로드");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_00_00_00_00_00_01",null,"348","150","24","1274",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_Block");
            obj.set_textPadding("0px");
            obj.set_text("호텔지점 엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00",null,"1132","88","28","671",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("SMS발송");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00",null,"153","62","24","1362",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_01",null,"211","74","24","1348",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("탈퇴처리");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00",null,"1032","76","28","1376",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("도움말");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00",null,"1032","76","28","1296",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"1032","88","28","1204",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("탈퇴처리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_00_02_00_00",null,"153","62","24","1294",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("도움말");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_00",null,"688","74","24","1361",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("이력조회");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_02",null,"688","74","24","1283",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("휴면처리");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00",null,"688","74","24","1205",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("복원처리");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_01",null,"688","74","24","1127",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("연장요청");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_01",null,"688","74","24","1049",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("탈퇴처리");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_01",null,"1094","88","28","1363",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("이력조회");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"1094","88","28","1271",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("휴면처리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"1094","88","28","1179",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("복원처리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01",null,"1094","88","28","1087",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("연장요청");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00",null,"1094","88","28","995",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("탈퇴처리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_01",null,"722","62","24","1373",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_03",null,"722","98","24","1271",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("임의탈퇴처리");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_01",null,"722","98","24","1169",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("임의탈퇴취소");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_02",null,"722","74","24","1091",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("연장요청");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_02",null,"722","98","24","989",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("연장요청취소");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_02",null,"1132","76","28","1376",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_01",null,"1132","112","28","1260",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("임의탈퇴처리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"1132","112","28","1144",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("임의탈퇴취소");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_02",null,"1132","88","28","1052",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("연장요청");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01",null,"1132","112","28","936",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("연장요청취소");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_03",null,"158","98","24","1002",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("대량구매의뢰");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_03",null,"158","122","24","876",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("대량구매의뢰취소");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_04",null,"199","110","24","773",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("비밀번호초기화");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_02",null,"199","50","24","720",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("저장");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_02",null,"1132","64","28","532",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00",null,"1170","112","28","1340",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("근무시간관리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00",null,"1170","102","28","1234",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("DS가능지역");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_05",null,"192","86","24","1014",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("사용자등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_04",null,"192","50","24","960",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01",null,"1208","100","28","1351",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("사용자등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_04_00",null,"226","50","24","1050",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("출력");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_02",null,"260","98","24","998",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_04",null,"260","110","24","884",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("세금계산서발행");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","93","648","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("테이블 우측상단");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","94","119","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("그리드 우측상단");
            obj.set_cssclass("sta_WF_title1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00",null,"1070","64","28","768",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("취소");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_00_00",null,"1070","79","28","685",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00","82","966","1204","48",null,null,null,null,null,null,this);
            obj.set_taborder("66");
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

            obj = new Button("Button00_00_01_00_03_02_06",null,"294","98","24","996",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("설비오류수정");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_03",null,"1276","88","28","1365",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("처분등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_01",null,"1276","88","28","1273",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("판매등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_02",null,"756","62","24","1372",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00",null,"756","74","24","1294",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("출발등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01_00",null,"756","86","24","1204",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("경유지등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_03",null,"790","62","24","1301",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("초기화");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_01",null,"790","74","24","1223",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("도착등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_01_01",null,"790","98","24","1121",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("운행비용등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_02_00",null,"790","67","24","1367",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("KM상동");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_03",null,"353","74","24","1022",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("SMS전송");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_07",null,"353","86","24","932",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("타지점대차");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_05",null,"353","74","24","854",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("배차교체");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_03",null,"353","74","24","776",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("배차취소");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","120","1236","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_03_00",null,"1208","64","28","1283",null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("삭제");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","206","1236","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_04",null,"1341","64","28","1391",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("활성");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_03",null,"1341","64","28","1323",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("저장");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_01",null,"1341","64","28","1255",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("확정");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_04",null,"1246","137","28","890",null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("SafeKey 조회");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_05",null,"1246","112","28","774",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("영업기회등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_04",null,"1246","64","28","706",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("인증");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","561","1274","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02",null,"1369","91","28","939",null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("그래프");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00_01",null,"1170","124","28","1057",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("영업매니저 지정");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_08",null,"348","84","24","1186",null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("계약서출력");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_09",null,"353","74","24","663",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("전기취소");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_10",null,"269","74","24","708",null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("상품복사");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00_00_01_00",null,null,"88","28","825","248",null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("카피등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_02_00",null,null,"88","28","1160","316",null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_05",null,"1194","124","28","674",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("변경신청서출력");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_00_00",null,"1308","64","28","959",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01_00",null,"1308","88","28","867",null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("등록삭제");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","240","1369","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00",null,"1445","88","28","940",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("계좌검증");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00",null,"1445","88","28","848",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("전표생성");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_00_00_00",null,"1445","112","28","732",null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("지급계좌등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_05",null,"446","138","24","1288",null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("반납협의일 일괄등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_00_03",null,"446","86","24","1198",null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("인수형상품");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_01_00",null,"446","162","24","1032",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("만기예정통지서 일괄발송");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_04",null,"446","126","24","902",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("매각대상 일괄취소");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_06",null,"446","126","24","772",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("매각대상 일괄등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_11",null,"446","126","24","642",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("만기관리 일괄등록");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_06",null,"1488","176","28","599",null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("만기예정통지서 일괄발송");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_06",null,"1488","100","28","779",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("인수형상품");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_02",null,"1488","152","28","883",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("반납협의일 일괄등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_01_02",null,"1417","64","28","1387",null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("상신");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"1417","88","28","1295",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("입고처리");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_02",null,"245","86","24","1171",null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("대량업로드");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_00_00_00_00_00",null,"1409","112","28","918",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("명의이전완료");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00_00","186","1060","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_01","953","1170","37","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("많음");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_02","798","1098","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_07",null,"824","122","24","1311",null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("장기계약서입출고");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_05",null,"824","98","24","1209",null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("구매진행현황");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_00_00_06",null,"824","74","24","1131",null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("탁송요청");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_02_00","798","1158","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01_00_00_01",null,"1526","127","28","906",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("지연입고결제");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_02_00_00_01",null,"1526","88","28","814",null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("영업확인");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_05",null,"1564","112","28","915",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("렌탈청구내역");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_03",null,"1564","100","28","811",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("청구서생성");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_03","526","1341","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_04",null,"1070","88","28","846",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("메일전송");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_04",null,"475","112","24","1310",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("물건수령확인");
            obj.set_cssclass("btn_Block_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02_02_01_00_01",null,"475","136","24","1171",null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("출고 SMS 이력조회");
            obj.set_cssclass("btn_Block_popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_12",null,"475","74","24","1094",null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("출고문서");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_03_02_00_08",null,"475","74","24","1017",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("개별요청");
            obj.set_cssclass("btn_Block");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_02",null,"1027","64","28","1053",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("접수");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_00_01",null,"1027","64","28","985",null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("진행");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01_05",null,"1027","88","28","893",null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("완료등록");
            obj.set_cssclass("btn_Comm_func");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_03",null,"1027","123","28","630",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("의뢰서 인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_07",null,"1027","163","28","463",null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("물건수령확인서 인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_07",null,"1027","199","28","260",null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("물건수령확인서(개별) 인쇄");
            obj.set_cssclass("btn_Comm_func_pop");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_02_01","714","1103","22","24",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,1685,this,function(p){});
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
            this.Button00_00_00_00_07.addEventHandler("onclick",this.div00_Button00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Comp_03_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
