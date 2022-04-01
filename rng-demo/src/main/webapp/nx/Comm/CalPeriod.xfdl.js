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
            this.set_titletext("기간캘린더");
            if (Form == this.constructor)
            {
                this._setFormPosition(210,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupDiv("pdvCal","0","24","430","276",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Button("btnClear",null,"240","62","24","118",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"240","50","24","64",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"240","50","24","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("calFrom","10","10","200","220",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_type("monthonly");
            obj.set_border("0px none");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("calTo","calFrom:8","10","200","220",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_type("monthonly");
            obj.set_border("0px none");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00","210","15","8","100",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_00","184","230","100","10",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_01","0","15","10","100",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","10","240","235","24",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_initvalueid("iv_fc_red");
            obj.set_taborder("8");
            obj.set_text("※ 시작일이 종료일보다 이후 날짜입니다.");
            obj.set_cssclass("sta_txt_desc");
            this.pdvCal.addChild(obj.name, obj);

            obj = new MaskEdit("maeCalFrom","0","0","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","maeCalFrom:0","0","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("maeCalTo","maeCalFrom:20","0","105","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Button("btnCal","maeCalTo:-25","0","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_cal");
            this.addChild(obj.name, obj);

            obj = new Div("divMsg","458","40",null,null,"-676","-290",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","50","50",null,null,"50","50",null,null,null,null,this.divMsg.form);
            obj.set_taborder("0");
            obj.set_text("시작일이 종료일보다 이후 날짜입니다.");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_background("#e2e2e2");
            obj.set_borderRadius("10px");
            this.divMsg.addChild(obj.name, obj);

            obj = new Button("btnDivClose","194","193","50","24",null,null,null,null,null,null,this.divMsg.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.divMsg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",210,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CalPeriod.xfdl", function() {
        /********************************************************************
        *  기간달력 컴포넌트
        *  @FileName 	: CalPeriod.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/19
        *  @Desction    : 월달력 컴포넌트
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
        this.fvFromDt;
        this.fvToDt;
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

        	var sFromDt = "";
        	var sToDt = "";

        	if(!this.gfnIsNull(sDate))
        	{
        	    if(sDate.indexOf(",") > -1)
        		{
        		    var aDate = sDate.split(",");
        			sFromDt = aDate[0];
        			sToDt = aDate[1];
        		}
        		else
        		{
        			sFromDt = sDate;
        		}
        	}

        	this.maeCalFrom.set_value(sFromDt);
        	this.maeCalTo.set_value(sToDt);
        }

        //컴포넌트 날짜값 반환
        this.fnGetValue = function(sDate)
        {
            var sRtnDt = (this.gfnIsNull(this.maeCalFrom.value.trim()) && this.gfnIsNull(this.maeCalTo.value.trim())) ? "" : this.maeCalFrom.value.trim()+","+this.maeCalTo.value.trim();
           	return sRtnDt;
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnCal_onclick = function(obj,e)
        {
        	var sFromDt = this.maeCalFrom.value;
        	var sToDt = this.maeCalTo.value;

        	if(this.gfnIsNull(sFromDt)) sFromDt = this.fvToday;
        	if(this.gfnIsNull(sToDt)) sToDt = this.fvToday;

        	var sCurYear = this.fvToday.substr(0,4);
        	var sCurMonth = this.fvToday.substr(4,2);
        	var sCurDay = this.fvToday.substr(6,2);
        	var sFromYear = sFromDt.substr(0,4).trim().padLeft(4,"0");
        	var sFromMonth = sFromDt.substr(4,2).trim().padLeft(2,"0");
        	var sFromDay = sFromDt.substr(6,2).trim().padLeft(2,"0");

        	var sToYear = sToDt.substr(0,4).trim().padLeft(4,"0");
        	var sToMonth = sToDt.substr(4,2).trim().padLeft(2,"0");
        	var sToDay = sToDt.substr(6,2).trim().padLeft(2,"0");

        	if(sFromYear == "0000") sFromYear = sCurYear;
        	if(sFromMonth == "00") sFromMonth = sCurMonth;
        	if(sFromDay == "00") sFromDay = sCurDay;

        	if(sToYear == "0000") sToYear = sCurYear;
        	if(sToMonth == "00") sToMonth = sCurMonth;
        	if(sToDay == "00") sToDay = sCurDay;

        	if(parseInt(sFromYear) < 1900) sFromYear = "1900"; //1900년보다 작으면 1900년도로 고정
        	if(parseInt(sToYear) < 1900) sToYear = "1900"; //1900년보다 작으면 1900년도로 고정

        	this.fvFromDt = sFromYear+sFromMonth+sFromDay;
        	this.fvToDt = sToYear+sToMonth+sToDay;

            this.pdvCal.form.calFrom.set_value(this.fvFromDt);
        	this.pdvCal.form.calTo.set_value(this.fvToDt);


        	this.pdvCal.trackPopupByComponent(this.maeCalFrom,this.maeCalFrom.left,this.maeCalFrom.height);
        };


        this.maeCal_oninput = function(obj,e)
        {
        	  var sOrgVal = obj.value;
        	  var sYear = sOrgVal.substr(0,4);
        	  var sMonth = sOrgVal.substr(4,2).trim();
        	  var sDay = sOrgVal.substr(6,2).trim();

              //입력한 월이 12월이 넘어가는 경우 12월 이상입력안되게 처리
        	  if(!this.gfnIsNull(sMonth) && parseInt(sMonth) > 12)
        	  {
        	      obj.set_value(sOrgVal.substr(0,5));
        		  obj.setCaretPos(6);
        	  }

        	  var nLastDay = Number(this.gfnGetLastDate(sYear+sMonth).substr(6,2));

        	  //해당 월의 마지막 날짜가 있는 경우
        	  if(!Number.isNaN(nLastDay))
        	  {
        	      //날짜입력이 없으면 리턴
        	      if(this.gfnIsNull(sDay)) return;

        		  //해당 월의 마지막 날짜가 28일 또는 29일인경우
        	      if(nLastDay == 28 || nLastDay == 29)
        		  {
        		      sDayFirst = sOrgVal.substr(6,1).trim();

        			  //월입력 날짜의 첫번째 글자가 2가 넘어가면 입력안되게 처리
        			  if(parseInt(sDayFirst) > 2)
        			  {
        				   obj.set_value(sOrgVal.substr(0,6));
        				   obj.setCaretPos(8);
        			  }

        			  //월입력 날짜가 마지막날보다 크면 입력안되게 처리
        			  if(parseInt(sDay) > nLastDay)
        			  {
        				   obj.set_value(sOrgVal.substr(0,7));
        				   obj.setCaretPos(9);
        			  }
        		  }
        		  else
        		  {
        		      //월입력 날짜가 마지막날보다 크면 입력안되게 처리
        			  if(parseInt(sDay) > nLastDay)
        			  {
        				   obj.set_value(sOrgVal.substr(0,7));
        				   obj.setCaretPos(9);
        			  }
        		 }
        	  }

        };

        this.pdvCal_btnClear_onclick = function(obj,e)
        {
            this.pdvCal.form.calFrom.set_value(this.fvFromDt);
        	this.pdvCal.form.calTo.set_value(this.fvToDt);
        };

        this.pdvCal_btnClose_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        this.pdvCal_btnSel_onclick = function(obj,e)
        {
            //날짜 선택시 시작일이 종료일 보다 큰경우 DivMsg보여주고 리턴
            if(parseInt(this.pdvCal.form.calFrom.value) > parseInt(this.pdvCal.form.calTo.value))
        	{
        	   this.pdvCal.form.divMsg.set_visible(true);
        	   return;
        	}
        	this.maeCalFrom.set_value(this.pdvCal.form.calFrom.value);
        	this.maeCalTo.set_value(this.pdvCal.form.calTo.value);
        	this.pdvCal.closePopup();
        };

        this.pdvCal_divMsg_btnDivClose_onclick = function(obj,e)
        {
        	this.pdvCal.form.divMsg.set_visible(false);
        };

        this.Commperiod_onsetfocus = function(obj,e)
        {
        	if(obj.getFocus() == obj)
        	{
        		obj.maeCalFrom.setFocus();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.addEventHandler("onsetfocus",this.Commperiod_onsetfocus,this);
            this.pdvCal.form.btnClear.addEventHandler("onclick",this.pdvCal_btnClear_onclick,this);
            this.pdvCal.form.btnSel.addEventHandler("onclick",this.pdvCal_btnSel_onclick,this);
            this.pdvCal.form.btnClose.addEventHandler("onclick",this.pdvCal_btnClose_onclick,this);
            this.pdvCal.form.calFrom.addEventHandler("onchanged",this.PopupDiv00_Calendar00_onchanged,this);
            this.maeCalFrom.addEventHandler("oninput",this.maeCal_oninput,this);
            this.maeCalTo.addEventHandler("oninput",this.maeCal_oninput,this);
            this.btnCal.addEventHandler("onclick",this.btnCal_onclick,this);
            this.divMsg.form.btnDivClose.addEventHandler("onclick",this.pdvCal_divMsg_btnDivClose_onclick,this);
        };
        this.loadIncludeScript("CalPeriod.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
