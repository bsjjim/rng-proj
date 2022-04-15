(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SampleValidation");
            this.set_titletext("밸리데이션 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1528,1300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECIMAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMPARE_1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">kimyk</Col><Col id=\"DATE_FROM\">20220125</Col><Col id=\"DATE_TO\">20220120</Col><Col id=\"MAX_NUM\">15</Col><Col id=\"DECIMAL\">1.253</Col><Col id=\"COMPARE_1\">20</Col><Col id=\"COMPARE_2\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NUM\" type=\"INT\" size=\"256\"/><Column id=\"LENGTH_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RANGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static45_00_00_01","0","7","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("컴포넌트 밸리데이션 샘플");
            obj.set_cssclass("sta_WF_title1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","41",null,"729","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_infobox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","18","15",null,null,"18","15",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("1.Validation 공통함수는 아래와 같이 3개의 함수가 제공된다.\r\n  1) Component에 설정된 정합성체크 RuleSet을 Clear한다.\r\n       this.gfnClearValidation(this.grdVali);\r\n  2) 그리드인경우 바인드된 컬럼별로 정합성체크 Rule을 등록한다.\r\n       this.gfnSetValidation(this.grdVali, \"ID\", \"아이디\", \"required,length:5\");\r\n  3) Component에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.\r\n       this.gfnValidation(this.grdVali,this.divVali);\r\n\r\n2. gfnSetValidation에 등록할 수 있는 Validation 체크 Rule의 종류\r\n  예) this.gfnSetValidation(this.grdVali, \"ID\", \"아이디\", \"required,equalto:NAME\");\r\n  required - 필수 체크\r\n  length:7 - 길이가 7자리인지 체크\r\n  rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크\r\n  maxlength:7 - 길이가 7보다 작은지 체크\r\n  minlength:3 - 길이가 3보다 큰지 체크\r\n  maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크\r\n  minlengthbyte:3 - byte의 길이가 3보다 큰지 체크\r\n  digits - 숫자여부 체크\r\n  min:7 - 값이 7보다 작은지 체크\r\n  max:7 - 값이 7보다 큰지 체크\r\n  declimit:3 - 소수점의 자리수가 3자리인지 체크\r\n  date - 년월일형태의 날짜가 맞는지 체크\r\n  dateym - 년월형태의 날짜가 맞는지 체크\r\n  range:40:100 - 값이 40 ~ 100 사이의 값인지 체크\r\n  code:1:2:3 - 값이 1,2,3 의 값인지 체크\r\n  equalto:NAME - NAME 칼럼의 값과 같은지 체크 예) this.gfnSetValidation(this.grdVali, \"ID\", \"아이디\", \"required,equalto:NAME\");\r\n  fromto:DATE_FROM - 등록된 날짜가 DATE_TO의 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.grdVali, \"DATE_TO\", \"종료일자,시작일자\", \"required,date,fromto:DATE_FROM\");\r\n  comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.grdVali, \"ID\", \"아이디\", \"required,comparebig:NAME\");\r\n  comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.grdVali, \"ID\", \"아이디\", \"required,comparesmall:NAME\");\r\n  isssn - 공통함수 gfnIsSSN로 주민번호 체크\r\n  isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크\r\n  isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크\r\n  isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크\r\n  iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크\r\n  isemail - 공통함수 gfnIsEmail로 이메일 체크");
            obj.set_cssclass("sta_txt_descTitle");
            obj.set_verticalAlign("top");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","78","0","100","15",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("divVali","20","1064",null,"166","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","506","6","61","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("2");
            obj.set_text("필수(Edit)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edt01","570","10","196","21",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("3");
            obj.set_cssclass("input_req");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static08","6","8","81","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("0");
            obj.set_text("필수(날짜)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static30","7","36","81","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("5");
            obj.set_text("최대값100");
            obj.set_cssclass("sta_WF_Label");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtMax","124","40","166","21",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("6");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static29","507","36","61","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("7");
            obj.set_text("최소값10");
            obj.set_cssclass("sta_WF_Label");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtMin","571","40","216","21",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("8");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static20","7","68","81","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("10");
            obj.set_text("최소길이3");
            obj.set_cssclass("sta_WF_Label");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtLegthMin","124","72","166","21",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("11");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static54","507","68","61","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("12");
            obj.set_text("범위(1~5)");
            obj.set_cssclass("sta_WF_Label");
            this.divVali.addChild(obj.name, obj);

            obj = new Edit("edtRange","571","72","156","21",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("13");
            this.divVali.addChild(obj.name, obj);

            obj = new Calendar("calDt","124","9","120","24",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("input_req");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static03_00","896","6","91","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("4");
            obj.set_text("월달력컴포지트");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","896","38","91","29",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("9");
            obj.set_text("기간력컴포지트");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.addChild(obj.name, obj);

            obj = new Div("divSub","7","105","1337","55",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("14");
            obj.set_border("1px solid black");
            this.divVali.addChild(obj.name, obj);

            obj = new Static("Static08","6","15","81","29",null,null,null,null,null,null,this.divVali.form.divSub.form);
            obj.set_taborder("0");
            obj.set_text("필수(날짜)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.form.divSub.addChild(obj.name, obj);

            obj = new Calendar("calDt","124","16","120","24",null,null,null,null,null,null,this.divVali.form.divSub.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("input_req");
            this.divVali.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static03","506","13","61","29",null,null,null,null,null,null,this.divVali.form.divSub.form);
            obj.set_taborder("2");
            obj.set_text("필수(Edit)");
            obj.set_cssclass("sta_WF_LabelE");
            this.divVali.form.divSub.addChild(obj.name, obj);

            obj = new Edit("edt01","570","17","196","21",null,null,null,null,null,null,this.divVali.form.divSub.form);
            obj.set_taborder("3");
            obj.set_cssclass("input_req");
            this.divVali.form.divSub.addChild(obj.name, obj);

            obj = new CalMonth("CalMonth00","994","10","90","24",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("15");
            obj.set_cssclass("input_req");
            this.divVali.addChild(obj.name, obj);

            obj = new CalPeriodDay("CalPeriodDay00","994","40","240","24",null,null,null,null,null,null,this.divVali.form);
            obj.set_taborder("16");
            obj.set_cssclass("input_req");
            this.divVali.addChild(obj.name, obj);

            obj = new Grid("grdVali","20","805",null,"220","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/><Column size=\"135\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"137\"/><Column size=\"137\"/><Column size=\"137\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"아이디\" cssclass=\"cell_req\"/><Cell col=\"1\" text=\"주민등록번호\" cssclass=\"cell_req\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"최대값\"/><Cell col=\"5\" text=\"소숫점\"/><Cell col=\"6\" text=\"비교1\"/><Cell col=\"7\" text=\"비교2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SSN\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DATE_FROM\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DATE_TO\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:MAX_NUM\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DECIMAL\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:COMPARE_1\" edittype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:COMPARE_2\" edittype=\"mask\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdCheck",null,"779","53","21","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_GridControl");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivCheck",null,"1041","49","21","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_GridControl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","780","178","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("1) Grid Validation Check");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","21","1041","228","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("2) Component Validation Check");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","21","1236","268","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("3) Grid와 Component Validation Check");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnAll","280","1240","79","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전체체크");
            obj.set_cssclass("btn_WF_GridControl");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"779","53","21","155",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"779","53","21","97",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1528,1300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divVali.form.edt01","value","dsList2","EDIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divVali.form.edtMax","value","dsList2","MAX_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divVali.form.edtMin","value","dsList2","MIN_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divVali.form.edtLegthMin","value","dsList2","LENGTH_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divVali.form.edtRange","value","dsList2","RANGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SampleValidation.xfdl", function() {
        /********************************************************************
        *  컴포넌트 밸리데이션 샘플
        *  @FileName 	: SampleValidation.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/02/03
        *  @Desction    : 컴포넌트 밸리데이션 샘플
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/02/03     	      양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
        	this.gfnFormOnLoad(obj);


        	this.fnSetValidation();
        }


        this.fnSetValidation = function()
        {

        	// Validation 체크 Rule의 종류
        	// required - 필수 체크
        	// length:7 - 길이가 7자리인지 체크
        	// rangelength:2:3 - 길이가 2 ~ 3 자리인지 체크
        	// maxlength:7 - 길이가 7보다 작은지 체크
        	// minlength:3 - 길이가 3보다 큰지 체크
        	// maxlengthbyte:7 - byte의 길이가 7보다 작은지 체크
        	// minlengthbyte:3 - byte의 길이가 3보다 큰지 체크
        	// digits - 숫자여부 체크
        	// min:7 - 값이 7보다 작은지 체크
        	// max:7 - 값이 7보다 큰지 체크
        	// declimit:3 - 소수점의 자리수가 3자리인지 체크
        	// date - 년월일형태의 날짜가 맞는지 체크
        	// dateym - 년월형태의 날짜가 맞는지 체크
        	// range:40:100 - 값이 40 ~ 100 사이의 값인지 체크
        	// code:1:2:3 - 값이 1,2,3 의 값인지 체크
        	// equalto:NAME - NAME 칼럼의 값과 같은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "equalto:NAME");
        	// fromto:ID - 등록된 날짜가 ID의 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, "NAME", "종료일,시작일", "fromto:ID");
        	// comparebig:NAME - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "comparebig:NAME");
        	// comparesmall:NAME - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList, "ID", "아이디", "comparesmall:NAME");
        	// isssn - 공통함수 gfnIsSSN로 주민번호 체크
        	// isfrn - 공통함수 gfnIsFrnrIdNo로 외국인등록번호 체크
        	// isbzid - 공통함수 gfnIsBzIdNo로 사업자등록번호 체크
        	// isfirmid - 공통함수 gfnIsFirmIdNo로 법인등록번호 체크
        	// iscardno - 공통함수 gfnIsCardNo로 신용카드번호 체크
        	// isemail - 공통함수 gfnIsEmail로 이메일 체크

        	// 정합성 체크 설정
        	this.gfnSetValidation(this.grdVali, "ID", "", "required,length:5");	// 아이디
        	this.gfnSetValidation(this.grdVali, "SSN", "주민번호", "required,isssn");	// 주민번호
        	this.gfnSetValidation(this.grdVali, "DATE_FROM", "시작일자", "date");	// 시작일자
        	this.gfnSetValidation(this.grdVali, "DATE_TO", "종료일자,시작일자", "date,fromto:DATE_FROM"); // 종료일자,시작일자
        	this.gfnSetValidation(this.grdVali, "MAX_NUM",  "최대값", "digits,max:10");  // 최대값
        	this.gfnSetValidation(this.grdVali, "DECIMAL",  "금리", "digits,declimit:2");  // 금리
        	this.gfnSetValidation(this.grdVali, "COMPARE_1",  "첫번째값", "digits");	  // 1번째값
        	this.gfnSetValidation(this.grdVali, "COMPARE_2", "2번째값,1번째값", "digits,comparebig:COMPARE_1");  // 2번째값,1번째값

        	this.gfnSetValidation(this.divVali.form.calDt, "", "날짜", "required,date");
        	this.gfnSetValidation(this.divVali.form.edt01, "", "필수", "required");
        	this.gfnSetValidation(this.divVali.form.CalMonth1, "", "월달력", "required");
        	this.gfnSetValidation(this.divVali.form.CalPeriodDay1, "", "기간달력", "required");
        	this.gfnSetValidation(this.divVali.form.edtMax, "", "최대값", "digits,max:100");
        	this.gfnSetValidation(this.divVali.form.edtMin, "", "최소값", "digits,min:10");
        	this.gfnSetValidation(this.divVali.form.edtLegthMin, "", "최소길이", "minlength:3");
        	this.gfnSetValidation(this.divVali.form.edtRange, "", "범위", "digits,range:1:5");
        	this.gfnSetValidation(this.divVali.form.divSub.form.calDt, "", "날짜", "required,date");
        	this.gfnSetValidation(this.divVali.form.divSub.form.edt01, "", "필수", "required");

        }
        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/
        this.fnCallback = function(sSvcId,nErrCode,nErrMsg)
        {
           this.dsList.assign(this.dsListSpare)
           this.fnPagingSetting();
        }

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        this.fnSearch = function()
        {

        }

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/


        this.fnAdd = function(obj,e)
        {
        	this.dsList.addRow();
        };

        this.fnDel = function(obj,e)
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        this.btn_grdVali_onclick = function(obj,e)
        {

            if(!this.gfnValidation(this.grdVali)) return;

        	this.gfnAlert("Validation이 통과 되었습니다.");

        };

        this.btn_compVali_onclick = function(obj,e)
        {
            if(!this.gfnValidation(this.divVali)) return;

        	this.gfnAlert("Validation이 통과 되었습니다.");
        };

        this.btnAll_onclick = function(obj,e)
        {

        	if(!this.gfnValidation(this.grdVali)) return;

         	if(!this.gfnValidation(this.divVali)) return;

        	this.gfnAlert("Validation이 통과 되었습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.btnGrdCheck.addEventHandler("onclick",this.btn_grdVali_onclick,this);
            this.btnDivCheck.addEventHandler("onclick",this.btn_compVali_onclick,this);
            this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.fnAdd,this);
            this.btnDel.addEventHandler("onclick",this.fnDel,this);
        };
        this.loadIncludeScript("SampleValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
