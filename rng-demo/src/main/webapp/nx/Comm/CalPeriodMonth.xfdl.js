(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Commperiod");
            this.set_titletext("기간캘린더(월)");
            if (Form == this.constructor)
            {
                this._setFormPosition(170,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("maeCalFrom","0","0","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("####-##");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","maeCalFrom:0","0","18","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeCalTo","Static02:2","0","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_format("####-##");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Button("btnCal","145","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_cal");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","24","354","207",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01","32","0","100","10",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00","0","10","10","100",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00","172","15","8","100",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_00","184","215","100","10",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00","342","14","10","100",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_00_00","113","161","100","10",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"171","62","24","118",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"171","50","24","64",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("7");
            obj.set_text("선택");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"171","50","24","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_00_00_00","113","195","100","10",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Div("divFrom","10","10","161","151",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("10");
            obj.set_text("div00");
            obj.set_border("1px solid #dddddd");
            obj.set_background("#ffffff");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn1","12","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn2","47","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn3","82","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn4","117","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn5","12","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn6","47","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn7","82","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("cal_Pop_Mon_Select");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn8","117","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn9","12","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn10","47","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("cal_Pop_Mon");
            obj.set_textAlign("center");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn11","82","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("cal_Pop_Mon_Today");
            obj.set_textAlign("center");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btn12","117","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("11");
            obj.set_text("12");
            obj.set_cssclass("cal_Pop_Mon");
            obj.set_textAlign("center");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"11","18","18","7",null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_Pop_Next");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Static("staYy","29","9","101","24",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("13");
            obj.set_text("9999");
            obj.set_textAlign("center");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Button("btnPrev","5","11","18","18",null,null,null,null,null,null,this.pdvCal.form.divFrom.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_Pop_Prev");
            obj.set_fittocontents("none");
            obj.set_rtl("true");
            this.pdvCal.form.divFrom.addChild(obj.name, obj);

            obj = new Div("divTo","181","10","161","151",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("11");
            obj.set_text("div00");
            obj.set_border("1px solid #dddddd");
            obj.set_background("#ffffff");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn1","12","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn2","47","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn3","82","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn4","117","43","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn5","12","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn6","47","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn7","82","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("cal_Pop_Mon_Select");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn8","117","77","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn9","12","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn10","47","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("cal_Pop_Mon");
            obj.set_textAlign("center");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn11","82","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("cal_Pop_Mon_Today");
            obj.set_textAlign("center");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btn12","117","111","27","27",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("11");
            obj.set_text("12");
            obj.set_cssclass("cal_Pop_Mon");
            obj.set_textAlign("center");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"11","18","18","7",null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_Pop_Next");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Static("staYy","29","9","101","24",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("13");
            obj.set_text("9999");
            obj.set_textAlign("center");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Button("btnPrev","5","11","18","18",null,null,null,null,null,null,this.pdvCal.form.divTo.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_Pop_Prev");
            obj.set_fittocontents("none");
            obj.set_rtl("true");
            this.pdvCal.form.divTo.addChild(obj.name, obj);

            obj = new Div("divMsg","0","0",null,null,"0","0",null,null,null,null,this.pdvCal.form);
            obj.set_taborder("12");
            obj.set_text("div00");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("sta00","30","30",null,null,"30","30",null,null,null,null,this.pdvCal.form.divMsg.form);
            obj.set_taborder("0");
            obj.set_text("시작월이 종료월보다 이후입니다.");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("#e2e2e2");
            obj.set_borderRadius("10px");
            this.pdvCal.form.divMsg.addChild(obj.name, obj);

            obj = new Button("btnDivClose","154","143","50","24",null,null,null,null,null,null,this.pdvCal.form.divMsg.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.pdvCal.form.divMsg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",170,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CalPeriodMonth.xfdl", function() {
        /********************************************************************
        *  기간월달력 컴포지트
        *  @FileName 	: CalMonth.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/19
        *  @Desction    : 기간월달력 컴포지트
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/19     	        양경호                 최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();

        this.fvToday;
        this.fvFromYm;
        this.fvToYm;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.fnFormOnload = function(obj,e)
        {
            this.fvToday = this.gfnGetDate();
        	this.fnInit();
        }

        /************************************************************************************************
        * CALLBACK 콜백 처리부분(Transaction, Popup)
        ************************************************************************************************/

        /************************************************************************************************
        * CRUD 및 TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        //초기화
        this.fnInit = function()
        {
        	this.maeCalFrom.set_value("");
        	this.maeCalTo.set_value("");
        }

        //필수 표시
        this.fnSetRequired = function(bAct)
        {
            if(bAct)
        	{
        	   this.maeCalFrom.set_cssclass("input_req");
        	   this.maeCalTo.set_cssclass("input_req");
        	}
        	else
        	{
        	   this.maeCalFrom.set_cssclass("");
        	   this.maeCalTo.set_cssclass("");
        	}
        }

        //선택필수 표시
        this.fnSetSelect = function(bAct)
        {
            if(bAct)
        	{
        	   this.maeCalFrom.set_cssclass("input_select");
        	   this.maeCalTo.set_cssclass("input_select");
        	}
        	else
        	{
        	   this.maeCalFrom.set_cssclass("");
        	   this.maeCalTo.set_cssclass("");
        	}
        }

        //컴포넌트 활성 비활성화
        this.fnSetEnable = function(bValue)
        {
        	this.maeCalFrom.set_enable(bValue);
        	this.maeCalTo.set_enable(bValue);
        	this.btnCal.set_enable(bValue);
        };

        //컴포넌트 Readonly셋팅
        this.fnSetReadonly = function(bValue)
        {
        	this.maeCalFrom.set_readonly(bValue);
        	this.maeCalTo.set_readonly(bValue);
        	this.btnCal.set_visible(!bValue);
        };

        //컴포넌트 날짜값 셋팅
        this.fnSetValue = function(sDate)
        {

        	var sFromYm = "";
        	var sToYm = "";

        	if(!this.gfnIsNull(sDate))
        	{
        	    if(sDate.indexOf(",") > -1)
        		{
        		    var aDate = sDate.split(",");
        			sFromYm = aDate[0];
        			sToYm = aDate[1];
        		}
        		else
        		{
        			sFromYm = sDate;
        		}
        	}

        	this.maeCalFrom.set_value(sFromYm);
        	this.maeCalTo.set_value(sToYm);
        }

        //컴포넌트 날짜값 반환
        this.fnGetValue = function(sDate)
        {
            var sRtnDt = (this.gfnIsNull(this.maeCalFrom.value) && this.gfnIsNull(this.maeCalTo.value)) ? "" : this.maeCalFrom.value+","+this.maeCalTo.value;
           	return sRtnDt;
        }

        this.fnSetCalendar = function(oDiv,sDate)
        {
        	if(this.gfnIsNull(sDate)) sDate = this.fvToday;

        	var sToYear = this.fvToday.substr(0,4);
        	var sToMonth = this.fvToday.substr(4,2);
        	var sSelYear = sDate.substr(0,4).trim().padLeft(4,"0");
        	var sSelMonth = sDate.substr(4,2).trim().padLeft(2,"0");

        	if(sSelYear == "0000") sSelYear = sToYear;
        	if(sSelMonth == "00") sSelMonth = sToMonth;

        	if(parseInt(sSelYear) < 1900) sSelYear = "1900"; //1900년보다 작으면 1900년도로 고정

        	oDiv.staYy.set_text(sSelYear);

        	//버튼 Css초기화
        	for(var i=1; i<13; i++)
        	{
        	    oDiv.components["btn"+i].set_cssclass("cal_Pop_Mon");
        	}

        	if(sToYear == sSelYear)	oDiv.components["btn"+parseInt(sToMonth)].set_cssclass("cal_Pop_Mon_Today");

        	if(sToMonth != sSelMonth) oDiv.components["btn"+parseInt(sSelMonth)].set_cssclass("cal_Pop_Mon_Select");

        	if(oDiv.parent.name == "divFrom")
        	{
        		this.fvFromYm = sSelYear+sSelMonth;
        	}
        	else
        	{
        		this.fvToYm = sSelYear+sSelMonth;
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/


        this.btnCal_onclick = function(obj,e)
        {
        	this.fnSetCalendar(this.pdvCal.form.divFrom.form,this.maeCalFrom.value);
        	this.fnSetCalendar(this.pdvCal.form.divTo.form,this.maeCalTo.value);

        	this.pdvCal.trackPopupByComponent(this.maeCalFrom,this.maeCalFrom.left,this.maeCalFrom.height);
        };

        this.pdvCal_btn_onclick = function(obj,e)
        {
            var oDiv = obj.parent;
        	var sYm = oDiv.staYy.text + obj.text.padLeft(2, '0');
        	if(oDiv.parent.name == "divFrom")
        	{
        		this.fvFromYm = sYm;
        	}
        	else
        	{
        		this.fvToYm = sYm;
        	}

        	this.fnSetCalendar(oDiv,sYm);
        };

        this.pdvCal_btnPrev_onclick = function(obj,e)
        {
            var oDiv = obj.parent;
        	var nDate = nexacro.toNumber(oDiv.staYy.text);
        	    nDate = (nDate <= 1900) ? 1900 : nDate-1; //1900년보다 작으면 1900년도로 고정
        	var sDate = nDate.toString().padLeft(4,"0");

        	if(oDiv.parent.name == "divFrom")
        	{
        		this.fvFromYm = sDate+this.fvFromYm.substr(4,2);
        	}
        	else
        	{
        		this.fvToYm = sDate+this.fvToYm.substr(4,2);
        	}

        	oDiv.staYy.set_text(sDate);
        };

        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var oDiv = obj.parent;
        	var nDate = nexacro.toNumber(oDiv.staYy.text)+1;
        	var sDate = nDate.toString().padLeft(4,"0");

        	if(oDiv.parent.name == "divFrom")
        	{
        		this.fvFromYm = sDate+this.fvFromYm.substr(4,2);
        	}
        	else
        	{
        		this.fvToYm = sDate+this.fvToYm.substr(4,2);
        	}

        	oDiv.staYy.set_text(sDate);
        };

        this.maeCal_oninput = function(obj,e)
        {
        	  var sOrgVal = obj.value;
        	  var sDt = sOrgVal.substr(4,2);
        	  sDt = sDt.trim();

              //입력한 월이 12월이 넘어가는 경우 12월 이상입력안되게 처리
        	  if(!this.gfnIsNull(sDt) && parseInt(sDt) > 12)
        	  {
        	      obj.set_value(sOrgVal.substr(0,5));
        		  obj.setCaretPos(6)
        	  }
        };

        this.pdvCal_btnClear_onclick = function(obj,e)
        {
        	this.fnSetCalendar(this.pdvCal.form.divFrom.form,this.maeCalFrom.value);
        	this.fnSetCalendar(this.pdvCal.form.divTo.form,this.maeCalTo.value);
        };

        this.pdvCal_btnClose_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        this.pdvCal_btnSel_onclick = function(obj,e)
        {
            //날짜 선택시 시작일이 종료일 보다 큰경우 DivMsg보여주고 리턴
            if(parseInt(this.fvFromYm) > parseInt(this.fvToYm))
        	{
        	   this.pdvCal.form.divMsg.set_visible(true);
        	   return;
        	}
        	this.maeCalFrom.set_value(this.fvFromYm);
        	this.maeCalTo.set_value(this.fvToYm);
        	this.pdvCal.closePopup();
        };

        this.pdvCal_divMsg_btnDivClose_onclick = function(obj,e)
        {
        	this.pdvCal.form.divMsg.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.maeCalFrom.addEventHandler("oninput",this.maeCal_oninput,this);
            this.maeCalTo.addEventHandler("oninput",this.maeCal_oninput,this);
            this.btnCal.addEventHandler("onclick",this.btnCal_onclick,this);
            this.pdvCal.form.btnClear.addEventHandler("onclick",this.pdvCal_btnClear_onclick,this);
            this.pdvCal.form.btnSel.addEventHandler("onclick",this.pdvCal_btnSel_onclick,this);
            this.pdvCal.form.btnClose.addEventHandler("onclick",this.pdvCal_btnClose_onclick,this);
            this.pdvCal.form.divFrom.form.btn1.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn2.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn3.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn4.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn5.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn6.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn7.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn8.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn9.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn10.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn11.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btn12.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divFrom.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.pdvCal.form.divFrom.form.btnPrev.addEventHandler("onclick",this.pdvCal_btnPrev_onclick,this);
            this.pdvCal.form.divTo.form.btn1.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn2.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn3.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn4.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn5.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn6.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn7.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn8.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn9.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn10.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn11.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btn12.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.divTo.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
            this.pdvCal.form.divTo.form.btnPrev.addEventHandler("onclick",this.pdvCal_btnPrev_onclick,this);
            this.pdvCal.form.divMsg.form.btnDivClose.addEventHandler("onclick",this.pdvCal_divMsg_btnDivClose_onclick,this);
        };
        this.loadIncludeScript("CalPeriodMonth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
