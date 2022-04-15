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
            this.set_titletext("년월일시 캘린더");
            if (Form == this.constructor)
            {
                this._setFormPosition(155,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHr", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"data\">0시</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"data\">1시</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">2시</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">3시</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">4시</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"data\">5시</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data\">6시</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"data\">7시</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"data\">8시</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"data\">9시</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">10시</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">11시</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">12시</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">13시</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">14시</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">15시</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">16시</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">17시</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">18시</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">19시</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">20시</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">21시</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"data\">22시</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"data\">23시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMt", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"data\">0분</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"data\">1분</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">2분</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">3분</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">4분</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"data\">5분</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data\">6분</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"data\">7분</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"data\">8분</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"data\">9분</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">10분</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">11분</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">12분</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">13분</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">14분</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">15분</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">16분</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">17분</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">18분</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">19분</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">20분</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">21분</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"data\">22분</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"data\">23분</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"data\">24분</Col></Row><Row><Col id=\"code\">25</Col><Col id=\"data\">25분</Col></Row><Row><Col id=\"code\">26</Col><Col id=\"data\">26분</Col></Row><Row><Col id=\"code\">27</Col><Col id=\"data\">27분</Col></Row><Row><Col id=\"code\">28</Col><Col id=\"data\">28분</Col></Row><Row><Col id=\"code\">29</Col><Col id=\"data\">29분</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"data\">30분</Col></Row><Row><Col id=\"code\">31</Col><Col id=\"data\">31분</Col></Row><Row><Col id=\"code\">32</Col><Col id=\"data\">32분</Col></Row><Row><Col id=\"code\">33</Col><Col id=\"data\">33분</Col></Row><Row><Col id=\"code\">34</Col><Col id=\"data\">34분</Col></Row><Row><Col id=\"code\">35</Col><Col id=\"data\">35분</Col></Row><Row><Col id=\"code\">36</Col><Col id=\"data\">36분</Col></Row><Row><Col id=\"code\">37</Col><Col id=\"data\">37분</Col></Row><Row><Col id=\"code\">38</Col><Col id=\"data\">38분</Col></Row><Row><Col id=\"code\">39</Col><Col id=\"data\">39분</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"data\">40분</Col></Row><Row><Col id=\"code\">41</Col><Col id=\"data\">41분</Col></Row><Row><Col id=\"code\">42</Col><Col id=\"data\">42분</Col></Row><Row><Col id=\"code\">43</Col><Col id=\"data\">43분</Col></Row><Row><Col id=\"code\">44</Col><Col id=\"data\">44분</Col></Row><Row><Col id=\"code\">45</Col><Col id=\"data\">45분</Col></Row><Row><Col id=\"code\">46</Col><Col id=\"data\">46분</Col></Row><Row><Col id=\"code\">47</Col><Col id=\"data\">47분</Col></Row><Row><Col id=\"code\">48</Col><Col id=\"data\">48분</Col></Row><Row><Col id=\"code\">49</Col><Col id=\"data\">49분</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"data\">50분</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"data\">51분</Col></Row><Row><Col id=\"code\">52</Col><Col id=\"data\">52분</Col></Row><Row><Col id=\"code\">53</Col><Col id=\"data\">53분</Col></Row><Row><Col id=\"code\">54</Col><Col id=\"data\">54분</Col></Row><Row><Col id=\"code\">55</Col><Col id=\"data\">55분</Col></Row><Row><Col id=\"code\">56</Col><Col id=\"data\">56분</Col></Row><Row><Col id=\"code\">57</Col><Col id=\"data\">57분</Col></Row><Row><Col id=\"code\">58</Col><Col id=\"data\">58분</Col></Row><Row><Col id=\"code\">59</Col><Col id=\"data\">59분</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("pdvCal","0","24","222","303",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_cssclass("cal_Pop_Box");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDt","10","10","200","220",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_border("0px none");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Combo("cmbHr","10","235","61","24",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHr");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("1시");
            obj.set_value("01");
            obj.set_index("0");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Combo("cmbMt","75","235","61","24",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsMt");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("0분");
            obj.set_value("00");
            obj.set_index("0");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_01_00_00_00_00","-16","259","100","10",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnSel",null,"269","50","24","64",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_text("선택");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"269","50","24","10",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("cal_Pop_BottomBtn");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("calDt","0","0","155","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd ddd HH:mm");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            obj.set_buttonsize("0 0");
            this.addChild(obj.name, obj);

            obj = new Button("btnCal",null,"0","25","24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_cal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",155,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CalTime.xfdl", function() {
        /********************************************************************
        *  년월일시 컴포지트
        *  @FileName 	: CalTime.xfdl
        *  @Creator 	: 양경호
        *  @CreateDate 	: 2022/01/20
        *  @Desction    : 년월일시 컴포지트
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2022/01/20     	        양경호                 최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.oApp = nexacro.getApplication();

        this.fvToday;
        this.fvDt;
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
        	this.calDt.set_value("");
        }

        //필수 표시
        this.fnSetRequired = function(bAct)
        {
            if(bAct)
        	{
        	   this.calDt.set_cssclass("input_req");
        	}
        	else
        	{
        	   this.calDt.set_cssclass("");
        	}
        }

        //선택필수 표시
        this.fnSetSelect = function(bAct)
        {
            if(bAct)
        	{
        	   this.calDt.set_cssclass("input_select");
        	}
        	else
        	{
        	   this.calDt.set_cssclass("");
        	}
        }

        //컴포넌트 활성 비활성화
        this.fnSetEnable = function(bValue)
        {
        	this.calDt.set_enable(bValue);
        	this.btnCal.set_enable(bValue);
        };

        //컴포넌트 Readonly셋팅
        this.fnSetReadonly = function(bValue)
        {
        	this.calDt.set_readonly(bValue);
        	this.btnCal.set_visible(!bValue);
        };

        //컴포넌트 날짜값 셋팅
        this.fnSetValue = function(sDate)
        {
        	this.calDt.set_value(sDate);
        }

        //컴포넌트 날짜값 반환
        this.fnGetValue = function()
        {
            var sDt = this.calDt.value;

        	var sRtnDt = (this.gfnIsNull(sDt)) ? "" : sDt.substr(0,12);
           	return sRtnDt;
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btnCal_onclick = function(obj,e)
        {
        	var sDt = this.calDt.value;

        	var oDate = new nexacro.Date();
        	if(this.gfnIsNull(sDt)) sDt = this.fvToday+oDate.getHours().toString().padLeft(2,"0")+oDate.getMinutes().toString().padLeft(2,"0");

        	var sCurYear = this.fvToday.substr(0,4);
        	var sCurMonth = this.fvToday.substr(4,2);
        	var sCurDay = this.fvToday.substr(6,2);
        	var sCurHr = oDate.getHours().toString().padLeft(2,"0");
        	var sCurMt = oDate.getMinutes().toString().padLeft(2,"0");

        	var sYear = sDt.substr(0,4).trim().padLeft(4,"0");
        	var sMonth = sDt.substr(4,2).trim().padLeft(2,"0");
        	var sDay = sDt.substr(6,2).trim().padLeft(2,"0");
        	var sHr = sDt.substr(8,2).trim().padLeft(2,"0");
        	var sMt = sDt.substr(10,2).trim().padLeft(2,"0");

        	if(sYear == "0000") sYear = sCurYear;
        	if(sMonth == "00") sMonth = sCurMonth;
        	if(sDay == "00") sDay = sCurDay;

        	if(parseInt(sYear) < 1900) sYear = "1900"; //1900년보다 작으면 1900년도로 고정

        	this.fvDt = sYear+sMonth+sDay+sHr+sMt;

            this.pdvCal.form.cmbHr.set_value(sHr);
        	this.pdvCal.form.cmbMt.set_value(sMt);

            this.pdvCal.form.calDt.set_value(this.fvDt);

        	this.pdvCal.trackPopupByComponent(this.calDt,this.calDt.left,this.calDt.height);
        };

        this.pdvCal_btnClose_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        this.pdvCal_btnSel_onclick = function(obj,e)
        {
        	var sDt = this.pdvCal.form.calDt.value+this.pdvCal.form.cmbHr.value+this.pdvCal.form.cmbMt.value;

        	this.calDt.set_value(sDt);

        	this.pdvCal.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fnFormOnload,this);
            this.pdvCal.form.cmbHr.addEventHandler("onitemchanged",this.PopupDiv00_Combo00_onitemchanged,this);
            this.pdvCal.form.btnSel.addEventHandler("onclick",this.pdvCal_btnSel_onclick,this);
            this.pdvCal.form.btnClose.addEventHandler("onclick",this.pdvCal_btnClose_onclick,this);
            this.btnCal.addEventHandler("onclick",this.btnCal_onclick,this);
        };
        this.loadIncludeScript("CalTime.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
