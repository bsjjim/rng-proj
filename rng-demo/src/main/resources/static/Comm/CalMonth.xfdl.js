(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CalMonth");
            this.set_titletext("년월 캘린더");
            if (Form == this.constructor)
            {
                this._setFormPosition(90,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("maeCal","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("####-##");
            obj.set_textAlign("left");
            obj.set_type("string");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new Button("btnCal",null,"0","25","24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_cal");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","24","161","151",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("cal_Pop_Box");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","12","43","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn2","btn1:8","43","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn3","btn2:8","43","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn4","btn3:8","43","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn5","12","77","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn6","btn5:8","77","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn7","btn6:8","77","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("cal_Pop_Mon_Select");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn8","btn7:8","77","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn9","12","111","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("cal_Pop_Mon");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn10","btn9:8","111","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("cal_Pop_Mon");
            obj.set_textAlign("center");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn11","btn10:8","111","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("cal_Pop_Mon_Today");
            obj.set_textAlign("center");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn12","btn11:8","111","27","27",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("11");
            obj.set_text("12");
            obj.set_cssclass("cal_Pop_Mon");
            obj.set_textAlign("center");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPrev","5","11","18","18",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_Pop_Prev");
            obj.set_fittocontents("none");
            obj.set_rtl("true");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"11","18","18","5",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_Pop_Next");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staYy","29","9","101","24",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("14");
            obj.set_text("9999");
            obj.set_textAlign("center");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",90,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CalMonth.xfdl", function() {
        /********************************************************************
        *  월달력 컴포지트
        *  @FileName 	: CalMonth.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/18
        *  @Desction    : 월달력 컴포지트
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/18     	    양경호                 최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();

        this.fvToday;

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
        /*
        * 초기화
        */
        this.fnInit = function()
        {
        	this.maeCal.set_value("");
        }

        //필수 표시
        this.fnSetRequired = function(bAct)
        {
            if(bAct)
        	{
        	   this.maeCal.set_cssclass("input_req");
        	}
        	else
        	{
        		this.maeCal.set_cssclass("");
        	}
        }

        //선택필수 표시
        this.fnSetSelect = function(bAct)
        {
            if(bAct)
        	{
        	   this.maeCal.set_cssclass("input_select");
        	}
        	else
        	{
        		this.maeCal.set_cssclass("");
        	}
        }

        //컴포넌트 활성 비활성화
        this.fnSetEnable = function(bValue)
        {
        	this.maeCal.set_enable(bValue);
        	this.btnCal.set_enable(bValue);
        };

        //컴포넌트 Readonly셋팅
        this.fnSetReadonly = function(bValue)
        {
        	this.maeCal.set_readonly(bValue);
        	this.btnCal.set_visible(!bValue);
        };

        //컴포넌트 날짜값 셋팅
        this.fnSetValue = function(sDate)
        {
           	this.maeCal.set_value(sDate);
        }

        //컴포넌트 날짜값 반환
        this.fnGetValue = function(sDate)
        {
           	return this.maeCal.value.trim();
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/


        this.btnCal_onclick = function(obj,e)
        {
        	var sDate = this.maeCal.value;
        	if(this.gfnIsNull(sDate)) sDate = this.fvToday;



        	var sToYear = this.fvToday.substr(0,4);
        	var sToMonth = this.fvToday.substr(4,2);
        	var sSelYear = sDate.substr(0,4).trim().padLeft(4,"0");
        	var sSelMonth = sDate.substr(4,2).trim().padLeft(2,"0");

        	if(sSelYear == "0000") sSelYear = sToYear;
        	if(sSelMonth == "00") sSelMonth = sToMonth;

        	if(parseInt(sSelYear) < 1900) sSelYear = "1900"; //1900년보다 작으면 1900년도로 고정

        	this.pdvCal.form.staYy.set_text(sSelYear);

        	//버튼 Css초기화
        	for(var i=1; i<13; i++)
        	{
        	    this.pdvCal.form.components["btn"+i].set_cssclass("cal_Pop_Mon");
        	}

        	if(sToYear == sSelYear)	this.pdvCal.form.components["btn"+parseInt(sToMonth)].set_cssclass("cal_Pop_Mon_Today");

        	if(sToMonth != sSelMonth) this.pdvCal.form.components["btn"+parseInt(sSelMonth)].set_cssclass("cal_Pop_Mon_Select");

        	this.pdvCal.trackPopupByComponent(this.maeCal,this.maeCal.left,this.maeCal.height);
        };

        this.pdvCal_btn_onclick = function(obj,e)
        {
        	var sDate = this.pdvCal.form.staYy.text + obj.text.padLeft(2, '0');
        	this.maeCal.set_value(sDate);
        	this.pdvCal.closePopup();
        };

        this.pdvCal_btnPrev_onclick = function(obj,e)
        {
        	var nDate = nexacro.toNumber(this.pdvCal.form.staYy.text);
        	    nDate = (nDate <= 1900) ? 1900 : nDate-1; //1900년보다 작으면 1900년도로 고정
        	var sDate = nDate.toString().padLeft(4,"0");
        	this.pdvCal.form.staYy.set_text(sDate);
        };

        this.pdvCal_btnNext_onclick = function(obj,e)
        {
        	var nDate = nexacro.toNumber( this.pdvCal.form.staYy.text)+1;
        	var sDate = nDate.toString().padLeft(4,"0");
        	this.pdvCal.form.staYy.set_text(sDate);
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

        this.CalMonth_onsetfocus = function(obj,e)
        {
        	if(obj.getFocus() == obj)
        	{
        		obj.maeCal.setFocus();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.addEventHandler("onsetfocus",this.CalMonth_onsetfocus,this);
            this.maeCal.addEventHandler("oninput",this.maeCal_oninput,this);
            this.btnCal.addEventHandler("onclick",this.btnCal_onclick,this);
            this.pdvCal.form.btn1.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn2.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn3.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn4.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn5.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn6.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn7.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn8.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn9.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn10.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn11.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btn12.addEventHandler("onclick",this.pdvCal_btn_onclick,this);
            this.pdvCal.form.btnPrev.addEventHandler("onclick",this.pdvCal_btnPrev_onclick,this);
            this.pdvCal.form.btnNext.addEventHandler("onclick",this.pdvCal_btnNext_onclick,this);
        };
        this.loadIncludeScript("CalMonth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
